import * as React from "react";
import { HeadFC } from "gatsby";
import { Fragment } from "react";
import { Navbar } from "../../components/Navbar";
import Section from "../../components/Section";
import { MdLocationOn } from "react-icons/md";
import { RiBookMarkFill } from "react-icons/ri";

const IndexPage = () => {
  return (
    <Fragment>
      <Navbar />
      <Section padding className="flex justify-between gap-4">
        <div className="w-full">
          <div>#Featured</div>

          <h1>Regional Marketing Manager</h1>
          <div className="font-bold text-xl -mt-5">at Kryptolite</div>
          <Section
            padding
            className="md:hidden w-full flex flex-col items-start gap-3"
          >
            <button className="uppercase bg-green-700 p-3 rounded-md font-medium text-white">
              Apply Now
            </button>
            <button className="uppercase border-2 border-[#B35048] text-[#B35048] p-3 rounded-md font-medium flex justify-between items-center">
              <RiBookMarkFill size={24} /> BOOKMARK FOR LATER
            </button>
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
            <div className="flex flex-row items-center gap-2">
              <p className="text-xl text-gray-700">
                $ 500<span className="text-sm text-gray-500">/month</span>
              </p>
              <div className="flex items-center gap-1">
                <MdLocationOn size={24} className="text-gray-600" />
                <span>Nigeria</span>
              </div>
            </div>
          </Section>

          <div>
            <h2>About Company</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              urna, nunc eget sollicitudin convallis mauris at gravida quis. Sem
              in tristique amet et ultricies urna eu. Nunc turpis faucibus lacus
              vel. Augue et amet risus consectetur congue dignissim. Turpis
              lorem suspendisse etiam diam vel commodo. Quis neque euismod
              felis, vel arcu commodo eget. In sit viverra arcu ipsum nam mauris
              amet odio arcu. Ut dignissim odio lacus turpis magnis id
              hendrerit. Condimentum amet malesuada aliquet sit arcu platea
              lectus amet. Duis in id sit egestas risus in ultricies lacinia
              libero. Duis ante pretium duis orci sed ullamcorper ut. Nullam in
              sit sed faucibus et eget.
            </p>
          </div>
          <div>
            <h2>Job Description</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              urna, nunc eget sollicitudin convallis mauris at gravida quis. Sem
              in tristique amet et ultricies urna eu. Nunc turpis faucibus lacus
              vel. Augue et amet risus consectetur congue dignissim. Turpis
              lorem suspendisse etiam diam vel commodo. Quis neque euismod
              felis, vel arcu commodo eget. In sit viverra arcu ipsum nam mauris
              amet odio arcu. Ut dignissim odio lacus turpis magnis id
              hendrerit. Condimentum amet malesuada aliquet sit arcu platea
              lectus amet. Duis in id sit egestas risus in ultricies lacinia
              libero. Duis ante pretium duis orci sed ullamcorper ut. Nullam in
              sit sed faucibus et eget.
            </p>
          </div>
        </div>
        <Section
          padding
          className="hidden w-full md:flex flex-col items-start gap-3 flex-none"
        >
          <button className="uppercase bg-green-700 p-3 rounded-md font-medium text-white">
            Apply Now
          </button>
          <button
            className="uppercase border-2 border-[#B35048] text-[#B35048] p-3 rounded-md font-medium flex
            justify-between items-center text-base gap-2"
          >
            <RiBookMarkFill size={24} /> BOOKMARK
          </button>
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
          <div className="flex flex-row items-center gap-2">
            <p className="text-xl text-gray-700">
              $&nbsp;500<span className="text-sm text-gray-500">/month</span>
            </p>
            <div className="flex items-center gap-1">
              <MdLocationOn size={24} className="text-gray-600" />
              <span>Nigeria</span>
            </div>
          </div>
        </Section>
      </Section>
    </Fragment>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Single Job View</title>;
