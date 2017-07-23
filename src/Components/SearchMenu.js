import React, { Component } from 'react';
import SignIn from './SearchSignIn.js'
import SearchBar from './SearchBar.js'

import Modal from 'react-modal';
import onClickOutside from 'react-onclickoutside'
import ReactDOM from 'react-dom'

function isDescendant(parent, child) {
   var node = child.parentNode;
   while (node != null) {
       if (node == parent) {
           return true;
       }
       node = node.parentNode;
   }
   return false;
 }

class SearchMenu extends Component {

  constructor(props) {
    super(props)
    this.state = {
      logInVisible: false,
      signUpVisible: false,
    }
  }

  // componentDidMount() {
  //     window.addEventListener('mousedown', this.pageClick, false);
  // }
  //
  //
  // componentWillUnmount() {
  //   window.removeEventListener('mousedown', this.pageClick, false);
  // }
  //
  // pageClick(e) {
  //   var SearchBar = document.getElementById('SearchBar');
  //   var thisNode = ReactDOM.findDOMNode(e.target)
  //   if (!
  //     isDescendant(SearchBar, thisNode)) {
  //     console.log('not searchbar')
  //   }
  // }


  render() {

    return (
      <div className ='flexVertical' >
        <div className = 'searchMenu'>
          <div className='searchAnderLogo'>
            <img className='menuImg' src={require('../Assets/Ander.png')} alt={'Menu'} />
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

        <text className='searchTitle'> Ander </text> <br/>
        <text className='searchDescription'> rent or park at a location near you </text> <br/>

        <SearchBar id='SearchBar'/>

        <Modal
        isOpen={this.state.logInVisible}
        contentLabel="Modal"
        className='searchModal'
        overlayClassName='modal-overlay'
        onRequestClose={this.toggleSignIn.bind(this)}
        >
          <SignIn/>
        </Modal>

        <Modal
        isOpen={this.state.signUpVisible}
        contentLabel="Modal"
        className='searchModal'
        overlayClassName='modal-overlay'
        onRequestClose={this.toggleSignUp.bind(this)}
        >
          <SignIn/>
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


}

export default SearchMenu;
