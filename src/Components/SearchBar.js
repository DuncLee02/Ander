import React, { Component } from 'react';
import firebase from 'firebase'
import firebaseAuth from 'firebase/database'
import moment from 'moment';
import Modal from 'react-modal';
import ReactDOM from 'react-dom'

import PlaceDropdown from './SearchPlacePicker.js'
import CarTypeDropdown from './SearchCarTypePicker.js'


import 'react-day-picker/lib/style.css';
import DayPicker, { DateUtils } from 'react-day-picker';

let dateFormat = require('dateformat');


const initialState = {
  from: null,
  to: null,
  enteredTo: null, // Keep track of the last day for mouseEnter.
};



class SearchBar extends Component {

  constructor(props) {
    super(props)
    this.state = {
      dateFieldText:'anytime',
      dateVisible: false,
      airportPickerVisible: false,
      airportInputText: 'any airport',
      carPickerVisible: false,
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
  }


  componentDidMount() {
    console.log('unmounting...')
    window.addEventListener('mousedown', this.pageClick, false);
    this.setState({
      from: null,
      to: null,
    })
  }


  componentWillUnmount() {
    window.removeEventListener('mousedown', this.pageClick, false);
  }


    pageClick = e => {
      var SearchBar = document.getElementById('SearchBar');
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
          dateFieldText: dateFormat(this.state.from, "mm/dd/yyyy") + "  –  " + dateFormat(this.state.to, "mm/dd/yyyy")
        })
      }
      else {
        this.setState({
          dateFieldText: dateFormat(day, "mm/dd/yyyy") + "  –       Dropoff"
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

    const value = this.state.selectedDay
      ? this.state.selectedDay.format('DD/MM/YYYY')
      : '';

    return (
      <div className='flexVertical'>
        <div className='flexRow' style={{'marginLeft': 30, 'marginRight': 30}}>
          <div className='searchInputContainer' style={{'borderTopLeftRadius': 5, 'borderBottomLeftRadius': 5 }}>
            <text className='searchText'> where? </text>
            <input className='searchInput' onChange={this.onAirportTextChange} type='text' placeholder='any airport' onClick={this.showAirportPicker} value={this.state.airportInputText}/>
          </div>

          <div className='searchInputContainer' style={{'borderLeft': 0}}>
            <text className='searchText'> When? </text>
            <input className='searchInput' type='text' placeholder='anytime' onClick={this.showDatePicker} value={this.state.dateFieldText} readOnly/>
          </div>
          <div className='searchInputContainer' style={{'borderLeft': 0, 'borderRight': 0}}>
            <text className='searchText'> What type? </text>
            <input className='searchInput' onChange={this.onCarTextChange} type='text' placeholder='check and see' onClick={this.showCarPicker} value={this.state.carInputText}/>
          </div>
          <div className='searchInputContainer' style={{'borderLeft': 0, 'borderTopRightRadius': 5, 'borderBottomRightRadius': 5 , 'width': 100}}>
            <button className='searchButton'> Search </button>
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
          {this.state.airportPickerVisible && <PlaceDropdown changePlacePickerText={this.changePlacePickerText}/>}
          {this.state.carPickerVisible && <CarTypeDropdown changeCarPickerText={this.changeCarPickerText}/>}
        </div>
    );
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
        dateFieldText:'Rent             –           Dropoff'
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
