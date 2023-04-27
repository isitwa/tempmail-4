import React from "react";
import Image from "next/image";
import Link from "next/link";
import ads1 from "../../public/images/ads1.jpg";
export default function Open_Mail_Four() {
  return (
    <>
      <div className="flex flex-col bg-white">
        <div className="flex justify-between items-center p-4 bg-zinc-900 gap-[15px]">
          <Link href="#" className="">
            <div className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>

              <h4 className="text-white text-[14px] uppercase">Back To List</h4>
            </div>
          </Link>
          <div className="flex gap-4">
            <button className="text-white text-[14px]  ">Delete</button>
            <button className="text-white text-[14px] ">Source</button>
          </div>
        </div>
        <div className="flex justify-between items-center p-4">
          <div className="flex gap-2">
            <div className=" w-[40px] h-[40px] rounded-full overflow-hidden">
              <Image
                src={ads1}
                alt="image"
                className="w-full h-full object-cover"
              />
            </div>
            <div className=" flex flex-col">
              <h4 className="text-[14px] text-gray-900">Tony</h4>
              <p className="text-[12px] text-gray-900">tonyadmin@gmail.com</p>
            </div>
          </div>

          <div className=" flex flex-col">
            <h4 className="text-[14px] text-gray-900">Date</h4>
            <p className="text-[12px] text-gray-900">27 Feb 2023 07:23 PM</p>
          </div>
        </div>
        <div className="flex flex-col gap-6 p-4">
          <h2 className="text-[14px] text-gray-900">Hello!</h2>
          <p className="text-[14px] text-gray-900">
            Sit laboris commodo qui elit velit sit officia non esse sunt labore
            laborum adipisicing. Dolor eiusmod velit reprehenderit aute. Veniam
            in adipisicing et nulla do tempor mollit culpa do magna elit.
            Exercitation voluptate duis exercitation in proident do. Adipisicing
            sit adipisicing in ut. Duis qui laborum excepteur cupidatat tempor
            anim excepteur velit irure minim aliqua. Commodo commodo do minim
            pariatur nisi exercitation non consequat et non aliqua est.
          </p>
          <p className="text-[14px] text-gray-900">
            Sit laboris commodo qui elit velit sit officia non esse sunt labore
            laborum adipisicing. Dolor eiusmod velit reprehenderit aute. Veniam
            in adipisicing et nulla do tempor mollit culpa do magna elit.
            Exercitation voluptate duis exercitation in proident do. Adipisicing
            sit adipisicing in ut. Duis qui laborum excepteur cupidatat tempor
            anim excepteur velit irure minim aliqua. Commodo commodo do minim
            pariatur nisi exercitation non consequat et non aliqua est.
          </p>
        </div>
      </div>
    </>
  );
}
