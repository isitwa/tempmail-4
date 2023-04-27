import React from "react";
import projectPhoto1 from "../../public/images/user.bmp";
import projectPhoto2 from "../../public/images/user.bmp";
import projectPhoto3 from "../../public/images/user.bmp";
import projectPhoto4 from "../../public/images/icons/mail-icon.png";
import Image from "next/image";
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

function RightSidebar() {
  const [selected, setSelected] = useState(people[3]);
  return (
    <>
      <div className="sticky top h-screen flex w-full flex-col border-r border-gray-200 bg-gray-50">
        {/*  */}
        <Listbox value={selected} onChange={setSelected}>
          {({ open }) => (
            <>
              <div className="relative mt-1 px-2">
                <Listbox.Button className="relative w-full cursor-default rounded-md border border-gray-100 bg-white py-2 pl-3 pr-10 text-left  focus:outline-nonesm:text-sm">
                  <span className="flex items-center">
                    <RiInboxLine />
                    <span className="ml-3 block truncate">{selected.name}</span>
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
        <div className="block p-4 bg-gray-50 ">
          <form action="" className="focus-within:bg-white p-2 rounded-md">
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
                  className="w-full bg-gray-50 text-black fs-14 focus-visible:outline-none focus:bg-white"
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
                <a href="#" className="flex gap-2 p-2">
                  <div className="shrink rounded-full w-[30px] h-[30px] overflow-hidden bg-gray-50">
                    <Image
                      width={400}
                      height={400}
                      className="h-full w-full object-cover rounded-full"
                      src={person.image}
                      alt="images"
                    />
                  </div>

                  <div className="flex flex-col gap-1 lg:w-[120px] xl:w-[200px]">
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
    </>
  );
}

export default RightSidebar;
