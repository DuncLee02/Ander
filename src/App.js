import React, { Component } from 'react';

import Info from './Components/Menu.js';
import './App.css';
import SearchBase from './Components/Search/SearchBase.js'


class App extends Component {


  constructor(props) {
    super(props)
    this.state = {
      pageRendered: 'Search',
    }
    this.changeMainPage = this.changeMainPage.bind(this)
  }

  render() {
    return (
      <div className="App">
        {this.getPage()}
      </div>
    );
  }


  changeMainPage(section) {
    this.setState({
      pageRendered: section
    })
  }

  getPage() {
    console.log(this.state.selectedSection)
    if (this.state.pageRendered === 'Info') {
      return <Info changeMainPage={this.changeMainPage}/>
    }
    if (this.state.pageRendered === 'Search') {
      return <SearchBase changeMainPage={this.changeMainPage}/>
    }
  }

}

export default App;
