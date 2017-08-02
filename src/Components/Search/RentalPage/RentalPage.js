import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import ReactLoading from 'react-loading'
import moment from 'moment'


import firebase from '../../../firebase.js'
import RentalCar from '../../../Objects/RentalCar.js'
import RentalPanel from './RentalPanel.js'


class RentalPage extends Component {

  constructor(props) {
    super(props)
    this.state = {
      thisCar: null
    }
  }

  componentDidMount() {
    console.log(this.props.location.pathname)
    let arr = this.props.location.pathname.split('/')
    const airport = arr[3]
    console.log("airport: " + airport)
    const uid = arr[4]
    console.log('uid: ' + uid)
    firebase.database().ref('rentals/' + airport + '/' + uid).on('value', (snap) => {
      console.log(snap.val())
      const uid = snap.key
      const airport = snap.val().airport
      const to = snap.val().to
      const from = snap.val().from
      const type = snap.val().type
      const year = snap.val().year
      const make = snap.val().make
      const model = snap.val().model

      const reservationArray = []
      console.log(snap.val().reservations)
      snap.child('reservations').forEach((reservation) => {
        const start = new moment( reservation.val().start)
        const end = new moment(reservation.val().end)
        const reservationJson = {startDate: start, endDate: end}

        reservationArray.push(reservationJson)
      })

      const newCar = new RentalCar(airport, to, from, type, uid, year, make, model, reservationArray)
      this.setState({
        thisCar: newCar
      })
    })
  }

  getDates(startDate, stopDate) {
    var dateArray = [];
    var currentDate = moment(startDate);
    var stopDate = moment(stopDate);
    while (currentDate <= stopDate) {
        dateArray.push( new Date(moment(currentDate).format('YYYY-MM-DD')) )
        currentDate = moment(currentDate).add(1, 'days');
    }
    return dateArray;
  }

  render() {

    const thisCar = this.state.thisCar

    return (
      <div style={{'height': 2000}}>
        {thisCar == null && <ReactLoading className='rentalCarLoading' type='spokes' color='#224f78' /> }
        {thisCar != null &&
          <div className='flexVertical'>
            <img className='rentalCarTopImage' src={require('../../../Assets/CarTypes/standard.png')} alt={'car'} />
            <div className='rentalInfoContainer' >
              <text className='rentalCarTitle'> {thisCar.make + " " + thisCar.model + " " + thisCar.year} </text>
              <RentalPanel thisCar={thisCar} />
            </div>
          </div>
        }
      </div>
    );
  }


}

export default RentalPage;
