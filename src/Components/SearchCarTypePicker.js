import React, { Component } from 'react';

class carPicker extends Component {

  carTypes = ['compact', 'SUV', 'crossover', 'minivan', 'van', 'limo']

  constructor(props) {
    super(props)
    this.state = {
      selected: 1,
    }
    this.pickerClicked = this.pickerClicked.bind(this)
  }

  render() {
    return (
      <div className='carPickerContainer' style={{'height': 30*this.carTypes.length}}>
        {this.carTypes.map((name, index) => {
          return(
            <text className='airportPickerText' key={index} onClick={this.pickerClicked.bind(null, index, name)}> {name} </text>
          )
        })}
      </div>
    );
  }

  pickerClicked(index, name) {
    console.log('setting')
    this.setState({
      selected: index,
    })
    this.props.changeCarPickerText(name)

  }


}

export default carPicker;
