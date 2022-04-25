class GroceryList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <ul>
        <GroceryListItem groceryListItem={this.props.groceryListItems[0]}/>
        <GroceryListItem groceryListItem={this.props.groceryListItems[1]}/>
        <GroceryListItem groceryListItem={this.props.groceryListItems[2]}/>
      </ul>
    )
  }
}

class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      done: false
    }
  }

  onListItemMouseOver() {
    this.setState({
      done: true
    });
  }

  onListItemMouseLeave() {
    this.setState({
      done: false
    })
  }

  render() {

    var style = {
      fontWeight: this.state.done ? 'bold' : 'normal'
    };

    return (
      <li style={style} onMouseOver={this.onListItemMouseOver.bind(this)} onMouseLeave={this.onListItemMouseLeave.bind(this)}>{this.props.groceryListItem}</li>
    )
  }
}

var App = () => {
  return (
  <div>
    <h2>My Todo List</h2>
    <GroceryList groceryListItems={['Cucumber', 'Kale', 'Nutella']}/>
  </div>
  )
};

ReactDOM.render(<App />, document.getElementById("app"));

// ReactDOM.render(<App />, document.getElementById('GroceryList'));