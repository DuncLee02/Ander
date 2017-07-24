import React, { Component } from 'react';

class ListItem extends Component {

  constructor(props) {
    super(props)
    this.state = {
      color: 'white'
    }
  }

  render() {
    // console.log(this.props.isSelected)
    return (
      <text className='airportPickerText'
      style={{'backgroundColor': this.props.isSelected? 'blue': this.state.color }}
      > {this.props.placeName} </text>
    );
  }

}

export default ListItem;
