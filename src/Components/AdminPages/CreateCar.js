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

      typeInputText: "car-type",
      typePickerVisible: false,

      year: "",
      make: "",
      model: "",

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

    this.modelChanged = this.modelChanged.bind(this)
    this.yearChanged = this.yearChanged.bind(this)
    this.makeChanged = this.makeChanged.bind(this)
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
      if(e.target.id == 'modalBackground') {
        this.setState({
          typePickerVisible: false,
          datePickerVisible: false,
          airportPickerVisible: false,
        })
      }
    }


  render() {
    const { from, to} = this.state;

    return (
        <div className='flexVertical' id='modalBackground' style={{'alignItems': 'center', 'marignTop': 50}}>
          <input className='createCarInput' type='text' onClick={this.showAirportPicker} onChange={this.onAirportChange} value={this.state.airportInputText} style={{'textAlign':'left', 'fontSize': 17}} />
          {this.state.airportPickerVisible && <div className='searchAirportPickerContainer'>
            <PlaceDropdown textInput={this.state.airportInputText} changePlacePickerText={this.changeAirportPickerText}/>
          </div>}

          <button className='createCarInput' style={{'textAlign':'left', 'fontSize': 17}} onClick={this.showDatePicker}>
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

          <input className='createCarInput' type='text'  onClick={this.showModelPicker} onChange={this.onModelChange} value={this.state.typeInputText} style={{'textAlign':'left', 'fontSize': 17}} readOnly/>
          {this.state.typePickerVisible && <div className='leaseModelPickerContainer'>
            <CarTypeDropdown changeCarPickerText={this.changeModelPickerText}/>
          </div>}

          <div className={'flexRow'}>
            <input className='createCarModelInput' onChange={this.yearChanged} type='text' placeholder='year' style={{'textAlign':'left', 'fontSize': 17}} />
            <input className='createCarModelInput' onChange={this.makeChanged} type='text' placeholder='make' style={{'textAlign':'left', 'fontSize': 17}} />
            <input className='createCarModelInput' onChange={this.modelChanged} type='text' placeholder='model' style={{'textAlign':'left', 'fontSize': 17}} />
          </div>

          <button className='emailSubmitButton' style={{'marginTop': 30}} onClick={this.submitButtonPressed}>
            <text className='textBig'> submit </text>
          </button>

          <text style={{'color': 'red', 'marginTop': 15}}> {this.state.errorLabel} </text>
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
      typePickerVisible: false
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
      typePickerVisible: false,
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
    this.setState({typeInputText: evt.target.value})
  }

  changeModelPickerText(text) {
    this.setState({
      typeInputText: text,
      typePickerVisible: false
    })
  }

  showModelPicker() {
    this.setState({
      typePickerVisible: true,
      airportPickerVisible: false,
      datePickerVisible: false,
    })
  }

  removeModelPicker() {
    this.setState({
      typePickerVisible: false
    })
  }

  //Model textfields

  yearChanged(evt) {
    this.setState({
      year: evt.target.value
    })
  }
  makeChanged(evt) {
    this.setState({
      make: evt.target.value
    })
  }
  modelChanged(evt) {
    this.setState({
      model: evt.target.value
    })
  }

  //Submit buttom

  submitButtonPressed() {
    console.log(this.state.model)
    console.log(this.state.airportInputText)
    if (this.state.airportInputText == "airport" || this.state.typeInputText == "car-type" ||
    this.state.from == null || this.state.to == null|| this.state.year == "" ||
    this.state.model == "" || this.state.make == "") {
      this.setState({ errorLabel: "please fill out all the above fields"})
      return
    }
    else {

      firebase.database().ref('rentals/'+ this.state.airportInputText).push().set({
        airport: this.state.airportInputText,
        type: this.state.typeInputText,
        to: dateFormat(this.state.to, "mm/dd/yyyy"),
        from: dateFormat(this.state.from, "mm/dd/yyyy"),
        year: this.state.year,
        make: this.state.make,
        model: this.state.model,
      });
    }
  }


}

export default LeaseModal;
