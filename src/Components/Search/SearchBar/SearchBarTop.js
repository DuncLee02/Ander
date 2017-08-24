import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import firebase from '../../../firebase.js'
import { Link } from 'react-router-dom'

import PlaceDropdown from './SearchPlacePicker.js'
import CarTypeDropdown from './SearchCarTypePicker.js'


import 'react-day-picker/lib/style.css';
import DayPicker, { DateUtils } from 'react-day-picker';

import RentalCar from '../../../Objects/RentalCar.js'
import Global from '../../../Globals.js'

import './SearchBar.css'
import './Pickers.css'

let dateFormat = require('dateformat');



class SearchBar extends Component {

  constructor(props) {
    super(props)
    this.state = {
      dateFieldText:'anytime',
      dateVisible: false,
      airportPickerVisible: false,
      airportInputText: 'any airport',
      carPickerVisible: false,
      carInputText: 'car type',
      from: null,
      to: null,
    }
    this.pageClick = this.pageClick.bind(this)
    this.onAirportTextChange = this.onAirportTextChange.bind(this)
    this.onCarTextChange = this.onCarTextChange.bind(this)

    this.showCarPicker = this.showCarPicker.bind(this)
    this.showDatePicker = this.showDatePicker.bind(this)
    this.showAirportPicker = this.showAirportPicker.bind(this)

    this.removeCarPicker = this.removeCarPicker.bind(this)
    this.removeDatePicker = this.removeDatePicker.bind(this)
    this.removeAirportPicker = this.removeAirportPicker.bind(this)

    this.changePlacePickerText = this.changePlacePickerText.bind(this)
    this.changeCarPickerText = this.changeCarPickerText.bind(this)

    this.searchButtonClicked = this.searchButtonClicked.bind(this)
    this.performSearch = this.performSearch.bind(this)
  }



  componentDidMount() {
    window.addEventListener('mousedown', this.pageClick, false);

    // let query  = window.location.search.substring(1);
    // console.log(query)

    var urlParams;

    var match,
        pl     = /\+/g,  // Regex for replacing addition symbol with a space
        search = /([^&=]+)=?([^&]*)/g,
        decode = function (s) { return decodeURIComponent(s.replace(pl, " ")); },
        query  = window.location.search.substring(1);

    urlParams = {};
    while (match = search.exec(query)) {
       urlParams[decode(match[1])] = decode(match[2]);
     }
     console.log(urlParams)

     console.log(urlParams['from'])
     console.log(urlParams.airport)

     var airport = ""
     if (urlParams.airport != null) {
       airport = urlParams.airport
     }

     var model = ""
     if (urlParams.model != null) {
       model = urlParams.model
     }

     this.setState({
       airportInputText: airport,
       carInputText: model,
     }, this.performSearch)

     if (urlParams.to != null && urlParams.from != null) {
       const fromDate = new Date(urlParams.from)
       const toDate = new Date(urlParams.to)
       this.setState({
         from: fromDate,
         to: toDate,
         dateFieldText: dateFormat(fromDate, "mm/dd") + "  –  " + dateFormat(toDate, "mm/dd")
       })
     }

  }

  performSearch() {
    Global.RentalCars = []
    console.log('pinging firebase')
    console.log(Global.RentalCars.length)
    console.log('airportInputText: ' + this.state.airportInputText)
    firebase.database().ref("rentals/" + this.state.airportInputText ).on('value', (snap) => {
      console.log(snap.val())
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

        const reservationArray = []
        child.child('reservations').forEach((reservation) => {
          const start = new Date( reservation.val().start)
          const end = new Date(reservation.val().end)
          const reservationJson = {startDate: start, endDate: end}
          reservationArray.push(reservationJson)
        })
        const newCar = new RentalCar(airport, to, from, type, uid, year, make, model, reservationArray)

        if (newCar.model != null) {
          Global.RentalCars.push(newCar)
        }
      });
      console.log(Global.RentalCars.length)
      this.props.updateResults()
    })
  }


  componentWillUnmount() {
    window.removeEventListener('mousedown', this.pageClick, false);
  }


    pageClick = e => {
      if(!ReactDOM.findDOMNode(this).contains(e.target)) {
        this.removeDatePicker()
        this.removeAirportPicker()
        this.removeCarPicker()
        if (this.state.to == null) {
          this.setState({
            dateFieldText: 'anytime'
          })
        }
      }
    }


  handleDayClick = day => {
    const range = DateUtils.addDayToRange(day, this.state);
    this.setState(range, function() {
      if (this.state.to != null) {
        setTimeout(this.removeDatePicker.bind(this), 800)
        this.setState({
          dateFieldText: dateFormat(this.state.from, "mm/dd") + "  –  " + dateFormat(this.state.to, "mm/dd")
        })
      }
      else {
        this.setState({
          dateFieldText: dateFormat(day, "mm/dd") + "  –       Dropoff"
        })
      }
    })
  };


  handleResetClick = e => {
    e.preventDefault();
    this.setState({
      from: null,
      to: null,
    });
  }


  render() {
    const { from, to} = this.state;

    return (
      <div className='flexVertical'>
        <div className='flexRow' style={{'marginLeft': 30, 'marginRight': 30}}>
          <div className='smallSearchInputContainer' style={{'borderTopLeftRadius': 5, 'borderBottomLeftRadius': 5 }}>
            <text className='searchText'> where? </text>
            <input className='smallSearchInput' onChange={this.onAirportTextChange} type='text' placeholder='any airport' onClick={this.showAirportPicker} value={this.state.airportInputText}/>
          </div>

          <div className='smallSearchInputContainer' style={{'borderLeft': 0}}>
            <text className='searchText'> When? </text>
            <input className='smallSearchInput' type='text' placeholder='anytime' onClick={this.showDatePicker} value={this.state.dateFieldText} readOnly/>
          </div>
          <div className='smallSearchInputContainer' style={{'borderLeft': 0, 'borderRight': 0}}>
            <text className='searchText'> What type? </text>
            <input className='smallSearchInput' onChange={this.onCarTextChange} type='text' placeholder='check and see' onClick={this.showCarPicker} value={this.state.carInputText} readOnly/>
          </div>
          <div className='smallSearchInputContainer' onClick={this.searchButtonClicked} style={{'borderLeft': 0, 'borderTopRightRadius': 5, 'borderBottomRightRadius': 5 , 'width': 100}}>
            <button className='smallSearchButton'> Search </button>
          </div>

        </div>

          {this.state.dateVisible && <div className='searchCalendarContainer'>
            <DayPicker
            numberOfMonths={2}
            selectedDays={[from, { from, to }]}
            onDayClick={this.handleDayClick}
            fixedWeeks
            />
            </div>
          }
          {this.state.airportPickerVisible && <div className='searchAirportPickerContainer'>
            <PlaceDropdown textInput={this.state.airportInputText} changePlacePickerText={this.changePlacePickerText}/>
          </div>}
          {this.state.carPickerVisible && <div className='carPickerContainer'>
            <CarTypeDropdown changeCarPickerText={this.changeCarPickerText}/>
            </div>}

        </div>
    );
  }

  searchButtonClicked() {
    console.log('clicked...')
    if (this.state.airportInputText == "airport") {
      return
    }

    var searchLink = "/search?"
    if (this.state.airportInputText != "airport") {
      searchLink += "&airport=" + this.state.airportInputText
    }
    if (this.state.to != null) {
      searchLink +=  "&to=" + dateFormat(this.state.to, "mm/dd/yyyy")
    }
    if (this.state.from != null) {
      searchLink +=  "&from=" + dateFormat(this.state.from, "mm/dd/yyyy")
    }
    if (this.state.carInputText != "car type") {
      searchLink +=  "&model=" + this.state.carInputText
    }

    window.history.pushState(null, 'Ander Search', searchLink)

    Global.RentalCars = []
    console.log('pinging firebase')
    console.log(Global.RentalCars.length)
    firebase.database().ref("rentals/" + this.state.airportInputText ).on('value', (snap) => {
      console.log(snap.val())
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

        const reservationArray = []
        child.child('reservations').forEach((reservation) => {
          const start = new Date( reservation.val().start)
          const end = new Date(reservation.val().end)
          const reservationJson = {startDate: start, endDate: end}
          reservationArray.push(reservationJson)
        })
        const newCar = new RentalCar(airport, to, from, type, uid, year, make, model, reservationArray)

        if (newCar.model != null) {
          Global.RentalCars.push(newCar)
        }
      });
      console.log(Global.RentalCars.length)
      this.props.updateResults()
    })
  }

  changeCarPickerText(text) {
    this.setState({
      carInputText: text
    })
    setTimeout(this.removeCarPicker, 100)
  }

  changePlacePickerText(text) {
    this.setState({
      airportInputText: text
    })
    setTimeout(this.removeAirportPicker, 100)
  }

  onAirportTextChange(evt) {
    this.setState({airportInputText: evt.target.value})
  }

  onCarTextChange(evt) {
    this.setState({carInputText: evt.target.value})
  }



  showDatePicker() {
    if (this.state.from == null || this.state.to == null) {
      this.setState({
        dateFieldText:'Rent  –  Dropoff'
      })
    }
    this.setState({
      dateVisible: true,
      airportPickerVisible: false,
      carPickerVisible: false,
    })
  }

  removeDatePicker() {
    this.setState({
      dateVisible: false
    })
  }

  showAirportPicker() {
    if (this.state.airportInputText == "any airport") {
      this.setState({
        airportInputText: ""
      })
    }
    this.setState({
      airportPickerVisible: true,
      dateVisible: false,
      carPickerVisible: false
    })
  }
  removeAirportPicker() {
    this.setState({
      airportPickerVisible: false
    })
  }

  showCarPicker() {
    this.setState({
      carPickerVisible: true,
      dateVisible: false,
      airportPickerVisible: false
    })
  }

  removeCarPicker() {
    this.setState({
      carPickerVisible: false
    })
  }

}

export default SearchBar;
