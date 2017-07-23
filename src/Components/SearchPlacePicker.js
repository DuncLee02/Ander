import React, { Component } from 'react';
import ListItem from './SearchPlacePickerItem.js'

class PlaceDropdown extends Component {

  constructor(props) {
    super(props)
    this.state = {
      data: ['one', 'two', 'three'],
      selected: 1,
    }
    this.pickerClicked = this.pickerClicked.bind(this)
  }

  render() {

    return (
      <div className='airportPickerContainer' style={{'height': 30*this.state.data.length}}>
        {this.state.data.map((name, index) => {
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
    this.props.changePlacePickerText(name)

  }


}

//  <ListItem isSelected={index===this.props.selected} placeName={name} key={index} onClick={this.pickerClicked}/>

export default PlaceDropdown;
