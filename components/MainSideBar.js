import { React, Fragment, useState } from "react";
import { Dialog, Menu, Transition } from "@headlessui/react";
import ads from "../public/images/ads.png";
import {
  Bars3CenterLeftIcon,
  Bars4Icon,
  ClockIcon,
  HomeIcon,
  InboxIcon,
  ArrowPathIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  ChevronRightIcon,
  ChevronUpDownIcon,
  EllipsisVerticalIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/20/solid";
import Image from "next/image";

const navigation = [
  { name: "Inbox", href: "/", icon: InboxIcon, current: true },
  { name: "Refresh", href: "#", icon: ArrowPathIcon, current: false },
  // { name: "Recent", href: "#", icon: ClockIcon, current: false },
];
const navigationdown = [
  // { name: "API", href: "#", current: true },
  { name: "FAQ", href: "faq", current: false },
  { name: "Privacy ", href: "privacy", current: false },
  { name: "Feedback", href: "feedback", current: false },
  { name: "Contacts", href: "contacts", current: false },
  // { name: "Do Not Sell My Personal Information", href: "#", current: false },
  // { name: "Change consent", href: "#", current: false },
  // { name: "Mail.gw", href: "#", current: false },
];
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const teams = [
  { name: "Engineering", href: "#", bgColorClass: "bg-blue-500" },
  { name: "Human Resources", href: "#", bgColorClass: "bg-green-500" },
  { name: "Customer Success", href: "#", bgColorClass: "bg-yellow-500" },
];
export default function MainSideBar() {
  return (
    <>
      {/* Sidebar component, swap this element with another sidebar if you like */}
      <div className=" flex h-0 flex-1 flex-col overflow-y-auto pt-1">
        <div className="flex flex-shrink-0 items-center px-6 ">
          {/* <img
            className="h-8 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=purple&shade=500"
            alt="Your Company"
          /> */}
        </div>
        {/* Navigation */}
        <nav className="mt-6 px-3">
          <div className="space-y-1 mb-2">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={classNames(
                  item.current
                    ? "bg-white text-gray-900 hover:bg-gray-100 dark:text-ebony-500 dark:bg-ebony-800 dark:hover:bg-ebony-800"
                    : "text-gray-700 hover:text-gray-900 hover:bg-gray-50 dark:text-ebony-500 dark:bg-ebony-900 dark:hover:bg-ebony-800 dark:hover:text-ebony-400",
                  "group flex items-center px-2 py-2 text-sm font-medium rounded-md"
                )}
                aria-current={item.current ? "page" : undefined}
              >
                <item.icon
                  className={classNames(
                    item.current
                      ? "text-gray-500 dark:text-ebony-500"
                      : "text-gray-400 group-hover:text-gray-500 dark:text-ebony-500 dark:group-hover:text-ebony-400",
                    "mr-3 flex-shrink-0 h-6 w-6"
                  )}
                  aria-hidden="true"
                />
                {item.name}
              </a>
            ))}
          </div>
          <div className="block border-b border-gray-100 dark:border-ebony-800 border-1"></div>
          <div className="d-block my-3">
            <Image src={ads} alt="image" className="w-100" />
          </div>
          <div className="block border-b border-gray-100 dark:border-ebony-800 border-1"></div>
          <div className="space-y-1 mt-2">
            {navigationdown.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={classNames(
                  item.current
                    ? "bg-white text-gray-900 hover:bg-gray-100 dark:text-ebony-500 dark:bg-ebony-800 dark:hover:bg-ebony-800"
                    : "text-gray-700 hover:text-gray-900 hover:bg-gray-50 dark:text-ebony-500 dark:bg-ebony-900 dark:hover:bg-ebony-800 dark:hover:text-ebony-400",
                  "group flex items-center px-2 py-2 text-sm font-medium rounded-md"
                )}
                aria-current={item.current ? "page" : undefined}
              >
                {item.name}
              </a>
            ))}
          </div>
        </nav>
        <div className="flex flex-col gap-3 px-3">
          <div className="flex gap-3">
            <h3 className="text-gray-400 dark:text-ebony-400">0 B</h3>
            <span className="text-gray-400 dark:text-ebony-400">/</span>
            <h3 className="text-gray-400 dark:text-ebony-400">40 B</h3>
          </div>
          <div className="flex bg-gray-100 overflow-hidden rounded-full">
            <div className="p-[4px] bg-blue-500 w-[0px]"></div>
          </div>
        </div>
        <div className="block border-b border-gray-100 dark:border-ebony-800 mt-2 border-1"></div>
        <div className="block px-3 py-4">
          <h3 className="text-[14px] text-gray-400 dark:text-ebony-400 font-light">
            © 2023 Mail.tm
          </h3>
        </div>
        {/* User account dropdown */}
      </div>
    </>
  );
}
