import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { posts } from "../data/posts";

const Post = () => {
  const { postId } = useParams();
  const post = posts.find((post) => post.id === parseInt(postId));

  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Add state for login status

  const handleCommentSubmit = () => {
    const newComment = {
      text: commentText,
    };
    setComments([...comments, newComment]);
    setCommentText("");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleCommentSubmit();
    }
  };

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
          <p className="mt-4 pb-5">{post.content}</p>
        </div>
        <hr className="pt-7 p-5" />

        {/* Comment Section */}
        <div className="mt-2">
          <h3 className="text-2xl font-bold mb-4">댓글</h3>
          <div className="mt-4 flex items-center">
            <input
              type="text"
              placeholder={
                isLoggedIn ? "댓글을 입력하세요." : "로그인 후 입력 가능합니다"
              }
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
              onKeyPress={handleKeyPress}
              className="border rounded-md p-2 mr-2 flex-grow h-[80px]"
            />
            <button
              onClick={handleCommentSubmit}
              className="bg-green-600 border-none text-white p-2 rounded-md"
            >
              댓글 달기
            </button>
          </div>
          <div>
            {/* Display existing comments */}
            {comments.map((comment, index) => (
              <div key={index} className="mt-7 mb-4">
                로그인 후 확인 가능합니다.
              </div>
            ))}
          </div>
          {/* Comment Form */}
        </div>
      </div>
    </div>
  );
};

export default Post;
