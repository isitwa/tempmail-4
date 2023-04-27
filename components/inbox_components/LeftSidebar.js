"use client";
import React, { useState } from "react";
import Image from "next/image";
import {
  ArchiveBoxIcon as ArchiveBoxIconOutline,
  Bars3Icon,
  BellIcon,
  FlagIcon,
  InboxIcon,
  NoSymbolIcon,
  PencilSquareIcon,
  UserCircleIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import NewEmailMessage from "./NewEmailMessage";

const sidebarNavigation = [
  { name: "Inbox", numberInfo: "5", href: "#", icon: InboxIcon, current: true },
  {
    name: "Favorites",
    numberInfo: "2",
    href: "#",
    icon: ArchiveBoxIconOutline,
    current: false,
  },
  {
    name: "Sent",
    numberInfo: "38",
    href: "#",
    icon: UserCircleIcon,
    current: false,
  },
  {
    name: "Drafts",
    numberInfo: "6",
    href: "#",
    icon: FlagIcon,
    current: false,
  },
  {
    name: "Spam",
    numberInfo: "20",
    href: "#",
    icon: NoSymbolIcon,
    current: false,
  },
  {
    name: "Trash",
    numberInfo: "35",
    href: "#",
    icon: PencilSquareIcon,
    current: false,
  },
];
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
function LeftSidebar() {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <>
      <nav
        aria-label="Sidebar"
        className="hidden lg:flex lg:flex-shrink-0 lg:overflow-y-auto lg:bg-gray-800 fixed bottom-0 left-0 top-0 h-screen flex-col"
      >
        <div className="relative flex lg:w-52 xl:w-60 flex-col space-y-1 p-3">
          <div className="block mb-2 w-full border-b border-gray-500 pb-3 mb-3">
            <button
              onClick={() => {
                setModalOpen(true);
              }}
              className="bg-black hover:bg-gray-600 text-white w-full rounded-lg p-4"
            >
              <div className="flex gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span className="text-white text-[14px]">New Message</span>
              </div>
            </button>
          </div>
          {sidebarNavigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={classNames(
                item.current
                  ? "bg-gray-900 text-white w-full"
                  : "text-gray-400 hover:bg-gray-700",
                "flex-shrink-0 inline-flex items-center px-2 h-10 rounded-lg w-full"
              )}
            >
              <div className="flex gap-3 align-middle w-full">
                <span className="sr-only">{item.name}</span>
                <item.icon className="h-5 w-5" aria-hidden="true" />
                <h3 className="text-white text-[14px]">{item.name}</h3>
                <h5
                  className={classNames(
                    item.current
                      ? "bg-green-500 ml-auto text-[12px] px-2 py-1 rounded-sm"
                      : " ml-auto text-[12px] px-2 py-1 rounded-sm"
                  )}
                >
                  {item.numberInfo}
                </h5>
              </div>
            </a>
          ))}
        </div>
        <div className="flex flex-col gap-3 mt-auto py-3 px-5">
          <h3 className="text-white text-[16px]">Labels</h3>
          <div className="flex gap-3 items-center">
            <div className="w-[8px] h-[8px] rounded-full bg-blue-600"></div>
            <h6 className="text-white text-[14px]">Design</h6>
          </div>
          <div className="flex gap-3 items-center">
            <div className="w-[8px] h-[8px] rounded-full bg-amber-600"></div>
            <h6 className="text-white text-[14px]">Social Media</h6>
          </div>
          <div className="flex gap-3 items-center">
            <div className="w-[8px] h-[8px] rounded-full bg-green-600"></div>
            <h6 className="text-white text-[14px]">Workflow</h6>
          </div>
          <div className="flex gap-3 items-center">
            <div className="w-[8px] h-[8px] rounded-full bg-red-600"></div>
            <h6 className="text-white text-[14px]">Dribbble</h6>
          </div>
          <div className="flex my-4 w-full ">
            <div className="flex flex-col gap-1 w-full">
              <div className="flex bg-blue-200 rounded-md overflow-hidden mb-1">
                <div className="w-[10%] p-[2px] bg-blue-500 rounded-full"></div>
              </div>
              <div className="flex justify-between">
                <div className="flex">
                  <h3 className="text-[12px] text-blue-400 font-medium">
                    522.41 KD
                  </h3>{" "}
                  <span className="text-[12px] text-blue-400">/</span>{" "}
                  <h3 className="text-[12px] text-blue-400">500.00 MB</h3>
                </div>
                <div className="flex">
                  <h3 className="text-[12px] text-blue-400">500.00 MB</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      {/* // new message pop up */}
      {modalOpen && <NewEmailMessage setOpenModal={setModalOpen} />}
    </>
  );
}

export default LeftSidebar;
