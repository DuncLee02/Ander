import React, { Component } from 'react';

import firebase from '../../firebase.js'
import Global from '../../Globals.js'
import CarReservation from '../../Objects/Reservation.js'


class ReservationPopUp extends Component {


  constructor(props) {
    super(props)
    this.state = {

    }
  }

  componentDidMount() {
    firebase.database().ref("userReservations/" + Global.User.uid ).on('value', (snap) => {
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

        const reservationStarts = child.val().reservationStarts
        const reservationEnds = child.val().reservationEnds

        const newCar = new CarReservation(airport, to, from, type, uid, year, make, model, reservationStarts, reservationEnds)

        if (newCar.model != null) {
          Global.ReservedCars.push(newCar)
        }
      });
      console.log(Global.ReservedCars)
    })
  }

  render() {

    return (
      <div className="App">

      </div>
    );
  }

}

export default ReservationPopUp;
