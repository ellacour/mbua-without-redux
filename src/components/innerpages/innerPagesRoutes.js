import React from "react";
import {
  Switch,
  Route,
  useParams,
  useRouteMatch
} from "react-router-dom";

const InnerPagesRoutes = () => {
  let { path } = useRouteMatch();
  return (
    <div>
      <Switch>
        <Route exact path={path}>
          <h3>Please select a topic.</h3>
        </Route>
        <Route path={`${path}/:topicId`}>
          <Topic />
        </Route>
      </Switch>
    </div>
  );

  function Topic() {
    let { topicId } = useParams();

    return (
      <div>
        <h3>{topicId}</h3>
      </div>
    );
  }
};

export default InnerPagesRoutes;
