import React from "react";
import { Link, useRouteMatch } from "react-router-dom";

const WorksMenu = props => {
  const { worksListing, getCurrentWorkContent } = props;

  let { url } = useRouteMatch();
  return (
    <ul id="works-listiing">
      {worksListing.map(work => {
        if (work.acf.project_is_accessible) {
          return (
            <li className="work-menu" key={work.id}>
              <Link
                to={`${url}/${work.slug}`}
                onClick={() => getCurrentWorkContent(work)}
              >
                <h5>{work.title.rendered}</h5>
              </Link>
            </li>
          );
        } else
          return (
            <li
              className="protected work-menu"
              key={work.id}
              onClick={() => false}
            >
              <h5>{work.title.rendered}</h5>
            </li>
          );
      })}
    </ul>
  );
};

export default WorksMenu;
