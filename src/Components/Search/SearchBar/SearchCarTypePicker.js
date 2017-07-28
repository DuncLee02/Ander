import React, { Component } from 'react';

class carPicker extends Component {

  // carTypes = ['economy', 'compact', 'midsize', 'standard', 'fullsize', 'premium', 'luxury', 'minivan', 'sports car']

  carTypes = [{name: 'economy', image: require('../../../Assets/CarTypes/economy.png')},
  {name: 'compact', image: require('../../../Assets/CarTypes/compact.png')},
  {name: 'midsize', image: require('../../../Assets/CarTypes/compact.png')},
  {name: 'standard', image: require('../../../Assets/CarTypes/standard.png')},
  {name: 'premium', image: require('../../../Assets/CarTypes/premium.png')},
  {name: 'luxury', image: require('../../../Assets/CarTypes/luxury.png')},
  {name: 'minivan', image: require('../../../Assets/CarTypes/minivan.png')},
  {name: 'suv', image: require('../../../Assets/CarTypes/suv.png')},
  {name: 'sportsCar', image: require('../../../Assets/CarTypes/sportscar.png')}]

  constructor(props) {
    super(props)
    this.state = {
      selected: 1,
    }
    this.pickerClicked = this.pickerClicked.bind(this)
  }

  render() {
    return (
      <div className='flexRow' style={{'height': 30*this.carTypes.length, 'flexWrap': 'wrap'}}>
        {this.carTypes.map((car, index) => {
          return(
            <div className='modelPickerContainer' key={index} onClick={this.pickerClicked.bind(null, index, car.name)}>
              <text className='airportPickerText'> {car.name} </text>
              <img className='modelPickerImage' src={car.image} alt={'Menu'} />
            </div>
          )
        })}
      </div>
    );
  }

  pickerClicked(index, name) {
    this.setState({
      selected: index,
    })
    this.props.changeCarPickerText(name)

  }


}

export default carPicker;
