import React, { Component } from 'react';
import firebase from '../../firebase.js'
import ReactDOM from 'react-dom'
import ReactLoading from 'react-loading'

import PlaceDropdown from '../Search/SearchBar/SearchPlacePicker.js'
import CarTypeDropdown from '../Search/SearchBar/SearchCarTypePicker.js'
import DayPicker, { DateUtils } from 'react-day-picker';

import userCar from '../../Objects/UserCar.js'

let dateFormat = require('dateformat');

class LeaseModal extends Component {

  constructor(props) {
    super(props)

    this.state = {
      airportInputText: "airport",
      airportPickerVisible: false,

      dateInputText: "Rent – Dropoff",
      datePickerVisible: false,

      modelInputText: "car-type",
      modelPickerVisible: false,

      errorLabel: "",
      loading: false
    }

    this.onAirportChange = this.onAirportChange.bind(this)
    this.showAirportPicker = this.showAirportPicker.bind(this)
    this.removeAirportPicker = this.removeAirportPicker.bind(this)
    this.changeAirportPickerText = this.changeAirportPickerText.bind(this)

    this.onModelChange = this.onModelChange.bind(this)
    this.showModelPicker = this.showModelPicker.bind(this)
    this.changeModelPickerText = this.changeModelPickerText.bind(this)

    this.showDatePicker = this.showDatePicker.bind(this)
    this.removeDatePicker = this.removeDatePicker.bind(this)

    this.submitButtonPressed = this.submitButtonPressed.bind(this)
  }

  // componentDidMount() {
  //   console.log('unmounting...')
  //   window.addEventListener('mousedown', this.pageClick, false);
  //   this.setState({
  //     from: null,
  //     to: null,
  //   })
  // }
  //
  //
  // componentWillUnmount() {
  //   window.removeEventListener('mousedown', this.pageClick, false);
  // }
  //
  //
  //   pageClick = e => {
  //     if(e.target.id = 'modalBackground') {
  //       this.removeDatePicker()
  //       this.removeAirportPicker()
  //       this.removeModelPicker()
  //     }
  //   }

  render() {
    const { from, to} = this.state;

    return (
        <div className='flexVertical' id='modalBackground' style={{'alignItems': 'center', 'marignTop': 50}}>
          <input className='signInInput' type='text' onClick={this.showAirportPicker} onChange={this.onAirportChange} value={this.state.airportInputText} style={{'textAlign':'center', 'fontSize': 17}} />
          {this.state.airportPickerVisible && <PlaceDropdown textInput={this.state.airportInputText} changePlacePickerText={this.changeAirportPickerText}/>}

          <button className='signInInput' style={{'textAlign':'center', 'fontSize': 17}} onClick={this.showDatePicker}>
            <text> {this.state.dateInputText} </text>

          </button>
          {this.state.datePickerVisible && <div className='leaseCalendar'>
            <DayPicker
            numberOfMonths={2}
            selectedDays={[from, { from, to }]}
            onDayClick={this.handleDayClick}
            fixedWeeks
            />
          </div>
          }

          <input className='signInInput' type='text'  onClick={this.showModelPicker} onChange={this.onModelChange} value={this.state.modelInputText} style={{'textAlign':'center', 'fontSize': 17}} />
          {this.state.modelPickerVisible && <div style={{'width': 500}}>
            <CarTypeDropdown changeCarPickerText={this.changeModelPickerText}/>
          </div>}

          <button className='emailSubmitButton' style={{'marginTop': 30}} onClick={this.submitButtonPressed}>
            <text className='textBig'> submit </text>
          </button>

          <text> {this.state.errorLabel} </text>
          {this.state.loading && <ReactLoading type='spokes' color='#224f78' />}
        </div>
    );
  }

  //Airport stuff

  showAirportPicker() {
    if (this.state.airportInputText == "airport") {
      this.setState({
        airportInputText: ""
      })
    }
    this.setState({
      airportPickerVisible: true,
      datePickerVisible: false,
      modelPickerVisible: false
    })
  }

  removeAirportPicker() {
    if (this.state.airportInputText == "") {
      this.setState({
        airportInputText: "airport"
      })
    }
    this.setState({
      airportPickerVisible: false
    })
  }

  changeAirportPickerText(text) {
    this.setState({
      airportInputText: text,
      airportPickerVisible: false,
    })
  }

  onAirportChange(evt) {
    this.setState({airportInputText: evt.target.value})
  }

  //Datepicker stuff

  showDatePicker() {
    this.setState({
      datePickerVisible: true,
      airportPickerVisible: false,
      modelPickerVisible: false,
    })
  }

  removeDatePicker() {
    if (this.state.to == null && this.state.from == null) {
      this.setState({
        dateInputText: "Rent – Dropoff"
      })
    }
    this.setState({
      datePickerVisible: false
    })
  }

  handleDayClick = day => {
    const range = DateUtils.addDayToRange(day, this.state);
    this.setState(range, function() {
      if (this.state.to != null) {
        setTimeout(this.removeDatePicker.bind(this), 800)
        this.setState({
          dateInputText: dateFormat(this.state.from, "mm/dd/yyyy") + "  –  " + dateFormat(this.state.to, "mm/dd/yyyy")
        })
      }
      else {
        this.setState({
          dateInputText: dateFormat(day, "mm/dd/yyyy") + "  –       Dropoff"
        })
      }
    })
  }


  handleResetClick = e => {
    e.preventDefault();
    this.setState({
      from: null,
      to: null,
    });
  }

  //ModelPicker stuff

  onModelChange(evt) {
    this.setState({modelInputText: evt.target.value})
  }

  changeModelPickerText(text) {
    this.setState({
      modelInputText: text,
      modelPickerVisible: false
    })
  }

  showModelPicker() {
    this.setState({
      modelPickerVisible: true,
      airportPickerVisible: false,
      datePickerVisible: false,
    })
  }

  removeModelPicker() {
    this.setState({
      modelPickerVisible: false
    })
  }


  submitButtonPressed() {
    if (this.state.airportInputText == "airport" || this.state.modelInputText == "car-type" || this.state.from == null || this.state.to == null) {
      this.setState({ errorLabel: "please fill out all the above fields"})
      return
    }
    else {
      // this.setState({
      //   loading: true
      // })
      firebase.database().ref('rentals/'+ this.state.airportInputText).set({
        model: this.state.modelInputText,
        dates: this.state.dateInputText
      });
      // setTimeout(this.submitCallback.bind(this), 800)
    }
  }
  

}

export default LeaseModal;
