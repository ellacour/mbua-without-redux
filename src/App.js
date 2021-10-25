import React, { useState, useEffect } from "react";

import "./App.css";
import axios from "axios";

import Login from "./components/login";
import Mbua from "./components/mbua";

const API_PAGES_URL = "https://cms.mbu-a.com/wp-json/wp/v2/pages/";
const API_WORKS_URL = "https://cms.mbu-a.com/wp-json/wp/v2/work";
const API_FEED_URL = "https://cms.mbu-a.com/wp-json/wp/v2/posts";
const API_SUB_PAGES_URL = "https://cms.mbu-a.com/wp-json/wp/v2/pages/?parent=";
const API_AUTHORS_URL = "https://cms.mbu-a.com/wp-json/wp/v2/users";

const App = () => {
  const [loginPageData, setLoginPageData] = useState([]);
  const [WorksData, setWorksData] = useState([]);
  const [contactPageData, setContactPageData] = useState([]);
  const [feedData, setFeedData] = useState([]);
  const [ftpPageData, setFtpPageData] = useState([]);
  const [userIsLogged, setUserIsLogged] = useState(false);
  const [profilePageData, setProfilePageData] = useState([]);
  const [profileSubPageData, setProfileSubPageData] = useState([]);
  const [authors, setAuthors] = useState([]);

  const loginHandler = () => setUserIsLogged(true);
  const getPageData = async (baseUrl, complement, stateHandler) => {
    const response = await axios(baseUrl + complement);
    stateHandler(response.data);
    console.log("RESPONSE", response.data);
  };

  useEffect(() => {
    getPageData(API_PAGES_URL, 81, setLoginPageData);
    getPageData(API_PAGES_URL, 75, setContactPageData);
    getPageData(API_WORKS_URL, "", setWorksData);
    getPageData(API_FEED_URL, "", setFeedData);
    getPageData(API_PAGES_URL, 77, setFtpPageData);
    getPageData(API_PAGES_URL, 1457, setProfilePageData);
    getPageData(API_SUB_PAGES_URL, 1457, setProfileSubPageData);
    getPageData(API_AUTHORS_URL, "", setAuthors);
  }, []);

  // useEffect(() => {
  //   getPageData(WP_API_WORKS_URL,'' ,setWorksData );
  // }, []);

  return (
    <div className="App">
      <div className="mbua-wrapper">
        {userIsLogged ? <Mbua></Mbua> : <Login loginHandler={loginHandler}></Login> }
      </div>
    </div>
  );
}

export default App;
