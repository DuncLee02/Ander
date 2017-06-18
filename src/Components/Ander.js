import React, { Component } from 'react';

class Ander extends Component {
  render() {
    return (
      <div className='anderMainContainer'>
        <text className='textBigBold'> We are a new solution </text>
        <text className='textSmall'>for car-owners, car-renters, and</text>
        <text className='textSmall'>parking space owners</text>

        <div className='emailWrapper'>
          <input className='emailInput' type='text' placeholder='name@website.com' style={{'textAlign':'center', 'fontSize': 17}} />
          <button className='emailSubmitButton' onClick={this.submitEmail.bind(this)}>
            <text className='emailSubmitButtonText'> Stay </text> <br/>
            <text className='emailSubmitButtonText'> Updated! </text>
          </button>
        </div>

        <div className='backgroundBox'>
          <div className='innerBox'>
            <text className='textBigBold'> Park your car with us and enter the sharing economy</text><br/>
            <text className='textBig'>We offer a platform for car-owners to park their car and rent</text>
            <text className='textBig'>out their car to other drivers.</text><br/>
            <div className='reasonsContainer'>
              <div className='reasonsComponent'>
                <img alt='' className='reasonsImage' style={{'height': 75, 'width': 100}} src={require('../Assets/Car.png')}/>
                <text className='textBigBold'>Activate your asset </text>
                <text>Your idle car could be put to better use. Engage in sharing and reap the benefits today </text>
              </div>
              <div className='reasonsComponent'>
                <img alt='' className='reasonsImage' style={{'height': 75, 'width': 100}} src={require('../Assets/Money.png')}/>
                <text className='textBigBold'>Earn money</text>
                <text> Rent out your car while its not in use, and earn side income of up to $100 a day </text>
              </div>
              <div className='reasonsComponent'>
                <img alt='' className='reasonsImage' style={{'height': 75, 'width': 100}} src={require('../Assets/People.png')}/>
                <text className='textBigBold'>Improve access</text>
                <text>to affordable car rentals for fellow drivers. Contribute to the growing sharing economy </text><br/>
                <button className='learnMoreButton'>
                  <text className='learnMoreText'> Learn More </text>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className='reasonsContainer' style={{'margin': 50}}>
          <div className='reasonsComponent'>
            <text className='textBigBold'> Rent cars from other owners </text> <br/>
            <text className='textBig'> Gain access to cheaper rentals instantly using our platform </text> <br/>
            <button className='learnMoreButton'>
              <text className='learnMoreText'> Learn More </text>
            </button>
          </div>
          <div className='reasonsContainerVertical' style={{'marginLeft': 80, 'marginRight': 80 }}>
            <div className='reasonsContainer' >
              <img alt='' className='reasonsImage' style={{'height': 75, 'width': 100}} src={require('../Assets/Car.png')}/>
              <div className='reasonsComponent' style={{'marginTop': 0, 'width': 250}}>
                <text className='textBigBold'> Save money </text>
                <text> By sourcing cars from other car- owners, we are able to offer prices sustainably lower than those of traditional car rental services. </text>
              </div>
            </div>
            <div className='reasonsContainer' >
              <img alt='' className='reasonsImage' style={{'height': 75, 'width': 100}} src={require('../Assets/Car.png')}/>
              <div className='reasonsComponent' style={{'marginTop': 0, 'width': 250}}>
                <text className='textBigBold'> Convenience </text>
                <text> Gain access to a wide selection of cars, ready to rent when you need them, hassle-free </text>
              </div>
            </div>
          </div >

        </div>


        <div className='backgroundBox'>
          <div className='innerBox'>
            <text className='textBigBold'> Become a parking host today </text><br/>
            <text className='textBig'> Turn your parking space into a base for local car sharing </text><br/>
            <div className='reasonsContainer'>
              <div className='reasonsComponent'>
                <img alt='' className='reasonsImage' style={{'height': 75, 'width': 100}} src={require('../Assets/Car.png')}/>
                <text className='textBigBold'> Utilize your parking assets </text>
                <text> Become a parking cost for Ander, and increase the utilization of your parking spaces. </text>
              </div>
              <div className='reasonsComponent'>
                <img alt='' className='reasonsImage' style={{'height': 75, 'width': 100}} src={require('../Assets/Money.png')}/>
                <text className='textBigBold'> Enhance your top-line </text>
                <text> Earn extra income as a percentage of all the fees from cars rented out from your parking space, at little to no starting cost </text>
              </div>
              <div className='reasonsComponent'>
                <img alt='' className='reasonsImage' style={{'height': 75, 'width': 100}} src={require('../Assets/People.png')}/>
                <text className='textBigBold'> Become a hub for local car sharing </text>
                <text> Increase customer traffic by turning your parking space into a centralized hub for enabling affordable parking and renting </text><br/>
                <button className='learnMoreButton'>
                  <text className='learnMoreText'> Learn More </text>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div style={{'display': 'flex', 'justifyContent': 'flex-start', 'flexDirection': 'column', 'textAlign': 'left', 'marginLeft': 80, 'marginRight': 80}}>
          <text className='textBigBold'> Trust & Safety </text><br/>
          <text className='textBig'> We are committed to providing safe and secure services </text> <br/>
          <div className='reasonsContainer'>
            <div className='reasonsContainer'>
            <img alt='' className='reasonsImage' style={{'height': 75, 'width': 100}} src={require('../Assets/People.png')}/>
              <div className= 'reasonsComponent' style={{'marginTop': 0}}>
                <text className='textBigBold'> Car owner or renter? </text>
                <text> We got you covered. Park and drive knowing our insurance policy is comprehensive. Learn more about our insurance policies by clicking below </text>
                <button className='learnMoreButton' style={{'marginTop': 30}}>
                  <text className='learnMoreText'> Learn More </text>
                </button>
              </div>
            </div>
            <div className='reasonsContainer'>
            <img alt='' className='reasonsImage' style={{'height': 75, 'width': 100}} src={require('../Assets/People.png')}/>
              <div className= 'reasonsComponent' style={{'marginTop': 0}}>
                <text className='textBigBold'> Parking space owner? </text>
                <text> We know you may be concerned about legal issues or liability. We’ve got it figured out, and will take care of it. Learn more about how we are helping and safeguarding your business by clicking below </text>
                <button className='learnMoreButton' style={{'marginTop': 30}}>
                  <text className='learnMoreText'> Learn More </text>
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
    );
  }

  submitEmail() {
    console.log('email submitted...')
  }


}

export default Ander;
