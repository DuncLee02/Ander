import React, { Component } from 'react';

class Trust extends Component {

  constructor(props) {
    super(props)
    this.state = {
      selectedSection: 'ander',
    }
  }

  render() {
    var languages = ['ander', 'Park', 'Rent', 'Host']

    return (
      <div className ='anderMainContainer' >
        <div className = 'flexVertical' style={{'textAlign': 'left', 'marginLeft': 80, 'marginRight': 80, 'marginBottom': 50}}>
          <text className='textBigBold'> Trust, Safety, & Insurance  </text>
          <text className='textBig'> We have comprehensive policies protecting our users. Learn more about these policies below </text>
        </div>

        <div className = 'flexRow' style={{'textAlign': 'left', 'marginLeft': 100, 'marginRight': 100}}>
          <div className = 'flexVertical' style={{ 'width': '33%', 'justifyContent': 'flex-start'}}>
            <text className='textBigBold'> Car owner?  </text>
            <text style={{'maxWidth': 250}}> Learn more about your possible coverage policies below </text>
          </div>
          <div className = 'flexVertical' style={{'width': '33%', 'justifyContent': 'flex-start'}}>
            <text className='textBigBold'> Car renter?  </text>
            <text style={{'maxWidth': 250}}> Find out how our insurance options can protect you </text>
          </div>
          <div className = 'flexVertical' style={{'width': '33%', 'justifyContent': 'flex-start'}}>
            <text className='textBigBold'> Parking host?  </text>
            <text style={{'maxWidth': 250}}> Address your legal and license concerns by checking below </text>
          </div>
        </div>

        <text className='textBigBold' style={{'textAlign': 'center', 'marginTop': 50}}> Coming soon! </text>


      </div>
    );
  }

}

export default Trust;
