import React, { Component } from 'react'
import Modal from 'react-modal'
import Global from '../../Globals.js'

import LeaseModal from '../AdminPages/CreateCar.js'




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
  }

  render() {

    return (
      <div className ='flexVertical' >
        <div className = 'searchMenu'>
          <div className='searchAnderLogo'>
            <img className='menuImg' src={require('../../../Assets/Ander.png')} alt={'Menu'} />
          </div>
          <div className='searchMenuItem' >
            <text className='textSmall' onClick={this.showReservationPage}> Reservations </text>
          </div>
          {this.checkIfAdmin()}
          <div className='searchMenuItem' >
            <text className='textSmall'> Messages </text>
          </div>
          <div className='searchMenuItem'>
            <text className='textSmall'> help </text>
          </div>
          <div className='searchMenuItem'>
            <text className='textSmall' onClick={this.signOut}> Log Out </text>
          </div>
          <div className='searchMenuItem' onClick={this.changeToInfoSection}>
            <text className='textSmall'> Learn More </text>
          </div>
        </div>

        {this.state.reservationsVisible && <div className='reservationsContainer'>
          <text> reservations </text>
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

  showReservationPage() {
    this.setState({
      reservationsVisible: true
    })
  }

  checkIfAdmin() {
    if (Global.User.admin) {
      console.log(Global.User)
      console.log(Global.User.admin)
      return (
        <div className='searchMenuItem' >
          <text className='textSmall' onClick={this.openLeaseModal}> Create Car </text>
        </div>
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
    Global.user = null
    this.props.signIn(false)
  }

}

export default SearchMenu;
