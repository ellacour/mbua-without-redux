import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";

import "./ftp.css"

const Ftp = () => {
  const [ftpContent, setFtpContent] = useState("");
  const [ftpIcons, setFtpIcons] = useState([]);

  useEffect(() => {
    let unmounted = false;
    const getFtpData = async () => {
      const response = await axios(
        "https://cms.mbu-a.com/wp-json/wp/v2/pages/77"
      );
      if (!unmounted) {
        setFtpContent(response.data.content.rendered);
        setFtpIcons(response.data.acf.ftp_logos);
      }
    };
    getFtpData();
    return () => (unmounted = true);
  },[]);

  const displayFtpIcons = (ftpIcons) => {
    return (
      <ul id="Ftp-list">
        {ftpIcons.map(icon => {
          return (
            <li key={icon.ftp_logo.id}>
              <a href={icon.ftp_link}>
                <img
                  className="ftp-Icons-list-img"
                  src={icon.ftp_logo.sizes.thumbnail}
                  alt=""
                />
              </a>
            </li>
          );
        })}
      </ul>
    );
  };

  return (
    <Fragment>
      {ftpIcons && displayFtpIcons(ftpIcons)}
      <div
        className="ftp-content"
        dangerouslySetInnerHTML={{ __html: ftpContent }}
      />
    </Fragment>
  );
};

export default Ftp;
