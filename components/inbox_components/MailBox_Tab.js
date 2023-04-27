import React from "react";
import Link from "next/link";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import MailBox_MailAcc from "./MailBox_MailAcc";
import MailBox_MailGroup from "./MailBox_MailGroup";
export default function MailBox_Tab() {
  return (
    <>
      <div className="flex flex-col gap-2 w-full">
        <div className="sm:flex sm:items-center">
          <div className="sm:flex-auto">
            <h1 className="text-xl text-gray-900 font-bold font-CalSans">
              Mail Box
            </h1>
            <p className="mt-2 text-sm text-neutral-500">
              A list of all the users in your account including their name,
              title, email and role.
            </p>
          </div>
          {/* <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
            <div className="flex gap-2">
              <Link
                href="/mailaccounts"
                className="inline-flex items-center text-sm font-medium bg-gray-900 rounded-md transition-colors text-white h-9 px-4 py-2.5  bg-brand-500 hover:bg-gray-700  "
              >
                <div className="flex gap-1 items-center">
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
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    />
                  </svg>

                  <span>Mail Accounts</span>
                </div>
              </Link>
              <button
                type="button"
                className="inline-flex items-center text-sm font-medium bg-gray-900 rounded-md transition-colors text-white h-9 px-4 py-2.5  bg-brand-500 hover:bg-gray-700  "
              >
                <div className="flex gap-1 items-center">
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
                      d="M12 6v12m6-6H6"
                    />
                  </svg>

                  <span>Add user</span>
                </div>
              </button>
            </div>
          </div> */}
        </div>
        <Tabs>
          <TabList className="flex border-b border-cus-20 search-page-list">
            <Tab className="py-2 mr-2  pr-4 text-[12px] md:text-[14px] text-cus-10 font-light border-b border-transparent focus:border-b cursor-pointer focus:border-cus-500 focus-within:outline-none">
              Mail Account
            </Tab>
            <Tab className="py-2 mr-2  pr-4 text-[12px] md:text-[14px] text-cus-10 font-light border-b border-transparent focus:border-b cursor-pointer focus:border-cus-500 focus-within:outline-none">
              Mail Group
            </Tab>
          </TabList>

          <TabPanel>
            <div className="py-6">
              <MailBox_MailAcc />
            </div>
          </TabPanel>
          <TabPanel>
            <div className="py-6">
              <MailBox_MailGroup />
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </>
  );
}
