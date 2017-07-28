
import React, { Component } from 'react';
import DayPicker, { DateUtils } from 'react-day-picker';

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

    }
    this.showDatePicker = this.showDatePicker.bind(this)
    this.removeDatePicker = this.removeDatePicker.bind(this)
  }

  render() {
    const { from, to} = this.state;
    return (
      <div className='rentalPanelContainer'>
        <div className='rentalPanelTitleBox'>
          <text> ${this.state.price} per night </text>
        </div>

        <button className='rentalPanelDatePickerInput' style={{'textAlign':'left', 'fontSize': 17}} onClick={this.showDatePicker}>
          <text> {this.state.dateInputText} </text>
        </button>
        {this.state.datePickerVisible && <div className='rentalPanelCalendar'>
          <DayPicker
          numberOfMonths={2}
          selectedDays={[from, { from, to }]}
          onDayClick={this.handleDayClick}
          fixedWeeks
          />
        </div>
        }

        {this.state.daysBetween &&
          <div className='rentalPanelPriceBox'>
            <text> Total: </text>
            <text> {this.state.price * this.state.daysBetween} </text>
          </div>
        }


      </div>
    );
  }

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
          dateInputText: dateFormat(this.state.from, "mm/dd/yyyy") + "  –  " + dateFormat(this.state.to, "mm/dd/yyyy"),
          daysBetween: this.daysBetween(this.state.from, this.state.to)
        })
      }
      else {
        this.setState({
          dateInputText: dateFormat(day, "mm/dd/yyyy") + "  –       Dropoff"
        })
      }
    })
  }

  treatAsUTC(date) {
    var result = new Date(date);
    result.setMinutes(result.getMinutes() - result.getTimezoneOffset());
    return result;
  }

  daysBetween(startDate, endDate) {
    var millisecondsPerDay = 24 * 60 * 60 * 1000;
    return (this.treatAsUTC(endDate) - this.treatAsUTC(startDate)) / millisecondsPerDay;
  }


  handleResetClick = e => {
    e.preventDefault();
    this.setState({
      from: null,
      to: null,
    });
  }



}

export default RentalPanel;
