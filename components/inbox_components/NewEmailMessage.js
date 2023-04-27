import React from "react";
import { BiMinus } from "react-icons/bi";
import { CgExpand } from "react-icons/cg";
import { VscChromeClose } from "react-icons/vsc";
import { TiUserAddOutline } from "react-icons/ti";
import textBox from "../../public/images/textbox.png";

import Image from "next/image";

export default function NewEmailMessage({ setOpenModal }) {
  return (
    <>
      <div className=" absolute left-[10px] md:left-auto right-[10px] md:right-[10px] bottom-0 z-[100] bg-white rounded-md overflow-hidden w-full md:w-[700px] border border-gray-200">
        <div className="flex items-center justify-between bg-blue-500 px-4 py-2">
          <div className="flex gap-3">
            <h3 className="text-white text-[16px]">New message</h3>
          </div>
          <div className="flex gap-2 items-center">
            <button className="text-white text-[16px]">
              <BiMinus />
            </button>
            <button className="text-white text-[16px]">
              <CgExpand />
            </button>
            <button
              onClick={() => {
                setOpenModal(false);
              }}
              className="text-white text-[16px]"
            >
              <VscChromeClose className="text-white " />
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-2 p-5">
          <div class="grid grid-cols-12 gap-4 items-center">
            <div className="col-span-2">
              {" "}
              <h3 className="text-gray-800 font-semibold text-[14px]">
                From
              </h3>{" "}
            </div>
            <div className="col-span-10">
              <div className="block border-b border-gray-300 w-full">
                <input
                  type="text"
                  className="p-2  text-[14px] w-full border-0"
                  placeholder="Your Email Address"
                />
              </div>
            </div>
            <div className="col-span-2">
              {" "}
              <h3 className="text-gray-800 font-semibold text-[14px]">
                To
              </h3>{" "}
            </div>
            <div className="col-span-10">
              <div className="flex items-center gap-1 border-b border-gray-300 w-full">
                <input
                  type="text"
                  className="p-2 text-[14px] w-full"
                  placeholder="Email Address"
                />
                <div className="flex gap-2 shrink-0">
                  <button className=" text-blue-500 text-[14px] font-medium">
                    CC BCC{" "}
                  </button>
                  <button className="text-[14px] text-gray-500">
                    {" "}
                    <TiUserAddOutline className="text-[20px]" />
                  </button>
                </div>
              </div>
            </div>
            <div className="col-span-2">
              {" "}
              <h3 className="text-gray-800 font-semibold text-[14px]">
                Subject
              </h3>{" "}
            </div>
            <div className="col-span-10">
              <div className="block border-b border-gray-300 w-full">
                <input
                  type="text"
                  className="p-2  text-[14px] w-full border-0"
                  placeholder="Subject"
                />
              </div>
            </div>
          </div>
          {/* text tools */}
          <div className="block">
            <Image src={textBox} alt="image" className="w-full" />
          </div>
          <div className="block">
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Type your message"
              className="w-full p-4"
            ></textarea>
          </div>
          <div className="flex gap-2 justify-between">
            <div className="flex gap-6 items-center">
              <button className="text-[12px] text-gray-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                  />
                </svg>
              </button>
              <button className="text-[12px] text-gray-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                  />
                </svg>
              </button>
              <button className="text-[12px] text-gray-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                  />
                </svg>
              </button>
            </div>
            <div className="text-center">
              <h4 className="text-[14px] text-gray-500 text-center">
                Not saved
              </h4>
            </div>
            <div className="flex gap-6 items-center">
              <button className="text-[12px] text-gray-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M18.375 12.739l-7.693 7.693a4.5 4.5 0 01-6.364-6.364l10.94-10.94A3 3 0 1119.5 7.372L8.552 18.32m.009-.01l-.01.01m5.699-9.941l-7.81 7.81a1.5 1.5 0 002.112 2.13"
                  />
                </svg>
              </button>
              <button
                className=" bg-blue-600 text-white text-[14px] rounded-md px-5 py-2"
                type="submit"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
