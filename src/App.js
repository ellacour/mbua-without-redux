import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import axios from "axios";
import "react-loading-skeleton/dist/skeleton.css";

import "./App.css";

import LoginPage from "./components/login/loginPage";
import Mbua from "./components/mbua";

const API_PAGES_URL = "https://cms.mbu-a.com/wp-json/wp/v2/pages/";
// const API_AUTHORS_URL = "https://cms.mbu-a.com/wp-json/wp/v2/users";
const ACF_COMPLEMENT = "?_fields=acf&acf_format=standard"

const App = () => {
  const [loginPageData, setLoginPageData] = useState([]);
  const [currentSlider, setCurrentSlider] = useState([]);
  const [mbuaDataPage, setMbuaDataPage] = useState([]);
  const [menuItems, setMenuItems] = useState([]); 
  const [userIsLogged, setUserIsLogged] = useState(false);
  
  


  useEffect(() => {
    let unmounted = false;
    const getMenuItems = async () => {
      const response = await axios(
        "https://cms.mbu-a.com/wp-json/myroutes/menu"
      );
      if (!unmounted) {
        setMenuItems(response.data);
      }
    };

    const getData = async () => {
      const response = await axios(API_PAGES_URL + 81+ ACF_COMPLEMENT);
      if (!unmounted) {
        setLoginPageData(response.data.acf);
        setCurrentSlider(response.data.acf.mbua_slide);
        const mbuaDataPage = {
          mbuaName: response.data.acf.mbua_name,
          mbuaTitle: response.data.acf.mbua_title
        };
        setMbuaDataPage(mbuaDataPage);
      }
    };

    getData();
    getMenuItems();

    return () => (unmounted = true);
  }, []);

  const PrivateRoute = props => {
    const token = localStorage.getItem("token");
    return userIsLogged || token ? (
      <Route {...props} />
    ) : (
      <Redirect
        to={{
          pathname: "/"
        }}
      />
    );
  };

  const Routes = () => {
    return (
      <BrowserRouter>
        <Switch>
          <PrivateRoute path="/Mbua">
            <Mbua
              mbuaName={mbuaDataPage.mbuaName}
              mbuaTitle={mbuaDataPage.mbuaTitle}
              mbuaSliderImages={currentSlider}
              menuItems={menuItems}
            ></Mbua>
          </PrivateRoute>
          <Route path="/">
            <LoginPage
              loginData={loginPageData}
              isLogged={userIsLogged}
              userLoginHandler={setUserIsLogged}
            ></LoginPage>
          </Route>
        </Switch>
      </BrowserRouter>
    );
  };

  return (
    <div className="App">
      <div className="mbua-wrapper">{Routes()}</div>
    </div>
  );
};

export default App;
