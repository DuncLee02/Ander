import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Modal from 'react-modal'
import Global from '../../Globals.js'
import { Link } from 'react-router-dom'

import LeaseModal from '../AdminPages/CreateCar.js'
import ReservationPopUp from '../Reservations/ReservationsPopUp.js'
import './Menu.css'




class SearchMenu extends Component {

  user = null

  constructor(props) {
    super(props)
    this.state = {
      leaseModalVisible: false,
      reservationsVisible: false,
    }
    this.signOut = this.signOut.bind(this)
    this.changeToInfoSection = this.changeToInfoSection.bind(this)

    this.openLeaseModal = this.openLeaseModal.bind(this)
    this.closeLeaseModal = this.closeLeaseModal.bind(this)
    this.showReservationPage = this.showReservationPage.bind(this)
    this.closeReservationCallback = this.closeReservationCallback.bind(this)
  }

  static contextTypes = {
   router: React.PropTypes.object
 }

  render() {

    return (
      <div>
        <div className = 'menu'>


          <div className='userMenuContainer'>
            <text className='userMenuItem' onClick={this.showReservationPage}> Reservations </text>
            {this.checkIfAdmin()}
            <text className='userMenuItem' > Messages </text>

            <Link to='/help' className='userMenuItem'>
              <text> help </text>
            </Link>

            <text className='userMenuItem' onClick={this.signOut}> Log Out </text>
          </div>

        </div>

        {this.state.reservationsVisible && <div className='reservationsContainer' id='reservationsContainer'
        style={{'height': Global.ReservedCars.length * 60, 'minHeight': 60}}>
          <ReservationPopUp closeReservationCallback ={this.closeReservationCallback}/>
        </div> }

        <Modal
        isOpen={this.state.leaseModalVisible}
        contentLabel="Modal"
        className='leaseModal'
        overlayClassName='modal-overlay'
        onRequestClose={this.closeLeaseModal}
        >
          <LeaseModal userCallback={this.userCallback}/>
        </Modal>

      </div>
    );
  }

  closeReservationCallback() {
    this.setState({
      reservationsVisible: false
    })
  }

  showReservationPage() {
    this.setState({
      reservationsVisible: true
    })
  }

  checkIfAdmin() {
    if (Global.User.admin) {
      // console.log(Global.User)
      // console.log(Global.User.admin)
      return (
          <text className='userMenuItem' onClick={this.openLeaseModal}> Create Car </text>
      )
    }
  }

  openLeaseModal() {
    this.setState({
      leaseModalVisible: true
    })
  }

  closeLeaseModal() {
    this.setState({
      leaseModalVisible: false
    })
  }

  changeToInfoSection() {
    this.props.changeMainPage('Info')
  }

  signOut() {
    Global.User = null
    this.props.signIn(false)
  }

}

export default SearchMenu;
