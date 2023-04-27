import React, { Children } from "react";
import { Fragment, useState } from "react";
import { Dialog, Menu, Transition } from "@headlessui/react";
import ads from "../public/images/ads.png";
import Image from "next/image";
import {
  Bars3CenterLeftIcon,
  Bars4Icon,
  ClockIcon,
  HomeIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  ChevronRightIcon,
  ChevronUpDownIcon,
  EllipsisVerticalIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/20/solid";
import MainSideBar from "@/components/MainSideBar";
import Header from "@/components/Header";
import UnreadMail from "@/components/Inbox_Components/UnreadMail";
import EmptyMail from "@/components/Inbox_Components/EmptyMail";
import Home from "@/pages";
const navigation = [
  { name: "Home", href: "#", icon: HomeIcon, current: true },
  { name: "My tasks", href: "#", icon: Bars4Icon, current: false },
  { name: "Recent", href: "#", icon: ClockIcon, current: false },
];
const navigationdown = [
  { name: "API", href: "#", current: true },
  { name: "FAQ", href: "#", current: false },
  { name: "Privacy", href: "#", current: false },
  { name: "Feedback", href: "#", current: false },
  { name: "Contacts", href: "#", current: false },
  { name: "Do Not Sell My Personal Information", href: "#", current: false },
  { name: "Change consent", href: "#", current: false },
  { name: "Mail.gw", href: "#", current: false },
];
const teams = [
  { name: "Engineering", href: "#", bgColorClass: "bg-blue-500" },
  { name: "Human Resources", href: "#", bgColorClass: "bg-green-500" },
  { name: "Customer Success", href: "#", bgColorClass: "bg-yellow-500" },
];
const projects = [
  {
    id: 1,
    title: "GraphQL API",
    initials: "GA",
    team: "Engineering",
    members: [
      {
        name: "Dries Vincent",
        handle: "driesvincent",
        imageUrl:
          "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
      {
        name: "Lindsay Walton",
        handle: "lindsaywalton",
        imageUrl:
          "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
      {
        name: "Courtney Henry",
        handle: "courtneyhenry",
        imageUrl:
          "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
      {
        name: "Tom Cook",
        handle: "tomcook",
        imageUrl:
          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
    ],
    totalMembers: 12,
    lastUpdated: "March 17, 2020",
    pinned: true,
    bgColorClass: "bg-pink-600",
  },
  // More projects...
];
const pinnedProjects = projects.filter((project) => project.pinned);

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function PostLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <>
      <div className="min-h-full ">
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-40 lg:hidden"
            onClose={setSidebarOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-600 bg-opacity-75" />
            </Transition.Child>

            <div className="fixed inset-0 z-40 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <Dialog.Panel className="relative flex w-full max-w-xs flex-1 flex-col bg-white pt-5 pb-4">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute top-0 right-0 -mr-12 pt-2">
                      <button
                        type="button"
                        className="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                        onClick={() => setSidebarOpen(false)}
                      >
                        <span className="sr-only">Close sidebar</span>
                        <XMarkIcon
                          className="h-6 w-6 text-white"
                          aria-hidden="true"
                        />
                      </button>
                    </div>
                  </Transition.Child>
                  <div className="flex flex-shrink-0 items-center px-4">
                    {/* <img
                      className="h-8 w-auto"
                      src="https://tailwindui.com/img/logos/mark.svg?color=purple&shade=500"
                      alt="Your Company"
                    /> */}
                  </div>
                  <div className="mt-5 h-0 flex-1 overflow-y-auto">
                    <nav className="mt-6 px-3">
                      <div className="space-y-1">
                        {navigation.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className={classNames(
                              item.current
                                ? "bg-white text-gray-900 hover:bg-gray-100"
                                : "text-gray-700 hover:text-gray-900 hover:bg-gray-50",
                              "group flex items-center px-2 py-2 text-sm font-medium rounded-md"
                            )}
                            aria-current={item.current ? "page" : undefined}
                          >
                            <item.icon
                              className={classNames(
                                item.current
                                  ? "text-gray-500"
                                  : "text-gray-400 group-hover:text-gray-500",
                                "mr-3 flex-shrink-0 h-6 w-6"
                              )}
                              aria-hidden="true"
                            />
                            {item.name}
                          </a>
                        ))}
                      </div>
                      <div className="block border-b border-gray-100 border-1"></div>
                      <div className="d-block my-3">
                        <Image src={ads} alt="image" className="w-100" />
                      </div>
                      <div className="block border-b border-gray-100 border-1"></div>
                      <div className="space-y-1">
                        {navigationdown.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className={classNames(
                              item.current
                                ? "bg-white text-gray-900 hover:bg-gray-50"
                                : "text-gray-700 hover:text-gray-900 hover:bg-gray-50",
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
                        <h3 className="text-gray-400">0 B</h3>
                        <span className="text-gray-400">/</span>
                        <h3 className="text-gray-400">40 B</h3>
                      </div>
                      <div className="flex bg-gray-100 overflow-hidden rounded-full">
                        <div className="p-[4px] bg-blue-500 w-[0px]"></div>
                      </div>
                    </div>
                    <div className="block border-b border-gray-100 border-1"></div>
                    <div className="block px-3 py-4">
                      <h3 className="text-[14px] text-gray-400 font-light">
                        © 2023 Mail.tm
                      </h3>
                    </div>
                    {/* User account dropdown */}
                  </div>
                </Dialog.Panel>
              </Transition.Child>
              <div className="w-14 flex-shrink-0" aria-hidden="true">
                {/* Dummy element to force sidebar to shrink to fit close icon */}
              </div>
            </div>
          </Dialog>
        </Transition.Root>

        {/* Static sidebar for desktop */}
        <div className="hidden  lg:fixed lg:inset-y-0 lg:flex lg:w-64 lg:flex-col lg:border-r lg:border-gray-200 dark:lg:border-ebony-800 dark:lg:bg-ebony-900  lg:bg-white lg:pt-5 lg:pb-4">
          <MainSideBar />
        </div>
        {/* Main column */}
        <div className="flex flex-col lg:pl-64">
          {/* Search header */}
          <div className="sticky top-0 z-10 flex h-16 flex-shrink-0 border-b border-gray-200  bg-white lg:hidden">
            <button
              type="button"
              className="border-r border-gray-200 px-4 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-500 lg:hidden"
              onClick={() => setSidebarOpen(true)}
            >
              <span className="sr-only">Open sidebar</span>
              <Bars3CenterLeftIcon className="h-6 w-6" aria-hidden="true" />
            </button>

            <Header />
          </div>
          <main className="flex-1">
            {/* Page title & actions */}
            <div className="hidden lg:block">
              <Header />
            </div>
            <div className="mx-auto p-4 max-w-7xl sm:px-6 md:px-8 lg:max-w-full h-full">
              {children}
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
