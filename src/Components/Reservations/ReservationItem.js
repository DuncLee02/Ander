import React, { Component } from 'react';
import firebase from '../../firebase.js'
import Global from '../../Globals.js'


class ReservationItem extends Component {

  res = null

  constructor(props) {
    super(props)
    this.state = {

    }
    this.deleteReservation = this.deleteReservation.bind(this)
    this.res = this.props.res
  }

  render() {

    return (
      <div className='reservationItemContainer' id='reservationItemContainer'>
        <div className='reservationMainBox'>
          <text className='reservationDestinationText'> {this.res.make + " " + this.res.model + " " + this.res.year} </text>
          <img className='reservationImage' src={require('../../Assets/CarTypes/compact.png')} alt={'Menu'} />
        </div>
        <div className='reservationInfoBox'>
          <text className='reservationPeriodText'> {this.res.airport} </text>
          <text className='reservationPeriodText'> {'from ' + this.res.reservationStarts } </text>
          <text className='reservationPeriodText'> {'to ' + this.res.reservationEnds} </text>
        </div>
        <div className='reservationMainBox'>
          <button className='reservationEditButton'> edit
          </button>
          <button className='reservationDeleteButton' onClick={this.deleteReservation}> delete
          </button>
        </div>
      </div>
    );
  }

  deleteReservation() {
    console.log("userReservations/" + Global.User.uid + "/" + this.res.uid)
    firebase.database().ref("userReservations/" + Global.User.uid + "/" + this.res.uid).remove()

    console.log('rentals/' + this.res.airport + '/' + this.res.carUid + '/reservations/' + this.res.uid)
    firebase.database().ref('rentals/' + this.res.airport + '/' + this.res.carUid + '/reservations/' + this.res.uid).remove()

    const index = Global.ReservedCars.findIndex(i => i.uid === this.res.uid)
    console.log("removing " + index)
    
    this.props.updatePopup()
  }




}

export default ReservationItem;
