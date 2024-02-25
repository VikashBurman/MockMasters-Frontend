import React, { useEffect, useState } from "react";
import coinimage from "../assets/coin.webp";
import axios from "axios";
import { UserContext } from "../context/UserContext.jsx";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import humanizeDuration from "humanize-duration";

const TestSeries = ({ side }) => {
  const { userdetail } = useContext(UserContext);

  const [examsets, setexamsets] = useState();
  const Navigate = useNavigate();

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.post(
          "http://localhost:8000/api/v1/examset/show",
          {
            _id: userdetail._id,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
            withCredentials: true,
          }
        );
        // console.log(response?.data?.data);
        setexamsets(response?.data?.data);
        // console.log(response?.data?.data);
      } catch (error) {
        console.error(error.response.data.message);
      }
    })();
  }, []);

  const startTest = (item) => {
    // check wallet
    item.isResume = false;
    sessionStorage.setItem("Data", JSON.stringify(item));
    Navigate("/test/marking-scheme");
  };

  const resumeTest = (item) => {
    // console.log(item);
    sessionStorage.setItem("Data", JSON.stringify(item));
    sessionStorage.setItem("startTest_id", item.startTest_id);
    Navigate("/test/marking-scheme");
  };

  return (
    <>
      <section
        id="test-section"
        className={`my-10  ${side ? " lg:blur-none blur-sm" : " "}`}
      >
        <div className="flex flex-col  justify-center items-center space-y-6">
          {examsets?.map((item, key) => (
            <div
              key={key}
              id={item.qpname}
              className=" rounded-lg relative overflow-hidden bg-white shadow-md  lg:w-[60%] md:w-[70%] w-[100%] "
            >
              <div className="absolute right-0 top-0 h-16 w-16">
                <div
                  className={
                    item.paperprice === 0
                      ? "absolute transform rotate-45 bg-yellow-400 text-center text-white font-semibold py-1 right-[-35px] top-[32px] w-[170px]"
                      : "absolute transform flex items-center gap-1 justify-center rotate-45 bg-gray-600 text-center text-white font-semibold py-1 right-[-35px] top-[32px] w-[170px]"
                  }
                >
                  {item.paperprice === 0 ? (
                    "FREE"
                  ) : (
                    <>
                      {item.paperprice}
                      <img
                        src={coinimage}
                        alt="coinimage"
                        className="h-4 w-4"
                      ></img>
                    </>
                  )}
                </div>
              </div>
              <h5 className=" border-neutral-100 px-6 py-3 md:text-xl text-sm font-medium leading-tight">
                {item.qpname}
              </h5>
              <div className="p-5 flex  md:text-lg text-xs">
                <p className="px-1">{item.noofquestions} Questions</p>
                <p className="px-1 text-gray-400">|</p>
                <p className="px-1">{item.totalmarks} marks</p>
                <p className="px-1 text-gray-400">|</p>
                <p className="px-1">
                  {humanizeDuration(item.examinfo?.duration)}
                </p>
              </div>
              <div className="mx-6 mb-3 flex items-center justify-between">
                <div>
                  <button
                    onClick={() => startTest(item)}
                    type="button"
                    className="inline-block rounded text-white bg-blue-500 hover:bg-blue-600 border-blue-500 border-2 px-4 py-2 text-sm font-medium leading-normal"
                  >
                    {item.isResume ? "Start new test" : "Start Test"}
                  </button>
                  {item.isResume ? (
                    <>
                      {" "}
                      <button
                        onClick={() => resumeTest(item)}
                        type="button"
                        className="inline-block rounded text-blue-500 bg-white border-blue-500 border-2 hover:bg-blue-600 hover:text-white px-3 py-[0.4rem] ml-2 text-sm font-medium leading-normal"
                      >
                        Resume Test
                      </button>
                    </>
                  ) : (
                    ""
                  )}
                </div>
                <div className="bg-green-300 w-max px-2  text-green-900 rounded-2xl text-xs font-semibold flex items-center h-min py-[5px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5 mr-1"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 11.25v8.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 1 0 9.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1 1 14.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z"
                    />
                  </svg>
                  {item.paperprice === 0
                    ? "10% of marks rewarded as coins"
                    : "15% of marks rewarded as coins"}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default TestSeries;
