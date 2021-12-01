import React, { useState, useEffect } from "react";
import axios from "axios";

import "./ftp.css"
import Wrapper from "../../helpers/wrapper";

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
  });

  const displayFtpIcons = () => {
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
    <Wrapper>
      <div>{displayFtpIcons()}</div>
      <div
        className="ftp-content"
        dangerouslySetInnerHTML={{ __html: ftpContent }}
      />
    </Wrapper>
  );
};

export default Ftp;
