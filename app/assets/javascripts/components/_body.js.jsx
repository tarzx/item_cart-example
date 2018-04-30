class Body extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      items: []
    };

    this.handleInsert = this.handleInsert.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
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

  handleInsert(item) {
  	this.insertItem(item);
  }

  handleUpdate(item) {
   	axios.put(`/api/v1/items/${item.id}.json`, item)
    .then((response) => {
      if (response != null) {
        this.updateItem(item);
      }
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  handleDelete(id) {
  	axios.delete(`/api/v1/items/${id}`)
		.then((response) => {
      this.removeItem(id);
		})
		.catch(function (error) {
		  console.log(error);
		});
  }

	insertItem(item) {
  	var newItems = this.state.items.concat(item);

    this.setState({ items: newItems })
	}

	updateItem(item) {
		var newItems = this.state.items.filter((i) => { return i.id != item.id });
    newItems.push(item);
    newItems.sort((a,b) => a.id > b.id);

    this.setState({ items: newItems });
	}

  removeItem(id) {
    var newItems = this.state.items.filter((item) => {
        return item.id != id;
    });

    this.setState({ items: newItems });
	}

  render() {
    return (
      <div>
      	<NewItem handleSubmit={this.handleInsert} />
        <AllItems items={this.state.items} 
        	handleDelete={this.handleDelete} 
        	handleUpdate={this.handleUpdate} />
      </div>
    );
  }
}
