import React from "react";
import Link from "next/link";

const Navigation = () => {
  return (
    <nav className="bg-white shadow-sm border-b border-gray-200">
      <div className="w-full px-4">
        <div className="flex justify-between items-center h-16">
          {/* logo */}

          <div className="shrink-0">
            <Link href={"/"} className="text-xl font-bold text-gray-800">
              MyWebsite
            </Link>
          </div>

          {/* Navigations links */}

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link
                href={"/"}
                className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-color"
              >
                Home
              </Link>

              <Link
                href={"/about"}
                className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-color"
              >
                About
              </Link>

              <Link
                href={"/contact"}
                className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-color"
              >
                Contact
              </Link>
            </div>
          </div>

          <div className="md:hidden">
            <button className="text-gray-600 hover:text-gray-900 p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="25"
                height="100"
                viewBox="0 0 50 50"
              >
                <path d="M 3 9 A 1.0001 1.0001 0 1 0 3 11 L 47 11 A 1.0001 1.0001 0 1 0 47 9 L 3 9 z M 3 24 A 1.0001 1.0001 0 1 0 3 26 L 47 26 A 1.0001 1.0001 0 1 0 47 24 L 3 24 z M 3 39 A 1.0001 1.0001 0 1 0 3 41 L 47 41 A 1.0001 1.0001 0 1 0 47 39 L 3 39 z"></path>
              </svg>
            </button>
          </div>
        </div>

        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-0.5 sm:px-3  flex flex-col">
              <Link
                href={"/"}
                className="text-gray-600 hover:text-gray-900 px-3 py-2 text-base font-medium transition-color"
              >
                Home
            </Link>
            
            <Link
                href={"/about"}
                className="text-gray-600 hover:text-gray-900 px-3 py-2 text-base font-medium transition-color"
              >
                About
            </Link>
            
            <Link
                href={"/contact"}
                className="text-gray-600 hover:text-gray-900 px-3 py-2 text-base font-medium transition-color"
              >
                Contact
            </Link>
          </div>
        </div>

      </div>
    </nav>
  );
};

export default Navigation;
