import React, { Component } from 'react';
import firebase from '../../firebase.js'

class SignUp extends Component {


    constructor(props) {
      super(props)
      this.state = {

      }
      this.googleSignUpClicked = this.googleSignUpClicked.bind(this)
    }

    render() {

      var provider = new firebase.auth.GoogleAuthProvider();

    return (
        <div className='flexVertical' style={{'alignItems': 'center', 'marignTop': 50, 'opacity': 1}}>

          <button className='signInGoogleButton' onClick={this.googleSignUpClicked}>
            <img src={require('../../Assets/GoogleSymbol.png')} alt={'Menu'} style={{'height': 30, 'width': 30}}/>
            <text className='textBig'> Continue with Google </text>
          </button>
        </div>
    );
  }

  // <input className='signInInput' type='text' placeholder='email' style={{'textAlign':'center', 'fontSize': 17}} />
  //
  // <input className='signInInput' type='text' placeholder='password' style={{'textAlign':'center', 'fontSize': 17, 'marginBottom': 20}} />
  //
  // <input className='signInInput' type='text' placeholder='confirm password' style={{'textAlign':'center', 'fontSize': 17, 'marginTop': 0 }} />

  googleSignUpClicked() {
    var provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithPopup(provider).then(function(result) {
      var token = result.credential.accessToken;
      this.props.userCallback(result.user)
      firebase.database().ref('users/' + result.user.uid).set({
        username: result.user.displayName,
        email: result.user.email,
        uid: result.user.uid,
      });
    }.bind(this)).catch(function(error) {
      console.log(error)
      var errorCode = error.code;
      var errorMessage = error.message;
      var email = error.email;
      var credential = error.credential;
    });

  }


}

export default SignUp;
