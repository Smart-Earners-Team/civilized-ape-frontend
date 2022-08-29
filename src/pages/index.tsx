import * as React from "react";
import { HeadFC, Link } from "gatsby";
import ReactPlayer from "react-player";
import heroVideo from "../assets/hero_video.mp4";
import {
  RiArrowDropRightFill,
  RiDiscordFill,
  RiMediumFill,
  RiTelegramFill,
  RiTwitterFill,
} from "react-icons/ri";
import TypistLoop from "../components/Typist";
import Typist from "react-typist";
import Section from "../components/Section";
import { StaticImage } from "gatsby-plugin-image";
import PersonChip from "../components/PersonChip";
import { Navbar } from "../components/Navbar";
import { Fragment } from "react";
import { teams } from "../data/teams";
import Helment from "react-helmet";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { AnchorLink } from "gatsby-plugin-anchor-links";

const IndexPage = () => {
  return (
    <Fragment>
      <Helment>
        <script src="https://sendfox.com/js/form.js" defer async />
      </Helment>
      <Navbar />
      <main>
        <section className="px-4 md:hidden">
          <h1 className="text-2xl font-medium text-[#483635] h-36 flex items-center">
            <TypistLoop interval={0}>
              {[
                "Deep in the heart of Brocéliande Forest roam a troop of 10,000 Apes",
                "",
              ].map((text) => (
                <Typist key={text} startDelay={0}>
                  {text}
                  <Typist.Backspace count={text.length} delay={2000} />
                </Typist>
              ))}
            </TypistLoop>
          </h1>
          <div className="my-6 bg-gray-500 w-full h-0 pb-[56.25%] relative">
            <ReactPlayer
              url={heroVideo}
              playing
              loop
              muted
              width="100%"
              height="100%"
              style={{ position: "absolute", left: 0, top: 0 }}
            />
          </div>
        </section>
        <section className="hidden md:block w-full h-[90vh] hero_video relative">
          <ReactPlayer
            url={heroVideo}
            playing
            loop
            muted
            width="100%"
            height="100%"
          />
          <div className="hidden absolute top-0 left-0 w-full h-full bg-black/50 md:flex justify-center md:pt-20">
            <h1 className="text-7xl font-black text-center max-w-6xl text-[#FEF3C0] text-stroke">
              <TypistLoop interval={0}>
                {[
                  "Deep in the heart of Brocéliande Forest roam a troop of 10,000 Apes",
                  "",
                ].map((text) => (
                  <Typist key={text} startDelay={0}>
                    {text}
                    <Typist.Backspace count={text.length} delay={2000} />
                  </Typist>
                ))}
              </TypistLoop>
            </h1>
          </div>
        </section>
        <Section
          padding
          className="flex flex-col items-start gap-6 sm:gap-2 sm:text-center sm:items-center"
          containerClass="bg-[#F3F3F3]/90"
        >
          <p className="text-xl">
            A community of 10,000 Civilized Apes teeming with life.
          </p>
          <p className="text-xl">
            We symbolize freedom and the possibility of a life truly lived.
          </p>
          <AnchorLink
            to="#join-the-waitlist"
            stripHash
            className="bg-[#4D3937] flex justify-center items-center py-2 px-4 text-white rounded-md text-lg md:mt-6"
          >
            Join Waitlist
            <RiArrowDropRightFill className="text-white" />
          </AnchorLink>
        </Section>
        <Section
          padding
          className="flex flex-col md:flex-row items-start sm:items-center md:items-center gap-10 md:justify-around"
          containerClass="bg-white"
        >
          <div className="relative max-w-full mt-10">
            <Carousel
              preventMovementUntilSwipeScrollTolerance={true}
              swipeScrollTolerance={50}
            >
              <StaticImage
                src="../images/cApe-Town-NFT-7.png"
                alt="cApe Town NFT 7"
                className="max-w-lg"
              />
              <StaticImage
                src="../images/cApe-Town-NFT-9.png"
                alt="cApe Town NFT 9"
                className="max-w-lg"
              />
              <StaticImage
                src="../images/cApe-Town-NFT-99.png"
                alt="cApe Town NFT 99"
                className="max-w-lg"
              />
              <StaticImage
                src="../images/cApe-Town-NFT-999.png"
                alt="cApe Town NFT 999"
                className="max-w-lg"
              />
              <StaticImage
                src="../images/cApe-Town-NFT-9999.png"
                alt="cApe Town NFT 9999"
                className="max-w-lg"
              />
            </Carousel>
          </div>

          <div className="flex flex-col items-start md:gap-2 max-w-lg">
            <h2>Rare Digital Art</h2>
            <p className="text-xl">
              Our genesis collection is made up of 10,000 individually unique
              NFTs and emblazoned with over 200 traits including expression,
              headwear, posture, clothing, and more.
            </p>
          </div>
        </Section>
        <Section
          padding
          className="flex flex-col md:flex-row items-start gap-8 sm:items-center md:items-center md:justify-around"
          containerClass="bg-[#F3F3F3]/90"
        >
          <div className="flex flex-col items-start gap-2 max-w-lg">
            <h2>Building An Alpha Web3 community</h2>
            <StaticImage
              src="../images/image 3.png"
              alt="Group 9"
              className="w-full max-w-lg block md:hidden"
            />
            <p className="text-xl my-5">
              We are on a mission to help you be the best you can be, through
              our in-depth courses and via consultation. Courses including (but
              are not limited to)
            </p>
            <ol className="list-disc text-base list-inside grid grid-cols-1 sm:grid-cols-2 gap-2 font-medium gap-x-5">
              <li>Technical Analysis</li>
              <li>Product Management</li>
              <li>UI/UX Design</li>
              <li>Lead Generation</li>
              <li>Website Development</li>
              <li>Digital Marketing</li>
              <li>Branding</li>
              <li>Money Management</li>
              <li>Content Creation</li>
              <li>Career Development</li>
            </ol>
            <p className="text-xl my-5">
              Become a member and get access to first hand training and
              thousands of freelancing (part time and full-time) home based
              online jobs opportunities.
            </p>
          </div>
          <StaticImage
            src="../images/image 3.png"
            alt="Group 9"
            className="w-full max-w-lg !hidden md:!block"
          />
        </Section>
        <Section
          padding
          className="flex flex-col md:flex-row items-start sm:items-center md:items-center gap-8 md:justify-around"
          containerClass="bg-white"
        >
          <div className="flex flex-col items-center md:gap-2 max-w-screen-md text-center">
            <h2>Member Only Benefits</h2>
            <ol className="space-y-4">
              <li>
                We are creating unique member experiences and utility by forging
                partnerships with projects across the physical and web3 world.
              </li>
              <li>
                cApe NFT holders gain access to the Civilized Ape Town Hall
                where daily Alpha calls, IDO's, Degens, NFT's, Trading Signals,
                Coupon codes for some exclusive courses and events etc. are
                shared.
              </li>
              <li>
                We provide complete support and training to help you succeed and
                utilize your fullest potential.
              </li>
            </ol>
          </div>
        </Section>
        <Section
          padding
          className="flex flex-col items-start gap-8"
          containerClass="bg-[#F3F3F3]/90"
          id="#join-the-waitlist"
        >
          <div className="flex flex-col sm:items-center items-start sm:gap-2 bg-[#ECD980] w-full py-14 px-10 rounded-3xl">
            <h2 className="md:text-4xl text-[#4D3937] font-semibold">
              Join The Waiting List
            </h2>
            <p className="font-normal mb-4">
              Request access by confirming your email address.
            </p>
            <form
              method="post"
              action="https://sendfox.com/form/1v99pd/m80q7v"
              id="m80q7v"
              data-async="true"
              data-recaptcha="true"
              className="flex flex-col space-y-4 w-full max-w-md"
            >
              <input
                type="text"
                id="sendfox_form_name"
                placeholder="First Name"
                name="first_name"
                required
                className="bg-white placeholder-gray-600 font-light p-3 w-full outline-none border-none"
              />
              <input
                type="email"
                id="sendfox_form_email"
                placeholder="Email"
                name="email"
                required
                className="bg-white placeholder-gray-600 font-light p-3 w-full outline-none border-none"
              />
              <label className="text-sm text-opacity-25">
                <input type="checkbox" name="gdpr" value="1" required /> I agree
                to receive email updates and promotions.
              </label>
              <div
                style={{ position: "absolute", left: "-5000px" }}
                aria-hidden="true"
              >
                <input
                  type="text"
                  name="a_password"
                  tabIndex={-1}
                  value=""
                  autoComplete="off"
                />
              </div>
              <button className="bg-[#4D3937] flex justify-center items-center py-2 px-4 text-white rounded-md text-lg md:mt-6">
                REQUEST EARLY ACCESS
              </button>
            </form>
          </div>
        </Section>
        <Section padding containerClass="bg-white">
          <h2 className="md:text-4xl text-[#4D3937] font-semibold text-center">
            cApe Team
          </h2>
          <div className="flex flex-wrap gap-6 justify-center">
            {teams.map((t, i) => (
              <PersonChip
                name={t.name}
                role={t.role}
                socials={t.socials}
                key={i}
                image={t.image}
                aka={t.aka}
              />
            ))}
          </div>
        </Section>
      </main>
      <Section
        className="flex flex-col md:flex-row items-center justify-center gap-4"
        containerClass="bg-[#F3F3F3]/90 py-5"
      >
        <div className="flex justify-center">
          <StaticImage src="../images/icon.png" alt="cApe Logo" width={50} />
        </div>

        <p className="text-gray-700 text-center text-sm">
          A community of 10,000 Civilized Apes teeming with life. We symbolize
          freedom and the possibility of a life truly lived.
        </p>
        {/* <div className="text-center flex justify-center gap-2 font-medium">
          <Link to="#">Explore</Link>
          <Link to="#">Jobs</Link>
        </div> */}
        <div className="flex items-center justify-center gap-2">
          <Link to="https://t.me/CivilizedApeDAO">
            <RiTelegramFill className="w-6 h-6 text-blue-800" />
          </Link>
          <Link to="https://twitter.com/CivilizedApeDAO">
            <RiTwitterFill className="w-6 h-6 text-blue-800" />
          </Link>
          <Link to="https://discord.gg/QZzZHhYGaR">
            <RiDiscordFill className="w-6 h-6 text-blue-800" />
          </Link>
          <Link to="https://medium.com/@civilizedapetown">
            <RiMediumFill className="w-6 h-6 text-blue-800" />
          </Link>
        </div>
      </Section>
    </Fragment>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
