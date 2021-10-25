import React, { useState, useEffect } from "react";

import "./login.css";
import blackPlus from "../img/mbuA_+ Graphic_black.png";

const Login = props => {
  return (
    <div id="login">
      <div className="login-first-column mbua-col"></div>
      <div className="login-second-column mbua-col">
        <button className="login-button" onClick={props.loginHandler}>
          <img className="login-plus" src={blackPlus}></img>
        </button>
      </div>
      <div className="login-third-column mbua-col-end">
        <div className="mbua-adress-card">
          <p className="title"> matthew bryden uselman architect</p>
          <p className="title">448 west 37th street, loft 10b</p>
          <p className="title">new york, new york 10018</p>
          <p className="title">+1 213 242 0042</p>
          <p className="title">office @ mbu-a.com</p>
        </div>
        <div>
          <p className="light-text italic-text pad-right-125">
            mbuA is an emergent New York practice dedicated to the exploration
            and realization of architecture, urbanism, interiors and design.
            Working across multiple scales, we provide tailored results for
            clients requiring innovative solutions to complex and often
            contradictory project requirements. Our commitment is to deliver
            extraordinary design services and construction excellence with the
            ambition to materialize architecture as a powerful, evocative, and
            functional response within an increasingly dissonant built
            environment.
          </p>
        </div>
        <div>
          <p className="light-text italic-text ">
            This website is designed for a large-screen viewing experience.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Login;
