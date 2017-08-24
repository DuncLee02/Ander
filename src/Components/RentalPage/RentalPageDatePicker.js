import React from 'react';
// import PropTypes from 'prop-types';
// import momentPropTypes from 'react-moment-proptypes';
// import { forbidExtraProps } from 'airbnb-prop-types';
// import omit from 'lodash/omit';

import 'react-dates/lib/css/_datepicker.css';
import {DayPickerRangeController } from 'react-dates'
import {START_DATE, END_DATE} from 'react-dates/constants'

class DayPickerRangeControllerWrapper extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      focusedInput: props.autoFocusEndDate ? END_DATE : START_DATE,
      startDate: this.props.startDate,
      endDate: this.props.endDate
    };
    this.isDayBlocked = this.isDayBlocked.bind(this)
    this.onDatesChange = this.onDatesChange.bind(this);
    this.onFocusChange = this.onFocusChange.bind(this);
  }

  onDatesChange({ startDate, endDate }) {
    this.setState({ startDate, endDate });
    console.log('passing...')
    const isViable = this.isRangeAllowed(startDate, endDate)
    this.props.dateChanged(startDate, endDate, isViable)
  }

  isRangeAllowed(s, e) {
    console.log('checking if permitable: ')
    if (s == null || e == null) {
      console.log('null')
      return false
    }

    for (var i = 0; i < this.props.disabledDays.length; i++) {
      if ( e >= this.props.disabledDays[i].startDate && s <= this.props.disabledDays[i].endDate){
        console.log('not allowed')
        return false
      }
    }
    return true
  }

  onFocusChange(focusedInput) {
    this.setState({
      focusedInput: !focusedInput ? START_DATE : focusedInput,
    });
  }

  isDayBlocked(d) {
    for (var i = 0; i < this.props.disabledDays.length; i++) {
      if (d.isBetween(this.props.disabledDays[i].startDate, this.props.disabledDays[i].endDate, 'days', '[]')) {
        return true
      }
    }
  }

  render() {
    const { showInputs } = this.props;
    const { focusedInput, startDate, endDate } = this.state;

    console.log(this.props.startDate + "   " + this.props.endDate)

    return (
      <div>
        <DayPickerRangeController
          isDayBlocked={this.isDayBlocked}
          onDatesChange={this.onDatesChange}
          onFocusChange={this.onFocusChange}
          focusedInput={focusedInput}
          startDate={startDate}
          endDate={endDate}
          numberOfMonths={2}
        />
      </div>
    );
  }
}


export default DayPickerRangeControllerWrapper;
