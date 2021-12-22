import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";

import "./innerPagesRoutes.css";
import Works from "./parentPages/works";
import Profiles from "./parentPages/profiles";
import Contact from "./simplePages/contact";
import Feed from "../feed/feed";
import Ftp from "./simplePages/ftp";

const InnerPagesRoutes = props => {
  let { path } = useRouteMatch();

  const {
    setCurrentSlider,
    currentWorkContent,
    setCurrentWorkContent,
    currentPage
  } = props;

  return (
    <div id="PagesWrapper">
      <Switch>
        <Route path={`${path}/work`}>
          <Works
            currentPage={currentPage}
            setCurrentWorkContent={setCurrentWorkContent}
            currentWorkContent={currentWorkContent}
            setCurrentSlider={setCurrentSlider}
          />
        </Route>
        <Route path={`${path}/profile`}>
          <Profiles />
        </Route>
        <Route path={`${path}/contact`}>
          <Contact />
        </Route>
        <Route path={`${path}/feed`}>
          <Feed itemsPerPage={3} />
        </Route>
        <Route path={`${path}/ftp`}>
          <Ftp />
        </Route>
      </Switch>
    </div>
  );
};

export default InnerPagesRoutes;
