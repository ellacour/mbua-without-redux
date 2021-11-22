import React, { useState, useEffect } from "react";
import axios from "axios";
import { Switch, Route, useRouteMatch } from "react-router-dom";

import "./works.css";
import Work from "../simplePages/work";
import WorksMenu from "../../navigations/worksMenu";

const Works = props => {
  const { setCurrentSlider } = props;
  const [worksListing, setWorksListing] = useState([]);
  const [currentWorkContent, setCurrentWorkContent] = useState("");
  let { path } = useRouteMatch();

  useEffect(() => {
    let unmounted = false;
    const getWorksListing = async () => {
      const response = await axios("https://cms.mbu-a.com/wp-json/wp/v2/work");
      if (!unmounted) {
        setWorksListing(response.data);
      }
    };
    getWorksListing();
    return () => (unmounted = true);
  }, []);

  const getCurrentWorkContent = content => {
    if (content) {
      const workContent = {
        title: content.title.rendered,
        photos: content.acf.photos,
        text: content.content.rendered
      };
      setCurrentWorkContent(workContent);
      setCurrentSlider(content.acf.photos);
    }
  };

  const worksRouting = () => {
    return (
      <Switch>
        <Route exact path={`${path}`}>
          <WorksMenu
            worksListing={worksListing}
            getCurrentWorkContent={getCurrentWorkContent}
          />
        </Route>
        <Route path={`${path}/:slug`}>
          <Work currentWorkContent={currentWorkContent} />
        </Route>
      </Switch>
    );
  };

  return (
    <div id="Works">
      {worksRouting()}
    </div>
  );
};

export default Works;
