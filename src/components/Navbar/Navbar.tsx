import React, { useCallback, useState } from "react";
import Section from "../Section";
import cls from "classnames";
import { BiCaretDown } from "react-icons/bi";
import { navigationItems } from "./data";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const toggleMenu: React.MouseEventHandler<HTMLButtonElement> = useCallback(
    (e) => {
      e.stopPropagation();
      setOpen((p) => !p);
    },
    []
  );

  const closeMenu = useCallback(() => setOpen(false), []);

  return (
    <Section
      containerClass="bg-transparent w-full z-50"
      className="!max-w-screen-2xl bg-white shadow shadow-gray-400/20 md:bg-[#09030B] md:text-white"
    >
      <div className="flex flex-col py-6 px-4 md:items-center md:gap-6 md:flex-row md:px-6">
        <div className="flex flex-row items-center justify-between pb-2">
          <div>
            <StaticImage
              src="../../images/icon.png"
              alt="cApe Logo"
              width={50}
              placeholder="blurred"
            />
          </div>
          <button
            className="rounded-lg md:hidden p-1 hover:bg-primary-200 focus:outline-none
              focus:bg-primary-200 hover:text-primary focus:text-primary"
            onClick={toggleMenu}
          >
            <svg fill="currentColor" viewBox="0 0 20 20" className="w-8 h-8">
              {/* bars */}
              <path
                className={open ? "hidden" : "inline-block"}
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
              {/* cancel */}
              <path
                className={open ? "inline-block" : "hidden"}
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <nav className={`${open ? "block" : "hidden"} md:block mt-4 border-t`}>
          <ul className="flex flex-col gap-1 flex-grow pb-4 md:pb-0 md:flex-row md:items-center">
            {navigationItems.map((nav) => {
              if (nav.children) {
                return (
                  <li
                    key={nav.id}
                    className="inline-block mt-2 md:mt-0 text-lg"
                  >
                    <button
                      className="!px-4 !py-2 !font-normal !bg-transparent !rounded-lg
                  !text-primary-600 hover:!text-primary-800 focus:!text-primary-800
                  hover:!bg-primary-100 focus:!bg-primary-100 focus:!outline-none !text-base
                  flex justify-between items-center gap-2 group relative mx-1 w-full md:w-auto"
                    >
                      {nav.title}
                      <BiCaretDown />
                      <div
                        className="invisible group-hover:visible top-full shadow-lg absolute bg-white
                        py-3 flex flex-col w-full left-0 md:w-52 text-left border rounded-sm"
                      >
                        {nav.children.map((n) => (
                          <Link
                            to={n.href}
                            key={n.id}
                            className="!px-4 !block !py-2 !font-normal !bg-transparent
                          !text-primary-600 hover:!text-primary-800 focus:!text-primary-800
                          hover:!bg-primary-100 focus:!bg-primary-100 focus:!outline-none !text-base"
                            onClick={closeMenu}
                          >
                            {n.title}
                          </Link>
                        ))}
                      </div>
                    </button>
                  </li>
                );
              }
              return (
                <li key={nav.id} className="inline-block mt-2 md:mt-0 text-lg">
                  <Link
                    to={nav.href}
                    className="!block !py-2 !font-normal !bg-transparent !rounded-lg
                  !text-primary-600 hover:!text-primary-800 focus:!text-primary-800
                  hover:!bg-primary-100 focus:!bg-primary-100 focus:!outline-none !text-base"
                    onClick={closeMenu}
                  >
                    {nav.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </Section>
  );
}
