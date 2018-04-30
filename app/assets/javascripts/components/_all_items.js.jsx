class AllItems extends React.Component {
  handleUpdate(item) {
    this.props.handleUpdate(item);
  }

  handleDelete(id) {
    this.props.handleDelete(id);
  }

  render() {
    return(
        <div>
            {this.props.items.map((item) => {
              return (
                  <div key={item.id}>
                    <Item item={item} 
                      handleDelete={this.handleDelete.bind(this, item.id)} 
                      handleUpdate={this.handleUpdate.bind(this)} />
                  </div>
              );
            })}
        </div>
    );
  }
}
