import React, { Component } from 'react';
import Info from './Components/Menu.js';
import './App.css';
import SearchMenu from './Components/SearchMenu.js'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      pageRendered: 'Info',
    }
  }

  render() {
    return (
      <div className="App">
        {this.getPage()}
      </div>
    );
  }

  updatePage(sectionName) {
    window.scrollTo(0, 0)
    this.setState(function() {
      return {
        pageRendered: sectionName
      }
    });
  }

  getPage() {
    console.log(this.state.selectedSection)
    if (this.state.pageRendered === 'Info') {
      return <Info changeMainPage={this.updatePage.bind(this)}/>
    }
    if (this.state.pageRendered === 'Search') {
      return <SearchMenu changeMainPage={this.updatePage.bind(this)}/>
    }

  }

}

export default App;
