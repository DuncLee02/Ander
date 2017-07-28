import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom'

import UserMenu from './SearchMenu/UserMenu.js'
import AnonMenu from './SearchMenu/AnonMenu.js'
import SearchBar from './SearchBar/SearchBar.js'
import ResultsSection from './Results/ResultContainer.js'
import RentalCarPage from './RentalPage/RentalPage.js'

import Global from '../../Globals.js'



class Base extends Component {

  componentDidMount() {
    if (Global.User != null) {
      console.log('user already signed in...')
      console.log(Global.User)
      this.setState({
        userSignedIn: true,
      })
    }
  }


  constructor(props) {
    super(props)
    this.state = {
      userSignedIn: false,
    }
    this.signIn = this.signIn.bind(this)
    this.changeMainPage = this.changeMainPage.bind(this)
    this.updateResults = this.updateResults.bind(this)
  }

  getMenu() {
    if (this.state.userSignedIn) {
      return <UserMenu signIn={this.signIn} changeMainPage={this.changeMainPage}/>
    }
    else {
      return <AnonMenu signIn={this.signIn} changeMainPage={this.changeMainPage}/>
    }
  }

  signIn(bool) {
    console.log(bool)
    this.setState({
      userSignedIn: bool,
    })
  }

  changeMainPage(section) {
    console.log('now in searchbase...')
    this.props.changeMainPage(section)
  }

  updateResults() {
    this.forceUpdate()
  }

  checkLocalStorage() {

  }

  render() {

    return (
      <div >
        {this.getMenu()}
        {console.log(this.props.routes)}
        <BrowserRouter>
          <div>
            <Route exact path='/ander/' component={this.SearchPage}/>
            <Route path='/ander/rentals/' component={RentalCarPage}/>
          </div>
        </BrowserRouter>

      </div>
    );
  }

  SearchPage = (props) => {
      return (
        <div className= 'flexVertical'>
          <text className='searchTitle'> Ander </text> <br/>
          <text className='searchDescription'> rent or park at a location near you </text> <br/>

          <SearchBar id='SearchBar' updateResults={this.updateResults}/>

          <ResultsSection />
        </div>
      );
    }

}

export default Base;
