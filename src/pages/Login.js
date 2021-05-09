import React, { Component } from "react";
import firebase from 'firebase/app';
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import { Redirect } from "react-router";
import "./style.css";
import Header from '../comps/Header';
import { svgLoginBodyStyle, clearSvgLoginBodyStyle } from '../comps/utils';

// page logic for signed vs unsigned users
class Login extends Component {
    
  state = { isSignedIn: false };
  uiConfig = {
    signInFlow: "redirect",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
    ],
    callbacks: {
      signInSuccessWithAuthResult: () => false,
    },
  };

  componentDidMount = () => {
    svgLoginBodyStyle();
    firebase.auth().onAuthStateChanged((user) => {
      this.setState({ isSignedIn: !!user });
      console.log("user", user);
    });
  };

  componentWillUnmount = () => {
      clearSvgLoginBodyStyle();
  }

  render() {
  
    return (
      <div className="Login">
             <Header />
             {this.state.isSignedIn ? (
          <Redirect to="/" />
        ) : (
          <StyledFirebaseAuth
            uiConfig={this.uiConfig}
            firebaseAuth={firebase.auth()}
          /> 
        )}
      </div>
    );
  }
}

export default Login;
