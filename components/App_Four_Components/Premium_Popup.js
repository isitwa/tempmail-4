import React from "react";
import { Fragment, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../public/images/brand-logo.png";
import Login_Popup from "./Login_Popup";
export default function Premium_Popup({ setOpenModal }) {
  const [popOpen, setpopOpen] = useState(false);
  return (
    <>
      {popOpen && <Login_Popup setpopOpen={setpopOpen} />}
      {/*  */}
      <div className="fixed top-0 bottom-0 left-0 right-0   z-[100]">
        <div className=" absolute top-0 bottom-0 left-0 right-0 bg-gray-700 opacity-90 z-[101]"></div>
        <div className=" absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] px-2 pt-3 pb-5 z-[102] w-[90%] md:w-[480px] bg-gray-900 rounded">
          <div className="flex items-center justify-between px-4 py-2">
            <div className="flex gap-3">
              <button
                onClick={() => {
                  setpopOpen(true);
                }}
                className="text-[13px] bg-yellow-500 text-gray-800 rounded-full py-[6px] px-[16px]"
              >
                Login
              </button>
            </div>
            <div className="flex gap-2 items-center">
              <button
                onClick={() => {
                  setOpenModal(false);
                }}
                className="text-white text-[16px]"
              >
                X
              </button>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="logo">
              <Image src={logo} alt="logo" />
            </div>
          </div>

          <div className="flex justify-center my-5">
            <div className="flex gap-2">
              <h4 className="text-white text-[24px]">$</h4>
              <h5 className="text-[50px] text=white font-semibold">10</h5>
              <h6 className="text-white text-[24px] mt-10">/month</h6>
            </div>
          </div>
          <div className="flex justify-center gap-[20px]">
            <div>
              <button className="text-white text-[16px] font-medium rounded-md py-[6px] w-[130px] bg-green-500">
                1 month
              </button>
            </div>
            <div>
              <button className="text-white text-[16px] font-medium rounded-md py-[6px] w-[130px] bg-green-500">
                1 year
              </button>
              <h4 className="text-yellow-500 mt-3 text-[14px]">Save 50%</h4>
            </div>
          </div>
          <div className="flex justify-center  w-[90%] my-5">
            <div className="flex flex-col gap-3">
              <div className="flex gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5 text-green-500"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                    clipRule="evenodd"
                  />
                </svg>

                <p className="text-white text-[14px]">
                  Connect own custom domain
                </p>
              </div>
              <div className="flex gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5 text-green-500"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                    clipRule="evenodd"
                  />
                </svg>

                <p className="text-white text-[14px]">
                  Dedicated premium domains
                </p>
              </div>
              <div className="flex gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5 text-green-500"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                    clipRule="evenodd"
                  />
                </svg>

                <p className="text-white text-[14px]">
                  Up to 10 addresses at the same time
                </p>
              </div>
              <div className="flex gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5 text-green-500"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                    clipRule="evenodd"
                  />
                </svg>

                <p className="text-white text-[14px]">
                  100% Private address with full ownership
                </p>
              </div>
              <div className="flex gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5 text-green-500"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                    clipRule="evenodd"
                  />
                </svg>

                <p className="text-white text-[14px]">
                  Extended 100MB storage for email messages
                </p>
              </div>
              <div className="flex gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5 text-green-500"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                    clipRule="evenodd"
                  />
                </svg>

                <p className="text-white text-[14px]">
                  Seamless functionality inside web browser
                </p>
              </div>
              <div className="flex gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5 text-green-500"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                    clipRule="evenodd"
                  />
                </svg>

                <p className="text-white text-[14px]">
                  Enhanced privacy and security
                </p>
              </div>
              <div className="flex gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5 text-green-500"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                    clipRule="evenodd"
                  />
                </svg>

                <p className="text-white text-[14px]">
                  No ads. Premium support
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center  my-5">
            <form action="" className=" w-[90%] md:w-[80%]">
              <div className="flex flex-col gap-3">
                <div>
                  <h4 className="text-center text-white text-[16px] font-medium">
                    Your real email
                  </h4>
                </div>
                <input
                  type="email"
                  name=""
                  id=""
                  className="bg-white p-3 text-[16px] w-full rounded-md text-center"
                  placeholder="your@real.email.com"
                />
                <button
                  type="submit"
                  className="text-white p-3 text-[16px] uppercase font-medium bg-green-500 rounded-md"
                >
                  Subscribe Now
                </button>
              </div>
            </form>
          </div>
          <div className="flex justify-center">
            <div className="flex flex-col gap-3">
              <div className="text-center">
                <Link href="#" className="text-center text-[16px]">
                  Pay with Crypto - 1 year
                </Link>
              </div>
              <div className="flex gap-2">
                <Link href="#" className="text-center text-[16px]">
                  Terms of Service{" "}
                </Link>
                <span>|</span>
                <Link href="#" className="text-center text-[16px]">
                  Privacy Policy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
