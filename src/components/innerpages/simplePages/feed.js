import React, { useState, useEffect } from "react";
import axios from "axios";

import "./feed.css";
import PaginatedItems from "../../feed-pagination/PaginatedItems";

const Feed = () => {
  const [feedData, setFeedData] = useState([]);
  const [authors, setAuthors] = useState([]);
  const [currentFeed, setCurrentFeed] = useState([]);

  useEffect(() => {
    let unmounted = false;
    const getFeedData = async () => {
      const response = await axios("https://cms.mbu-a.com/wp-json/wp/v2/posts");
      if (!unmounted) {
        setFeedData(response.data);
        setCurrentFeed(response.data);
      }
    };
    const getAuthors = async () => {
      const response = await axios("https://cms.mbu-a.com/wp-json/wp/v2/users");
      if (!unmounted) {
        setAuthors(response.data);
      }
    };
    getAuthors();
    getFeedData();
    return () => (unmounted = true);
  }, []);

  const getCurrentPost = selectedPost => {
    setCurrentFeed(selectedPost);
  };

  const displaySelectedPosts = () => {
    return (
      <div>
        {currentFeed.length > 0 &&
          currentFeed.map(item => (
            <div key={item.id}>
              <h3>{item.title.rendered}</h3>
              <div
                dangerouslySetInnerHTML={{ __html: item.content.rendered }}
              />
            </div>
          ))}
        {currentFeed.length === 0 && <h3>Please wait</h3>}
      </div>
    );
  };

  return (
    <div id="Feed">
      {currentFeed.length > 1 && displaySelectedPosts()}
      {feedData.length > 1 && (
        <PaginatedItems
          itemsPerPage={2}
          feedData={feedData}
          getCurrentPost={getCurrentPost}
        />
      )}
    </div>
  );
};

export default Feed;
