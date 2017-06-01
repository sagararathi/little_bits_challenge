var NewInvention = React.createClass({
  getInitialState() {
    return {
      bits: [],
      selectedBits: [],
      username: this.props.username,
      email: this.props.email
    }
  },
  componentDidMount() {
    $.getJSON('/api/v1/bits.json/', (response) => {
      this.setState({ bits: response['bits'] }) });
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

  handleClick() {
    var title = this.refs.title.value;
    var description = this.refs.description.value;
    var username = this.state.username;
    var email = this.state.email;
    var bits  = this.state.selectedBits;
    var other_bits = this.refs.other_bits.value.split(',');

    $.ajax({
      url: '/api/v1/inventions',
      type: 'POST',
      data: {
        invention: {
          title:title,
          description: description,
          user_attributes: {username: username, email: email},
          tag_list: other_bits,
          bits: bits
        }
      },
      success: (response) => {
        this.props.handleSubmit(response.invention);
      }
    });
  },

  render() {
    var bits = this.state.bits.map((bit) => {
      return(
        <option value={bit.id} key={bit.id} onClick={this.handleSelect}>{bit.name}</option>
      )
    });
    return(
      <form data-toggle="validator" role="form">
        <div className='container'>
          <div className="col-md-12 text-center">
            <h2>New Invention</h2>
          </div>
          <div className='form-group col-sm-6'>
            <label htmlFor='title'>*Invention Title</label>
            <input ref='title' className='form-control' placeholder='Invention Title' required autoFocus/>
          </div>
          <div className='form-group col-sm-6'>
            <label htmlFor='description'>*Invention Description</label>
            <input ref='description' className='form-control' placeholder='Invention Description' required/>
          </div>
          <div className='clearfix'></div>
          <div className='form-group col-sm-6'>
            <label htmlFor='other_bits'>Other Material</label>
            <input ref='other_bits' className='form-control' placeholder='Other bits used sepreted by commas' />
          </div>
          <div className='form-group col-sm-6'>
          <label htmlFor='bits'>Bits used in invention</label>
            <select ref='bits' multiple className='form-control'>{ bits }</select>
          </div>
          <div className='clearfix'></div>
          <div className="col-md-12 text-center">
            <button className='btn btn-primary btn-lg' onClick={this.handleClick}>Add New Invention</button>
          </div>
        </div>
      </form>
    )
  }
});
