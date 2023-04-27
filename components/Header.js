import React from "react";
import { Fragment, useState } from "react";
import { Listbox, Transition, Menu, Dialog } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";

import Image from "next/image";
import user from "../public/images/user.png";
import user1 from "../public/images/user1.png";
import user2 from "../public/images/user2.png";

const people = [
  { id: 1, name: "العربيةr" },
  { id: 2, name: "Deutsch" },
  { id: 3, name: "English" },
  { id: 4, name: "Español" },
  { id: 5, name: "العربيةr" },
  { id: 6, name: "Deutsch" },
  { id: 7, name: "English" },
  { id: 8, name: "Español" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Header() {
  const [selected, setSelected] = useState(people[3]);
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);

  return (
    <>
      <div className="w-full border-b border-gray-200 bg-white dark:bg-ebony-900 dark:border-ebony-800 px-4 py-2 flex sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <div className="min-w-0 flex-1">
          <div className="flex items-center group">
            <div className="shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 text-gray-500 dark:text-ebony-600 group-hover:text-gray-700 dark:group-hover:text-ebony-700"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                />
              </svg>
            </div>
            <div className="grow">
              <input
                type="text"
                placeholder="admin@gmail.com"
                className="group-hover:text-gray-700 dark:group-hover:placeholder-ebony-700 focus:placeholder-gray-800 placeholder-slate-800 dark:placeholder-ebony-50 dark:group-hover:text-gray-500 block pl-3 pr-3 py-2 w-full h-full dark:text-gray-300 text-gray-900 group-hover:text-gray-900 dark:bg-gray-900 border-transparent focus:border-transparent focus:outline-none cursor-pointer select-all focus:ring-0 sm:text-sm"
              />
            </div>
          </div>
        </div>
        <div className="flex sm:mt-0 sm:ml-4 gap-3 items-center">
          <button
            onClick={() => setOpen(true)}
            type="button"
            className=" text-[14px] w-[30px] h-[30px] text-center inline-flex items-center rounded-full  text-sm font-medium text-gray-700 shadow-sm  "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 text-yellow-300 mx-auto"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
              />
            </svg>
          </button>
          <button
            type="button"
            className="text-[14px] w-[30px] h-[30px] text-center  inline-flex items-center rounded-full  text-sm font-medium text-gray-500 dark:text-ebony-600 shadow-sm "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path
                fillRule="evenodd"
                d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <Listbox value={selected} onChange={setSelected}>
            {({ open }) => (
              <>
                <div className="relative ">
                  <Listbox.Button className="relative w-full cursor-default rounded-md  bg-white dark:bg-ebony-900 text-left text-gray-500  dark:text-ebony-600 shadow-sm sm:text-sm cursor-pointer">
                    {/* <span className="block truncate">{selected.name}</span> */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 h-5 cursor-pointer "
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802"
                      />
                    </svg>
                  </Listbox.Button>

                  <Transition
                    show={open}
                    as={Fragment}
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <Listbox.Options className="absolute right-0 z-10 mt-1 max-h-60 w-[200px] overflow-auto rounded-md bg-white dark:bg-ebony-900 py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                      {people.map((person) => (
                        <Listbox.Option
                          key={person.id}
                          className={({ active }) =>
                            classNames(
                              active
                                ? "text-white bg-ebony-600 dark:bg-ebony-800 dark:hover:bg-ebony-800"
                                : "text-gray-900 dark:text-ebony-500 dark:bg-ebony-900 dark:hover:bg-ebony-800 dark:hover:text-ebony-400",
                              "relative cursor-default select-none py-2 pl-3 pr-9"
                            )
                          }
                          value={person}
                        >
                          {({ selected, active }) => (
                            <>
                              <span
                                className={classNames(
                                  selected ? "font-semibold" : "font-normal",
                                  "block truncate"
                                )}
                              >
                                {person.name}
                              </span>

                              {selected ? (
                                <span
                                  className={classNames(
                                    active ? "text-white" : "text-ebony-600",
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
          <Menu as="div" className="relative inline-block text-left">
            <Menu.Button className="inline-flex w-[28px] h-[28px] justify-center rounded-full  overflow-hidden">
              <Image
                src={user}
                alt="image"
                className="w-full object-cover h-full"
              />
            </Menu.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0 z-50 mt-2 w-64 origin-top-right divide-y divide-gray-100 dark:divide-gray-600 rounded-md bg-white dark:bg-gray-800 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1 px-2 flex flex-col">
                  <p className="text-[14px] text-gray-800 dark:text-gray-400">
                    You are signed in as
                  </p>
                  <p className="text-[14px] text-gray-900 dark:text-gray-200">
                    admin@gmail.com
                  </p>
                  <p className="text-[14px] text-gray-800 dark:text-gray-400">
                    Password:
                    <span className="text-gray-800 dark:text-gray-400 blur-sm">
                      9797987774
                    </span>
                  </p>
                </div>
                <div className="py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-800 dark:text-gray-400 dark:hover:text-gray-400 dark:bg-gray-700 dark:hover:bg-gray-700"
                            : "text-gray-800 dark:text-gray-400 dark:hover:text-gray-400  dark:hover:bg-gray-700",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        <div className="flex gap-2 items-center">
                          <div className="w-[30px] h-[30px] rounded-full overflow-hidden">
                            <Image
                              src={user2}
                              alt="image"
                              className="w-full h-full object-cover"
                            />
                          </div>

                          <span className="">tony44@gmail.com</span>
                        </div>
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-800 dark:text-gray-400 dark:hover:text-gray-400 dark:bg-gray-700 dark:hover:bg-gray-700"
                            : "text-gray-800 dark:text-gray-400 dark:hover:text-gray-400  dark:hover:bg-gray-700",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        <div className="flex gap-2 items-center">
                          <div className="w-[30px] h-[30px] rounded-full overflow-hidden">
                            <Image
                              src={user1}
                              alt="image"
                              className="w-full h-full object-cover"
                            />
                          </div>

                          <span className="">tony55@gmail.com</span>
                        </div>
                      </a>
                    )}
                  </Menu.Item>
                </div>
                <div className="py-1">
                  <Menu.Item>
                    <a
                      onClick={() => setOpen1(true)}
                      className="text-gray-800 dark:text-gray-400 dark:hover:text-gray-400  dark:hover:bg-gray-700 block px-4 py-2 text-sm cursor-pointer "
                    >
                      <div className="flex gap-2 items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-5 h-5 "
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z"
                          />
                        </svg>

                        <span className="">Create an account</span>
                      </div>
                    </a>
                  </Menu.Item>

                  <Menu.Item>
                    <a
                      onClick={() => setOpen1(true)}
                      className="
                           text-gray-800 dark:text-gray-400 dark:hover:text-gray-400  dark:hover:bg-gray-700
                          block px-4 py-2 text-sm"
                    >
                      <div className="flex gap-2 items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-5 h-5 "
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                          />
                        </svg>

                        <span className="">Login</span>
                      </div>
                    </a>
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-800 dark:text-gray-400 dark:hover:text-gray-400 dark:bg-gray-700 dark:hover:bg-gray-700"
                            : "text-gray-800 dark:text-gray-400 dark:hover:text-gray-400  dark:hover:bg-gray-700",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        <div className="flex gap-2 items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-5 h-5 "
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                            />
                          </svg>

                          <span className="">Delete account</span>
                        </div>
                      </a>
                    )}
                  </Menu.Item>
                </div>
                <div className="py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-800 dark:text-gray-400 dark:hover:text-gray-400 dark:bg-gray-700 dark:hover:bg-gray-700"
                            : "text-gray-800 dark:text-gray-400 dark:hover:text-gray-400  dark:hover:bg-gray-700",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        <div className="flex gap-2 items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-5 h-5 "
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
                            />
                          </svg>

                          <span className="">Sign</span>
                        </div>
                      </a>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
          <button
            type="button"
            className="text-[14px] w-[25px] h-[25px] text-center  inline-flex items-center rounded-full  text-sm font-medium text-gray-500 dark:text-ebony-600 shadow-sm"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
              />
            </svg>
          </button>
        </div>
      </div>
      {/* pop up code */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white dark:bg-ebony-900 px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                  <div>
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-yellow-100">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6 text-yellow-300 mx-auto"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
                        />
                      </svg>
                    </div>
                    <div className="mt-3 text-center sm:mt-5">
                      <Dialog.Title
                        as="h3"
                        className="text-lg font-medium leading-6 text-gray-900 dark:text-ebony-50"
                      >
                        Warning!
                      </Dialog.Title>
                      <div className="mt-2">
                        <p className="text-sm text-gray-500">
                          Keep in mind that all accounts have a password
                          attached to them. Please, kindly take a note of your
                          password, its under the account dropdown (the letter
                          icon next to the logout button). There is no way to
                          reset your password.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-5 sm:mt-6">
                    <button
                      type="button"
                      className="inline-flex w-full justify-center rounded-md border border-transparent bg-ebony-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-ebony-700 focus:outline-none sm:text-sm"
                      onClick={() => setOpen(false)}
                    >
                      OK
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>

      {/* pop up code create acc */}
      <Transition.Root show={open1} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={setOpen1}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="bg-white dark:bg-gray-800 rounded-lg px-4 pt-5 pb-4 overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full sm:p-6">
                  <div>
                    <div className="flex items-center justify-center mx-auto w-12 h-12 bg-blue-100 dark:bg-blue-400 rounded-full">
                      <svg
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-6 h-6 text-blue-600 dark:text-blue-800"
                      >
                        <path d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"></path>
                      </svg>
                    </div>
                    <div className="mt-3 text-center sm:mt-5">
                      <h3
                        id="modal-headline"
                        className="dark:text-ebony-300 text-ebony-900 text-lg font-medium leading-6"
                      >
                        Create an account
                      </h3>
                      <div className="mt-2">
                        <p className="dark:text-ebony-400 text-ebony-500 text-sm leading-5">
                          Here you can create a new account for this you need to
                          select a username, then domain and password!
                        </p>
                      </div>
                      <div className="mt-2 flex flex-col gap-3 text-left">
                        <div className="flex flex-col gap-2">
                          <label
                            htmlFor=""
                            className="block dark:text-gray-400 text-gray-700 text-sm font-medium leading-5"
                          >
                            Email
                          </label>
                          <div className="flex overflow-hidden align-middle bg-white rounded-md border border-gray-300 dark:border-gray-700">
                            <div className="grow p-1">
                              <div className="flex gap-1 align-middle">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  strokeWidth={1.5}
                                  stroke="currentColor"
                                  className="w-5 h-5 text-gray-500 mt-1"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                                  />
                                </svg>

                                <input
                                  placeholder="Username"
                                  type="text"
                                  className="w-full text-[14px] text-gray-900 bg-white py-1 px-1 focus-within:outline-none"
                                />
                              </div>
                            </div>
                            <div className="shrink-0">
                              <select className="dark:focus:outline-none dark:focus:border-blue-600 rounded-l pl-2 pr-3 py-0 h-full dark:text-gray-400 text-gray-500 dark:bg-gray-700 bg-transparent dark:border-gray-700 border-transparent  sm:text-sm sm:leading-5">
                                <option value="">eurokool.com</option>
                                <option value="">eurokool.com</option>
                                <option value="">eurokool.com</option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col gap-2">
                          <label
                            htmlFor=""
                            className="block dark:text-gray-400 text-gray-700 text-sm font-medium leading-5"
                          >
                            Password
                          </label>
                          <div className="flex overflow-hidden align-middle bg-white rounded-md border border-gray-300 dark:border-gray-700">
                            <div className="grow ">
                              <div className="flex gap-1 align-middle mt-1">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  strokeWidth={1.5}
                                  stroke="currentColor"
                                  className="w-5 h-5 text-gray-500 mt-1 ml-1"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z"
                                  />
                                </svg>

                                <input
                                  type="text"
                                  placeholder="Password"
                                  className="w-full text-[14px] text-gray-900 px-1 bg-white focus-within:outline-none"
                                />
                              </div>
                            </div>
                            <div className="shrink-0">
                              <button
                                type="button"
                                className="inline-flex items-center py-2 px-3 text-gray-500 border-l border-gray-100 dark:bg-gray-700 sm:text-sm focus-within:outline-none"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  strokeWidth={1.5}
                                  stroke="currentColor"
                                  className="w-5 h-5 text-gray-500 dark:text-white "
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                                  />
                                </svg>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-5 sm:grid sm:gap-3 sm:grid-flow-row-dense sm:grid-cols-2 sm:mt-8">
                    <span className="flex w-full rounded-md shadow-sm sm:col-start-2">
                      <button
                        type="button"
                        className="focus:ring-blue inline-flex justify-center px-4 py-2 w-full text-white text-base font-medium leading-6 hover:bg-blue-500 bg-blue-600 border focus:border-blue-700 border-transparent rounded-md focus:outline-none shadow-sm transition sm:text-sm sm:leading-5"
                      >
                        Create
                      </button>
                    </span>
                    <span className="flex mt-3 w-full rounded-md shadow-sm sm:col-start-1 sm:mt-0">
                      <button
                        type="button"
                        className="focus:ring-blue inline-flex justify-center px-4 py-2 w-full dark:text-ebony-300 hover:text-ebony-500 text-ebony-700 text-base font-medium leading-6 dark:bg-ebony-700 bg-white border focus:border-blue-300 border-ebony-300 dark:border-ebony-800 rounded-md focus:outline-none shadow-sm transition sm:text-sm sm:leading-5"
                      >
                        Cancel
                      </button>
                    </span>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
      {/* pop up code log in */}
      <Transition.Root show={open2} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={setOpen2}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="bg-white dark:bg-gray-800 rounded-lg px-4 pt-5 pb-4 overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full sm:p-6">
                  <div>
                    <div className="flex items-center justify-center mx-auto w-12 h-12 bg-blue-100 dark:bg-blue-400 rounded-full">
                      <svg
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-6 h-6 text-blue-600 dark:text-blue-800"
                      >
                        <path d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"></path>
                      </svg>
                    </div>
                    <div className="mt-3 text-center sm:mt-5">
                      <h3
                        id="modal-headline"
                        className="dark:text-ebony-300 text-ebony-900 text-lg font-medium leading-6"
                      >
                        Log in to your account
                      </h3>
                      <div className="mt-2">
                        <p className="dark:text-ebony-400 text-ebony-500 text-sm leading-5">
                          Here you can log in to your account
                        </p>
                      </div>
                      <div className="mt-2 flex flex-col gap-3 text-left">
                        <div className="flex flex-col gap-2">
                          <label
                            htmlFor=""
                            className="block dark:text-gray-400 text-gray-700 text-sm font-medium leading-5"
                          >
                            Email
                          </label>
                          <div className="flex overflow-hidden align-middle bg-white rounded-md border border-gray-300 dark:border-gray-700">
                            <div className="grow p-1">
                              <div className="flex gap-1 align-middle">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  strokeWidth={1.5}
                                  stroke="currentColor"
                                  className="w-5 h-5 text-gray-500 mt-1"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                                  />
                                </svg>

                                <input
                                  placeholder="Username"
                                  type="text"
                                  className="w-full text-[14px] text-gray-900 bg-white py-1 px-1 focus-within:outline-none"
                                />
                              </div>
                            </div>
                            <div className="shrink-0">
                              <select className="dark:focus:outline-none dark:focus:border-blue-600 rounded-l pl-2 pr-3 py-0 h-full dark:text-gray-400 text-gray-500 dark:bg-gray-700 bg-transparent dark:border-gray-700 border-transparent  sm:text-sm sm:leading-5">
                                <option value="">eurokool.com</option>
                                <option value="">eurokool.com</option>
                                <option value="">eurokool.com</option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col gap-2">
                          <label
                            htmlFor=""
                            className="block dark:text-gray-400 text-gray-700 text-sm font-medium leading-5"
                          >
                            Password
                          </label>
                          <div className="flex overflow-hidden align-middle bg-white rounded-md border border-gray-300 dark:border-gray-700">
                            <div className="grow ">
                              <div className="flex gap-1 align-middle mt-1">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  strokeWidth={1.5}
                                  stroke="currentColor"
                                  className="w-5 h-5 text-gray-500 mt-1 ml-1"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z"
                                  />
                                </svg>

                                <input
                                  type="text"
                                  placeholder="Password"
                                  className="w-full text-[14px] text-gray-900 px-1 bg-white focus-within:outline-none"
                                />
                              </div>
                            </div>
                            <div className="shrink-0">
                              <button
                                type="button"
                                className="inline-flex items-center py-2 px-3 text-gray-500 border-l border-gray-100 dark:bg-gray-700 sm:text-sm focus-within:outline-none"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  strokeWidth={1.5}
                                  stroke="currentColor"
                                  className="w-5 h-5 text-gray-500 dark:text-white "
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                                  />
                                </svg>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-5 sm:grid sm:gap-3 sm:grid-flow-row-dense sm:grid-cols-2 sm:mt-8">
                    <span className="flex w-full rounded-md shadow-sm sm:col-start-2">
                      <button
                        type="button"
                        className="focus:ring-blue inline-flex justify-center px-4 py-2 w-full text-white text-base font-medium leading-6 hover:bg-blue-500 bg-blue-600 border focus:border-blue-700 border-transparent rounded-md focus:outline-none shadow-sm transition sm:text-sm sm:leading-5"
                      >
                        Create
                      </button>
                    </span>
                    <span className="flex mt-3 w-full rounded-md shadow-sm sm:col-start-1 sm:mt-0">
                      <button
                        type="button"
                        className="focus:ring-blue inline-flex justify-center px-4 py-2 w-full dark:text-ebony-300 hover:text-ebony-500 text-ebony-700 text-base font-medium leading-6 dark:bg-ebony-700 bg-white border focus:border-blue-300 border-ebony-300 dark:border-ebony-800 rounded-md focus:outline-none shadow-sm transition sm:text-sm sm:leading-5"
                      >
                        Cancel
                      </button>
                    </span>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
}
