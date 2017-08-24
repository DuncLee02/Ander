
import React, { Component } from 'react';
import Global from '../../../Globals.js'
import RentalCar from './ResultCar.js'
import './Result.css'

class Results extends Component {

  constructor(props) {
    super(props)
    this.state = {
      pageRendered: 'Search',
    }
  }

  render() {
    console.log('rerendering')
    return (
      <div className="flexRow" style={{'flexWrap': 'wrap'}}>
        {Global.RentalCars.map((car, index) => {
          return (
            <RentalCar key={index} thisCar={car} />
          )
        })}
      </div>
    );
  }

}

export default Results;
