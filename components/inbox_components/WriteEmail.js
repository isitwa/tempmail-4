import Link from "next/link";
import Image from "next/image";
import userimg from "../../public/images/user.bmp";
import { Fragment, useState } from "react";

import pdficon from "../../public/images/icons/pdf-icon.png";
import { Dialog, Menu, Transition } from "@headlessui/react";
import {
  ArchiveBoxIcon as ArchiveBoxIconMini,
  ArrowUturnLeftIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  EllipsisVerticalIcon,
  FolderArrowDownIcon,
  MagnifyingGlassIcon,
  PencilIcon,
  UserPlusIcon,
} from "@heroicons/react/20/solid";
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

function WriteEmail() {
  return (
    <>
      <section
        aria-labelledby="message-heading"
        className="flex h-full min-w-0 flex-1 flex-col overflow-hidden"
      >
        {/* Top section */}
        <div className="flex-shrink-0 border-b border-gray-200 bg-white">
          {/* Toolbar*/}
          <div className="flex h-16 flex-col justify-center">
            <div className="px-4 sm:px-10">
              <div className="flex justify-between py-3 items-center">
                <div className="flex gap-3 items-center">
                  <a href="#" className="text-gray-400 hover:text-gray-500">
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
                        d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                      />
                    </svg>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-gray-500">
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
                  </a>
                  <a href="#" className="text-gray-400 hover:text-gray-500">
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
                        d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                      />
                    </svg>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-gray-500">
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
                        d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                      />
                    </svg>
                  </a>
                </div>
                <div className="flex mx-auto gap-2 items-center">
                  <a className="text-gray-400 hover:text-gray-500" href="#">
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
                  </a>
                  <h6 className="text-gray-400 text-[14px]">1 of 136</h6>
                  <a className="text-gray-400 hover:text-gray-500" href="#">
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
                        d="M8.25 4.5l7.5 7.5-7.5 7.5"
                      />
                    </svg>
                  </a>
                </div>
                <div className="flex gap-3 w-[70px] justify-end">
                  <a href="#" className="text-gray-400 hover:text-gray-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      className="bi bi-reply-fill w-4 h-4"
                      viewBox="0 0 16 16"
                    >
                      <path d="M5.921 11.9 1.353 8.62a.719.719 0 0 1 0-1.238L5.921 4.1A.716.716 0 0 1 7 4.719V6c1.5 0 6 0 7 8-2.5-4.5-7-4-7-4v1.281c0 .56-.606.898-1.079.62z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Message header */}
        </div>

        <div className="min-h-0 flex-1 overflow-y-auto">
          <div className="bg-white pt-5 pb-6 shadow">
            <div className="flex items-center justify-between sm:px-3 md:px-10">
              <div className="flex gap-3 items-center">
                <div className="w-[30px] h-[30px] rounded-full overflow-hidden">
                  <Image
                    src={userimg}
                    alt="image"
                    width={500}
                    height={500}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="text-black font-medium text-[18px]">
                  Alice Hawthrone
                </h4>
                <h5 className="text-[14px] text-gray-400 font-normal hidden md:block">
                  {" "}
                  From: <span>admin@gmail.com</span>
                </h5>
              </div>
              <h5 className="text-[14px] text-gray-400 font-normal hidden md:block">
                {" "}
                To: <span>user@gmail.com</span>
              </h5>
            </div>

            {/* <div className="px-4 flex items-start justify-between sm:px-6 lg:px-8 gap-2 align-middle">
                    <div className='w-[30px] h-[30px] rounded-full overflow-hidden'>
                      <image width={400} height={400} src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"  alt="image" className='w-full h-full object-cover' width=""/>
                    </div>
                    <div className="sm:w-0 sm:flex-1">
                      <h1 id="message-heading" className="text-lg font-medium text-gray-900">
                        {message.subject}
                      </h1>
                      <p className="mt-1 truncate text-sm text-gray-500">{message.sender}</p>
                    </div>

                    <div className="mt-4 flex items-center justify-between sm:mt-0 sm:ml-6 sm:flex-shrink-0 sm:justify-start">
                      <span className="inline-flex items-center rounded-full bg-cyan-100 px-3 py-0.5 text-sm font-medium text-cyan-800">
                        {message.status}
                      </span>
                      <Menu as="div" className="relative ml-3 inline-block text-left">
                        <div>
                          <Menu.Button className="-my-2 flex items-center rounded-full bg-white p-2 text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-600">
                            <span className="sr-only">Open options</span>
                            <EllipsisVerticalIcon className="h-5 w-5" aria-hidden="true" />
                          </Menu.Button>
                        </div>

                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-100"
                          enterFrom="transform opacity-0 scale-95"
                          enterTo="transform opacity-100 scale-100"
                          leave="transition ease-in duration-75"
                          leaveFrom="transform opacity-100 scale-100"
                          leaveTo="transform opacity-0 scale-95"
                        >
                          <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <div className="py-1">
                              <Menu.Item>
                                {({ active }) => (
                                  <button
                                    type="button"
                                    className={classNames(
                                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                      'flex w-full justify-between px-4 py-2 text-sm'
                                    )}
                                  >
                                    <span>Copy email address</span>
                                  </button>
                                )}
                              </Menu.Item>
                              <Menu.Item>
                                {({ active }) => (
                                  <a
                                    href="#"
                                    className={classNames(
                                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                      'flex justify-between px-4 py-2 text-sm'
                                    )}
                                  >
                                    <span>Previous conversations</span>
                                  </a>
                                )}
                              </Menu.Item>
                              <Menu.Item>
                                {({ active }) => (
                                  <a
                                    href="#"
                                    className={classNames(
                                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                      'flex justify-between px-4 py-2 text-sm'
                                    )}
                                  >
                                    <span>View original</span>
                                  </a>
                                )}
                              </Menu.Item>
                            </div>
                          </Menu.Items>
                        </Transition>
                      </Menu>
                    </div>
                  </div> */}
          </div>
          <div className="flex flex-col gap-4 sm:p-3 md:p-10 bg-white">
            <div className="flex flex-col gap-4 border-b  border-gray-200 pb-4">
              <h3 className="text-[26px] font-semibold text-black">
                Project report - Feedback
              </h3>
              <h5 className="text-[14px] text-black font-normal">Hi</h5>
              <p className="text-[14px] text-black font-normal">
                Dolore irure sint nisi amet. Non aliqua non ea minim nisi non
                fugiat quis ullamco. Consectetur nisi laborum aute cillum fugiat
                ullamco consectetur id do sunt ea.
              </p>
              <p className="text-[14px] text-black font-normal">Best </p>
              <p className="text-[14px] text-black font-normal">
                Alice Hawthrone
              </p>
            </div>
            <div className="flex justify-between">
              <h3 className="text-[14px] text-gray-400">1 attachment</h3>
              <Link
                href="/"
                className="text-blue-400 hover:text-blue-500 text-[14px]"
              >
                Download
              </Link>
            </div>
            <div className="flex">
              <div className="flex w-[200px] p-3 rounded-lg bg-gray-100 items-center gap-3">
                <div className="shrink-0 w-[25px]">
                  <Image
                    src={pdficon}
                    alt="logo"
                    width={500}
                    height={500}
                    className="w-full"
                  />
                </div>
                <div className="grow flex flex-col">
                  <h5 className="text-[14px] text-gray-500">
                    Project report.pdf
                  </h5>
                  <h6 className="text-[12px] text-gray-500 font-light">
                    1.3MP
                  </h6>
                </div>
              </div>
            </div>
            <div className="block border rounded-lg border-gray-200">
              <div className="flex gap-3 items-center justify-between border-gray-200 border-b p-3">
                <div className="flex items-center gap-3">
                  <h5 className="text-[14px] text-gray-400">Reply to:</h5>
                  <div className="flex items-center gap-2 px-2 py-1 rounded-lg text-gray-500 bg-gray-200">
                    <h6 className="text-[14px] text-gray-500 ">
                      admin@gmail.com
                    </h6>
                    <button type="button">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-3 h-3"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="flex gap-3 items-center">
                  <button type="button" className="text-gray-400 text-[14px]">
                    Cc
                  </button>
                  <button type="button" className="text-gray-400 text-[14px]">
                    Bcc
                  </button>
                </div>
              </div>
              <div className="flex flex-col p-3 h-[300px]">
                <div className="flex flex-col gap-3">
                  <h3 className="text-[14px] text-black">Hello</h3>
                  <h3 className="text-[14px] text-black">Thank You.</h3>
                </div>
                <div className="flex justify-between items-center mt-auto">
                  <div className="flex gap-3 items-center">
                    <button type="button" className="text-gray-400">
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
                          d="M18.375 12.739l-7.693 7.693a4.5 4.5 0 01-6.364-6.364l10.94-10.94A3 3 0 1119.5 7.372L8.552 18.32m.009-.01l-.01.01m5.699-9.941l-7.81 7.81a1.5 1.5 0 002.112 2.13"
                        />
                      </svg>
                    </button>
                    <button type="button" className="text-gray-400">
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
                          d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                        />
                      </svg>
                    </button>
                    <button type="button" className="text-gray-400">
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
                          d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"
                        />
                      </svg>
                    </button>
                  </div>
                  <div className="flex gap-3 items-center">
                    <button type="button">
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
                    <button
                      type="button"
                      className="bg-blue-600 text-white text-[14px] rounded-lg px-4 py-2"
                    >
                      Send Message
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Thread section*/}
          {/*  <ul role="list" className="space-y-2 py-4 sm:space-y-4 sm:px-6 lg:px-8">
                  {message.items.map((item) => (
                    <li key={item.id} className="bg-white px-4 py-6 shadow sm:rounded-lg sm:px-6">
                      <div className="sm:flex sm:items-baseline sm:justify-between">
                        <h3 className="text-base font-medium">
                          <span className="text-gray-900">{item.author}</span>{' '}
                          <span className="text-gray-600">wrote</span>
                        </h3>
                        <p className="mt-1 whitespace-nowrap text-sm text-gray-600 sm:mt-0 sm:ml-3">
                          <time dateTime={item.datetime}>{item.date}</time>
                        </p>
                      </div>
                      <div
                        className="mt-4 space-y-6 text-sm text-gray-800"
                        dangerouslySetInnerHTML={{ __html: item.body }}
                      />
                    </li>
                  ))} 
                </ul>*/}
        </div>
      </section>
    </>
  );
}

export default WriteEmail;
