import React from "react";
import {
  Switch,
  Route,
  useRouteMatch
} from "react-router-dom";

import Works from './parentPages/works';
import Profiles from './parentPages/profiles';
import Contact from './simplePages/contact';
import Feed from './simplePages/feed';
import Ftp from './simplePages/ftp';

const InnerPagesRoutes = () => {
  let { path } = useRouteMatch();
  return (
    <div>
      <Switch>
        <Route path={`${path}/work`}>
          <Works />
        </Route>
        <Route path={`${path}/profile`}>
          <Profiles />
        </Route>
        <Route path={`${path}/contact`}>
          <Contact />
        </Route>
        <Route path={`${path}/feed`}>
          <Feed />
        </Route>
        <Route path={`${path}/ftp`}>
          <Ftp />
        </Route>
      </Switch>
    </div>
  );
};

export default InnerPagesRoutes;
