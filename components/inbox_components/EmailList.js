import Pagination from "../common_elements/PaginationList";
import RightSidebar from "./RightSidebarnew";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import projectPhoto1 from "../../public/images/user.bmp";
import projectPhoto2 from "../../public/images/user.bmp";
import projectPhoto3 from "../../public/images/user.bmp";
import projectPhoto4 from "../../public/images/icons/mail-icon.png";
import userMob from "../../public/images/icons/ui-avatars.png";
import picMail from "../../public/images/icons/ui-avatars.png";

import { RiInboxLine } from "react-icons/ri";

import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";

const peopleList = [
  {
    id: 1,
    name: "All Mailboxes",
    // icon:
    // RiInboxLine,
  },
  {
    id: 2,
    name: "Mail Accounts",
    // icon:
    // RiInboxLine,
  },
  {
    id: 3,
    name: "Mail Groups",
    // icon:
    // RiInboxLine,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const peopleMob = [
  {
    name: "Vrun Kumar",
    subText: "Cillum occaecat fugiat sunt laboris .",
    number: "2:30 pm",
    image: userMob,
  },
  {
    name: "Ashish Sharma",
    subText: "Cillum occaecat fugiat sunt laboris .",
    number: "1:45 pm",
    image: userMob,
  },
  {
    name: "Vrun Kumar",
    subText: "Cillum occaecat fugiat sunt laboris .",
    number: "3:00 pm",
    image: userMob,
  },
  {
    name: "Ashish Sharma",
    subText: "Cillum occaecat fugiat sunt laboris .",
    number: "6:45 am",
    image: userMob,
  },
  {
    name: "Vrun Kumar",
    subText: "Cillum occaecat fugiat sunt laboris .",
    number: "1:00 am",
    image: userMob,
  },
  {
    name: "Ashish Sharma",
    subText: "Cillum occaecat fugiat sunt laboris .",
    number: "5:00 pm",
    image: userMob,
  },
];

const people = [
  {
    name: "Calvin Hawkins",
    subText: "Cillum occaecat fugiat sunt laboris .",
    number: "5443",
    image: projectPhoto1,
  },
  {
    name: "Kristen Ramos",
    subText: "Culpa nostrud duis id culpa ea do officia exercitation labore.",
    number: "43",
    image: projectPhoto2,
  },
  {
    name: "Ted Fox",
    subText: "Occaecat ea sunt fugiatlabore est Lorem ex ea.",
    number: "655",
    image: projectPhoto3,
  },
  {
    name: "Calvin Hawkins",
    subText: "Cillum occaecat fugiat sunt laboris .",
    number: "5443",
    image: projectPhoto4,
  },
  {
    name: "Kristen Ramos",
    subText: "Culpa nostrud duis id culpa ea do officia exercitation labore.",
    number: "43",
    image: projectPhoto4,
  },
  {
    name: "Ted Fox",
    subText: "Occaecat ea sunt fugiatlabore est Lorem ex ea.",
    number: "655",
    image: projectPhoto4,
  },
  {
    name: "Calvin Hawkins",
    subText: "Cillum occaecat fugiat sunt laboris .",
    number: "5443",
    image: projectPhoto4,
  },
  {
    name: "Kristen Ramos",
    subText: "Culpa nostrud duis id culpa ea do officia exercitation labore.",
    number: "43",
    image: projectPhoto2,
  },
  {
    name: "Ted Fox",
    subText: "Occaecat ea sunt fugiatlabore est Lorem ex ea.",
    number: "655",
    image: projectPhoto3,
  },
  {
    name: "Kristen Ramos",
    subText: "Culpa nostrud duis id culpa ea do officia exercitation labore.",
    number: "43",
    image: projectPhoto2,
  },
  {
    name: "Ted Fox",
    subText: "Occaecat ea sunt fugiatlabore est Lorem ex ea.",
    number: "655",
    image: projectPhoto3,
  },
  {
    name: "Kristen Ramos",
    subText: "Culpa nostrud duis id culpa ea do officia exercitation labore.",
    number: "43",
    image: projectPhoto4,
  },
  {
    name: "Ted Fox",
    subText: "Occaecat ea sunt fugiatlabore est Lorem ex ea.",
    number: "655",
    image: projectPhoto4,
  },
  {
    name: "Calvin Hawkins",
    subText: "Cillum occaecat fugiat sunt laboris .",
    number: "5443",
    image: projectPhoto4,
  },
  {
    name: "Kristen Ramos",
    subText: "Culpa nostrud duis id culpa ea do officia exercitation labore.",
    number: "43",
    image: projectPhoto2,
  },
  {
    name: "Ted Fox",
    subText: "Occaecat ea sunt fugiatlabore est Lorem ex ea.",
    number: "655",
    image: projectPhoto3,
  },
  {
    name: "Kristen Ramos",
    subText: "Culpa nostrud duis id culpa ea do officia exercitation labore.",
    number: "43",
    image: projectPhoto2,
  },
  {
    name: "Ted Fox",
    subText: "Occaecat ea sunt fugiatlabore est Lorem ex ea.",
    number: "655",
    image: projectPhoto3,
  },
  {
    name: "Kristen Ramos",
    subText: "Culpa nostrud duis id culpa ea do officia exercitation labore.",
    number: "43",
    image: projectPhoto4,
  },
  {
    name: "Ted Fox",
    subText: "Occaecat ea sunt fugiatlabore est Lorem ex ea.",
    number: "655",
    image: projectPhoto4,
  },
  {
    name: "Calvin Hawkins",
    subText: "Cillum occaecat fugiat sunt laboris .",
    number: "5443",
    image: projectPhoto4,
  },
  {
    name: "Kristen Ramos",
    subText: "Culpa nostrud duis id culpa ea do officia exercitation labore.",
    number: "43",
    image: projectPhoto2,
  },
  {
    name: "Ted Fox",
    subText: "Occaecat ea sunt fugiatlabore est Lorem ex ea.",
    number: "655",
    image: projectPhoto3,
  },
  {
    name: "Kristen Ramos",
    subText: "Culpa nostrud duis id culpa ea do officia exercitation labore.",
    number: "43",
    image: projectPhoto2,
  },
  {
    name: "Ted Fox",
    subText: "Occaecat ea sunt fugiatlabore est Lorem ex ea.",
    number: "655",
    image: projectPhoto3,
  },
];

const EmailList = () => {
  const [selected, setSelected] = useState(people[3]);
  return (
    <>
      {/* Mobile design List */}
      <div className="hidden">
        <div className="block p-3">
          <h2 className="text-[20px] font-bold text-gray-800">Mailboxes</h2>
        </div>

        <div className="flex flex-col overflow-hidden rounded-lg shadow">
          <div className="flex p-2 items-center gap-3 border-b border-gray-200 bg-white hover:bg-gray-100">
            <div className="shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4 text-gray-600"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7.875 14.25l1.214 1.942a2.25 2.25 0 001.908 1.058h2.006c.776 0 1.497-.4 1.908-1.058l1.214-1.942M2.41 9h4.636a2.25 2.25 0 011.872 1.002l.164.246a2.25 2.25 0 001.872 1.002h2.092a2.25 2.25 0 001.872-1.002l.164-.246A2.25 2.25 0 0116.954 9h4.636M2.41 9a2.25 2.25 0 00-.16.832V12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 12V9.832c0-.287-.055-.57-.16-.832M2.41 9a2.25 2.25 0 01.382-.632l3.285-3.832a2.25 2.25 0 011.708-.786h8.43c.657 0 1.281.287 1.709.786l3.284 3.832c.163.19.291.404.382.632M4.5 20.25h15A2.25 2.25 0 0021.75 18v-2.625c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125V18a2.25 2.25 0 002.25 2.25z"
                />
              </svg>
            </div>
            <div className="grow">
              <span className="text-[14px] text-gray-800">All inboxes</span>
            </div>
            <div className="shrink-0">
              <div className="flex gap-2 items-center">
                <span className="text-[14px] text-gray-400">28895</span>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-4 h-4 text-gray-400"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 4.5l7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="flex p-2 items-center gap-3 border-b border-gray-200 bg-white hover:bg-gray-100">
            <div className="shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4 text-gray-600"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 13.5h3.86a2.25 2.25 0 012.012 1.244l.256.512a2.25 2.25 0 002.013 1.244h3.218a2.25 2.25 0 002.013-1.244l.256-.512a2.25 2.25 0 012.013-1.244h3.859m-19.5.338V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 00-2.15-1.588H6.911a2.25 2.25 0 00-2.15 1.588L2.35 13.177a2.25 2.25 0 00-.1.661z"
                />
              </svg>
            </div>
            <div className="grow">
              <span className="text-[14px] text-gray-800">Varun Kumar</span>
            </div>
            <div className="shrink-0">
              <div className="flex gap-2 items-center">
                <span className="text-[14px] text-gray-400">16486</span>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-4 h-4 text-gray-400"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 4.5l7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="flex p-2 items-center gap-3 border-b border-gray-200 bg-white hover:bg-gray-100">
            <div className="shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4 text-gray-600"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 13.5h3.86a2.25 2.25 0 012.012 1.244l.256.512a2.25 2.25 0 002.013 1.244h3.218a2.25 2.25 0 002.013-1.244l.256-.512a2.25 2.25 0 012.013-1.244h3.859m-19.5.338V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 00-2.15-1.588H6.911a2.25 2.25 0 00-2.15 1.588L2.35 13.177a2.25 2.25 0 00-.1.661z"
                />
              </svg>
            </div>
            <div className="grow">
              <span className="text-[14px] text-gray-800">Varun Kumar</span>
            </div>
            <div className="shrink-0">
              <div className="flex gap-2 items-center">
                <span className="text-[14px] text-gray-400">16486</span>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-4 h-4 text-gray-400"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 4.5l7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="flex p-2 items-center gap-3 border-b border-gray-200 bg-white hover:bg-gray-100">
            <div className="shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4 text-gray-600"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 13.5h3.86a2.25 2.25 0 012.012 1.244l.256.512a2.25 2.25 0 002.013 1.244h3.218a2.25 2.25 0 002.013-1.244l.256-.512a2.25 2.25 0 012.013-1.244h3.859m-19.5.338V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 00-2.15-1.588H6.911a2.25 2.25 0 00-2.15 1.588L2.35 13.177a2.25 2.25 0 00-.1.661z"
                />
              </svg>
            </div>
            <div className="grow">
              <span className="text-[14px] text-gray-800">Varun Kumar</span>
            </div>
            <div className="shrink-0">
              <div className="flex gap-2 items-center">
                <span className="text-[14px] text-gray-400">16486</span>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-4 h-4 text-gray-400"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 4.5l7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="flex p-2 items-center gap-3 border-b border-gray-200 bg-white hover:bg-gray-100">
            <div className="shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4 text-gray-600"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 13.5h3.86a2.25 2.25 0 012.012 1.244l.256.512a2.25 2.25 0 002.013 1.244h3.218a2.25 2.25 0 002.013-1.244l.256-.512a2.25 2.25 0 012.013-1.244h3.859m-19.5.338V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 00-2.15-1.588H6.911a2.25 2.25 0 00-2.15 1.588L2.35 13.177a2.25 2.25 0 00-.1.661z"
                />
              </svg>
            </div>
            <div className="grow">
              <span className="text-[14px] text-gray-800">Varun Kumar</span>
            </div>
            <div className="shrink-0">
              <div className="flex gap-2 items-center">
                <span className="text-[14px] text-gray-400">16486</span>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-4 h-4 text-gray-400"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 4.5l7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="flex p-2 items-center gap-3 border-b border-gray-200 bg-white hover:bg-gray-100">
            <div className="shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4 text-gray-600"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 13.5h3.86a2.25 2.25 0 012.012 1.244l.256.512a2.25 2.25 0 002.013 1.244h3.218a2.25 2.25 0 002.013-1.244l.256-.512a2.25 2.25 0 012.013-1.244h3.859m-19.5.338V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 00-2.15-1.588H6.911a2.25 2.25 0 00-2.15 1.588L2.35 13.177a2.25 2.25 0 00-.1.661z"
                />
              </svg>
            </div>
            <div className="grow">
              <span className="text-[14px] text-gray-800">Varun Kumar</span>
            </div>
            <div className="shrink-0">
              <div className="flex gap-2 items-center">
                <span className="text-[14px] text-gray-400">16486</span>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-4 h-4 text-gray-400"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 4.5l7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-end px-3 md:px-5 mt-4">
          <Pagination />
        </div>
      </div>
      {/*  */}
      <div className="block lg:hidden">
        <div className="sticky top h-screen flex w-full flex-col border-r border-gray-200 bg-gray-50">
          {/*  */}
          <Listbox value={selected} onChange={setSelected}>
            {({ open }) => (
              <>
                <div className="relative mt-1 px-2">
                  <Listbox.Button className="relative w-full cursor-default rounded-md border border-gray-100 bg-white py-2 pl-3 pr-10 text-left  focus:outline-nonesm:text-sm">
                    <span className="flex items-center">
                      <RiInboxLine />
                      <span className="ml-3 block truncate">
                        {selected.name}
                      </span>
                    </span>
                    <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
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
                    <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                      {peopleList.map((face) => (
                        <Listbox.Option
                          key={face.id}
                          className={({ active }) =>
                            classNames(
                              active
                                ? "text-white bg-indigo-600"
                                : "text-gray-900",
                              "relative cursor-default select-none py-2 pl-3 pr-9"
                            )
                          }
                          value={face}
                        >
                          {({ selected, active }) => (
                            <>
                              <div className="flex items-center">
                                {/* <img src={face.avatar} alt="" className="h-6 w-6 flex-shrink-0 rounded-full" /> */}
                                <span
                                  className={classNames(
                                    selected ? "font-semibold" : "font-normal",
                                    "ml-3 block truncate"
                                  )}
                                >
                                  {face.name}
                                </span>
                              </div>

                              {selected ? (
                                <span
                                  className={classNames(
                                    active ? "text-white" : "text-indigo-600",
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
          {/*  */}
          <div className="block p-4 bg-gray-50">
            <form action="">
              <div className="flex items-center gap-1">
                <div className="shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-4 h-4 text-gray-400"
                  >
                    <path
                      fillRule="evenodd"
                      d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="grow">
                  <input
                    type="text"
                    placeholder="Search"
                    className="w-full bg-gray-50 text-black fs-14 focus-visible:outline-none"
                  />
                </div>
              </div>
            </form>
          </div>

          <div className="px-2 h-full sticky top-0 overflow-y-auto">
            <ul role="list" className="block">
              {people.map((person) => (
                <li
                  key={person.name}
                  className="block bg-gray-50 group hover:bg-gray-100 rounded-xl mb-1 overflow-hidden"
                >
                  <a href="#" className="flex gap-2 p-2 justify-between">
                    <div className="shrink rounded-full w-[30px] h-[30px] overflow-hidden bg-gray-50">
                      <Image
                        width={400}
                        height={400}
                        className="h-full w-full object-cover rounded-full"
                        src={person.image}
                        alt="images"
                      />
                    </div>

                    <div className="flex flex-col gap-1 lg:w-[120px] xl:w-[200px] mr-auto">
                      <p className="text-sm font-medium text-gray-900">
                        {person.name}
                      </p>
                      <p className="text-[12px] w-[170px] text-gray-500 truncate overflow-hidden">
                        {person.subText}
                      </p>
                    </div>
                    <p className="bg-gray-100 group-hover:bg-gray-200 text-[11px] py-1 px-2 rounded-lg self-start">
                      {person.number}
                    </p>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Desktop design List */}
      <div className="block">
        <div className="flex flex-col md:py-10 md:px-8 border-b border-gray-200">
          <div className="flex items-center gap-1 md:gap-4 md:px-2">
            <div>
              <h1 className="text-gray-800 text-[16px] md:text-[30px] font-semibold leading-none">
                Inbox
              </h1>
            </div>
            <div>
              <button type="button" className="pt-3 px-1 md:px-2 pb-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-three-dots w-4 h-4 rotate-90 text-gray-400"
                  viewBox="0 0 16 16"
                >
                  <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
                </svg>
              </button>
            </div>
            <div>
              <button type="button" className="flex items-center gap-2 ">
                <h6 className=" text-[14px] md:text-[16px] text-blue-600 font-medium">
                  cs.notredame@mail.matera.eu
                </h6>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-4 h-4 text-blue-600"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-4 mt-3">
            <h3 className="text-[16px] text-gray-400">
              <span>2661</span> messages
            </h3>
            <span className="border-l border-gray-200 h-[20px]"></span>
            <h3 className="text-[16px] text-gray-700">
              <span>96</span> unread
            </h3>
          </div>
          <div className="block lg:hidden mt-2 md:mt-4 md:px-2">
            <div className="border border-gray-200 rounded-md overflow-hidden flex gap-2 items-center px-3 py-1">
              <div className="shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4 text-gray-400"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                  />
                </svg>
              </div>
              <input
                type="text"
                placeholder="Search"
                className="text-[14px] text-gray-500 w-full p-1 focus-visible:outline-none"
              />
            </div>
          </div>

          <div className=" flex lg:hidden items-center gap-3 lg:gap-6 mt-0 md:mt-6 justify-between py-2 md:px-2 md:py-0">
            <div className="md:flex gap-2  items-center hidden">
              <div className="shrink-0">
                <input
                  id="comments"
                  aria-describedby="comments-description"
                  name="comments"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-200 text-blue-600 "
                />
              </div>
              <div className="shrink-0">
                <button className=" p-1" type="button">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-4 h-4 text-gray-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                    />
                  </svg>
                </button>
              </div>
              <span className="border-l border-gray-200 h-[20px]"></span>
              <div className="shrink-0">
                <button type="button" className="p-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-three-dots w-4 h-4 rotate-90 text-gray-400"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
                  </svg>
                </button>
              </div>
            </div>
            <div className="flex gap-2 items-center ml-auto">
              <div className="shrink-0">
                <h6 className="text-[14px] text-gray-400 ">
                  <span>1-50</span> of <span>3,089</span>{" "}
                </h6>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <button className="text-[16px] text-gray-400 p-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 19.5L8.25 12l7.5-7.5"
                    />
                  </svg>
                </button>
                <button className="text-[16px] text-gray-400 p-1">
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
                      d="M8.25 4.5l7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-3 lg:gap-6 mt-6 justify-between px-2">
            <div className="shrink-0">
              <input
                id="comments"
                aria-describedby="comments-description"
                name="comments"
                type="checkbox"
                className="h-4 w-4 rounded border-gray-200 text-blue-600 "
              />
            </div>
            <div className="shrink-0">
              <button className=" p-1 relative group" type="button">
                <div className="hidden sm:block">
                  <span className="hidden group-hover:block -top-5 px-1 py-1 text-center rounded-md absolute bg-gray-900 text-white text-[10px] inset-x-1/2 left-[50%] -translate-x-2/4 w-[50px]">
                    Delete
                  </span>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4 text-gray-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                  />
                </svg>
              </button>
            </div>
            <span className="border-l border-gray-200 h-[20px]"></span>
            <div className="shrink-0">
              <button type="button" className="p-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-three-dots w-4 h-4 rotate-90 text-gray-400"
                  viewBox="0 0 16 16"
                >
                  <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
                </svg>
              </button>
            </div>
            <div className="basis-full">
              <div className="border border-gray-200 rounded-md overflow-hidden flex gap-2 items-center px-3 py-1">
                <div className="shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-4 h-4 text-gray-400"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                    />
                  </svg>
                </div>
                <input
                  type="text"
                  placeholder="Search"
                  className="text-[14px] text-gray-500 w-full p-1 focus-visible:outline-none"
                />
              </div>
            </div>
            <div className="shrink-0">
              <h6 className="text-[14px] text-gray-400 ">
                <span>1-50</span> of <span>3,089</span>{" "}
              </h6>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <button className="text-[16px] text-gray-400 p-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 19.5L8.25 12l7.5-7.5"
                  />
                </svg>
              </button>
              <button className="text-[16px] text-gray-400 p-1">
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
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        {/* desktop email list  */}
        <div className="block mb-3">
          <Link
            href=""
            className="hidden lg:grid grid-cols-10 md:grid-cols-12 md:gap-1 items-center border-b border-gray-200 py-2 px-1 md:px-10 bg-white hover:bg-gray-100"
          >
            <div className="col-auto">
              <div className=" hidden md:block">
                <input
                  id="Mail"
                  aria-describedby="comments-description"
                  name="Mail"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-200 text-blue-600 "
                />
              </div>
              <div className="shrink-0 md:hidden">
                <div className="w-10 h-10 rounded-full overflow-hidden">
                  <Image
                    src={picMail}
                    className="w-full h-full object-cover"
                    alt="Picture of the author"
                    width={500}
                    height={500}
                  />
                </div>
              </div>
            </div>

            <div className="col-span-7 md:col-span-10 pl-2 sm:pl-0">
              <div className="grid lg:grid-cols-10 items-center gap-0 md:gap-2">
                <h3 className="text-gray-700 text-[14px] font-bold text-left  truncate lg:col-span-2">
                  Youtube Dolore esse magna ipsum culpa nulla qui commodo ex eu
                  reprehenderit in nisi nisi.
                </h3>
                <h3 className="text-gray-400 md:text-gray-700 text-[13px] md:text-[14px] font-normal md:font-bold shrink-0 lg:col-span-7 truncate">
                  Velit in exercitation esse proident reprehenderit consequat
                  laborum ad incididunt in occaecat occaecat.
                </h3>
                {/* <span className="text-gray-700 text-[14px] font-light hidden lg:inline-block shrink-0 truncate lg:col-span-6">
                  Consequat labore officia est elit deserunt reprehenderit
                  veniam qui tempor qui in. Labore Lorem cupidatat aute mollit.
                  Eiusmod irure cupidatat tempor pariatur exercitation pariatur
                  anim culpa aliquip incididunt excepteur eu. Consequat velit
                  reprehenderit esse sint consequat in magna occaecat sint sunt
                  sint nulla. Fugiat quis Lorem ad deserunt enim in Lorem
                  consectetur aliquip id cillum quis. Sint cupidatat enim
                  eiusmod laborum reprehenderit dolor Lorem voluptate nostrud
                  fugiat officia voluptate ullamco exercitation.
                </span> */}
              </div>
            </div>
            <div className="col-span-2 md:col-span-1">
              <h4 className="text-gray-700 text-[12px] font-medium text-right">
                02:30 PM
              </h4>
            </div>
          </Link>
          <Link
            href=""
            className="hidden lg:grid grid-cols-10 md:grid-cols-12 md:gap-1 items-center border-b border-gray-200 py-2 px-1 md:px-10 bg-white hover:bg-gray-100"
          >
            <div className="col-auto">
              <div className=" hidden md:block">
                <input
                  id="Mail"
                  aria-describedby="comments-description"
                  name="Mail"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-200 text-blue-600 "
                />
              </div>
              <div className="shrink-0 md:hidden">
                <div className="w-10 h-10 rounded-full overflow-hidden">
                  <Image
                    src={picMail}
                    className="w-full h-full object-cover"
                    alt="Picture of the author"
                    width={500}
                    height={500}
                  />
                </div>
              </div>
            </div>

            <div className="col-span-7 md:col-span-10 pl-2 sm:pl-0">
              <div className="grid lg:grid-cols-10 items-center gap-0 md:gap-2">
                <h3 className="text-gray-700 text-[14px] font-bold text-left  truncate lg:col-span-2">
                  Youtube Dolore esse magna ipsum culpa nulla qui commodo ex eu
                  reprehenderit in nisi nisi.
                </h3>
                <h3 className="text-gray-400 md:text-gray-700 text-[13px] md:text-[14px] font-normal md:font-bold shrink-0 lg:col-span-7 truncate">
                  Velit in exercitation esse proident reprehenderit consequat
                  laborum ad incididunt in occaecat occaecat.
                </h3>
                {/* <span className="text-gray-700 text-[14px] font-light hidden lg:inline-block shrink-0 truncate lg:col-span-6">
                  Consequat labore officia est elit deserunt reprehenderit
                  veniam qui tempor qui in. Labore Lorem cupidatat aute mollit.
                  Eiusmod irure cupidatat tempor pariatur exercitation pariatur
                  anim culpa aliquip incididunt excepteur eu. Consequat velit
                  reprehenderit esse sint consequat in magna occaecat sint sunt
                  sint nulla. Fugiat quis Lorem ad deserunt enim in Lorem
                  consectetur aliquip id cillum quis. Sint cupidatat enim
                  eiusmod laborum reprehenderit dolor Lorem voluptate nostrud
                  fugiat officia voluptate ullamco exercitation.
                </span> */}
              </div>
            </div>
            <div className="col-span-2 md:col-span-1">
              <h4 className="text-gray-700 text-[12px] font-medium text-right">
                02:30 PM
              </h4>
            </div>
          </Link>
          <Link
            href=""
            className="hidden lg:grid grid-cols-10 md:grid-cols-12 md:gap-1 items-center border-b border-gray-200 py-2 px-1 md:px-10 bg-white hover:bg-gray-100"
          >
            <div className="col-auto">
              <div className=" hidden md:block">
                <input
                  id="Mail"
                  aria-describedby="comments-description"
                  name="Mail"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-200 text-blue-600 "
                />
              </div>
              <div className="shrink-0 md:hidden">
                <div className="w-10 h-10 rounded-full overflow-hidden">
                  <Image
                    src={picMail}
                    className="w-full h-full object-cover"
                    alt="Picture of the author"
                    width={500}
                    height={500}
                  />
                </div>
              </div>
            </div>

            <div className="col-span-7 md:col-span-10 pl-2 sm:pl-0">
              <div className="grid lg:grid-cols-10 items-center gap-0 md:gap-2">
                <h3 className="text-gray-700 text-[14px] font-bold text-left  truncate lg:col-span-2">
                  Youtube Dolore esse magna ipsum culpa nulla qui commodo ex eu
                  reprehenderit in nisi nisi.
                </h3>
                <h3 className="text-gray-400 md:text-gray-700 text-[13px] md:text-[14px] font-normal md:font-bold shrink-0 lg:col-span-7 truncate">
                  Velit in exercitation esse proident reprehenderit consequat
                  laborum ad incididunt in occaecat occaecat.
                </h3>
                {/* <span className="text-gray-700 text-[14px] font-light hidden lg:inline-block shrink-0 truncate lg:col-span-6">
                  Consequat labore officia est elit deserunt reprehenderit
                  veniam qui tempor qui in. Labore Lorem cupidatat aute mollit.
                  Eiusmod irure cupidatat tempor pariatur exercitation pariatur
                  anim culpa aliquip incididunt excepteur eu. Consequat velit
                  reprehenderit esse sint consequat in magna occaecat sint sunt
                  sint nulla. Fugiat quis Lorem ad deserunt enim in Lorem
                  consectetur aliquip id cillum quis. Sint cupidatat enim
                  eiusmod laborum reprehenderit dolor Lorem voluptate nostrud
                  fugiat officia voluptate ullamco exercitation.
                </span> */}
              </div>
            </div>
            <div className="col-span-2 md:col-span-1">
              <h4 className="text-gray-700 text-[12px] font-medium text-right">
                02:30 PM
              </h4>
            </div>
          </Link>
          <Link
            href=""
            className="hidden lg:grid grid-cols-10 md:grid-cols-12 md:gap-1 items-center border-b border-gray-200 py-2 px-1 md:px-10 bg-white hover:bg-gray-100"
          >
            <div className="col-auto">
              <div className=" hidden md:block">
                <input
                  id="Mail"
                  aria-describedby="comments-description"
                  name="Mail"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-200 text-blue-600 "
                />
              </div>
              <div className="shrink-0 md:hidden">
                <div className="w-10 h-10 rounded-full overflow-hidden">
                  <Image
                    src={picMail}
                    className="w-full h-full object-cover"
                    alt="Picture of the author"
                    width={500}
                    height={500}
                  />
                </div>
              </div>
            </div>

            <div className="col-span-7 md:col-span-10 pl-2 sm:pl-0">
              <div className="grid lg:grid-cols-10 items-center gap-0 md:gap-2">
                <h3 className="text-gray-700 text-[14px] font-bold text-left  truncate lg:col-span-2">
                  Youtube Dolore esse magna ipsum culpa nulla qui commodo ex eu
                  reprehenderit in nisi nisi.
                </h3>
                <h3 className="text-gray-400 md:text-gray-700 text-[13px] md:text-[14px] font-normal md:font-bold shrink-0 lg:col-span-7 truncate">
                  Velit in exercitation esse proident reprehenderit consequat
                  laborum ad incididunt in occaecat occaecat.
                </h3>
                {/* <span className="text-gray-700 text-[14px] font-light hidden lg:inline-block shrink-0 truncate lg:col-span-6">
                  Consequat labore officia est elit deserunt reprehenderit
                  veniam qui tempor qui in. Labore Lorem cupidatat aute mollit.
                  Eiusmod irure cupidatat tempor pariatur exercitation pariatur
                  anim culpa aliquip incididunt excepteur eu. Consequat velit
                  reprehenderit esse sint consequat in magna occaecat sint sunt
                  sint nulla. Fugiat quis Lorem ad deserunt enim in Lorem
                  consectetur aliquip id cillum quis. Sint cupidatat enim
                  eiusmod laborum reprehenderit dolor Lorem voluptate nostrud
                  fugiat officia voluptate ullamco exercitation.
                </span> */}
              </div>
            </div>
            <div className="col-span-2 md:col-span-1">
              <h4 className="text-gray-700 text-[12px] font-medium text-right">
                02:30 PM
              </h4>
            </div>
          </Link>
          <Link
            href=""
            className="hidden lg:grid grid-cols-10 md:grid-cols-12 md:gap-1 items-center border-b border-gray-200 py-2 px-1 md:px-10 bg-white hover:bg-gray-100"
          >
            <div className="col-auto">
              <div className=" hidden md:block">
                <input
                  id="Mail"
                  aria-describedby="comments-description"
                  name="Mail"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-200 text-blue-600 "
                />
              </div>
              <div className="shrink-0 md:hidden">
                <div className="w-10 h-10 rounded-full overflow-hidden">
                  <Image
                    src={picMail}
                    className="w-full h-full object-cover"
                    alt="Picture of the author"
                    width={500}
                    height={500}
                  />
                </div>
              </div>
            </div>

            <div className="col-span-7 md:col-span-10 pl-2 sm:pl-0">
              <Link
                href=""
                className="grid lg:grid-cols-10 items-center gap-0 md:gap-2"
              >
                <h3 className="text-gray-700 text-[14px] font-bold text-left  truncate lg:col-span-2">
                  Youtube Dolore esse magna ipsum culpa nulla qui commodo ex eu
                  reprehenderit in nisi nisi.
                </h3>
                <h3 className="text-gray-400 md:text-gray-700 text-[13px] md:text-[14px] font-normal md:font-bold shrink-0 lg:col-span-7 truncate">
                  Velit in exercitation esse proident reprehenderit consequat
                  laborum ad incididunt in occaecat occaecat.
                </h3>
                {/* <span className="text-gray-700 text-[14px] font-light hidden lg:inline-block shrink-0 truncate lg:col-span-6">
                  Consequat labore officia est elit deserunt reprehenderit
                  veniam qui tempor qui in. Labore Lorem cupidatat aute mollit.
                  Eiusmod irure cupidatat tempor pariatur exercitation pariatur
                  anim culpa aliquip incididunt excepteur eu. Consequat velit
                  reprehenderit esse sint consequat in magna occaecat sint sunt
                  sint nulla. Fugiat quis Lorem ad deserunt enim in Lorem
                  consectetur aliquip id cillum quis. Sint cupidatat enim
                  eiusmod laborum reprehenderit dolor Lorem voluptate nostrud
                  fugiat officia voluptate ullamco exercitation.
                </span> */}
              </Link>
            </div>
            <div className="col-span-2 md:col-span-1">
              <h4 className="text-gray-700 text-[12px] font-medium text-right">
                02:30 PM
              </h4>
            </div>
          </Link>
        </div>
        {/* mobile email list */}
        <ul role="list" className="block lg:hidden">
          {peopleMob.map((person) => (
            <li
              key={person.name}
              className="block border-b border-gray-200 group hover:bg-gray-100 overflow-hidden"
            >
              <a href="#" className="flex gap-2 p-2 items-center">
                <div className="shrink rounded-full w-[30px] h-[30px] overflow-hidden bg-gray-50">
                  <Image
                    width={400}
                    height={400}
                    className="h-full w-full object-cover rounded-full"
                    src={person.image}
                    alt="images"
                  />
                </div>

                <div className="flex flex-col gap-1 grow">
                  <p className="text-sm font-medium text-gray-900">
                    {person.name}
                  </p>
                  <p className="text-[12px] w-[170px] text-gray-500 truncate overflow-hidden">
                    {person.subText}
                  </p>
                </div>
                <p className="bg-gray-100 group-hover:bg-gray-200 text-[11px] py-1 px-2 rounded-lg ">
                  {person.number}
                </p>
              </a>
            </li>
          ))}
        </ul>

        {/* <div className="flex flex-col p-2 md:p-5">
          <div className="flex gap-3 md:gap-8 justify-between bg-white hover:bg-gray-100 border-b border-gary-200 items-center p-2">
            <div className="shrink-0 hidden md:block">
              <input
                id="Mail"
                aria-describedby="comments-description"
                name="Mail"
                type="checkbox"
                className="h-4 w-4 rounded border-gray-200 text-blue-600 "
              />
            </div>
            <div className="shrink-0 md:hidden">
              <div className="w-10 h-10 rounded-full overflow-hidden">
                <Image
                  src={picMail}
                  className="w-full h-full object-cover"
                  alt="Picture of the author"
                  width={500}
                  height={500}
                />
              </div>
            </div>
            <div className="md:items-center lg:flex grow gap-4 w-6/12 ">
              <div className="shrink-0">
                <h3 className="text-gray-700 text-[14px] font-bold text-left  truncate w-[130px]">
                  Youtube
                </h3>
              </div>
              <div className="grow w-7/12">
                <div className="w-full  flex gap-2">
                  <h3 className="text-gray-700 text-[14px] font-bold shrink-0">
                    Cillum duis excepteur nisi eu sint.
                  </h3>
                  <span className="text-gray-700 text-[14px] font-light hidden lg:inline-block shrink-0 truncate w-9/12">
                    Consequat labore officia est elit deserunt reprehenderit
                    veniam qui tempor qui in. Labore Lorem cupidatat aute
                    mollit. Eiusmod irure cupidatat tempor pariatur exercitation
                    pariatur anim culpa aliquip incididunt excepteur eu.
                    Consequat velit reprehenderit esse sint consequat in magna
                    occaecat sint sunt sint nulla. Fugiat quis Lorem ad deserunt
                    enim in Lorem consectetur aliquip id cillum quis. Sint
                    cupidatat enim eiusmod laborum reprehenderit dolor Lorem
                    voluptate nostrud fugiat officia voluptate ullamco
                    exercitation.
                  </span>
                </div>
              </div>
            </div>
            <div className="shrink-0">
              <h4 className="text-gray-700 text-[12px] font-medium">
                02:30 PM
              </h4>
            </div>
          </div>
          <div className="flex gap-3 md:gap-8 justify-between bg-white hover:bg-gray-100 border-b border-gary-200 items-center p-2">
            <div className="shrink-0 hidden md:block">
              <input
                id="Mail"
                aria-describedby="comments-description"
                name="Mail"
                type="checkbox"
                className="h-4 w-4 rounded border-gray-200 text-blue-600 "
              />
            </div>
            <div className="shrink-0 md:hidden">
              <div className="w-10 h-10 rounded-full overflow-hidden">
                <Image
                  src={picMail}
                  className="w-full h-full object-cover"
                  alt="Picture of the author"
                  width={500}
                  height={500}
                />
              </div>
            </div>
            <div className="md:items-center lg:flex grow gap-4 w-6/12 ">
              <div className="shrink-0">
                <h3 className="text-gray-700 text-[14px] font-bold text-left  truncate w-[130px]">
                  Youtube
                </h3>
              </div>
              <div className="grow w-7/12">
                <div className="w-full  flex gap-2">
                  <h3 className="text-gray-700 text-[14px] font-bold shrink-0">
                    Cillum duis excepteur nisi eu sint.
                  </h3>
                  <span className="text-gray-700 text-[14px] font-light hidden lg:inline-block shrink-0 truncate w-9/12">
                    Consequat labore officia est elit deserunt reprehenderit
                    veniam qui tempor qui in. Labore Lorem cupidatat aute
                    mollit. Eiusmod irure cupidatat tempor pariatur exercitation
                    pariatur anim culpa aliquip incididunt excepteur eu.
                    Consequat velit reprehenderit esse sint consequat in magna
                    occaecat sint sunt sint nulla. Fugiat quis Lorem ad deserunt
                    enim in Lorem consectetur aliquip id cillum quis. Sint
                    cupidatat enim eiusmod laborum reprehenderit dolor Lorem
                    voluptate nostrud fugiat officia voluptate ullamco
                    exercitation.
                  </span>
                </div>
              </div>
            </div>
            <div className="shrink-0">
              <h4 className="text-gray-700 text-[12px] font-medium">
                02:30 PM
              </h4>
            </div>
          </div>
        </div> */}
        <div className="flex justify-end px-3 md:px-5 mt-3">
          <Pagination />
        </div>
      </div>
    </>
  );
};

export default EmailList;
