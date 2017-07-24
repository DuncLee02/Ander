import React, { Component } from 'react'
import SearchBar from '../Search/SearchBar.js'

import Modal from 'react-modal'
import Global from '../../Globals.js'


class SearchMenu extends Component {

  user = null

  constructor(props) {
    super(props)
    this.state = {
      logInVisible: false,
      signUpVisible: false,
    }
    this.userCallback = this.userCallback.bind(this)
  }


  render() {

    return (
      <div className ='flexVertical' >
        <div className = 'searchMenu'>
          <div className='searchAnderLogo'>
            <img className='menuImg' src={require('../../Assets/Ander.png')} alt={'Menu'} />
          </div>
          <div className='searchMenuItem' onClick={this.toggleSignIn.bind(this)}>
            <text className='textSmall'> Reserve a Car </text>
          </div>
          <div className='searchMenuItem' onClick={this.toggleSignUp.bind(this)}>
            <text className='textSmall'> Lease your Car </text>
          </div>
          <div className='searchMenuItem' onClick={this.toggleSignUp.bind(this)}>
            <text className='textSmall'> Messages </text>
          </div>
          <div className='searchMenuItem'>
            <text className='textSmall'> help </text>
          </div>
          <div className='searchMenuItem' onClick={this.changeToInfoSection.bind(this)}>
            <text className='textSmall'> Learn More </text>
          </div>
        </div>

        <text className='searchTitle'> Ander </text> <br/>
        <text className='searchDescription'> rent or park at a location near you </text> <br/>

        <SearchBar id='SearchBar'/>



      </div>
    );
  }

  changeToInfoSection() {
    this.props.changeMainPage('Info')
  }

  toggleSignIn() {
    console.log('toggling login: ' + this.state.logInVisible)
    this.setState({
      logInVisible: !this.state.logInVisible
    })
  }

  toggleSignUp() {
    console.log('toggling signUp: ' + this.state.signUpVisible)
    this.setState({
      signUpVisible: !this.state.signUpVisible
    })
  }

  userCallback(aUser) {
    this.user = {name: aUser.displayName, email: aUser.email, uid: aUser.uid}
    this.setState({
      logInVisible: false,
      signUpVisible: false,
    })
  }


}

export default SearchMenu;
