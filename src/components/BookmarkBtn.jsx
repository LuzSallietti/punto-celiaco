import React from "react";

const BookmarkBtn = () => {
  return (
    <div className="group h-12 w-12 opacity-75 rounded-full bg-indigo-200 absolute right-0 mr-2 mt-2 flex justify-center items-center  hover:bg-gray-50 dark:hover:bg-gray-800">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6  text-gray-500 dark:text-gray-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-500">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
        />
      </svg>
    </div>
  );
};

export default BookmarkBtn;
