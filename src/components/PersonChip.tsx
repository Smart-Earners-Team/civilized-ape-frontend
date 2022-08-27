import React from "react";
import { RiGithubFill, RiTwitterFill } from "react-icons/ri";
import type { Person } from "./types";

function PersonChip({ name, role, socials, aka, image }: Person) {
  return (
    <div
      className="w-[45%] sm:w-[30%] lg:w-[18%] shadow-md border-b-4 border-gray-300 flex flex-col gap-4 justify-center items-center
        py-4 text-center rounded-md lg:gap-6"
    >
      <div className="w-24 h-24 rounded-full bg-[#4D3937] p-0.5">
        <img
          src={`/team-headshots/${image}`}
          alt=""
          className="w-full h-full rounded-full"
        />
      </div>
      <div className="flex flex-col justify-center items-center">
        <p className="font-medium">{name}</p>
        <p className="text-gray-500 text-sm">{role}</p>
        {socials.length > 0 && (
          <div className="flex items-center justify-center gap-2">
            <RiGithubFill className="w-6 h-6 text-gray-500" />
            <RiTwitterFill className="w-6 h-6 text-gray-500" />
          </div>
        )}
      </div>
    </div>
  );
}

export default PersonChip;
