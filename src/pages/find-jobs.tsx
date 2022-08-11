import { StaticImage } from "gatsby-plugin-image";
import React, { Fragment } from "react";
import { Navbar } from "../components/Navbar";
import Section from "../components/Section";
import { MdLocationOn } from "react-icons/md";
import { Link } from "gatsby";
import { RiFacebookFill, RiTwitterFill } from "react-icons/ri";

function FindJobsPage() {
  return (
    <Fragment>
      <Navbar />
      <section className="w-full h-[90vh] relative">
        <StaticImage
          src="../images/pexels-vlada-karpovich-4050320.jpg"
          alt=""
          className="w-full h-full"
        />
        <div
          className="absolute top-0 left-0 w-full h-full bg-black/70 md:flex justify-center px-6 md:pt-20 flex flex-col
            gap-4 items-start md:items-center md:text-center"
        >
          <h1 className="text-4xl font-black text-white">
            Tech Job Opportunities
          </h1>
          <p className="text-lg text-white font-light max-w-screen-md">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In mauris
            elit bibendum sem nisi ultrices in nisi. Et egestas nunc, lacus
            vestibulum enim accumsan elit nibh. Integer felis.
          </p>
          <button className="uppercase bg-green-700 p-3 rounded-md font-medium text-white">
            Submit a Job
          </button>
        </div>
      </section>
      <Section padding>
        <h2>Search for a job near you</h2>
      </Section>
      <Section padding containerClass="bg-[#FEF3C0]">
        <span className="bg-[#FAED7B] text-[#4F2B01] p-3 rounded-r-full text-lg font-medium">
          Featured Lists
        </span>
        <div className="my-6 flex flex-row overflow-x-auto gap-4">
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
        </div>
      </Section>
      <Section padding>
        <span className="bg-[#FAED7B] text-[#4F2B01] p-3 rounded-r-full text-lg font-medium">
          Others
        </span>
        <div className="my-6 flex flex-col md:flex-row overflow-x-auto gap-6">
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
        </div>
      </Section>
      <Section
        padding
        className="flex flex-col items-stretch gap-2"
        containerClass="bg-[#F3F3F3]/90"
      >
        <h3 className="md:text-4xl font-semibold text-center text-black">
          cApe
        </h3>
        <p className="text-gray-700 text-center text-sm">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, natus.
          Itaque laudantium.
        </p>
        <div className="text-center flex justify-center gap-2 font-medium">
          <Link to="#">Explore</Link>
          <Link to="#">Jobs</Link>
        </div>
        <div className="flex items-center justify-center gap-2">
          <RiFacebookFill className="w-6 h-6 text-blue-800" />
          <RiTwitterFill className="w-6 h-6 text-blue-800" />
        </div>
      </Section>
    </Fragment>
  );
}

const JobCard = () => {
  return (
    <div className="bg-white p-6 w-full min-w-full md:min-w-0 rounded-xl flex flex-col gap-2 shadow-md border md:max-w-sm">
      <div className="flex justify-between items-center mb-3">
        <div className="flex items-center gap-1">
          <MdLocationOn size={24} className="text-gray-600" />
          <span>Nigeria</span>
        </div>
        <p className="text-[#8B7D00]">#Featured</p>
      </div>
      <p className="text-3xl font-medium text-gray-700">Moderator</p>
      <p className="text-lg font-normal text-gray-500 -mt-3">
        The Kryptolite Universe
      </p>
      <p className="text-xl text-gray-700 mb-2">
        $ 500<span className="text-sm text-gray-500">/month</span>
      </p>
      <div className="flex items-center gap-2 flex-wrap">
        {new Array(3).fill("").map((e, i) => (
          <div
            key={i + 1}
            className="bg-[#E19A46] text-[#4F2B01] text-xs font-bold p-1 rounded-md inline-block"
          >
            #Javascript
          </div>
        ))}
      </div>
    </div>
  );
};
export default FindJobsPage;
