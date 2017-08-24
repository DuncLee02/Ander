import React, { Component } from 'react';
import './Reservations.css'

import firebase from '../../firebase.js'
import Global from '../../Globals.js'
import CarReservation from '../../Objects/Reservation.js'
import ReservationItem from './ReservationItem.js'


class ReservationPopUp extends Component {


  constructor(props) {
    super(props)
    this.state = {
      reservations : []
    }
    this.updatePopup = this.updatePopup.bind(this)
  }


  componentDidMount() {
    window.addEventListener('mousedown', this.pageClick, false);
    this.setState({
      from: null,
      to: null,
    })

    Global.ReservedCars = []

    firebase.database().ref("userReservations/" + Global.User.uid ).once('value', (snap) => {
      var items = [];
      snap.forEach((child) => {
        const airport = child.val().airport
        const to = child.val().to
        const from = child.val().from
        const type = child.val().type
        const uid = child.key
        const year = child.val().year
        const make = child.val().make
        const model = child.val().model
        const carUid = child.val().carUid
        const reservationStarts = child.val().reservationStarts
        const reservationEnds = child.val().reservationEnds

        const newCar = new CarReservation(airport, to, from, type, uid, year, make, model, reservationStarts, reservationEnds, carUid)
        console.log(newCar)
        if (newCar.model != null) {
          console.log('adding')
          Global.ReservedCars.push(newCar)
        }
      });
      // this.setState({
      //   reservations: Global.ReservedCars
      // })
      this.forceUpdate()
    })
    console.log(Global.ReservedCars.length)
  }


  componentWillUnmount() {
    window.removeEventListener('mousedown', this.pageClick, false);
  }


    pageClick = e => {
      const domNode = document.getElementById('reservationsContainer')

      if (!domNode.contains(e.target)) {
        this.props.closeReservationCallback()
      }
    }

  render() {

    if (Global.ReservedCars.length == 0) {
      return (
        <div className='reservationsNoneFound'>
          <text className='noReservationsText'> no reservations found </text>
        </div>
      )
    }

    return (
      <div className='reservationsFlex'>
      {Global.ReservedCars.map((res, index) => {
        return(
          <ReservationItem res={res} key={index} updatePopup={this.updatePopup} />
        )
      })}
      </div>
    );
  }

  updatePopup() {
    console.log('updating pop up')
    console.log(Global.ReservedCars)
    this.forceUpdate()
    // this.setState({
    //   reservations: Global.ReservedCars
    // })
  }

}

export default ReservationPopUp;
