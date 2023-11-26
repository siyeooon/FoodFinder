import React from "react";
import { useParams } from "react-router-dom";
import { posts } from "../data/posts";

const Post = () => {
  const { postId } = useParams();

  const post = posts.find((post) => post.id === parseInt(postId));

  if (!post) {
    return <div>Error: Post not found</div>;
  }

  return (
    <div className="font-['pretendard'] container mx-auto p-4">
      <h1 className="text-3xl font-semibold mb-4">커뮤니티</h1>
      <hr />

      <div className="container mx-auto mt-8">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-xl font-bold mb-2 ">{post.title}</h2>
          {post.name} | {post.date}
          <img
            src={post.image}
            alt="Post"
            className="pt-5 w-full h-full object-cover rounded-md mb-4"
          />
          <p className="text-gray-600"></p>
          <p className="mt-4">{post.content}</p>
        </div>
        <hr className="pt-5 p-5" />
      </div>
    </div>
  );
};

export default Post;
