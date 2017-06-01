var Inventions = React.createClass({
  handleDelete(id) {
    this.props.handleDelete(id);
  },

  render() {
    var invention = this.props.inventions.map((list) => {
      return (
        <tr key={list.id}>
          <td className='text-uppercase'>
            <a href={"/site/" + list.permalink}>
              {list.title}
            </a>
          </td>
          <td>
            <a href={"/site/" + list.permalink} className='btn btn-link'>Details</a>
            <button onClick={this.handleDelete.bind(this, list.id)} className='btn btn-danger'>Delete</button>
          </td>
        </tr>
      )
    });
    return(
      <div>
        <h1>Invention List</h1>
        <table className='table table-bordered table-striped'>
          <thead>
            <tr>
              <th> Name </th>
              <th> Action </th>
            </tr>
          </thead>
          <tbody>
            { invention }
          </tbody>
        </table>
      </div>
    )
  }
});
