
import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import firebase from '../../../firebase.js'
import Global from '../../../Globals.js'
import moment from 'moment';

import DatePicker from './RentalPageDatePicker.js'
let dateFormat = require('dateformat');

class RentalPanel extends Component {

  constructor(props) {
    super(props)
    this.state = {
      pageRendered: 'Search',

      price: 50,
      daysBetween: null,

      dateInputText: 'from    -     to',
      datePickerVisible: false,

      startDate: null,
      endDate: null,

      errorMessage: ''
    }
    this.showDatePicker = this.showDatePicker.bind(this)
    this.removeDatePicker = this.removeDatePicker.bind(this)
    this.reserveCar = this.reserveCar.bind(this)
    this.dateChanged = this.dateChanged.bind(this)
  }

  render() {
    const thisCar = this.props.thisCar
    console.log(thisCar)
    return (
      <div className='rentalPanelContainer'>
        <div className='rentalPanelTitleBox'>
          <text> ${this.state.price} per day </text>
        </div>

        <button className='rentalPanelDatePickerInput' style={{'textAlign':'left', 'fontSize': 17}} onClick={this.showDatePicker}>
          <text> {this.state.dateInputText} </text>
        </button>

        {this.state.datePickerVisible && <div className='rentalPanelCalendar'>
          <DatePicker startDate={this.state.startDate} endDate={this.state.endDate} dateChanged={this.dateChanged} disabledDays={thisCar.reservations}/>
        </div>
        }

        {this.state.daysBetween &&
          <div className='rentalPanelPriceBox'>
            <text> Total: </text>
            <text> ${this.state.price * this.state.daysBetween} </text>
          </div>
        }

        <button className='rentalPanelReserveButton' onClick={this.reserveCar}>
          <text> reserve </text>
        </button>

        <text className={'rentalPanelErrorMessage'}> {this.state.errorMessage} </text>

      </div>
    );
  }

  // <DayPicker
  // numberOfMonths={2}
  // selectedDays={[from, { from, to }]}
  // disabledDays={thisCar.reservationArray}
  // onDayClick={this.handleDayClick}
  // fixedWeeks
  // />

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
      if(!ReactDOM.findDOMNode(this).contains(e.target)) {
        this.removeDatePicker()
      }
    }

  showDatePicker() {
    this.setState({
      datePickerVisible: true,
    })
  }

  removeDatePicker() {
    if (this.state.startDate == null && this.state.endDate == null) {
      this.setState({
        dateInputText: "Rent – Dropoff"
      })
    }
    this.setState({
      datePickerVisible: false
    })
  }

  dateChanged(start, end, isViable) {
    console.log(start)
    this.setState({
      startDate: start,
      endDate: end,
      isViable: isViable
    })
    if (end != null) {
          setTimeout(this.removeDatePicker.bind(this), 800)
          this.setState({
            dateInputText: dateFormat(start, "mm/dd/yyyy") + "  –  " + dateFormat(end, "mm/dd/yyyy"),
            daysBetween: this.daysBetween(start, end)
          })
        }
        else {
          this.setState({
            dateInputText: dateFormat(start, "mm/dd/yyyy") + "  –       Dropoff"
          })
        }
  }

  daysBetween(startDate, endDate) {
    const duration = moment.duration(endDate.diff(startDate));
    const days = duration.asDays();
    return days
    console.log("days: " + days)
  }

  handleResetClick = e => {
    e.preventDefault();
    this.setState({
      from: null,
      to: null,
    });
  }

  reserveCar() {

    console.log(this.state.startDate)
    console.log(this.state.endDate)

    if (Global.User == null) {
      this.setState({
        errorMessage: 'user must be signed in'
      })
      return
    }

    if (this.state.startDate == null || this.state.endDate == null ) {
      this.setState({
        errorMessage: 'user must pick dates of reservation'
      })
      return
    }

    if (!this.state.isViable) {
      this.setState({
        errorMessage: 'inviable dates'
      })
    }

    this.setState({
      errorMessage: '',
    })

    const thisCar = this.props.thisCar
    console.log(Global.User)
    firebase.database().ref('userReservations/' + Global.User.uid + '/' + thisCar.uid).set({
      airport: thisCar.airport,
      type: thisCar.type,
      to: thisCar.to,
      from: thisCar.from,
      year: thisCar.year,
      make: thisCar.make,
      model: thisCar.model,
      reservationStarts: this.state.startDate.format('MM/DD/YYYY'),
      reservationEnds: this.state.endDate.format('MM/DD/YYYY'),
    });

    firebase.database().ref('rentals/'+ thisCar.airport + '/' + thisCar.uid + '/' + 'reservations').push({
      start: this.state.startDate.format('MM/DD/YYYY'),
      end: this.state.endDate.format('MM/DD/YYYY'),
    })
  }



}

export default RentalPanel;
