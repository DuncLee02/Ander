import React, { Component } from 'react';
import firebase from '../../firebase.js'
import Global from '../../Globals.js'

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

  // googleSignUpClicked() {
  //   var provider = new firebase.auth.GoogleAuthProvider();
  //
  //   firebase.auth().signInWithPopup(provider).then(function(result) {
  //     var token = result.credential.accessToken;
  //     this.props.userCallback(result.user)
  //
  //      firebase.database().ref('users/' + result.user.uid).set({
  //        username: result.user.displayName,
  //        email: result.user.email,
  //        uid: result.user.uid,
  //       });
  //   }.bind(this)).catch(function(error) {
  //     console.log(error)
  //     var errorCode = error.code;
  //     var errorMessage = error.message;
  //     var email = error.email;
  //     var credential = error.credential;
  //   });
  //
  // }

  googleSignUpClicked() {
    var provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithPopup(provider).then(function(result) {
      var token = result.credential.accessToken;
      firebase.database().ref('users/' + result.user.uid).once('value', function(snapshot) {
        var exists = (snapshot.val() !== null);
        console.log(snapshot.val())
        if (exists) {
          Global.User = {name: snapshot.val().username, email: snapshot.val().email, uid: snapshot.val().uid, admin: snapshot.val().admin}
        }
        else {
          console.log('doesnt exist')
          firebase.database().ref('users/' + result.user.uid).set({
            username: result.user.displayName,
            email: result.user.email,
            uid: result.user.uid,
            admin: false
          });
          Global.User = {name: result.user.displayName, email: result.user.email, uid: result.user.uid, admin: false}
        }
        this.props.userCallback()
      }.bind(this));
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
