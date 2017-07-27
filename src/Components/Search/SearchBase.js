import React, { Component } from 'react';
import UserMenu from './SearchMenu/UserMenu.js'
import AnonMenu from './SearchMenu/AnonMenu.js'
import SearchBar from './SearchBar/SearchBar.js'

import Global from '../../Globals.js'

class Base extends Component {

  componentDidMount() {
    console.log('user already signed in...')
    if (Global.user != null) {
      this.setState({
        userSignedIn: true
      })
    }
  }


  constructor(props) {
    super(props)
    this.state = {
      userSignedIn: true,
    }
    this.signIn = this.signIn.bind(this)
    this.changeMainPage = this.changeMainPage.bind(this)
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

  render() {
    return (
      <div className= 'flexVertical'>
        {this.getMenu()}

        <text className='searchTitle'> Ander </text> <br/>
        <text className='searchDescription'> rent or park at a location near you </text> <br/>

        <SearchBar id='SearchBar'/>

      </div>
    );
  }

}

export default Base;
