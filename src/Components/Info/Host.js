import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Host extends Component {

  constructor(props) {
    super(props)
    this.state = {
      selectedSection: 'ander',
    }
  }

  render() {

    return (
      <div className='anderMainContainer' style={{'textAlign': 'left', 'marginLeft': 80, 'marginRight': 80}}>
        <text className='textBigBold'> Benefit by becoming a parking host today </text>
        <text className='textBig'> List your parking space or lot as one of our designated parking spaces for car-owners. You help streamline the car handoff process </text>
        <br/>

        <div className='flexRow' style={{'justifyContent': 'space-around', 'textAlign': 'left', 'margin': 20, }}>
          <div className='flexRow' style={{'justifyContent': 'center', 'width': '33%'}}>
            <img alt='' className='numbers' src={require('../../Assets/HostOne.png')}/>
            <div className='flexVertical' style={{'maxWidth': 300}}>
              <img alt='' className='reasonsImage' src={require('../../Assets/HostList.png')}/>
              <text className='textBigBold'> Book </text>
              <text> Check out listings and choose a rental that fits your needs </text>
            </div>
          </div>

          <div className='flexRow' style={{'justifyContent': 'center', 'width': '33%'}}>
            <img alt='' className='numbers' src={require('../../Assets/HostTwo.png')}/>
            <div className='flexVertical' style={{'maxWidth': 300}}>
              <img alt='' className='reasonsImage' src={require('../../Assets/HostSetup.png')}/>
              <text className='textBigBold'> Pickup </text>
              <text> Arrive at our designated parking space hosts and pickup the rental </text>
            </div>
          </div>

          <div className='flexRow' style={{'justifyContent': 'center', 'width': '33%'}}>
            <img alt='' className='numbers' src={require('../../Assets/HostThree.png')}/>
            <div className='flexVertical' style={{'maxWidth': 300}}>
              <img alt='' className='reasonsImage' src={require('../../Assets/HostMoney.png')}/>
              <text className='textBigBold'> Return </text>
              <text> Drive safe and return the vehicle in the condition requested by the owner </text>
            </div>
          </div>
        </div>

        <div className='flexRow' style={{'backgroundColor': '#f2f2f2'}}>
          <div className='flexVertical' style={{'width': '50%', 'margin': 40, 'justifyContent': 'flex-start'}}>
            <text className='textBigBold'> Get started today </text>
            <br/>
            <text className='textBig'> Follow these steps to get your parking space listed and start earning extra income </text>
          </div>
          <div className='flexVertical' style={{'width': '50%', 'margin': 40}}>

            <div className='flexRow'>
              <div className='flexVertical' style={{'maxWidth': 300 }}>
                <text className='textBigBold'> Sign-up </text>
                <text> Register your parking space and your profile so car owners and car renters can learn more about you </text>
              </div>
              <button className='learnMoreButton' style={{'marginTop':50, 'marginLeft': 30, 'backgroundColor': '#9dc3e6'}}>
                <text className='learnMoreText'>  Register </text>
              </button>
            </div>

            <div className='dividerLineHorizontle' style={{'backgroundColor': '#9dc3e6', 'marginTop': 20}}/>

            <div className='flexRow'>
              <div className='flexVertical' style={{'maxWidth': 300 }}>
                <text className='textBigBold'> Car procedures </text>
                <text> Clearly outline and communicate your car dropoff and pickup procedures so your customers can have a seamless process </text>
              </div>
              <button className='learnMoreButton' style={{'marginTop':50, 'marginLeft': 30, 'backgroundColor': '#9dc3e6'}}>
                <text className='learnMoreText'>  Setup Now </text>
              </button>
            </div>

            <div className='dividerLineHorizontle' style={{'backgroundColor': '#9dc3e6', 'marginTop': 20}}/>

            <div className='flexRow'>
              <div className='flexVertical' style={{'maxWidth': 300 }}>
                <text className='textBigBold'> List </text>
                <text> Finish up the administrative processand you’re all set to list your parking space and start earning money </text>
              </div>
              <button className='learnMoreButton' style={{'marginTop':50, 'marginLeft': 30, 'backgroundColor': '#9dc3e6'}}>
                <text className='learnMoreText'>  List </text>
              </button>
            </div>

          </div>
        </div>

        <div className='flexVertical' style={{'margin': 30}}>
          <text className='textBigBold'> Legal and insurance </text>
          <br/>
          <text className='textBig'> We will walk you through your legal concerns </text>
          <br/>

          <div className='flexRow'>

            <div className='flexRow' style={{'width': '50%'}}>
              <img alt='' className='reasonsImage' src={require('../../Assets/Rental.png')}/>
              <div className='flexVertical' style={{'marginLeft': 20}}>
                <text className='textBigBold' style={{'marginTop': 30}}> Rental agency licenses </text>
                <text style={{'minHeight': 110}}> We can help you throughout the application process to make it as easy as possible – so you can start earning extra income quickly </text>
                <button className='learnMoreButton' style={{'backgroundColor': '#9dc3e6'}}>
                  <text className='learnMoreText'>  Learn More </text>
                </button>
              </div>
            </div>

            <div className='flexRow' style={{'width': '50%'}}>
              <img alt='' className='reasonsImage' src={require('../../Assets/Gear.png')}/>
              <div className='flexVertical' style={{'marginLeft': 20}}>
                <text className='textBigBold' style={{'marginTop': 30}}> Liability release </text>
                <text style={{'minHeight': 110}}> We take full responsibility for any mishaps with cars listed and rented out through our service. List your space knowing you are safeguarded from liability </text>
                <button className='learnMoreButton' style={{'backgroundColor': '#9dc3e6'}}>
                  <text className='learnMoreText'>  List </text>
                </button>
              </div>
            </div>

          </div>
        </div>


      </div>

    );
  }

}

export default Host;
