var Header = React.createClass({
  render() {
    return(
      <div className='navbar navbar-default'>
        <div className='container-fluid'>
          <div className="navbar-header">
            <a className="navbar-brand" href="/"> Little Bits Coding Challenge </a>

            <ul className="nav navbar-nav navbar-right pull-right">
              <li><a href="/api/v1/inventions.json" target='_blank'>Api Call</a></li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
});
