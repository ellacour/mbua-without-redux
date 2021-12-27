import React, { useState, useEffect } from "react";
import axios from "axios";
import ReactPaginate from "react-paginate";

import "./feed.css";
import PostsFeed from "./postsFeed"

const Feed = props => {
  const { itemsPerPage } = props;

  const [posts, setPosts] = useState([]);
  const [itemOffset, setItemOffset] = useState(0);
  const [pageCount, setPageCount] = useState(0);
  const [currentPost, setCurrentPost] = useState([])

  
  useEffect(() => {
    let unmounted = false;
    const endOffset = itemOffset + itemsPerPage;
    const getFeedPost = async () => {
      const response = await axios(
        `https://cms.mbu-a.com/wp-json/wp/v2/posts`
      );
      if (!unmounted) {
        setPosts(response.data);
        setCurrentPost(() => response.data.slice(itemOffset, endOffset))
        setPageCount(Math.ceil(response.data.length / itemsPerPage));
      }
    };
    getFeedPost();

    return () => (unmounted = true);

  }, [itemOffset, itemsPerPage]);
  
  const handlePageClick = event => {
    const newOffset = (event.selected * itemsPerPage) % posts.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <div id="Feed">
    <PostsFeed feedPosts={currentPost}/>
      <ReactPaginate
        id="feed-pagination"
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
      />
    </div>
  );
};

export default Feed;
