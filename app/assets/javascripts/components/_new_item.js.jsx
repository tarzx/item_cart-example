class NewItem extends React.Component {
  handleSubmit(e) {
      var name  = e.target.elements.name.value;
      var description = e.target.elements.description.value;
      axios.post('/api/v1/items', {
        name: name,
        description: description
      })
      .then((response) => {
        if (response != null) {
          this.props.handleSubmit(item.data);
          e.target.elements.name.value = '';
          e.target.elements.description.value = '';
        }
      })
      .catch(function (error) {
        console.log(error);
      });
      e.preventDefault();
  }

    render() {
      return (
          <div>
              <form onSubmit={this.handleSubmit}>
                <input name='name' placeholder='Enter the name of the item' />
                <input name='description' placeholder='Enter a description' />
                <input type="submit" value="Submit" />
              </form>
          </div>
      )
  }
}
