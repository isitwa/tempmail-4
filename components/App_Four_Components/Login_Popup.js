import Link from "next/link";
import React from "react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Login_Popup({ setpopOpen }) {
  return (
    <>
      <div className="fixed top-0 bottom-0 left-0 right-0   z-[106]">
        <div className=" absolute top-0 bottom-0 left-0 right-0 bg-gray-700 opacity-90 z-[107]"></div>
        <div className=" absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] px-2 pt-3 pb-5 z-[108] w-[90%] md:w-[580px] bg-gray-900 rounded">
          <div className="flex items-center justify-between px-4 py-2">
            <div className="flex gap-3">
              <h3 className="text-white text-[16px] font-medium">Log In</h3>
            </div>
            <div className="flex gap-2 items-center">
              <button
                onClick={() => {
                  setpopOpen(false);
                }}
                className="text-white text-[16px]"
              >
                X
              </button>
            </div>
          </div>
          <div className="block p-4">
            <form action="">
              <div className="flex flex-col gap-3">
                <label
                  htmlFor=""
                  className="text-white text-[16px] font-medium"
                >
                  Email address
                </label>
                <input
                  type="email"
                  name=""
                  id=""
                  placeholder="Your email"
                  className="text-white text-[16px] bg-transparent rounded-md p-2 w-full border border-white"
                />
                <label
                  htmlFor=""
                  className="text-white text-[16px] font-medium"
                >
                  Password
                </label>
                <input
                  type="email"
                  name=""
                  id=""
                  placeholder="Password"
                  className="text-white text-[16px] bg-transparent rounded-md p-2 w-full border border-white"
                />
                <div className="flex justify-between my-2">
                  <Link href="#" className="text-[14px] text-blue-500">
                    Mobile apps QR code
                  </Link>
                  <Link href="#" className="text-[14px] text-blue-500">
                    Forgot Password?
                  </Link>
                </div>
                <div className="flex justify-end">
                  <div className="flex gap-3">
                    <button
                      onClick={() => {
                        setpopOpen(false);
                      }}
                      className="text-[14px] py-[6px] px-[20px] bg-gray-700 rounded-md text-white"
                    >
                      Cancel
                    </button>
                    <button className="text-[14px] py-[6px] px-[20px] bg-green-500 rounded-md text-gray-900">
                      Login
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
