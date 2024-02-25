import React from "react";
import mocktestimg from "../assets/mockup1.png";
import mobile1 from "../assets/mobile1.jpg";
import mobile2 from "../assets/mobile2.jpg";
import mobile3 from "../assets/mobile3.jpg";
import sideimg from "../assets/testbookside.svg";

const Mockup = () => {
  return (
    <>
      <section
        id="mockup-section"
        className=" flex flex-col items-center justify-center  mb-18"
      >
        <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
          <div className="md:grid md:grid-cols-2 md:items-center md:gap-12 xl:gap-32">
            <div>
              <img className="rounded-xl" src={sideimg} alt="leftsideimage" />
            </div>

            <div className="mt-5 sm:mt-10 lg:mt-0">
              <div className="space-y-6 sm:space-y-8">
                <div className="space-y-2 md:space-y-4">
                  <h2 className="font-bold text-3xl lg:text-4xl text-gray-800 ">
                    Seamless exam prep, innovative solutions, and collaborative
                    learning excellence.
                  </h2>
                  <p className="text-gray-500">
                    MockMaster redefines exam preparation with tailored
                    solutions, advanced features, and a collaborative community,
                    fostering an environment for elevated learning and success.
                  </p>
                </div>

                <ul role="list" className="space-y-2 sm:space-y-4">
                  <li className="flex space-x-3">
                    <span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600 ">
                      <svg
                        className="flex-shrink-0 size-3.5"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span>

                    <span className="text-sm sm:text-base text-gray-500">
                      <span className="font-bold">Streamlined Test </span>Designing
                    </span>
                  </li>

                  <li className="flex space-x-3">
                    <span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600">
                      <svg
                        className="flex-shrink-0 size-3.5"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span>

                    <span className="text-sm sm:text-base text-gray-500">
                      Robust <span className="font-bold">Features </span>
                    </span>
                  </li>

                  <li className="flex space-x-3">
                    <span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600">
                      <svg
                        className="flex-shrink-0 size-3.5"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span>

                    <span className="text-sm sm:text-base text-gray-500">
                      Exceptional User Experience
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      <div className="flex flex-col justify-center items-center">
        <div className="bg-orange-100 pt-[64px] pr-[146px]  pl-[146px] rounded-xl rela">
          <div className="flex flex-col justify-center items-center mb-8">
            <h2 className="text-2xl font-bold text-gray-800 uppercase">
              Ace Your Tests
            </h2>
            <p className=" text-gray-800">
              Boost your success with our free mock tests.
            </p>
          </div>
          <figure className="relative z-[1] max-w-full w-[60rem] h-auto rounded-b-lg">
            <div className="relative flex items-center max-w-[60rem] bg-gray-800 rounded-t-lg py-2 px-24 ">
              <div className="flex space-x-1 absolute top-2/4 start-4 -translate-y-1">
                <span className="w-2 h-2 bg-gray-600 rounded-full "></span>
                <span className="w-2 h-2 bg-gray-600 rounded-full "></span>
                <span className="w-2 h-2 bg-gray-600 rounded-full"></span>
              </div>
              <div className="flex justify-center items-center w-full h-full bg-gray-700 text-[.25rem] text-gray-400 rounded-sm sm:text-[.5rem] ">
                MockMaster
              </div>
            </div>

            <div className="bg-gray-800 rounded-b-lg">
              <img
                className="max-w-full h-auto"
                src={mocktestimg}
                alt="laptopimage"
              />
            </div>
          </figure>
        </div>

        {/* //mobile images */}

        <div className="flex justify-between gap-7">
          <div className="bg-blue-100 pt-16 pr-11 pl-11 mt-12 rounded-xl h-min">
            <div className="flex flex-col justify-center items-center mb-8">
              <h2 className="text-2xl font-bold text-gray-800 uppercase">
                Ace Your Tests
              </h2>
              <p className=" text-gray-800">
                Boost your success with our free mock tests.
              </p>
            </div>
            <figure className="mx-auto max-w-full w-60 h-auto">
              <div className="p-1.5 bg-gray-800 rounded-tl-2xl rounded-tr-2xl pb-0 ">
                <img
                  className="max-w-full h-auto rounded-tl-2xl rounded-tr-2xl border-0"
                  src={mobile1}
                  alt="mobile1image"
                />
              </div>
            </figure>
          </div>
          <div className="bg-green-100 pt-16 pr-11 pl-11 mt-12 rounded-xl h-min">
            <div className="flex flex-col justify-center items-center mb-8">
              <h2 className="text-2xl font-bold text-gray-800 uppercase">
                Ace Your Tests
              </h2>
              <p className=" text-gray-800">
                Boost your success with our free mock tests.
              </p>
            </div>
            <figure className="mx-auto max-w-full w-60 h-auto">
              <div className="p-1.5 bg-gray-800 rounded-tl-2xl rounded-tr-2xl pb-0 ">
                <img
                  className="max-w-full h-auto rounded-tl-2xl rounded-tr-2xl border-0"
                  src={mobile2}
                  alt="mobile1image"
                />
              </div>
            </figure>
          </div>
          
          <div className="bg-pink-100 pt-16 pr-11 pl-11 mt-12 rounded-xl h-min ">
            <div className="flex flex-col justify-center items-center mb-8">
              <h2 className="text-2xl font-bold text-gray-800 uppercase">
                Ace Your Tests
              </h2>
              <p className=" text-gray-800">
                Boost your success with our free mock tests.
              </p>
            </div>
            <figure className="mx-auto max-w-full w-60 h-auto">
              <div className="p-1.5 bg-gray-800 rounded-tl-2xl rounded-tr-2xl pb-0 ">
                <img
                  className="max-w-full h-auto rounded-tl-2xl rounded-tr-2xl border-0"
                  src={mobile3}
                  alt="mobile3image"
                />
              </div>
            </figure>
          </div>
        </div>
        </div>
      </section>
    </>
  );
};

export default Mockup;
