import React, {Component} from 'react';
import * as axios from 'axios';
import Header from './Header';
import CardList from './CardList';
import './style/css/App.css';

class App extends Component{
  constructor() {
    super();
    this.state = {
      data: {},
      loaded: 'false'
    }
  }

  componentDidMount() {
    axios.get('https://iframe.ly/api/oembed?url=https://www.youtube.com/watch?v=pBuZEGYXA6E&api_key=e3875b6edf5da6143a27bc')
    .then(res => this.setState({data: res.data}))
    .catch(err => console.log(err))
  }
  render() {
    return (
      <div className="container">
          <Header />
          <h2>List of Bookmarks</h2>
          <CardList data={this.state.data}/>
      </div>
    );
  }
}

export default App;
