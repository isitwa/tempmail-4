import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../public/images/brand-logo.png";
import apply from "../public/images/itunes_header.svg";
import play from "../public/images/gplay_header.svg";
import ads1 from "../public/images/ads1.jpg";
import ads2 from "../public/images/ads2.jpg";
import ads3 from "../public/images/long-ads.jpg";
import ads4 from "../public/images/ads.png";
import game from "../public/images/game.webp";
import aws from "../public/images/amazon.svg";
import chrome from "../public/images/chrome.svg";
import fox from "../public/images/firefox-logo.svg";
import opera from "../public/images/opera.svg";
import tel from "../public/images/008-telegram.png";
import slack from "../public/images/slack.svg";
import { Dialog, Transition } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/24/outline";
import { Fragment, useState } from "react";
import { Listbox } from "@headlessui/react";
import { ChevronUpDownIcon } from "@heroicons/react/20/solid";

import Mail_List_Four from "@/components/App_Four_Components/Mail_List_Four";
import Open_Mail_Four from "@/components/App_Four_Components/Open_Mail_Four";
import Change_Mail_Temp from "@/components/App_Four_Components/Change_Mail_Temp";
import Premium_Popup from "@/components/App_Four_Components/Premium_Popup";

const people = [
  { id: 1, name: "Eng" },
  { id: 2, name: "Spanish" },
  { id: 3, name: "Japanese" },
];

const people1 = [
  { id: 1, name: "Tony@gmail.com" },
  { id: 2, name: "Sass@gmail.com" },
  { id: 3, name: "Sunny@gmail.com" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function AppFour() {
  const [selected, setSelected] = useState(people[1]);
  const [selected1, setSelected1] = useState(people1[1]);
  const [open, setOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <>
      {modalOpen && <Premium_Popup setOpenModal={setModalOpen} />}
      {/*  */}
      <header className="flex justify-center py-[30px] bg-zinc-900 gap-5">
        <div className="w-full lg:w-[1536px] px-[15px]">
          <div className="flex items-center justify-between ">
            <div className=" items-center gap-2 md:gap-3  hidden md:flex">
              <Link
                href="#"
                className="border border-gray-400 rounded-lg flex items-center gap-2 py-[4px] px-[8px]"
              >
                <div className="w-[18px]">
                  {" "}
                  <Image src={apply} alt="apply" className="w-full" />
                </div>
                <p className="text-[13px] text-white">App Store</p>
              </Link>
              <Link
                href="#"
                className="border border-gray-400 rounded-lg flex items-center gap-2 py-[4px] px-[8px]"
              >
                <div className="w-[18px]">
                  {" "}
                  <Image src={play} alt="Play" className="w-full" />
                </div>
                <p className="text-[13px] text-white">Google Play</p>
              </Link>
            </div>
            <Link
              href="#"
              className="w-[130px] md:w-[154px] md:mx-auto  inline-block"
            >
              <Image src={logo} alt="logo" className="w-full" />
            </Link>
            <div className="flex items-center gap-2 md:gap-3">
              <Link
                href="#"
                className="text-[13px] bg-gray-800 text-white rounded-full py-[6px] px-[16px] hidden md:block "
              >
                Temp SMS Number
              </Link>
              <button
                onClick={() => {
                  setModalOpen(true);
                }}
                className="text-[13px] bg-yellow-500 text-gray-800 rounded-full py-[6px] px-[16px] "
              >
                Premium
              </button>
            </div>
          </div>
        </div>
      </header>
      <section className="flex justify-center pt-[30px] pb-[60px] bg-zinc-900">
        <div className="w-full lg:w-[1140px] px-[15px] flex justify-center ">
          <div className="grid md:grid-cols-12 gap-[20px] md:gap-[60px] ">
            <div className="flex justify-center col-span-12 md:col-span-3 ">
              <div className=" w-[300] shrink-0 mx-auto ">
                <Image src={ads1} alt="image" className="w-full" />
                {/* <Image src={ads1} alt="image" className="w-full" /> */}
              </div>
            </div>
            <div className=" col-span-12 md:col-span-6">
              <div className="border border-dashed border-gray-600 p-[40px] sm:w-[80%] mx-auto md:w-full">
                <h3 className="text-white text-[14px] md:text-[20px] text-center font-semibold mb-5">
                  Your Temporary Email Address{" "}
                </h3>
                <div className="flex items-center gap-2">
                  <div className="grow relative">
                    <button
                      type=""
                      className="bg-gray-800 rounded-full text-white w-[55px] h-[55px] text-center absolute right-0 top-0 z-[10]"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6 mx-auto"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 013.75 9.375v-4.5zM3.75 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 01-1.125-1.125v-4.5zM13.5 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0113.5 9.375v-4.5z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6.75 6.75h.75v.75h-.75v-.75zM6.75 16.5h.75v.75h-.75v-.75zM16.5 6.75h.75v.75h-.75v-.75zM13.5 13.5h.75v.75h-.75v-.75zM13.5 19.5h.75v.75h-.75v-.75zM19.5 13.5h.75v.75h-.75v-.75zM19.5 19.5h.75v.75h-.75v-.75zM16.5 16.5h.75v.75h-.75v-.75z"
                        />
                      </svg>
                    </button>

                    <Listbox value={selected1} onChange={setSelected1}>
                      {({ open1 }) => (
                        <>
                          <div className="relative ">
                            <Listbox.Button className="relative w-full cursor-default rounded-full  text-white text-[16px] p-[15px] bg-gray-700 text-left">
                              <span className="block truncate text-[14px] md:text-[16px]">
                                {selected1.name}
                              </span>
                              <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                <ChevronUpDownIcon
                                  className="h-5 w-5 text-gray-400"
                                  aria-hidden="true"
                                />
                              </span>
                            </Listbox.Button>

                            <Transition
                              show={open1}
                              as={Fragment}
                              leave="transition ease-in duration-100"
                              leaveFrom="opacity-100"
                              leaveTo="opacity-0"
                            >
                              <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                {people1.map((person1) => (
                                  <Listbox.Option
                                    key={person1.id}
                                    className={({ active }) =>
                                      classNames(
                                        active
                                          ? "text-white bg-indigo-600"
                                          : "text-gray-900",
                                        "relative cursor-default select-none py-2 pl-3 pr-9"
                                      )
                                    }
                                    value={person1}
                                  >
                                    {({ selected1, active }) => (
                                      <>
                                        <span
                                          className={classNames(
                                            selected1
                                              ? "font-semibold "
                                              : "font-normal  text-[14px] md:text-[16px]",
                                            "block truncate "
                                          )}
                                        >
                                          {person1.name}
                                        </span>

                                        {selected1 ? (
                                          <span
                                            className={classNames(
                                              active
                                                ? "text-white"
                                                : "text-indigo-600",
                                              "absolute inset-y-0 right-0 flex items-center pr-4"
                                            )}
                                          >
                                            <CheckIcon
                                              className="h-5 w-5"
                                              aria-hidden="true"
                                            />
                                          </span>
                                        ) : null}
                                      </>
                                    )}
                                  </Listbox.Option>
                                ))}
                              </Listbox.Options>
                            </Transition>
                          </div>
                        </>
                      )}
                    </Listbox>
                  </div>

                  <button
                    type=""
                    className="bg-green-500 rounded-full text-white w-[50px] h-[50px] text-center relative group"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 mx-auto"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.373-.03.748-.057 1.123-.08M15.75 18H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08M15.75 18.75v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5A3.375 3.375 0 006.375 7.5H5.25m11.9-3.664A2.251 2.251 0 0015 2.25h-1.5a2.251 2.251 0 00-2.15 1.586m5.8 0c.065.21.1.433.1.664v.75h-6V4.5c0-.231.035-.454.1-.664M6.75 7.5H4.875c-.621 0-1.125.504-1.125 1.125v12c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V16.5a9 9 0 00-9-9z"
                      />
                    </svg>
                    <div className="group-hover:block hidden absolute py-[6px] px-4 rounded-xl bg-green-500 -bottom-[50px] w-[120px] left-[50%] -translate-x-1/2">
                      <div className="block relative">
                        <div className="h-0 w-0 border-x-8 border-x-transparent border-b-[16px] border-b-green-500 -top-[15px] absolute  left-[50%] -translate-x-1/2"></div>
                      </div>

                      <h6 className="text-[16px] text-white">Copy email</h6>
                    </div>
                  </button>
                </div>
              </div>
              <div className="block mt-[15px]">
                <p className="text-center text-[16px] text-gray-600 dark:text-zinc-300">
                  Forget about spam, advertising mailings, hacking and attacking
                  robots. Keep your real mailbox clean and secure. Temp Mail
                  provides temporary, secure, anonymous, free, disposable email
                  address.
                </p>
              </div>
            </div>
            <div className="flex justify-center col-span-12 md:col-span-3">
              <div className="w-[300] shrink-0 mx-auto ">
                <Image src={ads1} alt="image" className="w-full" />
                {/* <Image src={ads2} alt="image" className="w-full" /> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-[30px] bg-white  shadow flex justify-center ">
        <div className="w-full lg:w-[1140px] px-[15px] flex justify-center ">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 ">
            <div>
              <button
                type=""
                className="bg-gray-100 hover:bg-thor-200 w-full text-center py-[17px] px-[40px] flex justify-center rounded-full shadow"
              >
                <div className="flex gap-2 items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-4 h-4  text-gray-800 mr-4"
                  >
                    <path
                      fillRule="evenodd"
                      d="M17.663 3.118c.225.015.45.032.673.05C19.876 3.298 21 4.604 21 6.109v9.642a3 3 0 01-3 3V16.5c0-5.922-4.576-10.775-10.384-11.217.324-1.132 1.3-2.01 2.548-2.114.224-.019.448-.036.673-.051A3 3 0 0113.5 1.5H15a3 3 0 012.663 1.618zM12 4.5A1.5 1.5 0 0113.5 3H15a1.5 1.5 0 011.5 1.5H12z"
                      clipRule="evenodd"
                    />
                    <path d="M3 8.625c0-1.036.84-1.875 1.875-1.875h.375A3.75 3.75 0 019 10.5v1.875c0 1.036.84 1.875 1.875 1.875h1.875A3.75 3.75 0 0116.5 18v2.625c0 1.035-.84 1.875-1.875 1.875h-9.75A1.875 1.875 0 013 20.625v-12z" />
                    <path d="M10.5 10.5a5.23 5.23 0 00-1.279-3.434 9.768 9.768 0 016.963 6.963 5.23 5.23 0 00-3.434-1.279h-1.875a.375.375 0 01-.375-.375V10.5z" />
                  </svg>

                  <span className="text-gray-600 text-[15px] font-medium">
                    Copy
                  </span>
                </div>
              </button>
            </div>
            <div>
              <button
                type=""
                className="bg-gray-100 hover:bg-thor-200 w-full text-center py-[17px] px-[40px] flex justify-center rounded-full shadow"
              >
                <div className="flex gap-2 items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-4 h-4  text-gray-800 mr-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
                    />
                  </svg>

                  <span className="text-gray-600 text-[15px] font-medium">
                    Refresh
                  </span>
                </div>
              </button>
            </div>
            <div>
              <button
                type=""
                className="bg-gray-100 hover:bg-thor-200 w-full text-center py-[17px] px-[40px] flex justify-center rounded-full shadow"
              >
                <div className="flex gap-2 items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-4 h-4  text-gray-800 mr-4"
                  >
                    <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32L19.513 8.2z" />
                  </svg>

                  <span className="text-gray-600 text-[15px] font-medium">
                    Change
                  </span>
                </div>
              </button>
            </div>
            <div>
              <button
                type=""
                className="bg-gray-100 hover:bg-thor-200 w-full text-center py-[17px] px-[40px] flex justify-center rounded-full shadow"
              >
                <div className="flex gap-2 items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-4 h-4  text-gray-800 mr-4"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                      clipRule="evenodd"
                    />
                  </svg>

                  <span className="text-gray-600 text-[15px] font-medium">
                    Delete
                  </span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="py-[30px]  flex justify-center border-b border-gray-300 dark:bg-zinc-800 ">
        <div className="w-full lg:w-[1140px] px-[15px] flex justify-center ">
          <div className="flex flex-col gap-3 w-full">
            <div className="grid grid-cols-12 gap-10">
              <div className="col-span-2 hidden md:block">
                <div className="block h-[600px] w-full">
                  <Image src={ads1} alt="image" className="w-full" />
                  {/* <Image src={ads4} alt="images" className="w-full h-full" /> */}
                </div>
              </div>
              <div className="col-span-12 md:col-span-8">
                <div className="flex flex-col gap-4 w-full">
                  <div className="block">
                    <Image src={ads1} alt="image" className="w-full" />
                    {/* <Image src={ads3} alt="images" className="w-full" /> */}
                  </div>
                  <div className="flex flex-col row-span-3 overflow-hidden rounded-md">
                    {/* <div className="flex p-4 bg-gray-900 dark:bg-zinc-800 text-white justify-between">
                      <h3 className="text-white uppercase text-[16px]">
                        Sender
                      </h3>
                      <h3 className="text-white uppercase text-[16px]">
                        Subject
                      </h3>
                      <h3 className="text-white uppercase text-[16px]">View</h3>
                    </div> */}
                    <div className="grid grid-cols-12 gap-[15px] bg-zinc-900 justify-between  p-4">
                      <h4 className="text-white  uppercase text-[13px] md:text-[16px] col-span-4 md:col-span-3">
                        Sender
                      </h4>
                      <h4 className="text-white  uppercase text-[13px] md:text-[16px] col-span-6 md:col-span-7">
                        Subject
                      </h4>
                      <h4 className="text-white  uppercase text-[13px] md:text-[16px] col-span-2 text-right">
                        Open
                      </h4>
                    </div>
                    <Mail_List_Four />

                    <Open_Mail_Four />
                    <Change_Mail_Temp />
                    <div className="flex flex-col bg-white shadow p-5 h-[500px]">
                      <div className="m-auto">
                        <div className="flex flex-col gap-3">
                          <div className="mx-auto">
                            <svg
                              width="92"
                              height="94"
                              viewBox="0 0 92 87"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M26 54.37V38.9C26.003 37.125 26.9469 35.4846 28.48 34.59L43.48 25.84C45.027 24.9468 46.933 24.9468 48.48 25.84L63.48 34.59C65.0285 35.4745 65.9887 37.1167 66 38.9V54.37C66 57.1314 63.7614 59.37 61 59.37H31C28.2386 59.37 26 57.1314 26 54.37Z"
                                fill="#8C92A5"
                              ></path>
                              <path
                                d="M46 47.7L26.68 36.39C26.2325 37.1579 25.9978 38.0312 26 38.92V54.37C26 57.1314 28.2386 59.37 31 59.37H61C63.7614 59.37 66 57.1314 66 54.37V38.9C66.0022 38.0112 65.7675 37.1379 65.32 36.37L46 47.7Z"
                                fill="#CDCDD8"
                              ></path>
                              <path
                                d="M27.8999 58.27C28.7796 58.9758 29.8721 59.3634 30.9999 59.37H60.9999C63.7613 59.37 65.9999 57.1314 65.9999 54.37V38.9C65.9992 38.0287 65.768 37.1731 65.3299 36.42L27.8999 58.27Z"
                                fill="#E5E5F0"
                              ></path>
                              <path
                                class="emptyInboxRotation"
                                d="M77.8202 29.21L89.5402 25.21C89.9645 25.0678 90.4327 25.1942 90.7277 25.5307C91.0227 25.8673 91.0868 26.348 90.8902 26.75L87.0002 34.62C86.8709 34.8874 86.6407 35.0924 86.3602 35.19C86.0798 35.2806 85.7751 35.2591 85.5102 35.13L77.6502 31.26C77.2436 31.0643 76.9978 30.6401 77.0302 30.19C77.0677 29.7323 77.3808 29.3438 77.8202 29.21Z"
                                fill="#E5E5F0"
                              ></path>
                              <path
                                class="emptyInboxRotation"
                                d="M5.12012 40.75C6.36707 20.9791 21.5719 4.92744 41.2463 2.61179C60.9207 0.296147 79.4368 12.3789 85.2401 31.32"
                                stroke="#E5E5F0"
                                stroke-width="3"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              ></path>
                              <path
                                class="emptyInboxRotation"
                                d="M14.18 57.79L2.46001 61.79C2.03313 61.9358 1.56046 61.8088 1.2642 61.4686C0.967927 61.1284 0.906981 60.6428 1.11001 60.24L5.00001 52.38C5.12933 52.1127 5.35954 51.9076 5.64001 51.81C5.92044 51.7194 6.22508 51.7409 6.49001 51.87L14.35 55.74C14.7224 55.9522 14.9394 56.36 14.9073 56.7874C14.8753 57.2149 14.5999 57.5857 14.2 57.74L14.18 57.79Z"
                                fill="#E5E5F0"
                              ></path>
                              <path
                                class="emptyInboxRotation"
                                d="M86.9998 45.8C85.9593 65.5282 70.9982 81.709 51.4118 84.2894C31.8254 86.8697 13.1841 75.1156 7.06982 56.33"
                                stroke="#E5E5F0"
                                stroke-width="3"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              ></path>
                            </svg>
                          </div>
                          <h3 className="text-gray-600 text-[18px] text-center">
                            Your inbox is empty
                          </h3>
                          <p className="text-gray-500 text-[14px] text-center">
                            Waiting for incoming emails
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="block">
                    {/* <Image src={ads3} alt="images" className="w-full" /> */}
                    <Image src={ads1} alt="image" className="w-full" />
                  </div>
                </div>
              </div>
              <div className="col-span-2 hidden md:block">
                <div className="block h-[600px] w-full">
                  <Image src={ads1} alt="image" className="w-full" />
                  {/* <Image src={ads4} alt="images" className="w-full h-full" /> */}
                </div>
              </div>
            </div>
            <div className="flex justify-center mt-10">
              <div className="flex flex-col gap-4 w-full lg:w-[700px]">
                <h2 className="text-[30px] text-gray-800 dark:text-white text-center font-semibold">
                  What is Disposable Temporary E-mail?
                </h2>
                <p className="text-gray-600 text-[16px] text-center dark:text-white">
                  Disposable email - is a free email service that allows to
                  receive email at a temporary address that self-destructed
                  after a certain time elapses. It is also known by names like :
                  tempmail, 10minutemail, 10minmail, throwaway email, fake-mail
                  , fake email generator, burner mail or trash-mail. Many
                  forums, Wi-Fi owners, websites and blogs ask visitors to
                  register before they can view content, post comments or
                  download something. Temp-Mail - is most advanced throwaway
                  email service that helps you avoid spam and stay safe.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-[30px]  flex justify-center dark:bg-zinc-800 ">
        <div className="w-full lg:w-[1140px] px-[15px] flex justify-center ">
          <div className="flex flex-col">
            <h2 className="text-[26px] text-gray-800 dark:text-white text-center mb-[30px] font-semibold">
              Popular Articles
            </h2>
            <div className="grid md:grid-cols-2 gap-[25px]">
              <div className="bg-white rounded-lg overflow-hidden p-[15px] shadow flex gap-[15px]">
                <div className="grow">
                  <div className="flex flex-col gap-2">
                    <h3 className="text-[16px] text-gray-800 ">
                      Private domains. How to get your own Temporary Email (2021
                      )
                    </h3>
                    <p className="text-gray-400 text-[14px] hidden md:block">
                      How to create temporary email on your own private domain
                      and how it helps you to bypass common issues with
                      registrations_
                    </p>
                  </div>
                </div>
                <div className="w-[70px] h-[70px] md:w-[124px] md:h-[124px] shrink-0 rounded-md overflow-hidden">
                  <Image
                    src={game}
                    alt="image"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="bg-white rounded-lg overflow-hidden p-[15px] shadow flex gap-[15px]">
                <div className="grow">
                  <div className="flex flex-col gap-2">
                    <h3 className="text-[16px] text-gray-800">
                      Private domains. How to get your own Temporary Email (2021
                      )
                    </h3>
                    <p className="text-gray-400 text-[14px] hidden md:block">
                      How to create temporary email on your own private domain
                      and how it helps you to bypass common issues with
                      registrations_
                    </p>
                  </div>
                </div>
                <div className="w-[70px] h-[70px] md:w-[124px] md:h-[124px] shrink-0 rounded-md overflow-hidden">
                  <Image
                    src={game}
                    alt="image"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="bg-white rounded-lg overflow-hidden p-[15px] shadow flex gap-[15px]">
                <div className="grow">
                  <div className="flex flex-col gap-2">
                    <h3 className="text-[16px] text-gray-800">
                      Private domains. How to get your own Temporary Email (2021
                      )
                    </h3>
                    <p className="text-gray-400 text-[14px] hidden md:block">
                      How to create temporary email on your own private domain
                      and how it helps you to bypass common issues with
                      registrations_
                    </p>
                  </div>
                </div>
                <div className="w-[70px] h-[70px] md:w-[124px] md:h-[124px] shrink-0 rounded-md overflow-hidden">
                  <Image
                    src={game}
                    alt="image"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="bg-white rounded-lg overflow-hidden p-[15px] shadow flex gap-[15px]">
                <div className="grow">
                  <div className="flex flex-col gap-2">
                    <h3 className="text-[16px] text-gray-800">
                      Private domains. How to get your own Temporary Email (2021
                      )
                    </h3>
                    <p className="text-gray-400 text-[14px] hidden md:block">
                      How to create temporary email on your own private domain
                      and how it helps you to bypass common issues with
                      registrations_
                    </p>
                  </div>
                </div>
                <div className="w-[70px] h-[70px] md:w-[124px] md:h-[124px] shrink-0 rounded-md overflow-hidden">
                  <Image
                    src={game}
                    alt="image"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="bg-white rounded-lg overflow-hidden p-[15px] shadow flex gap-[15px]">
                <div className="grow">
                  <div className="flex flex-col gap-2">
                    <h3 className="text-[16px] text-gray-800">
                      Private domains. How to get your own Temporary Email (2021
                      )
                    </h3>
                    <p className="text-gray-400 text-[14px] hidden md:block">
                      How to create temporary email on your own private domain
                      and how it helps you to bypass common issues with
                      registrations_
                    </p>
                  </div>
                </div>
                <div className="w-[70px] h-[70px] md:w-[124px] md:h-[124px] shrink-0 rounded-md overflow-hidden">
                  <Image
                    src={game}
                    alt="image"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="bg-white rounded-lg overflow-hidden p-[15px] shadow flex gap-[15px]">
                <div className="grow">
                  <div className="flex flex-col gap-2">
                    <h3 className="text-[16px] text-gray-800">
                      Private domains. How to get your own Temporary Email (2021
                      )
                    </h3>
                    <p className="text-gray-400 text-[14px] hidden md:block">
                      How to create temporary email on your own private domain
                      and how it helps you to bypass common issues with
                      registrations_
                    </p>
                  </div>
                </div>
                <div className="w-[70px] h-[70px] md:w-[124px] md:h-[124px] shrink-0 rounded-md overflow-hidden">
                  <Image
                    src={game}
                    alt="image"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-[60px]  flex justify-center dark:bg-zinc-800 ">
        <div className="w-full lg:w-[1140px] px-[15px] flex justify-center ">
          <div className="flex flex-col gap-[15px]">
            <h3 className="text-gray-800 dark:text-white font-semibold text-[18px]">
              The Tech behind Disposable Email Addresses
            </h3>
            <p className="text-gray-600  dark:text-white text-[14px]">
              Everyone owns an email address each and every hour, for everything
              from connecting at work, with business prospects, reaching out to
              friends and colleagues using the email address as an online
              passport. Nearly 99% of all apps and services we sign-up today
              required an email address, likewise to most shoppers loyalty
              cards, contest and offer entries, and more.
            </p>
            <p className="text-gray-600 dark:text-white  text-[14px]">
              We all enjoy having an email address, but getting tons of spam
              emails each day doesn’t feel comfortable. Furthermore, it’s
              entirely common for stores to have their databases hacked, leaving
              your business email address at risk and more likely to end up on
              spam lists. Still, nothing done online is 100% private. Thus you
              need to protect your email contact identity and best done using
              disposable emails address.
            </p>
            <h3 className="text-gray-800  dark:text-white font-semibold text-[18px]">
              So, What Is A Disposable Email Address?
            </h3>
            <p className="text-gray-600 dark:text-white  text-[14px]">
              Recently, I found a bounce rate complex than usual on my latest
              email blast! I later realized the surge of users (or bots) signing
              up for my services hiding their real identity using disposable
              mail addresses.
            </p>
            <p className="text-gray-600  dark:text-white text-[14px]">
              Disposable email address (DEA) technically means an approach where
              a user’s with a unique email address gets a temporary email
              address for your current contact. The DEA allow the creation of an
              email address that passes validity need to sign-up for services
              and website without having to show your true identity.
            </p>
            <p className="text-gray-600 dark:text-white  text-[14px]">
              Disposable emails address if compromised or used in connection
              with email abuse online, the owner can’t be tied to the abuse and
              quickly cancel its application without affecting other contacts.
              With temporary mail, you can you receive your emails from the fake
              emails in your genuine emails address for a specified time set.
              The fake email address is simply a through-away email, temporary
              email set and self-destructs email.
            </p>
            <h3 className="text-gray-800 dark:text-white font-semibold text-[18px]">
              Why would you need a fake email address?
            </h3>
            <p className="text-gray-600  dark:text-white text-[14px]">
              You must have noted services such as Amazon Prime, Hulu and
              Netflix allow limited-time test runs(trials), however, if still
              determined to use the services all you need is a disposable email
              address. Technically, you can extend your trial usage using a
              different email address linked to your original (genuine) after
              the trial period expires
            </p>
            <p className="text-gray-600 dark:text-white  text-[14px]">
              An offline or online retailer tend to demand an email address to
              take advantage of their offers, however, this result in an
              unwanted deluge of spam promotional emails that you could avoid.
              Temporary email address makes it easy to cut out those irritating
              messages you are still receiving.
            </p>
            <p className="text-gray-600 dark:text-white  text-[14px]">
              Technically, the idea of a temporary email address conjures up
              with black hat hackers and underworld internet, but there are
              convincing reason to us fake email services.
            </p>
            <p className="text-gray-600 dark:text-white  text-[14px]">
              If you are looking for legitimate reasons to use a disposable
              email address here’s a few:
            </p>
            <h3 className="text-gray-800 dark:text-white font-semibold text-[18px]">
              How to Choose a Disposable Email?
            </h3>
            <p className="text-gray-600 dark:text-white  text-[14px]">
              The best fake email provider should:
            </p>
            <ul className="flex flex-col gap-[10px] list-disc pl-[15px]">
              <li className="text-gray-600 dark:text-white text-[14px]">
                Allow users create temporary emails address at the click of a
                button.
              </li>
              <li className="text-gray-600 dark:text-white text-[14px]">
                {" "}
                No registration is registration or identity information about
                the user.
              </li>
              <li className="text-gray-600 dark:text-white text-[14px]">
                {" "}
                The email address should remain anonymous.
              </li>
              <li className="text-gray-600 dark:text-white text-[14px]">
                {" "}
                Offer more than one email address (as many as you may want).
              </li>
              <li className="text-gray-600 dark:text-white text-[14px]">
                {" "}
                Offers temporarily email stored (temporal email inbox at user’s
                disposal).
              </li>
              <li className="text-gray-600 dark:text-white text-[14px]">
                {" "}
                Straightforward and functional design to get a mundane email.
              </li>
              <li className="text-gray-600 dark:text-white text-[14px]">
                {" "}
                Provider random account and users can choose an address of
                choice.
              </li>
            </ul>
            <p className="text-gray-600 dark:text-white  text-[14px]">
              Thus stay spam free and save time with temp-mail.org your favorite
              email service.
            </p>
            <h3 className="text-gray-800 dark:text-white font-semibold text-[18px]">
              How to Use Disposable Email Address?
            </h3>
            <p className="text-gray-600 dark:text-white  text-[14px]">
              Users choose to get disposable email address by creating a new
              email account with their current email provider’s such as Gmail,
              but the account comes with many challenges such as you will have
              to manage emails new account. Users, who opt for free mail
              services by creating a new account, put up with a new email
              address.
            </p>
            <p className="text-gray-600 dark:text-white text-[14px]">
              It’d work if you had one email address and a few disposable emails
              from temp-mail.org and managed one account inbox.
            </p>
            <p className="text-gray-600 dark:text-white  text-[14px]">
              The amazing thing about a disposable email address is you can
              forward directly to your real email account. In case the
              disposable email address is compromised, and you are suspicious of
              one of your contacts you can have those emails sent directly to
              your trash, and for those necessary connections have them sent
              directly to your real email address inbox.
            </p>
            <h3 className="text-gray-800 dark:text-white font-semibold text-[18px]">
              To Conclude:
            </h3>
            <p className="text-gray-600 dark:text-white  text-[14px]">
              Have a disposable mail address system set up in a fantastic way to
              make sure when you participate in online wikis, chat rooms, and
              file sharing services and bulletin boards forums your real
              identity is never disclosed and never sold to anyone to avoid mail
              spam with Temp-mail.org.
            </p>
          </div>
        </div>
      </section>
      <footer className="pt-[60px] pb-[80px]  flex justify-center bg-zinc-800 ">
        <div className="w-full lg:w-[1140px] px-[15px] flex flex-col">
          <div className="flex flex-col">
            <div className="flex flex-wrap justify-center gap-[5px] md:gap-[10px]">
              <Link
                href="#"
                className="text-[14px] text-gray-300 p-[10px] inline-block"
              >
                PREMIUM{" "}
              </Link>
              <Link
                href="#"
                className="text-[14px] text-gray-300 p-[10px] inline-block"
              >
                API{" "}
              </Link>
              <Link
                href="#"
                className="text-[14px] text-gray-300 p-[10px] inline-block"
              >
                ARTICLES{" "}
              </Link>
              <Link
                href="#"
                className="text-[14px] text-gray-300 p-[10px] inline-block"
              >
                10 MINUTE MAIL{" "}
              </Link>
              <Link
                href="#"
                className="text-[14px] text-gray-300 p-[10px] inline-block"
              >
                PRIVACY{" "}
              </Link>
              <Link
                href="#"
                className="text-[14px] text-gray-300 p-[10px] inline-block"
              >
                TERMS{" "}
              </Link>
              <Link
                href="#"
                className="text-[14px] text-gray-300 p-[10px] inline-block"
              >
                FAQ{" "}
              </Link>
              <Link
                href="#"
                className="text-[14px] text-gray-300 p-[10px] inline-block"
              >
                CONTACTS{" "}
              </Link>
              <Link
                href="#"
                className="text-[14px] text-gray-300 p-[10px] inline-block"
              >
                ADVERTISING
              </Link>
            </div>
          </div>
          <div className="border-b border-slate-700 block my-[20px]"></div>
          <div className="flex flex-col md:flex-row justify-center gap-[20px] md:gap-[10px] items-center">
            <div
              className="flex gap-[10px] md:order-2
            "
            >
              <Link
                href="#"
                className="rounded-lg flex items-center gap-2 py-[4px] px-[8px] bg-gray-600"
              >
                <div className="w-[28px]">
                  {" "}
                  <Image src={apply} alt="apply" className="w-full" />
                </div>
                <p className="text-[14px] text-white hidden md:block">
                  App Store
                </p>
              </Link>
              <Link
                href="#"
                className="rounded-lg flex items-center gap-2 py-[4px] px-[8px] bg-gray-600"
              >
                <div className="w-[28px]">
                  {" "}
                  <Image src={play} alt="Play" className="w-full" />
                </div>
                <p className="text-[14px] text-white hidden md:block">
                  Google Play
                </p>
              </Link>
              <Link
                href="#"
                className="rounded-lg flex items-center gap-2 py-[4px] px-[8px] bg-gray-600"
              >
                <div className="w-[28px]">
                  {" "}
                  <Image src={aws} alt="aws" className="w-full" />
                </div>
              </Link>
              <Link
                href="#"
                className="rounded-lg flex items-center gap-2 py-[4px] px-[8px] bg-gray-600"
              >
                <div className="w-[28px]">
                  {" "}
                  <Image src={chrome} alt="chrome" className="w-full" />
                </div>
              </Link>
              <Link
                href="#"
                className="rounded-lg flex items-center gap-2 py-[4px] px-[8px] bg-gray-600"
              >
                <div className="w-[28px]">
                  {" "}
                  <Image src={fox} alt="fox" className="w-full" />
                </div>
              </Link>
              <Link
                href="#"
                className="rounded-lg flex items-center gap-2 py-[4px] px-[8px] bg-gray-600"
              >
                <div className="w-[28px]">
                  {" "}
                  <Image src={opera} alt="opera" className="w-full" />
                </div>
              </Link>
              <Link
                href="#"
                className="rounded-lg flex items-center gap-2 py-[4px] px-[8px] bg-gray-600"
              >
                <div className="w-[28px]">
                  {" "}
                  <Image src={tel} alt="tel" className="w-full" />
                </div>
              </Link>
              <Link
                href="#"
                className="rounded-lg flex items-center gap-2 py-[4px] px-[8px] bg-gray-600"
              >
                <div className="w-[28px]">
                  {" "}
                  <Image src={slack} alt="slack" className="w-full" />
                </div>
              </Link>
            </div>

            <div className="md:ml-[100px]  md:order-3">
              <Listbox value={selected} onChange={setSelected}>
                {({ open }) => (
                  <>
                    <div className="relative mt-1">
                      <Listbox.Button className="relative w-full cursor-default rounded-md text-white bg-gray-600 py-1 md:py-2 pl-3 pr-10 text-left sm:text-sm">
                        <span className="block truncate text-[14px]">
                          {selected.name}
                        </span>
                        <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                          <ChevronUpDownIcon
                            className="h-5 w-5 text-gray-400"
                            aria-hidden="true"
                          />
                        </span>
                      </Listbox.Button>

                      <Transition
                        show={open}
                        as={Fragment}
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                      >
                        <Listbox.Options className="absolute z-10 mt-1 bottom-[35px] max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                          {people.map((person) => (
                            <Listbox.Option
                              key={person.id}
                              className={({ active }) =>
                                classNames(
                                  active
                                    ? "text-white bg-blue-600"
                                    : "text-gray-900",
                                  "relative cursor-default select-none py-2 pl-3 pr-9"
                                )
                              }
                              value={person}
                            >
                              {({ selected, active }) => (
                                <>
                                  <span
                                    className={classNames(
                                      selected
                                        ? "font-semibold"
                                        : "font-normal",
                                      "block truncate"
                                    )}
                                  >
                                    {person.name}
                                  </span>

                                  {selected ? (
                                    <span
                                      className={classNames(
                                        active ? "text-white" : "text-blue-600",
                                        "absolute inset-y-0 right-0 flex items-center pr-4"
                                      )}
                                    >
                                      <CheckIcon
                                        className="h-5 w-5"
                                        aria-hidden="true"
                                      />
                                    </span>
                                  ) : null}
                                </>
                              )}
                            </Listbox.Option>
                          ))}
                        </Listbox.Options>
                      </Transition>
                    </div>
                  </>
                )}
              </Listbox>
            </div>

            <div
              className="flex gap-[10px]  md:order-1
            "
            >
              <Link
                href="#"
                className="text-[14px] text-gray-600 hover:underline underline-offset-1"
              >
                Esim Plans{" "}
              </Link>
              <Link
                href="#"
                className="text-[14px] text-gray-600 hover:underline underline-offset-1"
              >
                10MinuteMail{" "}
              </Link>
              <Link
                href="#"
                className="text-[14px] text-gray-600 hover:underline underline-offset-1"
              >
                Temp Number
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
