var Details = React.createClass({
  render() {
    return (
      <div>
        <Detail permalink={this.props.permalink} username={this.props.username} email={this.props.email} />
      </div>
    )
  }
});
