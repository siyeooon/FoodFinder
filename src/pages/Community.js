// src/components/Community.js
import React from "react";
import { Link } from "react-router-dom";
import { posts } from "../data/posts";

const Community = () => {
  return (
    <div className="font-['pretendard'] container mx-auto p-4">
      <h1 className="text-3xl font-semibold mb-4">커뮤니티</h1>

      {posts.map((post) => (
        <div key={post.id} className="mb-4 border rounded-md p-4">
          <Link to={`/post/${post.id}`}>
            <div className="flex items-center mb-2">
              <img
                src={post.profile}
                alt="Profile"
                className="w-12 h-12 inline-block rounded-full mr-4"
              />

              <div>
                <span className="font-bold block">{post.title}</span>
                <span className="text-gray-500">
                  {post.name} | {post.date} {/* Add actual nickname and date */}
                </span>
              </div>
            </div>
          </Link>
          {post.image && (
            <img
              src={post.image}
              alt="Recipe"
              className="lg:hidden w-full lg:h-[100px] object-cover mb-2 rounded-md"
            />
          )}
          <div className="justify-end text-right">
            <span className="text-red-500 bottom-0 p-2">
              [댓글 {post.comments}]
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Community;
