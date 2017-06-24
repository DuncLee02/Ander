import React, { Component } from 'react';

class Park extends Component {
  render() {
    return (
      <div className='anderMainContainer'>
        <div style={{'marginLeft': 80, 'marginRight': 80, 'textAlign': 'left'}}>
          <text className='textBigBold' style={{'alignSelf': 'center'}}> Browse our listings and find affordable car rentals near you </text><br/>
          <text className='textBig' style={{'alignSelf': 'center', 'maxWidth':200, 'width': '100%'}}> Learn more about how it works below and gain access to rentals up to 30 percent cheaper than traditional rentals </text>  <br/>
        </div>

        <div className='flexRow' style={{'justifyContent': 'space-around', 'textAlign': 'left'}}>
          <div className='flexRow' style={{'justifyContent': 'center'}}>
            <img alt='' className='numbers' src={require('../Assets/One.png')}/>
            <div className='flexVertical' style={{'maxWidth': 300}}>
              <img alt='' className='reasonsImage' src={require('../Assets/List.png')}/>
              <text className='textBigBold'> List </text>
              <text> List the specs of your car and required specifications for renters </text>
            </div>
          </div>
          <div className='flexRow' style={{'justifyContent': 'center', 'maxWidth': 300}}>
            <img alt='' className='numbers' src={require('../Assets/Two.png')}/>
            <div className='flexVertical' style={{'maxWidth': 300}}>
              <img alt='' className='reasonsImage' src={require('../Assets/Lock.png')}/>
              <text className='textBigBold'> Park </text>
              <text> Drop off your vehicle and key with our secure parking space hosts </text>
            </div>
          </div>
        </div>

        <div className='flexRow' style={{'justifyContent': 'space-around', 'textAlign': 'left'}}>
          <div className='flexRow' style={{'justifyContent': 'center'}}>
            <img alt='' className='numbers' src={require('../Assets/Three.png')}/>
            <div className='flexVertical' style={{'maxWidth': 300}}>
              <img alt='' className='reasonsImage' src={require('../Assets/Lend.png')}/>
              <text className='textBigBold'> Lend </text>
              <text> Receive and approve requests from potential car renters </text>
            </div>
          </div>
          <div className='flexRow' style={{'justifyContent': 'center', 'maxWidth': 300}}>
            <img alt='' className='numbers' src={require('../Assets/Four.png')}/>
            <div className='flexVertical' style={{'maxWidth': 300}}>
              <img alt='' className='reasonsImage' src={require('../Assets/Car.png')}/>
              <text className='textBigBold'> Pickup </text> <br/>
              <text> Reserve to pick up your car whenever you need it, no strings attached </text> <br/>
            </div>
          </div>
        </div>

        <div className='backgroundBox' style={{'margin': 30}}>
          <div className='innerBox'>
            <text className='textBigBold'> Get started today </text> <br/>
            <text className='textBig' > Follow these steps to list your car and start earning income </text> <br/>
            <div className='flexRow' style={{'justifyContent': 'space-around', 'textAlign': 'left', 'marginTop': 30}}>
              <div className='flexVertical' style={{'maxWidth': 400, 'margin': 20}}>
                <text className='textBigBold'> Sign-Up </text>
                <text> Register and set your profile so other car renters can learn more about your vehicle and preferences</text>
                <br/>
                <button className='learnMoreButton'>
                  <text className='learnMoreText'> Register </text>
                </button>
              </div>
              <div className='dividerLine' />
              <div className='flexVertical' style={{'maxWidth': 400, 'margin': 20}}>
                <text className='textBigBold'> Setup your account </text>
                <text> Set up your account and preferences for receiving your income. Also choose from our insurance policies </text>
                <br/>
                <button className='learnMoreButton'>
                  <text className='learnMoreText'> Setup Now </text>
                </button>
              </div>
              <div className='dividerLine' />
              <div className='flexVertical' style={{'maxWidth': 400, 'margin': 20}}>
                <text className='textBigBold'> List your car </text>
                <text> Select from our designated parking space hosts, and set the dates you would like to offer your car for rentals</text>
                <br/>
                <button className='learnMoreButton'>
                  <text className='learnMoreText'>  List Now </text>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className='flexVertical' style={{'margin': 30, 'marginLeft': 80, 'marginRight': 80, 'textAlign': 'left'}}>
          <text className='textBigBold'> Park and share knowing your vehicle is in good hands </text>
          <br/>
          <text className='textBig'> We offer comprehensive insurance coverage and options </text>

          <div className='flexRow' style={{'justifyContent': 'space-around', 'marginTop':50}}>
            <div className='flexVertical' style={{'justifyContent': 'flex-start'}}>
              <div className='flexRow' style={{'justifyContent': 'center', 'float': 'left', 'width': '80%'}}>
                <img alt='' className='reasonsImage' src={require('../Assets/Vault.png')}/>
                <div className='flexVertical' style={{'marginLeft': 20, 'minHeight': 160}}>
                  <text className='textBigBold'> Comprehensive insurance </text>
                  <text style={{'maxWidth': 400}} > Our coverage options offer comprehensive protection from potential liability. Learn more about your options by clicking below </text>
                </div>
              </div>
              <button className='learnMoreButton' onClick={this.learnMorePolicies.bind(this)} style={{'marginTop':50, 'alignSelf': 'center'}}>
                <text className='learnMoreText'>  Learn More </text>
              </button>
            </div>

            <div className='flexRow' style={{'justifyContent': 'center', 'float': 'right'}}>
              <div className='flexVertical' style={{'justifyContent': 'flex-start'}}>
                <div className='flexRow' style={{'justifyContent': 'center', 'float': 'left', 'width': '80%'}}>
                  <img alt='' className='reasonsImage' src={require('../Assets/Microscope.png')}/>
                  <div className='flexVertical' style={{'marginLeft': 20, 'minHeight': 160}}>
                    <text className='textBigBold'> Driver and parking checks </text>
                    <text style={{'maxWidth': 400}}> We do routine driver record checks to make sure that your car is in safe hands. We also verify each parking space’s procedures to make sure your car is secure. If anything happens, we will help you through it </text>
                  </div>
                </div>
                <button className='learnMoreButton' style={{'marginTop':50, 'alignSelf': 'center'}}>
                  <text className='learnMoreText'>  Learn More </text>
                </button>
              </div>
            </div>
          </div>

        </div>


      </div>

    );
  }

  learnMorePolicies() {
    this.props.sectionChangeHandler('Trust')
  }

}

export default Park;
