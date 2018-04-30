class AllItems extends React.Component {
  handleDelete(id) {
    this.props.handleDelete(id);
  }

  render() {
    return(
        <div>
            {this.props.items.map((item) => {
              return (
                  <div key={item.id}>
                      <h3>{item.id}: {item.name}</h3>
                      <p>{item.description}</p>
                      <button onClick = {() => {this.handleDelete(item.id)}}>Delete</button>
                  </div>
              );
            })}
        </div>
    );
  }
}
