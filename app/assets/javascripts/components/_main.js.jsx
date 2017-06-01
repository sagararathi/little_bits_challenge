var Main = React.createClass({
  render() {
    return(
      <div>
        <Container username={this.props.username} email={this.props.email} />
      </div>
    )
  }
});
