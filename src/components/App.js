import React, {Component} from 'react';
import * as axios from 'axios';
import Header from './Header';
import CardList from './CardList';
import './style/css/App.css';

class App extends Component{
  constructor() {
    super();
    this.state = {
      loaded: 'false'
    }
  }

  componentDidMount() {
    axios.get('https://iframe.ly/api/oembed?url=http://iframe.ly/ACcM3Y')
    .then(res => console.log(res))
  }
  render() {
    return (
      <div className="container">
          <Header />
          <h2>List of Bookmarks</h2>
          <CardList />
      </div>
    );
  }
}

export default App;
