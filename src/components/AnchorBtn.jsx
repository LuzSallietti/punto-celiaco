import React from "react";
import { Link } from "react-router-dom";

const AnchorBtn = ({path, text}) => {
  return (
    <Link
      to={path}
      className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
    >
      {text}
    </Link>
  );
};

export default AnchorBtn;
