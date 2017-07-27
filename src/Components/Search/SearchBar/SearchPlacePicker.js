import React, { Component } from 'react';

class PlaceDropdown extends Component {

  allPlaces = ['Atlanta, Georgia (ATL)', 'Los Angeles, California (LAX)', 'Chicago, Illinois (ORD)', 'Dallas, Texas (DFW)', 'New York, New York (JFK)', 'Denver, Colorado (DEN)', 'San Francisco, California (SFO)', 'Charlotte, North Carolina (CLT)', 'Las Vegas, Nevada (LAS)', 'Pheonix, Arizona (PHX)']
  querry = []

  constructor(props) {
    super(props)
    this.state = {
      selected: 1,
    }
    this.pickerClicked = this.pickerClicked.bind(this)
  }

  render() {

    if (this.props.textInput.length == 0) {
      this.querry = []
    }
    else {
      var count = 0
      let inputInCaps = this.props.textInput.toUpperCase()
      this.querry = this.allPlaces.filter(function(place){
        if (count > 5) {
          return false
        }
        else {
          count += 1
          return place.toUpperCase().indexOf(inputInCaps) > -1
        }
    }.bind(this))
  }


    return (
      <div className='airportPickerContainer' style={{'height': 30*this.querry.length}}>
        {this.querry.map((name, index) => {
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
