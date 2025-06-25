"use client"

import React from "react";
import axios from "axios";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/images/brand-logo.png";
import apply from "../../public/images/itunes_header.svg";
import play from "../../public/images/gplay_header.svg";
import ads1 from "../../public/images/ads1.jpg";
import ads2 from "../../public/images/ads2.jpg";
import ads3 from "../../public/images/long-ads.jpg";
import ads4 from "../../public/images/ads.png";
import game from "../../public/images/game.webp";
import aws from "../../public/images/amazon.svg";
import chrome from "../../public/images/Chrome.svg";
import fox from "../../public/images/firefox-logo.svg";
import opera from "../../public/images/opera.svg";
import tel from "../../public/images/008-telegram.png";
import slack from "../../public/images/slack.svg";
import { Dialog, Transition } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/24/outline";
import { Fragment, useState,useEffect,useCallback } from "react";
import { Listbox } from "@headlessui/react";
import { ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { loadDomains, createEmailAccount, deleteEmailAccount, generateStrongPassword } from "../lib/email-service";
import { generateHumanLikeEmail } from "../lib/name-generator";
import { toast } from "sonner";

import Mail_List_Four from "../../components/App_Four_Components/Mail_List_Four";
import Open_Mail_Four from "../../components/App_Four_Components/Open_Mail_Four";
import Change_Mail_Temp from "../../components/App_Four_Components/Change_Mail_Temp";
import Premium_Popup from "../../components/App_Four_Components/Premium_Popup";

const people = [
  { id: 1, name: "Eng" },
  { id: 2, name: "Spanish" },
  { id: 3, name: "Japanese" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Home() {
  const [selected, setSelected] = useState(people[1]);
  const [selected1, setSelected1] = useState();
  const [open, setOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [domain, setDomain] = useState();
  const [hostName, setHostName] = useState("");
  const [openmail, setOpenmail] = useState(false);
  const [refresh,setrefresh]=useState(0);
  const [currmail, setcurrmail] = useState([]);
  const [change,setchange]=useState(false)

  useEffect(() => {
    (async () => {
      const host = window.location.hostname;
      setHostName(host);
      localStorage.setItem('hostname', host);
      const dom = await loadDomains();
      if (host) {
        localStorage.setItem(`${host}_domains`, JSON.stringify(dom));
      }
      setDomain(dom);

      let account = null;
      try {
        account = JSON.parse(localStorage.getItem(host + '_send_account'));
      } catch (e) {
        account = null;
      }
      if (!account && dom && dom.length > 0) {
        const newUsername = generateHumanLikeEmail() + '@' + dom[0].name;
        const newPassword = generateStrongPassword();
        try {
          const newAccount = await createEmailAccount(newUsername, newPassword);
          if (newAccount) {
            localStorage.setItem(host + '_send_account', JSON.stringify(newAccount));
            setSelected1(newAccount);
            refreshmail();
          }
        } catch (error) {
          console.error('Error creating temp mail account:', error);
        }
      } else if (account) {
        setSelected1(account);
      }
    })();
  }, []);

  const copyemail = useCallback(() => {
    navigator.clipboard.writeText(selected1.email);
    toast.success("Email copied to clipboard!");
  })

  const refreshmail = () => {
    setrefresh((x) => x + 1);
    toast.success("Emails refreshed!");
  }
  
  const openemail = useCallback(() => {
    const mailx = JSON.parse(localStorage.getItem(`${hostName}_currentmail`));
    setcurrmail(mailx);
    setOpenmail(true)
    if (!currmail) {
      openemail()
    }
  })

  const refreshaccount = useCallback(async () => {
    const newUsername = generateHumanLikeEmail() + "@" + domain[0].name;
    const newPassword = generateStrongPassword();
    const res = await createEmailAccount(newUsername, newPassword);
    if (res) {
      localStorage.setItem(hostName + '_send_account', JSON.stringify(res));
      setSelected1(res);
      refreshmail();
      window.location.reload();
      toast.success("New email account created!");
    } else {
      toast.error("Failed to create new email account");
    }
  }, [domain, hostName]);

  const deleteAccount = async (e) => {
    const accountId = selected1.id;
    const res = await deleteEmailAccount(accountId);
    if (res) {
      refreshaccount();
      toast.success("Account deleted successfully!");
    } else {
      toast.error("Failed to delete account");
    }
  }

  return (
    <>
      {modalOpen && <Premium_Popup setOpenModal={setModalOpen} />}
      <header className="flex justify-center py-[30px] bg-zinc-900 gap-5">
        <div className="w-full lg:w-[1536px] px-[15px]">
          <div className="flex items-center justify-between ">
            <div className=" items-center gap-2 md:gap-3  hidden md:flex">
              <Link
                href="#"
                className="border border-gray-400 rounded-lg flex items-center gap-2 py-[4px] px-[8px]"
              >
                <div className="w-[18px]">
                  {" "}
                  <Image src={apply} alt="apply" className="w-full" />
                </div>
                <p className="text-[13px] text-white">App Store</p>
              </Link>
              <Link
                href="#"
                className="border border-gray-400 rounded-lg flex items-center gap-2 py-[4px] px-[8px]"
              >
                <div className="w-[18px]">
                  {" "}
                  <Image src={play} alt="Play" className="w-full" />
                </div>
                <p className="text-[13px] text-white">Google Play</p>
              </Link>
            </div>
            <Link
              href="#"
              className="w-[130px] md:w-[154px] md:mx-auto  inline-block"
            >
              <Image src={logo} alt="logo" className="w-full" />
            </Link>
            <div className="flex items-center gap-2 md:gap-3">
              <Link
                href="#"
                className="text-[13px] bg-gray-800 text-white rounded-full py-[6px] px-[16px] hidden md:block "
              >
                Temp SMS Number
              </Link>
              <button
                onClick={() => {
                  setModalOpen(true);
                }}
                className="text-[13px] bg-yellow-500 text-gray-800 rounded-full py-[6px] px-[16px] "
              >
                Premium
              </button>
            </div>
          </div>
        </div>
      </header>
      <section className="flex justify-center pt-[30px] pb-[60px] bg-zinc-900">
        <div className="w-full lg:w-[1140px] px-[15px] flex justify-center ">
          <div className="grid md:grid-cols-12 gap-[20px] md:gap-[60px] ">
            <div className="flex justify-center col-span-12 md:col-span-3 ">
              <div className=" w-[300] shrink-0 mx-auto ">
                <Image src={ads1} alt="image" className="w-full" />
              </div>
            </div>
            <div className=" col-span-12 md:col-span-6">
              <div className="border border-dashed border-gray-600 p-[40px] sm:w-[80%] mx-auto md:w-full">
                <h3 className="text-white text-[14px] md:text-[20px] text-center font-semibold mb-5">
                  Your Temporary Email Address{" "}
                </h3>
                <div className="flex items-center gap-2">
                  <div className="grow relative">
                    <button
                      type=""
                      className="bg-gray-800 rounded-full text-white w-[55px] h-[55px] text-center absolute right-0 top-0 z-[10]"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6 mx-auto"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 013.75 9.375v-4.5zM3.75 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 01-1.125-1.125v-4.5zM13.5 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0113.5 9.375v-4.5z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6.75 6.75h.75v.75h-.75v-.75zM6.75 16.5h.75v.75h-.75v-.75zM16.5 6.75h.75v.75h-.75v-.75zM13.5 13.5h.75v.75h-.75v-.75zM13.5 19.5h.75v.75h-.75v-.75zM19.5 13.5h.75v.75h-.75v-.75zM19.5 19.5h.75v.75h-.75v-.75zM16.5 16.5h.75v.75h-.75v-.75z"
                        />
                      </svg>
                    </button>

                    <Listbox value={selected1} onChange={(value)=>{
                      setSelected1(value);
                      localStorage.setItem(hostName + '_send_account', JSON.stringify(value))
                    }}>
                      {({ open1 }) => (
                        <>
                          <div className="relative ">
                            <Listbox.Button className="relative w-full cursor-default rounded-full  text-white text-[16px] p-[15px] bg-gray-700 text-left">
                              <span className="block truncate text-[14px] md:text-[16px]">
                              {selected1 ? selected1.email : "Select email"}

                              </span>
                              <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                <ChevronUpDownIcon
                                  className="h-5 w-5 text-gray-400"
                                  aria-hidden="true"
                                />
                              </span>
                            </Listbox.Button>

                            <Transition
                              show={open1}
                              as={Fragment}
                              leave="transition ease-in duration-100"
                              leaveFrom="opacity-100"
                              leaveTo="opacity-0"
                            >
                              <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                {selected1 && (
                                  <Listbox.Option
                                    key={selected1.id}
                                    className={({ active }) =>
                                      classNames(
                                        active
                                          ? "text-white bg-indigo-600"
                                          : "text-gray-900",
                                        "relative cursor-default select-none py-2 pl-3 pr-9"
                                      )
                                    }
                                    value={selected1}
                                  >
                                    {({ selected1: isSelected, active }) => (
                                      <>
                                        <span
                                          className={classNames(
                                            isSelected
                                              ? "font-semibold "
                                              : "font-normal  text-[14px] md:text-[16px]",
                                            "block truncate "
                                          )}
                                        >
                                          {selected1.email}
                                        </span>

                                        {isSelected ? (
                                          <span
                                            className={classNames(
                                              active
                                                ? "text-white"
                                                : "text-indigo-600",
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
                                )}
                              </Listbox.Options>
                            </Transition>
                          </div>
                        </>
                      )}
                    </Listbox>
                  </div>

                  <button
                    type=""
                    onClick={copyemail}
                    className="bg-green-500 rounded-full text-white w-[50px] h-[50px] text-center relative group"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 mx-auto"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.373-.03.748-.057 1.123-.08M15.75 18H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08M15.75 18.75v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5A3.375 3.375 0 006.375 7.5H5.25m11.9-3.664A2.251 2.251 0 0015 2.25h-1.5a2.251 2.251 0 00-2.15 1.586m5.8 0c.065.21.1.433.1.664v.75h-6V4.5c0-.231.035-.454.1-.664M6.75 7.5H4.875c-.621 0-1.125.504-1.125 1.125v12c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V16.5a9 9 0 00-9-9z"
                      />
                    </svg>
                    <div className="group-hover:block hidden absolute py-[6px] px-4 rounded-xl bg-green-500 -bottom-[50px] w-[120px] left-[50%] -translate-x-1/2">
                      <div className="block relative">
                        <div className="h-0 w-0 border-x-8 border-x-transparent border-b-[16px] border-b-green-500 -top-[15px] absolute  left-[50%] -translate-x-1/2"></div>
                      </div>

                      <h6 className="text-[16px] text-white">Copy email</h6>
                    </div>
                  </button>
                </div>
              </div>
              <div className="block mt-[15px]">
                <p className="text-center text-[16px] text-gray-600 dark:text-zinc-300">
                  Forget about spam, advertising mailings, hacking and attacking
                  robots. Keep your real mailbox clean and secure. Temp Mail
                  provides temporary, secure, anonymous, free, disposable email
                  address.
                </p>
              </div>
            </div>
            <div className="flex justify-center col-span-12 md:col-span-3">
              <div className="w-[300] shrink-0 mx-auto ">
                <Image src={ads1} alt="image" className="w-full" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-[30px] bg-white  shadow flex justify-center ">
        <div className="w-full lg:w-[1140px] px-[15px] flex justify-center ">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 ">
            <div>
              <button
                type=""
                onClick={copyemail}
                className="bg-gray-100 hover:bg-thor-200 w-full text-center py-[17px] px-[40px] flex justify-center rounded-full shadow"
              >
                <div className="flex gap-2 items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-4 h-4  text-gray-800 mr-4"
                  >
                    <path
                      fillRule="evenodd"
                      d="M17.663 3.118c.225.015.45.032.673.05C19.876 3.298 21 4.604 21 6.109v9.642a3 3 0 01-3 3V16.5c0-5.922-4.576-10.775-10.384-11.217.324-1.132 1.3-2.01 2.548-2.114.224-.019.448-.036.673-.051A3 3 0 0113.5 1.5H15a3 3 0 012.663 1.618zM12 4.5A1.5 1.5 0 0113.5 3H15a1.5 1.5 0 011.5 1.5H12z"
                      clipRule="evenodd"
                    />
                    <path d="M3 8.625c0-1.036.84-1.875 1.875-1.875h.375A3.75 3.75 0 019 10.5v1.875c0 1.036.84 1.875 1.875 1.875h1.875A3.75 3.75 0 0116.5 18v2.625c0 1.035-.84 1.875-1.875 1.875h-9.75A1.875 1.875 0 013 20.625v-12z" />
                    <path d="M10.5 10.5a5.23 5.23 0 00-1.279-3.434 9.768 9.768 0 016.963 6.963 5.23 5.23 0 00-3.434-1.279h-1.875a.375.375 0 01-.375-.375V10.5z" />
                  </svg>

                  <span className="text-gray-600 text-[15px] font-medium">
                    Copy
                  </span>
                </div>
              </button>
            </div>
            <div>
              <button
                type=""
                onClick={refreshmail}
                className="bg-gray-100 hover:bg-thor-200 w-full text-center py-[17px] px-[40px] flex justify-center rounded-full shadow"
              >
                <div className="flex gap-2 items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-4 h-4  text-gray-800 mr-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
                    />
                  </svg>

                  <span className="text-gray-600 text-[15px] font-medium">
                    Refresh
                  </span>
                </div>
              </button>
            </div>
            <div>
              <button
                type=""
                className="bg-gray-100 hover:bg-thor-200 w-full text-center py-[17px] px-[40px] flex justify-center rounded-full shadow"
              >
                <div className="flex gap-2 items-center" onClick={()=>{
                  setchange(true)
                }}>
                

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-4 h-4  text-gray-800 mr-4"
                  >
                    <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32L19.513 8.2z" />
                  </svg>

                  <span className="text-gray-600 text-[15px] font-medium">
                    Change
                  </span>
                </div>
              </button>
            </div>
            <div>
              <button
                type=""
                onClick={deleteAccount}
                className="bg-gray-100 hover:bg-thor-200 w-full text-center py-[17px] px-[40px] flex justify-center rounded-full shadow"
              >
                <div className="flex gap-2 items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-4 h-4  text-gray-800 mr-4"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                      clipRule="evenodd"
                    />
                  </svg>

                  <span className="text-gray-600 text-[15px] font-medium">
                    Delete
                  </span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="py-[30px]  flex justify-center border-b border-gray-300 dark:bg-zinc-800 ">
        <div className="w-full lg:w-[1140px] px-[15px] flex justify-center ">
          <div className="flex flex-col gap-3 w-full">
            <div className="grid grid-cols-12 gap-10">
              <div className="col-span-2 hidden md:block">
                <div className="block h-[600px] w-full">
                </div>
              </div>
              <div className="col-span-12 md:col-span-8">
                <div className="flex flex-col gap-4 w-full">
                  <div className="block">
                  </div>
                  <div className="flex flex-col row-span-3 overflow-hidden rounded-md">
                   
                   {change?<Change_Mail_Temp  domains={domain} refreshmail={refreshmail} setchange={setchange} />:
                   <>
                    {openmail ? <Open_Mail_Four currmail={currmail} openmail={setOpenmail}  setcurrmail={setcurrmail} select={selected1} refresh={refreshmail}/> : selected1 ? <Mail_List_Four select={selected1} openmail={setOpenmail} currmail={openemail} key={refresh} /> : ""}

                   </>}
                    
                  </div>
                  <div className="block">
                  </div>
                </div>
              </div>
              <div className="col-span-2 hidden md:block">
                <div className="block h-[600px] w-full">
                </div>
              </div>
            </div>
            <div className="flex justify-center mt-10">
              <div className="flex flex-col gap-4 w-full lg:w-[700px]">
                <h2 className="text-[30px] text-gray-800 dark:text-white text-center font-semibold">
                  What is Disposable Temporary E-mail?
                </h2>
                <p className="text-gray-600 text-[16px] text-center dark:text-white">
                  Disposable email - is a free email service that allows to
                  receive email at a temporary address that self-destructed
                  after a certain time elapses. It is also known by names like :
                  tempmail, 10minutemail, 10minmail, throwaway email, fake-mail
                  , fake email generator, burner mail or trash-mail. Many
                  forums, Wi-Fi owners, websites and blogs ask visitors to
                  register before they can view content, post comments or
                  download something. Temp-Mail - is most advanced throwaway
                  email service that helps you avoid spam and stay safe.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-[30px]  flex justify-center dark:bg-zinc-800 ">
        <div className="w-full lg:w-[1140px] px-[15px] flex justify-center ">
          <div className="flex flex-col">
            <h2 className="text-[26px] text-gray-800 dark:text-white text-center mb-[30px] font-semibold">
              Popular Articles
            </h2>
            <div className="grid md:grid-cols-2 gap-[25px]">
              <div className="bg-white rounded-lg overflow-hidden p-[15px] shadow flex gap-[15px]">
                <div className="grow">
                  <div className="flex flex-col gap-2">
                    <h3 className="text-[16px] text-gray-800 ">
                      Private domains. How to get your own Temporary Email (2021
                      )
                    </h3>
                    <p className="text-gray-400 text-[14px] hidden md:block">
                      How to create temporary email on your own private domain
                      and how it helps you to bypass common issues with
                      registrations_
                    </p>
                  </div>
                </div>
                <div className="w-[70px] h-[70px] md:w-[124px] md:h-[124px] shrink-0 rounded-md overflow-hidden">
                  <Image
                    src={game}
                    alt="image"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="bg-white rounded-lg overflow-hidden p-[15px] shadow flex gap-[15px]">
                <div className="grow">
                  <div className="flex flex-col gap-2">
                    <h3 className="text-[16px] text-gray-800">
                      Private domains. How to get your own Temporary Email (2021
                      )
                    </h3>
                    <p className="text-gray-400 text-[14px] hidden md:block">
                      How to create temporary email on your own private domain
                      and how it helps you to bypass common issues with
                      registrations_
                    </p>
                  </div>
                </div>
                <div className="w-[70px] h-[70px] md:w-[124px] md:h-[124px] shrink-0 rounded-md overflow-hidden">
                  <Image
                    src={game}
                    alt="image"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="bg-white rounded-lg overflow-hidden p-[15px] shadow flex gap-[15px]">
                <div className="grow">
                  <div className="flex flex-col gap-2">
                    <h3 className="text-[16px] text-gray-800">
                      Private domains. How to get your own Temporary Email (2021
                      )
                    </h3>
                    <p className="text-gray-400 text-[14px] hidden md:block">
                      How to create temporary email on your own private domain
                      and how it helps you to bypass common issues with
                      registrations_
                    </p>
                  </div>
                </div>
                <div className="w-[70px] h-[70px] md:w-[124px] md:h-[124px] shrink-0 rounded-md overflow-hidden">
                  <Image
                    src={game}
                    alt="image"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="bg-white rounded-lg overflow-hidden p-[15px] shadow flex gap-[15px]">
                <div className="grow">
                  <div className="flex flex-col gap-2">
                    <h3 className="text-[16px] text-gray-800">
                      Private domains. How to get your own Temporary Email (2021
                      )
                    </h3>
                    <p className="text-gray-400 text-[14px] hidden md:block">
                      How to create temporary email on your own private domain
                      and how it helps you to bypass common issues with
                      registrations_
                    </p>
                  </div>
                </div>
                <div className="w-[70px] h-[70px] md:w-[124px] md:h-[124px] shrink-0 rounded-md overflow-hidden">
                  <Image
                    src={game}
                    alt="image"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="bg-white rounded-lg overflow-hidden p-[15px] shadow flex gap-[15px]">
                <div className="grow">
                  <div className="flex flex-col gap-2">
                    <h3 className="text-[16px] text-gray-800">
                      Private domains. How to get your own Temporary Email (2021
                      )
                    </h3>
                    <p className="text-gray-400 text-[14px] hidden md:block">
                      How to create temporary email on your own private domain
                      and how it helps you to bypass common issues with
                      registrations_
                    </p>
                  </div>
                </div>
                <div className="w-[70px] h-[70px] md:w-[124px] md:h-[124px] shrink-0 rounded-md overflow-hidden">
                  <Image
                    src={game}
                    alt="image"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="bg-white rounded-lg overflow-hidden p-[15px] shadow flex gap-[15px]">
                <div className="grow">
                  <div className="flex flex-col gap-2">
                    <h3 className="text-[16px] text-gray-800">
                      Private domains. How to get your own Temporary Email (2021
                      )
                    </h3>
                    <p className="text-gray-400 text-[14px] hidden md:block">
                      How to create temporary email on your own private domain
                      and how it helps you to bypass common issues with
                      registrations_
                    </p>
                  </div>
                </div>
                <div className="w-[70px] h-[70px] md:w-[124px] md:h-[124px] shrink-0 rounded-md overflow-hidden">
                  <Image
                    src={game}
                    alt="image"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-[60px]  flex justify-center dark:bg-zinc-800 ">
        <div className="w-full lg:w-[1140px] px-[15px] flex justify-center ">
          <div className="flex flex-col gap-[15px]">
            <h3 className="text-gray-800 dark:text-white font-semibold text-[18px]">
              The Tech behind Disposable Email Addresses
            </h3>
            <p className="text-gray-600  dark:text-white text-[14px]">
              Everyone owns an email address each and every hour, for everything
              from connecting at work, with business prospects, reaching out to
              friends and colleagues using the email address as an online
              passport. Nearly 99% of all apps and services we sign-up today
              required an email address, likewise to most shoppers loyalty
              cards, contest and offer entries, and more.
            </p>
            <p className="text-gray-600 dark:text-white  text-[14px]">
              We all enjoy having an email address, but getting tons of spam
              emails each day doesn't feel comfortable. Furthermore, it's
              entirely common for stores to have their databases hacked, leaving
              your business email address at risk and more likely to end up on
              spam lists. Still, nothing done online is 100% private. Thus you
              need to protect your email contact identity and best done using
              disposable emails address.
            </p>
            <h3 className="text-gray-800  dark:text-white font-semibold text-[18px]">
              So, What Is A Disposable Email Address?
            </h3>
            <p className="text-gray-600 dark:text-white  text-[14px]">
              Recently, I found a bounce rate complex than usual on my latest
              email blast! I later realized the surge of users (or bots) signing
              up for my services hiding their real identity using disposable
              mail addresses.
            </p>
            <p className="text-gray-600  dark:text-white text-[14px]">
              Disposable email address (DEA) technically means an approach where
              a user's with a unique email address gets a temporary email
              address for your current contact. The DEA allow the creation of an
              email address that passes validity need to sign-up for services
              and website without having to show your true identity.
            </p>
            <p className="text-gray-600 dark:text-white  text-[14px]">
              Disposable emails address if compromised or used in connection
              with email abuse online, the owner can't be tied to the abuse and
              quickly cancel its application without affecting other contacts.
              With temporary mail, you can you receive your emails from the fake
              emails in your genuine emails address for a specified time set.
              The fake email address is simply a through-away email, temporary
              email set and self-destructs email.
            </p>
            <h3 className="text-gray-800 dark:text-white font-semibold text-[18px]">
              Why would you need a fake email address?
            </h3>
            <p className="text-gray-600  dark:text-white text-[14px]">
              You must have noted services such as Amazon Prime, Hulu and
              Netflix allow limited-time test runs(trials), however, if still
              determined to use the services all you need is a disposable email
              address. Technically, you can extend your trial usage using a
              different email address linked to your original (genuine) after
              the trial period expires
            </p>
            <p className="text-gray-600 dark:text-white  text-[14px]">
              An offline or online retailer tend to demand an email address to
              take advantage of their offers, however, this result in an
              unwanted deluge of spam promotional emails that you could avoid.
              Temporary email address makes it easy to cut out those irritating
              messages you are still receiving.
            </p>
            <p className="text-gray-600 dark:text-white  text-[14px]">
              Technically, the idea of a temporary email address conjures up
              with black hat hackers and underworld internet, but there are
              convincing reason to us fake email services.
            </p>
            <p className="text-gray-600 dark:text-white  text-[14px]">
              If you are looking for legitimate reasons to use a disposable
              email address here's a few:
            </p>
            <h3 className="text-gray-800 dark:text-white font-semibold text-[18px]">
              How to Choose a Disposable Email?
            </h3>
            <p className="text-gray-600 dark:text-white  text-[14px]">
              The best fake email provider should:
            </p>
            <ul className="flex flex-col gap-[10px] list-disc pl-[15px]">
              <li className="text-gray-600 dark:text-white text-[14px]">
                Allow users create temporary emails address at the click of a
                button.
              </li>
              <li className="text-gray-600 dark:text-white text-[14px]">
                {" "}
                No registration is registration or identity information about
                the user.
              </li>
              <li className="text-gray-600 dark:text-white text-[14px]">
                {" "}
                The email address should remain anonymous.
              </li>
              <li className="text-gray-600 dark:text-white text-[14px]">
                {" "}
                Offer more than one email address (as many as you may want).
              </li>
              <li className="text-gray-600 dark:text-white text-[14px]">
                {" "}
                Offers temporarily email stored (temporal email inbox at user's
                disposal).
              </li>
              <li className="text-gray-600 dark:text-white text-[14px]">
                {" "}
                Straightforward and functional design to get a mundane email.
              </li>
              <li className="text-gray-600 dark:text-white text-[14px]">
                {" "}
                Provider random account and users can choose an address of
                choice.
              </li>
            </ul>
            <p className="text-gray-600 dark:text-white  text-[14px]">
              Thus stay spam free and save time with temp-mail.org your favorite
              email service.
            </p>
            <h3 className="text-gray-800 dark:text-white font-semibold text-[18px]">
              How to Use Disposable Email Address?
            </h3>
            <p className="text-gray-600 dark:text-white  text-[14px]">
              Users choose to get disposable email address by creating a new
              email account with their current email provider's such as Gmail,
              but the account comes with many challenges such as you will have
              to manage emails new account. Users, who opt for free mail
              services by creating a new account, put up with a new email
              address.
            </p>
            <p className="text-gray-600 dark:text-white text-[14px]">
              It'd work if you had one email address and a few disposable emails
              from temp-mail.org and managed one account inbox.
            </p>
            <p className="text-gray-600 dark:text-white  text-[14px]">
              The amazing thing about a disposable email address is you can
              forward directly to your real email account. In case the
              disposable email address is compromised, and you are suspicious of
              one of your contacts you can have those emails sent directly to
              your trash, and for those necessary connections have them sent
              directly to your real email address inbox.
            </p>
            <h3 className="text-gray-800 dark:text-white font-semibold text-[18px]">
              To Conclude:
            </h3>
            <p className="text-gray-600 dark:text-white  text-[14px]">
              Have a disposable mail address system set up in a fantastic way to
              make sure when you participate in online wikis, chat rooms, and
              file sharing services and bulletin boards forums your real
              identity is never disclosed and never sold to anyone to avoid mail
              spam with Temp-mail.org.
            </p>
          </div>
        </div>
      </section>
      <footer className="pt-[60px] pb-[80px]  flex justify-center bg-zinc-800 ">
        <div className="w-full lg:w-[1140px] px-[15px] flex flex-col">
          <div className="flex flex-col">
            <div className="flex flex-wrap justify-center gap-[5px] md:gap-[10px]">
              <Link
                href="#"
                className="text-[14px] text-gray-300 p-[10px] inline-block"
              >
                PREMIUM{" "}
              </Link>
              <Link
                href="#"
                className="text-[14px] text-gray-300 p-[10px] inline-block"
              >
                API{" "}
              </Link>
              <Link
                href="#"
                className="text-[14px] text-gray-300 p-[10px] inline-block"
              >
                ARTICLES{" "}
              </Link>
              <Link
                href="#"
                className="text-[14px] text-gray-300 p-[10px] inline-block"
              >
                10 MINUTE MAIL{" "}
              </Link>
              <Link
                href="#"
                className="text-[14px] text-gray-300 p-[10px] inline-block"
              >
                PRIVACY{" "}
              </Link>
              <Link
                href="#"
                className="text-[14px] text-gray-300 p-[10px] inline-block"
              >
                TERMS{" "}
              </Link>
              <Link
                href="#"
                className="text-[14px] text-gray-300 p-[10px] inline-block"
              >
                FAQ{" "}
              </Link>
              <Link
                href="#"
                className="text-[14px] text-gray-300 p-[10px] inline-block"
              >
                CONTACTS{" "}
              </Link>
              <Link
                href="#"
                className="text-[14px] text-gray-300 p-[10px] inline-block"
              >
                ADVERTISING
              </Link>
            </div>
          </div>
          <div className="border-b border-slate-700 block my-[20px]"></div>
          <div className="flex flex-col md:flex-row justify-center gap-[20px] md:gap-[10px] items-center">
            <div
              className="flex gap-[10px] md:order-2
            "
            >
              <Link
                href="#"
                className="rounded-lg flex items-center gap-2 py-[4px] px-[8px] bg-gray-600"
              >
                <div className="w-[28px]">
                  {" "}
                  <Image src={apply} alt="apply" className="w-full" />
                </div>
                <p className="text-[14px] text-white hidden md:block">
                  App Store
                </p>
              </Link>
              <Link
                href="#"
                className="rounded-lg flex items-center gap-2 py-[4px] px-[8px] bg-gray-600"
              >
                <div className="w-[28px]">
                  {" "}
                  <Image src={play} alt="Play" className="w-full" />
                </div>
                <p className="text-[14px] text-white hidden md:block">
                  Google Play
                </p>
              </Link>
              <Link
                href="#"
                className="rounded-lg flex items-center gap-2 py-[4px] px-[8px] bg-gray-600"
              >
                <div className="w-[28px]">
                  {" "}
                  <Image src={aws} alt="aws" className="w-full" />
                </div>
              </Link>
              <Link
                href="#"
                className="rounded-lg flex items-center gap-2 py-[4px] px-[8px] bg-gray-600"
              >
                <div className="w-[28px]">
                  {" "}
                  <Image src={chrome} alt="chrome" className="w-full" />
                </div>
              </Link>
              <Link
                href="#"
                className="rounded-lg flex items-center gap-2 py-[4px] px-[8px] bg-gray-600"
              >
                <div className="w-[28px]">
                  {" "}
                  <Image src={fox} alt="fox" className="w-full" />
                </div>
              </Link>
              <Link
                href="#"
                className="rounded-lg flex items-center gap-2 py-[4px] px-[8px] bg-gray-600"
              >
                <div className="w-[28px]">
                  {" "}
                  <Image src={opera} alt="opera" className="w-full" />
                </div>
              </Link>
              <Link
                href="#"
                className="rounded-lg flex items-center gap-2 py-[4px] px-[8px] bg-gray-600"
              >
                <div className="w-[28px]">
                  {" "}
                  <Image src={tel} alt="tel" className="w-full" />
                </div>
              </Link>
              <Link
                href="#"
                className="rounded-lg flex items-center gap-2 py-[4px] px-[8px] bg-gray-600"
              >
                <div className="w-[28px]">
                  {" "}
                  <Image src={slack} alt="slack" className="w-full" />
                </div>
              </Link>
            </div>

            <div className="md:ml-[100px]  md:order-3">
              <Listbox value={selected} onChange={setSelected}>
                {({ open }) => (
                  <>
                    <div className="relative mt-1">
                      <Listbox.Button className="relative w-full cursor-default rounded-md text-white bg-gray-600 py-1 md:py-2 pl-3 pr-10 text-left sm:text-sm">
                        <span className="block truncate text-[14px]">
                          {selected.name}
                        </span>
                        <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
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
                        <Listbox.Options className="absolute z-10 mt-1 bottom-[35px] max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                          {people.map((person) => (
                            <Listbox.Option
                              key={person.id}
                              className={({ active }) =>
                                classNames(
                                  active
                                    ? "text-white bg-blue-600"
                                    : "text-gray-900",
                                  "relative cursor-default select-none py-2 pl-3 pr-9"
                                )
                              }
                              value={person}
                            >
                              {({ selected, active }) => (
                                <>
                                  <span
                                    className={classNames(
                                      selected
                                        ? "font-semibold"
                                        : "font-normal",
                                      "block truncate"
                                    )}
                                  >
                                    {person.name}
                                  </span>

                                  {selected ? (
                                    <span
                                      className={classNames(
                                        active ? "text-white" : "text-blue-600",
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
            </div>

            <div
              className="flex gap-[10px]  md:order-1
            "
            >
              <Link
                href="#"
                className="text-[14px] text-gray-600 hover:underline underline-offset-1"
              >
                Esim Plans{" "}
              </Link>
              <Link
                href="#"
                className="text-[14px] text-gray-600 hover:underline underline-offset-1"
              >
                10MinuteMail{" "}
              </Link>
              <Link
                href="#"
                className="text-[14px] text-gray-600 hover:underline underline-offset-1"
              >
                Temp Number
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
