var Container = React.createClass({
  getInitialState() {
    return { inventions: [] }
  },

  componentDidMount() {
    $.getJSON('/api/v1/inventions.json', (response) => {
      this.setState({ inventions: response['inventions'] }) });
  },

  handleSubmit(invention) {
    var newInventionList = this.state.inventions.concat(invention);
    this.setState({ inventions: newInventionList })
  },

  handleDelete(id) {
    $.ajax({
      url: '/api/v1/inventions/' + id,
      type: 'DELETE',
      success: () => {
        this.removeInventionItem(id);
      }
    });
  },

  removeInventionItem(id) {
    var newInventions = this.state.inventions.filter((item) => {
      return item.id != id;
    });
    this.setState({ inventions: newInventions })
  },

  render() {
    return(
      <div className='Container'>
        <NewInvention handleSubmit={this.handleSubmit} username={this.props.username} email={this.props.email}/>
        <Inventions inventions={this.state.inventions} handleDelete={this.handleDelete} />
      </div>
    )
  }
});
