import React, { Component } from 'react'
import SignUp from './SearchSignUp.js'

import Global from '../../../Globals.js'
import Modal from 'react-modal'


class SearchMenu extends Component {

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
            <img className='menuImg' src={require('../../../Assets/Ander.png')} alt={'Menu'} />
          </div>
          <div className='searchMenuItem' onClick={this.toggleSignIn.bind(this)}>
            <text className='textSmall'> Log In </text>
          </div>
          <div className='searchMenuItem' onClick={this.toggleSignUp.bind(this)}>
            <text className='textSmall'> Sign Up </text>
          </div>
          <div className='searchMenuItem'>
            <text className='textSmall'> help </text>
          </div>
          <div className='searchMenuItem' onClick={this.changeToInfoSection.bind(this)}>
            <text className='textSmall'> Learn More </text>
          </div>
        </div>

        <Modal
        isOpen={this.state.logInVisible}
        contentLabel="Modal"
        className='loginModal'
        overlayClassName='modal-overlay'
        onRequestClose={this.toggleSignIn.bind(this)}
        >
          <SignUp userCallback={this.userCallback}/>
        </Modal>

        <Modal
        isOpen={this.state.signUpVisible}
        contentLabel="Modal"
        className='loginModal'
        overlayClassName='modal-overlay'
        onRequestClose={this.toggleSignUp.bind(this)}
        >
          <SignUp userCallback={this.userCallback}/>
        </Modal>



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

  userCallback() {
    this.setState({
      logInVisible: false,
      signUpVisible: false,
    })
    console.log('signing in...')
    this.props.signIn(true)
  }


}

export default SearchMenu;
