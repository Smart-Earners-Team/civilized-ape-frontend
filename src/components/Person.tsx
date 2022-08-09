import React from "react";
import { RiGithubFill, RiTwitterFill } from "react-icons/ri";

function Person() {
  return (
    <div className="w-[45%] border-b-4 border-gray-300 flex flex-col gap-4 justify-center items-center py-4 text-center rounded-md">
      <div className="w-24 h-24 rounded-full bg-gray-200"></div>
      <div className="flex flex-col justify-center">
        <p className="font-medium">Mr A</p>
        <p className="text-gray-500">Developer</p>
        <div className="flex items-center justify-center gap-2">
          <RiGithubFill className="w-6 h-6 text-gray-500" />
          <RiTwitterFill className="w-6 h-6 text-gray-500" />
        </div>
      </div>
    </div>
  );
}

export default Person;
