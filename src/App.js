import React, { Component } from 'react';
import './App.css';
import SearchBase from './Components/Base.js'


class App extends Component {


  constructor(props) {
    super(props)
    this.state = {
      pageRendered: 'Search',
    }
    this.changeMainPage = this.changeMainPage.bind(this)
  }

  render() {
    console.log('ander vs. 1.1')

    // var pathArray = window.location.pathname.split( '/' );
    // console.log(pathArray.length)
    // if (pathArray.length == 2) {
    //   window.history.pushState(null, null, '/ander');
    // }

    return (
      <div className="App">
        <SearchBase changeMainPage={this.changeMainPage}/>
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
    // if (this.state.pageRendered === 'Info'|| this.state.pageRendered === 'ander' || this.state.pageRendered === 'Park' || this.state.pageRendered === 'Rent' || this.state.pageRendered === 'Host') {
    //   return <Info changeMainPage={this.changeMainPage} pageSelected={this.state.pageRendered}/>
    // }

    if (this.state.pageRendered === 'Search') {
      return <SearchBase changeMainPage={this.changeMainPage}/>
    }
  }

}

export default App;
