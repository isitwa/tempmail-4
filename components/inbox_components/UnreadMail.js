import Image from "next/image";
import Link from "next/link";
import React from "react";
import user from "../../public/images/user1.png";
import user1 from "../../public/images/user2.png";
import user2 from "../../public/images/user.png";

export default function UnreadMail() {
  return (
    <>
      <div className="flex flex-col gap-5">
        <h2 className="dark:text-ebony-300 text-ebony-900 text-2xl font-bold leading-7 sm:truncate">
          Inbox
        </h2>
        <div className="flex flex-col divide-ebony-200 dark:divide-ebony-700 divide-y dark:bg-ebony-800 bg-white shadow overflow-hidden sm:rounded-md">
          <Link
            href="openmail"
            className="dark:hover:bg-ebony-700 dark:focus:bg-ebony-700 block hover:bg-ebony-50 focus:outline-none transition"
          >
            <div className="flex items-center px-4 py-4 sm:px-6">
              <div className="flex flex-1 items-center min-w-0">
                <div className="flex-shrink-0">
                  <span className="relative inline-block">
                    <Image
                      src={user1}
                      alt="Avatar"
                      className="rounded-full w-12 h-12"
                    />
                    <span className="shadow-solid absolute bottom-0 right-0 block w-3 h-3 dark:text-ebony-500 text-white bg-blue-500 dark:bg-blue-600 rounded-full"></span>
                  </span>
                </div>
                <div className="flex-1 px-4 min-w-0 md:grid md:gap-4 md:grid-cols-2">
                  <div>
                    <div className="dark:text-ebony-400 text-ebony-600 text-sm font-medium leading-5 truncate">
                      Unsplash Team
                    </div>
                    <div className="flex items-center mt-2 dark:text-ebony-400 text-ebony-500 text-sm leading-5">
                      <svg
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        className="flex-shrink-0 mr-1.5 w-5 h-5 text-ebony-400"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884zM18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      <span className="truncate">delivery@unsplash.com</span>
                    </div>
                  </div>
                  <div className="hidden md:block">
                    <div>
                      <div className="dark:text-ebony-300 text-ebony-900 text-sm leading-5 truncate">
                        Confirm your Unsplash Account
                      </div>
                      <div className="flex items-center mt-2 text-ebony-400 dark:text-ebony-400 text-sm leading-5 truncate">
                        Hey ashu432, In order to get full access to Unsplash
                        features, you need to confirm your email address by
                        following the link…
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <svg
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  className="w-5 h-5 text-ebony-400"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
            </div>
          </Link>
          <Link
            href="openmail"
            className="dark:hover:bg-ebony-700 dark:focus:bg-ebony-700 block hover:bg-ebony-50 focus:outline-none transition"
          >
            <div className="flex items-center px-4 py-4 sm:px-6">
              <div className="flex flex-1 items-center min-w-0">
                <div className="flex-shrink-0">
                  <span className="relative inline-block">
                    <Image
                      src={user2}
                      alt="Avatar"
                      className="rounded-full w-12 h-12"
                    />
                    <span className="shadow-solid absolute bottom-0 right-0 block w-3 h-3 dark:text-ebony-500 text-white bg-blue-500 dark:bg-blue-600 rounded-full"></span>
                  </span>
                </div>
                <div className="flex-1 px-4 min-w-0 md:grid md:gap-4 md:grid-cols-2">
                  <div>
                    <div className="dark:text-ebony-400 text-ebony-600 text-sm font-medium leading-5 truncate">
                      Unsplash Team
                    </div>
                    <div className="flex items-center mt-2 dark:text-ebony-400 text-ebony-500 text-sm leading-5">
                      <svg
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        className="flex-shrink-0 mr-1.5 w-5 h-5 text-ebony-400"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884zM18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      <span className="truncate">delivery@unsplash.com</span>
                    </div>
                  </div>
                  <div className="hidden md:block">
                    <div>
                      <div className="dark:text-ebony-300 text-ebony-900 text-sm leading-5 truncate">
                        Confirm your Unsplash Account
                      </div>
                      <div className="flex items-center mt-2 text-ebony-400 dark:text-ebony-400 text-sm leading-5 truncate">
                        Hey ashu432, In order to get full access to Unsplash
                        features, you need to confirm your email address by
                        following the link…
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <svg
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  className="w-5 h-5 text-ebony-400"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
            </div>
          </Link>
          <Link
            href="openmail"
            className="dark:hover:bg-ebony-700 dark:focus:bg-ebony-700 block hover:bg-ebony-50 focus:outline-none transition"
          >
            <div className="flex items-center px-4 py-4 sm:px-6">
              <div className="flex flex-1 items-center min-w-0">
                <div className="flex-shrink-0">
                  <span className="relative inline-block">
                    <Image
                      src={user}
                      alt="Avatar"
                      className="rounded-full w-12 h-12"
                    />
                    <span className="shadow-solid absolute bottom-0 right-0 block w-3 h-3 dark:text-ebony-500 text-white bg-blue-500 dark:bg-blue-600 rounded-full"></span>
                  </span>
                </div>
                <div className="flex-1 px-4 min-w-0 md:grid md:gap-4 md:grid-cols-2">
                  <div>
                    <div className="dark:text-ebony-400 text-ebony-600 text-sm font-medium leading-5 truncate">
                      Unsplash Team
                    </div>
                    <div className="flex items-center mt-2 dark:text-ebony-400 text-ebony-500 text-sm leading-5">
                      <svg
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        className="flex-shrink-0 mr-1.5 w-5 h-5 text-ebony-400"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884zM18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      <span className="truncate">delivery@unsplash.com</span>
                    </div>
                  </div>
                  <div className="hidden md:block">
                    <div>
                      <div className="dark:text-ebony-300 text-ebony-900 text-sm leading-5 truncate">
                        Confirm your Unsplash Account
                      </div>
                      <div className="flex items-center mt-2 text-ebony-400 dark:text-ebony-400 text-sm leading-5 truncate">
                        Hey ashu432, In order to get full access to Unsplash
                        features, you need to confirm your email address by
                        following the link…
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <svg
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  className="w-5 h-5 text-ebony-400"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
