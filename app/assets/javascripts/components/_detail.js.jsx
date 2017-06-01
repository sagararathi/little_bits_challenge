var Detail = React.createClass({
  getInitialState() {
    return {
      details: [],
      editable: false,
      bits: [],
      username: this.props.username,
      email: this.props.email
    }
  },

  handleEdit() {
    if(this.state.editable) {
      var id = this.state.details.id;
      var title = this.refs.title.value;
      var description = this.refs.description.value;
      var other_bits = this.refs.other_bits.value;
      var username = this.state.details.user.username;
      var email = this.state.details.user.email;

      var invention = {
          id: id,
          title:title,
          description: description,
          user_attributes: {username: username, email: email},
          tag_list: other_bits
        };
      this.handleUpdate(invention);
    }

    this.setState({editable: !this.state.editable});
  },

  handleUpdate(invention) {
    $.ajax({
      url: '/api/v1/inventions/' + invention.id,
      type: 'PUT',
      data: { invention: invention },
      success: () => {
        this.updateItems(invention);
      }
    })
  },

  updateItems(invention) {
    this.setState({details: invention });
  },

  handleSelect() {
    var options = this.refs.bits.options;
    var values  = [];
    for (var i = 0, l = options.length; i < l; i++) {
      if (options[i].selected) {
        values.push(options[i].value);
      }
    }
    this.setState({ selectedBits: values});
  },

  componentDidMount() {
    var permalink = this.props.permalink
    // mounting invention details
    $.getJSON('/api/v1/inventions/' + permalink, (response) => {
      this.setState({ details: response.invention }) });
    // mounting bits
    $.getJSON('/api/v1/bits.json/', (response) => {
      this.setState({ bits: response['bits'] }) });
  },

  render(){
    var detail = this.state.details;
    var key = ''
    var other_bits = '';
    var username = this.state.username;
    var email = this.state.email;
    var title = '';
    var description = '';
    var editable = this.state.editable;
    if(detail) {
      key = detail.id;

      title = editable ? <td><input type='text' ref='title' defaultValue={detail.title} /> </td> : <td>{detail.title}</td>;

      description = editable ? <td><input type='text' ref='description' defaultValue={detail.description} /> </td> : <td>{detail.description}</td>;

      other_bits = editable ? <td><input type='text' ref='other_bits' defaultValue={detail.tag_list} /> </td> : <td>{detail.tag_list}</td>;

      if(!!detail.bits){
        var bits_name = detail.bits.map((bit) => {
          if(editable){
            return (
              <option value={bit.id} key={bit.id}>{bit.name}</option>
            )
          } else {
            return(
                <p key={bit.name}> {bit.name} </p>
            )
          }

        });
      }

      var bit = editable ? <td><select ref='bits' multiple>{bits_name}</select></td>  : <td>{ bits_name }</td>

      if(detail.user) {
        username = detail.user.username;
        email = detail.user.email;
      }
    }

    return (
      <div className="Container">
        <h1>Invention Details</h1>
        <h3>Inventor: {username} Email: {email}</h3>
        <table className='table table-bordered table-striped'>
          <thead>
            <tr>
              <th> Name </th>
              <th> Description </th>
              <th> Bits </th>
              <th> Other Bits </th>
              <th> Actions </th>
            </tr>
          </thead>
            <tbody>
              <tr key={key}>
                {title}
                {description}
                {bit}
                {other_bits}
                <td>
                  <button className='btn btn-primary'onClick={this.handleEdit}> { this.state.editable ? 'Submit' : 'Edit' } </button>
                </td>
              </tr>
            </tbody>
        </table>
      </div>
    )
  }
});
