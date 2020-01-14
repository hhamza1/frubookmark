import React, {Component} from 'react';
import Header from './Header';
import CardList from './CardList';
import './style/css/App.css';

class App extends Component{
  constructor() {
    super();
    this.state = {
      bookmarks: [
        {
          title : "Test",
          author: "Admin"
        }
      ],
      loaded: 'false'
    }
  }

  componentDidMount() {
  }
  render() {
    return (
      <div className="container">
          <Header />
          <h2>List of Bookmarks</h2>
          <CardList bookmarks={this.state.bookmarks}/>
      </div>
    );
  }
}

export default App;
