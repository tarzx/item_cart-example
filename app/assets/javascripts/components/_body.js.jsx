class Body extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      items: []
    };
  }

  componentDidMount() {
    axios.get('/api/v1/items.json')
		.then((response) => {
	  	if (response != null) {
		    this.setState({ items: response.data })
			}
		})
		.catch(function (error) {
	    console.log(error);
		});
  }

  handleSubmit(item) {
    var newState = this.state.items.concat(item);
    this.setState({ items: newState })
  }

  handleDelete(id) {
  	axios.delete(`/api/v1/items/${id}`)
		.then((response) => {
      console.log('successfully removed item')
		})
		.catch(function (error) {
		  console.log(error);
		});
  }

  render() {
    return (
      <div>
      	<NewItem handleSubmit={this.handleSubmit} />
        <AllItems items={this.state.items} handleDelete={this.handleDelete} />
      </div>
    );
  }
}
