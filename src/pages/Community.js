// src/components/Community.js
import React from "react";

const Community = () => {
  const posts = [
    {
      id: 1,
      title: "저만큼 요리 잘하는 사람 없는듯;;",
      image:
        "https://semie.cooking/image/board/cooking/hz/ru/etimxdlg/80667941ymwo.jpg",
      comments: 5,
      name: "박시연",
      date: "2023-11-25",
    },
    {
      id: 2,
      title: "저메추",
      image:
        "https://img.freepik.com/premium-vector/gallery-simple-icon-vector-image-or-picture-sign-in-neumorphism-style-for-mobile-app-or-web-ui-vector-eps-10_532800-801.jpg",
      comments: 10,
      name: "임소연",
      date: "2023-11-25",
    },
  ];

  return (
    <div className="font-['pretendard'] container mx-auto p-4">
      {posts.map((post) => (
        <div key={post.id} className="mb-4 border rounded-md p-4">
          <div className="flex items-center mb-2">
            <img
              src={post.image}
              alt="Recipe"
              className="w-12 h-12 inline-block rounded-full mr-4"
            />
            <div>
              <span className="font-bold block">{post.title}</span>
              <span className="text-gray-500">
                {post.name} | {post.date} {/* Add actual nickname and date */}
              </span>
            </div>
          </div>
          {post.image && (
            <img
              src={post.image}
              alt="Recipe"
              className="w-full h-48 object-cover mb-2 rounded-md"
            />
          )}
          <div>
            <span className="text-red-500">[{post.comments} 댓글]</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Community;
