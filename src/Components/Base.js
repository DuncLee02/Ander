import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'
import { browserHistory} from 'react-router'

import firebase from '../firebase.js'
import UserMenu from './Menu/UserMenu.js'
import AnonMenu from './Menu/AnonMenu.js'
import SearchBar from './Search/SearchBar/SearchBar.js'
import ResultPage from './Search/ResultsPage/ResultPage.js'
import ResultsSection from './Search/Results/ResultContainer.js'
import RentalCarPage from './RentalPage/RentalPage.js'

import AnderPage from './Info/Ander.js';
import ParkPage from './Info/Park.js'
import RentPage from './Info/Rent.js'
import HostPage from './Info/Host.js'
import TrustPage from './Info/Trust.js'
import HelpPage from './Help/Help.js'

import Global from '../Globals.js'



class Base extends Component {

  componentDidMount() {
    if (Global.User != null) {
      console.log('user already signed in...')
      this.setState({
        userSignedIn: true,
        selectedSection: 'search',
      })
    }
    else {
      let currentUser = firebase.auth().currentUser
      if (currentUser != null) {
        console.log('signed in...')
      }
    }
  }


  constructor(props) {
    super(props)
    this.state = {
      userSignedIn: false,
      selectedSection: 'search'
    }
    this.signIn = this.signIn.bind(this)
    // this.changeMainPage = this.changeMainPage.bind(this)
    this.updateResults = this.updateResults.bind(this)
    this.updatePage = this.updatePage.bind(this)
  }

  // getUserMenu() {
  //   if (Global.User != null) {
  //     return <UserMenu signIn={this.signIn} selectedSection={this.state.selectedSection} updatePage={this.updatePage}/>
  //   }
  // }

  signIn(bool) {
    console.log(bool)
    this.setState({
      userSignedIn: bool,
    })
  }

  changeMainPage(section) {
  }

  updateResults() {
    this.forceUpdate()
  }


  render() {
    console.log("user: " + Global.User)
    const pathArray = window.location.pathname.split( '/' );
    const selectedSection = pathArray[1]
    console.log(window.location.pathname)

    return (
      <div>
        <BrowserRouter >
          <div>
            <AnonMenu signIn={this.signIn} selectedSection={selectedSection} updatePage={this.updatePage}/>
            <Route path='/search' component={ResultPage}/>
            <Route exact path='/' component={this.basePage}/>
            <Route path='/rentals/' component={RentalCarPage}/>
            <Route path='/ander' component={AnderPage}/>
            <Route path='/Host' component={HostPage}/>
            <Route path='/Park' component={ParkPage}/>
            <Route path='/Rent' component={RentPage}/>
            <Route path='/Trust' component={TrustPage}/>
            <Route path='/Help' component={HelpPage}/>
            {Global.User != null &&
              <UserMenu signIn={this.signIn} selectedSection={this.state.selectedSection} updatePage={this.updatePage}/>
            }
          </div>
        </BrowserRouter>
      </div>
    );

  }

  basePage = (props) => {
      return (
        <div className= 'flexVertical'>
          <text className='searchTitle'> Ander </text> <br/>
          <text className='searchDescription'> rent or park at a location near you </text> <br/>

          <SearchBar id='SearchBar' updateResults={this.updateResults}/>


        </div>
      );
    }

    // userMenuContainer = (props) => {
    //     return (
    //       return <UserMenu signIn={this.signIn} selectedSection={this.state.selectedSection} updatePage={this.updatePage}/>
    //     );
    //   }

    // getPage() {
    //   console.log(this.state.selectedSection)
    //   if (this.state.selectedSection === 'ander') {
    //     return <AnderPage sectionChangeHandler={this.updatePage.bind(this)}/>
    //   }
    //   if (this.state.selectedSection === 'Park') {
    //     return <ParkPage sectionChangeHandler={this.updatePage.bind(this)}/>
    //   }
    //   if (this.state.selectedSection === 'Rent') {
    //     return <RentPage sectionChangeHandler={this.updatePage.bind(this)}/>
    //   }
    //   if (this.state.selectedSection === 'Host') {
    //     return <HostPage sectionChangeHandler={this.updatePage.bind(this)}/>
    //   }
    //   if(this.state.selectedSection === 'Trust') {
    //     return <TrustPage sectionChangeHandler={this.updatePage.bind(this)}/>
    //   }
    // }

    updatePage(sectionName) {
      // window.scrollTo(0, 0)
      // this.setState({
      //     selectedSection: sectionName
      // });
      console.log('updating...')
      // this.forceUpdate()
    }


}

export default Base;
