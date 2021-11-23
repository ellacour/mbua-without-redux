import React from "react";
import { Link, useRouteMatch } from "react-router-dom";

import "./profilesMenu.css";

const ProfilesMenu = props => {
  const { profilesListing, getCurrentProfileContent,currentProfile } = props;
  let { url } = useRouteMatch();

  return (
    <ul id="ProfilesMenu">
      {profilesListing.map(profile => {
        return (
          <li key={profile.id} className={currentProfile.slug === profile.slug &&
            "active"}>
            <Link
              to={`${url}/${profile.slug}`}
              onClick={() => getCurrentProfileContent(profile)}
            >
              {profile.title.rendered}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default ProfilesMenu;
