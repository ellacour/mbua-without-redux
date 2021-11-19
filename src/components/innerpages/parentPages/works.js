import React, { useState, useEffect } from "react";
import axios from "axios";

import WorksMenu from "../../navigations/worksMenu";

const Works = props => {
  const { setCurrentSlider } = props;
  const [worksListing, setWorksListing] = useState([]);
  const [currentWorkContent, setCurrentWorkContent] = useState("");

  useEffect(() => {
    let unmounted = false;
    const getWorksListing = async () => {
      const response = await axios("https://cms.mbu-a.com/wp-json/wp/v2/work");
      if (!unmounted) {
        console.log(response.data);
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
    }
      setCurrentWorkContent(workContent);
      setCurrentSlider(content.acf.photos);
    }  
  };

  // const worksList = (
  //   <ul id="works-listing">
  //     {worksListing.map(work => {
  //       if (work.acf.project_is_accessible) {
  //         return (
  //           <li className="work-menu" key={work.id}>
  //             <h5>{work.title.rendered}</h5>
  //           </li>
  //         );
  //       } else
  //         return (
  //           <li
  //             className="protected work-menu"
  //             key={work.id}
  //             onClick={() => false}
  //           >
  //             <h5>{work.title.rendered}</h5>
  //           </li>
  //         );
  //     })}
  //   </ul>
  // );

  return (
    <div>
      {currentWorkContent ? (
        <h3>{currentWorkContent.title}</h3>
      ) : (
        <WorksMenu
          worksListing={worksListing}
          getCurrentWorkContent={getCurrentWorkContent}
        />
      )}
    </div>
  );
};

export default Works;
