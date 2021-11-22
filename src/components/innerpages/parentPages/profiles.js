import React, { useState, useEffect } from "react";
import axios from "axios";


import "./profiles.css"
import ProfilesMenu from "../../navigations/profilesMenu";

const Profiles = () => {
  const [profilesListing, setProfilesListing] = useState([]);
  const [currentProfileContent, setCurrentProfileContent] = useState("");


  useEffect(() => {
    let unmounted = false;
    const getProfilesListing = async () => {
      const response = await axios(
        "https://cms.mbu-a.com/wp-json/wp/v2/pages/?parent=1457"
      );
      if (!unmounted) {
        setProfilesListing(response.data);
        console.log(response.data)
        setCurrentProfileContent(response.data[0].content.rendered);
      }
    };
    getProfilesListing();
    return () => (unmounted = true);
  }, []);

  const getCurrentProfileContent = content => {
    if (content) {
      const profileContent = content.content.rendered;
      setCurrentProfileContent(profileContent);
    }
  };

  return (
    <div id="Profiles">
      <div dangerouslySetInnerHTML={{ __html: currentProfileContent }} />
      <ProfilesMenu
        profilesListing={profilesListing}
        getCurrentProfileContent={getCurrentProfileContent}
      ></ProfilesMenu>
    </div>
  );
};

export default Profiles;
