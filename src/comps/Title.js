import React from "react";
import { initApp } from "../firebase/config";
import firebase from "firebase/app";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";

const Title = () => {
  return (
    //navbar with current user name and sign out button
    <div className="title">
      <Navbar>
        <Navbar.Brand href="/">
          <h1>Welcome {firebase.auth().currentUser.displayName}</h1>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Button
            variant="outline-info"
            onClick={() => initApp.auth().signOut()}
          >
            Sign Out
          </Button>{" "}
        </Navbar.Collapse>
      </Navbar>

      <h2>I Am Mage</h2>
      <p style={{ color: "#00c7c7" }}>continue the ongoing picstory</p>
    </div>
  );
};

export default Title;
