import React, { Component } from 'react';
import AnderPage from './Ander.js';
import ParkPage from './Park.js'
import RentPage from './Rent.js'
import HostPage from './Host.js'
import TrustPage from './Trust.js'

class Menu extends Component {

  constructor(props) {
    super(props)
    this.state = {
      selectedSection: 'ander',
    }
  }

  render() {
    var languages = ['ander', 'Park', 'Rent', 'Host']

    return (
      <div>
    <div className='menu'>
      <div className='menuImageContainer'>
        <img className='menuImg' src={require('../Assets/Menu.png')} alt={'Menu'} />
      </div>
      <div className='menuImageContainer'>
        <img className='menuImg' src={require('../Assets/Ander.png')} alt={'Ander'} />
      </div>

    {languages.map(function (name, index) {
      return(
        <div className='menuContainer' key={name}>
          <ul
          style = {name === this.state.selectedSection ? {'fontWeight': 'bold'} : null }
          onClick= {this.updatePage.bind(this, name)}
          key={name}>
            {name}
        </ul>
        </div>
      )
    }, this)}
    <button className='signInButton' onClick={this.switchToSignIn.bind(this)}>
      <span style={{'fontSize': 15}}> Sign Up </span>
    </button>
    </div>

    {this.getPage()}

    </div>
    );
  }

  updatePage(sectionName) {
    window.scrollTo(0, 0)
    this.setState(function() {
      return {
        selectedSection: sectionName
      }
    });
  }

  getPage() {
    console.log(this.state.selectedSection)
    if (this.state.selectedSection === 'ander') {
      return <AnderPage sectionChangeHandler={this.updatePage.bind(this)}/>
    }
    if (this.state.selectedSection === 'Park') {
      return <ParkPage sectionChangeHandler={this.updatePage.bind(this)}/>
    }
    if (this.state.selectedSection === 'Rent') {
      return <RentPage sectionChangeHandler={this.updatePage.bind(this)}/>
    }
    if (this.state.selectedSection === 'Host') {
      return <HostPage sectionChangeHandler={this.updatePage.bind(this)}/>
    }
    if(this.state.selectedSection === 'Trust') {
      return <TrustPage sectionChangeHandler={this.updatePage.bind(this)}/>
    }

  }

  switchToSignIn() {
    console.log("switching to sign in")
    this.props.changeMainPage('Search')
  }

}

export default Menu;
