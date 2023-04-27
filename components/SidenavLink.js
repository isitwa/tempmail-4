import React from "react";
import Image from "next/image";
import Link from "next/link";
import user from "../public/images/user.bmp";
import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  CalendarIcon,
  ChartBarIcon,
  FolderIcon,
  HomeIcon,
  InboxIcon,
  UsersIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

import { HiOutlineMail } from "react-icons/hi";
import { GrDomain } from "react-icons/gr";
import { FaSitemap } from "react-icons/fa";
const navigation = [
  { name: "Dashboard", href: "/", icon: HomeIcon, current: true },
  { name: "Mailbox", href: "/mailbox", icon: InboxIcon, current: false },
  { name: "Domain", href: "/domains", icon: GrDomain, current: false },
  { name: "Sites", href: "/sites", icon: FaSitemap, current: false },
  {
    name: "Mail Manager",
    href: "/MailManager",
    icon: HiOutlineMail,
    current: false,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function SidenavLink() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <>
      <div className="h-0 flex-1 overflow-y-auto pt-6">
        <div className="flex flex-shrink-0 items-center px-4">
          <Image
            width={400}
            height={400}
            className="h-8 w-auto"
            src={user}
            alt="Your Company"
          />
        </div>
        <nav className="mt-5 space-y-1 px-2">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={classNames(
                item.current
                  ? "bg-gray-300 text-gray-900"
                  : "text-gray-600 hover:bg-gray-50 hover:text-gray-900",
                "group flex items-center px-2 py-2 text-base font-medium rounded-md"
              )}
            >
              <item.icon
                className={classNames(
                  item.current
                    ? "text-gray-500"
                    : "text-gray-400 group-hover:text-gray-500",
                  "mr-4 flex-shrink-0 h-6 w-6"
                )}
                aria-hidden="true"
              />
              {item.name}
            </a>
          ))}
        </nav>
      </div>
      <div className="flex flex-shrink-0 border-t border-gray-200 p-4">
        <a href="#" className="group block flex-shrink-0">
          <div className="flex items-center">
            <div>
              <Image
                width={400}
                height={400}
                className="inline-block h-10 w-10 rounded-full"
                src={user}
                alt="image"
              />
            </div>
            <div className="ml-3">
              <p className="text-base font-medium text-gray-700 group-hover:text-gray-900">
                Tom Cook
              </p>
            </div>
          </div>
        </a>
      </div>
    </>
  );
}
