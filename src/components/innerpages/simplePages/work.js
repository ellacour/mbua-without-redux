import React from "react";
import { useHistory } from "react-router-dom";

import blackPlus from "../../../img/mbuA_+ Graphic_black.png";

const Work = props => {
  const history = useHistory();
  const { currentWorkContent, currentPage } = props;

  const clickButtonHandler = () => {
    const workButton = document.getElementById("plus-button-work");
    workButton.classList.add("active");
    window.setTimeout(() => {
      currentPage === "mbuA" ? history.push("/mbua/work") : history.goBack();
    }, 1000);
  };

  return (
    currentWorkContent && (
      <div className="work-details">
        <div className="work-header">
          <h3 className="work-title-content">{currentWorkContent.title}</h3>
          <button
            id="plus-button-work"
            className="return-button"
            onClick={clickButtonHandler}
          >
            <img className="return-plus" src={blackPlus} alt="button"></img>
          </button>
        </div>
        <div
          className="work-content"
          dangerouslySetInnerHTML={{ __html: currentWorkContent.text } || ""}
        />
      </div>
    )
  );
};

export default Work;
