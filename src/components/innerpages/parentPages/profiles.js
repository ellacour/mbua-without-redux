import React, { useState, useEffect } from "react";
import axios from "axios";


import "./profiles.css"
import ProfilesMenu from "../../navigations/profilesMenu";

const Profiles = () => {
  const [profilesListing, setProfilesListing] = useState([]);
  const [currentProfile, setCurrentProfile] = useState("");


  useEffect(() => {
    let unmounted = false;
    const getProfilesListing = async () => {
      const response = await axios(
        "https://cms.mbu-a.com/wp-json/wp/v2/pages/?parent=1457"
      );
      if (!unmounted) {
        setProfilesListing(response.data);
        getCurrentProfileContent(response.data[0]);
      }
    };
    getProfilesListing();
    return () => (unmounted = true);
  }, []);

  const getCurrentProfileContent = content => {
    if (content) {
      const currentProfile = {
        slug:content.slug,
        content:content.content.rendered,
        title:content.title.rendered
      }
      setCurrentProfile(currentProfile);
    }
  };

  return (
    <div id="Profiles">
      <div className="profile-content" dangerouslySetInnerHTML={{ __html: currentProfile.content }} />
      <ProfilesMenu
        profilesListing={profilesListing}
        getCurrentProfileContent={getCurrentProfileContent}
        currentProfile={currentProfile}
      ></ProfilesMenu>
    </div>
  );
};

export default Profiles;
