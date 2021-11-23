import React from "react";
import { Link, useRouteMatch } from "react-router-dom";
import "./worksMenu.css"

const WorksMenu = props => {
  const { worksListing, getCurrentWorkContent } = props;
  let { url } = useRouteMatch();
  
  return (
    <ul id="works-listing">
      {worksListing.map(work => {
        if (work.acf.project_is_accessible) {
          return (
            <li className="works-menu" key={work.id}>
              <Link
                to={`${url}/${work.slug}`}
                onClick={() => getCurrentWorkContent(work)}
              >
                {work.title.rendered}
              </Link>
            </li>
          );
        } else
          return (
            <li
              className="protected works-menu"
              key={work.id}
              onClick={() => false}
            >
              {work.title.rendered}
            </li>
          );
      })}
    </ul>
  );
};

export default WorksMenu;
