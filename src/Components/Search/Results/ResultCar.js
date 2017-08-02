import React, { Component } from 'react';

class RentalCar extends Component {


  constructor(props) {
    super(props)
    this.state = {
    }
    this.openNewTab = this.openNewTab.bind(this)
  }

  render() {
    const thisCar = this.props.thisCar
    return (
      <div className='resultCarContainer' onClick={this.openNewTab}>
        <img className='resultCarImage' src={require('../../../Assets/CarTypes/standard.png')} alt={'car'} />
        <text> {thisCar.year + " " + thisCar.make + " " + thisCar.model} </text>
      </div>
    );
  }

  openNewTab() {
    console.log(this.props.thisCar.airport)
    // window.open("ander/rentals/" + this.props.thisCar.airport + "/" + this.props.thisCar.uid, '_blank');
    window.open("rentals/" + this.props.thisCar.airport + "/" + this.props.thisCar.uid, '_blank');
  }

}

export default RentalCar;
