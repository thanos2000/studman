import React, { Component } from "react";
import Header from "./HeaderComponent";

export default class ContactsComponent extends Component {
  render() {
    return (
      <div className="container">
        <div className="greetingsProfileCard">
            <center className="greetingsProfileInfo">
              <p style={{ fontSize: "20px" }}>
                Contact Us
              </p>
            </center>
          </div>
        <div className="row">
          <div className="col-sm-6">
            <div className="card" style={{ top: "20px" }}>
              <div className="card-body">
                <h5 className="card-title">Batch D</h5>
                <p className="card-text">
                  
                  Nikhil kaushik
                  <br />
                  Shruti gupta
                  <br />
                  Bhavana A
                  <br />
                  Akshay OS
                  <br />
                  Ruthvik 
                  <br />
                  Gautham Reddy

                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
