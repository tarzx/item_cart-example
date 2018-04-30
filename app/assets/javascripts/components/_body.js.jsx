class Body extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      items: []
    };
  }

  componentDidMount() {
  	$.ajax({
	    url: "/api/v1/items.json",
	    dataType: 'json',
	    success: (item) => {
            this.props.handleSubmit(item);
        }
    });
  }

  handleSubmit(item) {
    var newState = this.state.items.concat(item);
    this.setState({ items: newState })
  }

  render() {
    return (
      <div>
      	<NewItem handleSubmit={this.handleSubmit} />
        <AllItems items={this.state.items} />
      </div>
    );
  }
}
