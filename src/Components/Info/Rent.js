import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Rent extends Component {

  constructor(props) {
    super(props)
    this.state = {
      selectedSection: 'ander',
    }
  }

  render() {

    return (
      <div className = 'anderMainContainer' style={{'margin': 30}}>
        <div style={{'marginLeft': 50, 'marginRight': 50, 'textAlign': 'left'}}>
          <text className='textBigBold'> Browse our listings and find affordable car rentals near you </text>
          <br/>
          <text className='textBig'> Learn more about how it works below and gain access to rentals up to 30 percent cheaper than traditional rentals </text>
        </div>

        <div className='flexRow' style={{'justifyContent': 'space-around', 'textAlign': 'left', 'margin': 40, }}>
          <div className='flexRow' style={{'justifyContent': 'center', 'width': '33%'}}>
            <img alt='' className='numbers' src={require('../../Assets/LightBlueOne.png')}/>
            <div className='flexVertical' style={{'maxWidth': 300}}>
              <img alt='' className='reasonsImage' src={require('../../Assets/LightBlueCar.png')}/>
              <text className='textBigBold'> Book </text>
              <text> Check out listings and choose a rental that fits your needs </text>
            </div>
          </div>

          <div className='flexRow' style={{'justifyContent': 'center', 'width': '33%'}}>
            <img alt='' className='numbers' src={require('../../Assets/LightBlueTwo.png')}/>
            <div className='flexVertical' style={{'maxWidth': 300}}>
              <img alt='' className='reasonsImage' src={require('../../Assets/LightBlueLock.png')}/>
              <text className='textBigBold'> Pickup </text>
              <text> Arrive at our designated parking space hosts and pickup the rental </text>
            </div>
          </div>

          <div className='flexRow' style={{'justifyContent': 'center', 'width': '33%'}}>
            <img alt='' className='numbers' src={require('../../Assets/LightBlueThree.png')}/>
            <div className='flexVertical' style={{'maxWidth': 300}}>
              <img alt='' className='reasonsImage' src={require('../../Assets/LightBlueKey.png')}/>
              <text className='textBigBold'> Return </text>
              <text> Drive safe and return the vehicle in the condition requested by the owner </text>
            </div>
          </div>
        </div>

        <div className='backgroundBox'>
          <div className='innerBox'>
            <text className='textBigBold'> Get started today </text>
            <br/>
            <text className='textBig'> Follow these steps to book your first rental now </text>
            <div className='flexRow' style={{'marginTop':30, 'marginBottom': 30, 'justifyContent': 'space-around', 'alignItems': 'flex-start'}}>

              <div className='flexVertical' style={{'textAlign': 'left', 'width': '33%', 'marginRight':40}}>
                <div className='dividerLineHorizontle'/>
                <br/>
                <text className='textBigBold'> Sign-up </text>
                <text style={{'minHeight': 60}} > Register and build your driver profile so other car listers can learn more about you </text>
                <button className='learnMoreButton' style={{'marginTop':50, 'alignSelf': 'left', 'backgroundColor': '#2f78b2'}}>
                  <text className='learnMoreText'>  Register </text>
                </button>
              </div>

              <div className='flexVertical' style={{'textAlign': 'left', 'width': '33%', 'marginRight':40}}>
                <div className='dividerLineHorizontle'/>
                <br/>
                <text className='textBigBold'> Driving record </text>
                <text style={{'minHeight': 60}} > To ensure safety for all members of our community, we perform routine driving record checks on all renters </text>
                <button className='learnMoreButton' style={{'marginTop':50, 'alignSelf': 'left', 'backgroundColor': '#2f78b2'}}>
                  <text className='learnMoreText'>  Learn More  </text>
                </button>
              </div>

              <div className='flexVertical' style={{'textAlign': 'left', 'width': '33%'}}>
                <div className='dividerLineHorizontle'/>
                <br/>
                <text className='textBigBold'> Start browsing </text>
                <text style={{'minHeight': 60}}> After these steps, you’re all set! Start browsing listings and find a rental for your needs </text>
                <button className='learnMoreButton' style={{'marginTop':50, 'alignSelf': 'left', 'backgroundColor': '#2f78b2'}}>
                  <text className='learnMoreText'>  Browse Now </text>
                </button>
              </div>

            </div>
          </div>
        </div>

        <div style={{'margin': 30, 'textAlign': 'left'}}>
          <text className='textBigBold'> Renter safety and coverage </text>
          <br/> <br/>
          <text className='textBig'> We offer comprehensive insurance coverage and options </text>
          <br/> <br/>

          <div className='flexRow'>
            <img alt='' className='reasonsImage' src={require('../../Assets/LightBlueVault.png')}/>
            <div className='flexVertical' style={{'marginLeft': 20}}>
              <text className='textBigBold'> Drive knowing you are covered </text>
              <text> Our coverage insures you for personal liability up to $1 million. Learn more about this policy and terms by clicking below </text>
              <Link to='/Trust'>
                <button className='learnMoreButton' style={{'marginTop':70, 'alignSelf': 'left', 'backgroundColor': '#2f78b2'}}>
                  <text className='learnMoreText'>  Learn More </text>
                </button>
              </Link>
            </div>
          </div>

        </div>


      </div>

    );
  }

}

export default Rent;
