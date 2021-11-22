import React from "react";
import { useHistory } from "react-router-dom";

const Work = props => {
    const history = useHistory();
  const { currentWorkContent } = props;


  return (
    currentWorkContent && (
      <div className="work-content">
        <button onClick={() => history.goBack()}>Go Back</button>
        <h3 className="work-title-content">{currentWorkContent.title}</h3>
        <div
          className="work-text-content"
          dangerouslySetInnerHTML={{ __html: currentWorkContent.text } || ""}
        />
      </div>
    )
  );
};

export default Work;
