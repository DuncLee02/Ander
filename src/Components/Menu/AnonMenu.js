import React, { Component, PropTypes} from 'react'
import SignUp from './SearchSignUp.js'

import Global from '../../Globals.js'
import Modal from 'react-modal'
import { browserHistory} from 'react-router'
import { Link } from 'react-router-dom'


class SearchMenu extends Component {

  constructor(props) {
    super(props)
    this.state = {
      logInVisible: false,
      signUpVisible: false,
    }
    this.userCallback = this.userCallback.bind(this)
    this.changeMainPage = this.changeMainPage.bind(this)
  }


  render() {
    const pathArray = window.location.pathname.split( '/' );
    const currRoute = pathArray[1]

    var languages = ['ander', 'Park', 'Rent', 'Host']
    console.log('rerendering menu... section: ' + this.props.selectedSection)
    return (

        <div className ='flexVertical' >

        {'search' != currRoute && <div>
        <div className = 'menu'>
          <div className='menuImageContainer'>
            <img className='menuImg' src={require('../../Assets/Menu.png')} alt={'Menu'} />
          </div>
          <div className='menuImageContainer'>
            <Link to='/'>
              <img className='menuImg' src={require('../../Assets/Ander.png')} alt={'Ander'} onClick= {this.changeMainPage.bind(null, '/')}/>
            </Link>
          </div>

          {languages.map(function (name, index) {
            return(
              <Link to={'/' + name} key={name} className='anonMenuItem'>
                <div
                  className='anonMenuItem'
                  style = {name === currRoute ? {'fontWeight': 'bold'} : null }
                  onClick= {this.changeMainPage.bind(null, name)}
                  key={name}>
                  {name}
              </div>
            </Link>
          )
        }, this)}


        </div>

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
      }

      { Global.User == null &&
        <div>
        <button className='signInButton' onClick={this.toggleSignIn.bind(this)}>
        <span style={{'fontSize': 15}}> Sign Up </span>
      </button>

      <Modal
      isOpen={this.state.logInVisible}
      contentLabel="Modal"
      className='loginModal'
      overlayClassName='modal-overlay'
      onRequestClose={this.toggleSignIn.bind(this)}
      >
        <SignUp userCallback={this.userCallback}/>
      </Modal>
      </div>

    }

      </div>
    );
  }

  static contextTypes = {
    router: PropTypes.object
  }

  changeMainPage(section) {
    // console.log(section)
    // this.context.router.transitionTo(section)
    // browserHistory.push(section)
    // this.props.updatePage(section)
    // this.props.history.push(section)
    // this.context.transitionTo(section)
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
