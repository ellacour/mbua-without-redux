import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import axios from "axios";
import "react-loading-skeleton/dist/skeleton.css";

import "./App.css";

import LoginPage from "./components/login/loginPage";
import Mbua from "./components/mbua";

const API_PAGES_URL = "https://cms.mbu-a.com/wp-json/wp/v2/pages/";
// const API_WORKS_URL = "https://cms.mbu-a.com/wp-json/wp/v2/work";
// const API_FEED_URL = "https://cms.mbu-a.com/wp-json/wp/v2/posts";
// const API_SUB_PAGES_URL = "https://cms.mbu-a.com/wp-json/wp/v2/pages/?parent=";
// const API_AUTHORS_URL = "https://cms.mbu-a.com/wp-json/wp/v2/users";

const App = () => {
  const [loginPageData, setLoginPageData] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [currentSlider, setCurrentSlider] = useState([]);
  const [mbuaDataPage, setMbuaDataPage] = useState([]);
  const [menuItems, setMenuItems] = useState([]);

  // const [feedData, setFeedData] = useState([]);
  // const [ftpPageData, setFtpPageData] = useState([]);
  const [userIsLogged, setUserIsLogged] = useState(false);
  // const [profilePageData, setProfilePageData] = useState([]);
  // const [profileSubPageData, setProfileSubPageData] = useState([]);
  // const [authors, setAuthors] = useState([]);

  // const loginHandler = () => setUserIsLogged(true);

  // const getPageData = async (baseUrl, complement, stateHandler) => {
  //   const response = await axios(baseUrl + complement);
  //   stateHandler(response.data);
  // };

  // useEffect(() => {
  //   getPageData(API_PAGES_URL, 81, setLoginPageData);
  //   getPageData(API_PAGES_URL, 75, setContactPageData);
  //   getPageData(API_WORKS_URL, "", setWorksData);
  //   getPageData(API_FEED_URL, "", setFeedData);
  //   getPageData(API_PAGES_URL, 77, setFtpPageData);
  //   getPageData(API_PAGES_URL, 1457, setProfilePageData);
  //   getPageData(API_SUB_PAGES_URL, 1457, setProfileSubPageData);
  //   getPageData(API_AUTHORS_URL, "", setAuthors);
  // }, []);

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
      const response = await axios(API_PAGES_URL + 81);
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
