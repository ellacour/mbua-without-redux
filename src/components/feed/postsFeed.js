import React from "react";

const PostsFeed = props => {
  const { feedPosts } = props;
  return (
    <div className="feed-content">
      {feedPosts &&
        feedPosts.map(post => (
          <div key={post.id}>
            <div className="feed-date" >{post.date}</div>
            <h3>{post.title.rendered}</h3>
            <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
          </div>
        ))}
      {feedPosts.length === 0 && <h3>Please wait</h3>}
    </div>
  );
};

export default PostsFeed;
