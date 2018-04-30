class AllItems extends React.Component {
  render() {
    return(
        <div>
            {this.props.items.map((item) => {
              return (
                  <div key={item.id}>
                      <h3>{item.name}</h3>
                      <p>{item.description}</p>
                  </div>
              );
            })}
        </div>
    );
  }
}
