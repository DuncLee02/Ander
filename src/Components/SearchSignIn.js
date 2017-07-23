import React, { Component } from 'react';
import firebase from 'firebase'
import firebaseAuth from 'firebase/auth'

class SignIn extends Component {

  render() {

    return (
        <div className='flexVertical' style={{'alignItems': 'center', 'marignTop': 50}}>
          <input className='signInInput' type='text' placeholder='email' style={{'textAlign':'center', 'fontSize': 17}} />

          <input className='signInInput' type='text' placeholder='password' style={{'textAlign':'center', 'fontSize': 17}} />

          <button className='emailSubmitButton'>
            <text className='textBig'> login </text>
          </button>
        </div>
    );
  }


}

export default SignIn;
