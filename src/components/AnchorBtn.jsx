import React from "react";
import { Link } from "react-router-dom";

const AnchorBtn = ({path, text}) => {
  return (
    <Link
      to={path}
      className="rounded-full w-auto bg-indigo-100 mx-1 my-1 px-3.5 py-2.5 text-sm font-semibold text-gray-600 shadow-sm hover:bg-indigo-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
    >
      {text}
    </Link>
  );
};

export default AnchorBtn;
