var groceries = ['Food', 'Drink', 'Watermellon', 'Dog Food', 'Some other stuff'];

var App = () => (
  <div id='groceries'>
    <style>{"\
        .groceryItem:hover{\
          font-weight: bold;\
        }\
      "}</style>
    <h2>Grocery List</h2>
    <GroceryList items={groceries}></GroceryList>
  </div>
);


class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      done: false
    };
  }
  onListItemClick() {
    this.setState({
      done: !this.state.done
    });
  }
  render() {
    var style = {
      cursor: 'pointer',
      textDecoration: this.state.done ? 'line-through' : 'none',
    };
    return <li className='groceryItem' style={style} onClick={this.onListItemClick.bind(this)} >{this.props.item}</li>
  }
}


var GroceryList = (props) => {
  return <ul>
    {props.items.map(item =>
      <GroceryListItem item={item}></GroceryListItem>
    )}
  </ul>
}

ReactDOM.render(< App />, document.getElementById('app'));