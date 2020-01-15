import React, {Component} from 'react';
import Header from './Header';
import CardList from './CardList';
import './style/css/App.css';

class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      bookmarks: [],
      loaded: false,
      isOpen: false
    }
  }

  componentDidMount() {
  }

  addBookmark(){
    const newBookmarks = this.state.bookmarks.push({
      name : document.getElementById('name'),
      url: document.getElementById('url')
    });
    this.setState({isOpen: false, bookmarks: newBookmarks});
  }

  render() {
    const {isOpen, bookmarks} = this.state;

    const handleOpen = () => {
      return this.setState({isOpen : true})
    }
  
    const handleClose = () => {
      return this.setState({isOpen : false});
    }

    return (
      <div className="container">
          <Header 
            open={isOpen} 
            handleClose={handleClose} 
            handleOpen={handleOpen} 
            addBookmark={() => this.addBookmark()} />
          <h2>List of Bookmarks</h2>
          <CardList bookmarks={bookmarks}/>
      </div>
    );
  }
}

export default App;
