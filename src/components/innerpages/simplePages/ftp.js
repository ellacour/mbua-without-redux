import React, { useState, useEffect} from "react";
import axios from "axios";
import Skeleton from "react-loading-skeleton";

import "./ftp.css";

const ACF_COMPLEMENT = "?acf_format=standard"

const Ftp = () => {
  const [ftpContent, setFtpContent] = useState("");
  const [ftpIcons, setFtpIcons] = useState([]);

  useEffect(() => {
    let unmounted = false;
    const getFtpData = async () => {
      const response = await axios(
        "https://cms.mbu-a.com/wp-json/wp/v2/pages/77"+ ACF_COMPLEMENT
      );
      if (!unmounted) {
        setFtpContent(response.data.content.rendered);
        setFtpIcons(response.data.acf.ftp_logos);
      }
    };
    getFtpData();
    return () => (unmounted = true);
  }, []);

  const displayFtpIcons = iconsList => {
    return (
      <ul id="Ftp-list">
        {iconsList.map(icon => {
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
    <div className="ftp-content">
      { ftpIcons && ftpIcons.length > 0 && displayFtpIcons(ftpIcons)}
      {ftpContent ? (
        <div
          className=""
          dangerouslySetInnerHTML={{ __html: ftpContent }}
        />
      ):(<Skeleton count={5}/>)}
    </div>
  );
};

export default Ftp;
