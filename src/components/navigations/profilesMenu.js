import React from "react";
import { Link, useRouteMatch } from "react-router-dom";

const ProfilesMenu = props => {
  const { profilesListing, getCurrentProfileContent } = props;
  let { url } = useRouteMatch();

  return (
    <ul>
      {profilesListing.map(profile => {
        return (
          <li key={profile.id}>
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
