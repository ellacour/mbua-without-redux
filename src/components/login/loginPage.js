import React, { useEffect } from "react";
import axios from "axios";
import Skeleton from "react-loading-skeleton";
import { Link } from "react-router-dom";

import "./loginPage.css";
import blackPlus from "../../img/mbuA_+ Graphic_black.png";
import LoginForm from "./loginForm";

const LOGIN_URL = "https://cms.mbu-a.com/wp-json/jwt-auth/v1/token";

const LoginPage = props => {
  const { loginData, isLogged, userLoginHandler,setCurrentPage } = props;

  useEffect(() => {
    if (isLogged) {
      const plusButton = document.getElementById("plus-button");
      plusButton.classList.add("active");
      setCurrentPage('mbuA');
    }
  }, [isLogged,setCurrentPage]);

  const LoginChangeHandler = userData => {
    const plusButton = document.getElementById("plus-button");
    const getToken = async () => {
      try {
        const response = await axios.post(LOGIN_URL, userData);
        const token = await response.data.token;
        const userName = await response.data.user_nicename;
        sessionStorage.setItem("token", token);
        sessionStorage.setItem("userName", userName);
        userLoginHandler(true);
        plusButton.classList.add("active");
      } catch (err) {
        alert(
          "You are not authorized to access the site. Apply for an account creation"
        );
      }
    };
    getToken();
  };

  return (
    <div id="login">
      <div className="login-first-column mbua-col"></div>
      <div className="login-second-column mbua-col">
        <Link to="/mbua">
          <button id="plus-button" className="login-button">
            <img className="login-plus" src={blackPlus} alt="button"></img>
          </button>
        </Link>
      </div>

      <div className="login-third-column mbua-col-end">
        {loginData ? (
          <div className="mbua-adress-card">
            <p className="card-name">
              {loginData.mbua_name}
              {loginData.mbua_title}
            </p>
            <p className="card-address">{loginData.business_card_address}</p>
            <p className="card-city">{loginData.business_card_city}</p>
            <p className="card-phone">{loginData.business_card_phone_number}</p>
            <p className="card-email">{loginData.business_card_email}</p>
          </div>
        ) : (
          <Skeleton count={5} />
        )}
        {isLogged ? (
          <div>
            <div>
              <p className="light-text italic-text pad-right-125">
                mbuA is an emergent New York practice dedicated to the
                exploration and realization of architecture, urbanism, interiors
                and design. Working across multiple scales, we provide tailored
                results for clients requiring innovative solutions to complex
                and often contradictory project requirements. Our commitment is
                to deliver extraordinary design services and construction
                excellence with the ambition to materialize architecture as a
                powerful, evocative, and functional response within an
                increasingly dissonant built environment.
              </p>
            </div>
            <div>
              <p className="light-text italic-text ">
                This website is designed for a large-screen viewing experience.
              </p>
            </div>
          </div>
        ) : (
          <LoginForm onUserLogin={LoginChangeHandler} />
        )}
      </div>
    </div>
  );
};
export default LoginPage;
