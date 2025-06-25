import React from "react";
import axios from "axios";
import { Fragment, useState,useEffect } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";

const people = [
  { id: 1, name: "tony@gmail.com" },
  { id: 2, name: "Arlene@gmail" },
  { id: 3, name: "Devon@gmail" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}


export default function Change_Mail_Temp({domains,refreshmail,setchange}) {
  const [selected, setSelected] = useState();
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [hostName,setHostName]=useState("");




  
  useEffect(() => {
    (async () => {
      const host = window.location.hostname;
      setHostName(host);
      localStorage.setItem('hostname', host);
      setSelected(domains[0]);
    })()
  },[])

  const handlesubmit = async (e) => {
  

    // setShow(!show)
    // setemail("")
    // setpassword("")
    // setSelectdomain([])
    e.preventDefault();

    const usernameRegex = /^[a-zA-Z0-9_]+$/
    if (!usernameRegex.test(email)) {
      setError("Username must be alphanumeric and underscore")
      return
    }



    axios.post('/api/account/create', {
      email: `${email}@${selected.name}`,
      password: password
    }).then((res) => {
      console.log(res)
      if (res.data.status) {
        localStorage.setItem(hostName + '_send_account', JSON.stringify(res.data.account))
        // setSelected1(res.data.account)
        setchange()
        refreshmail()
        window.location.reload()
      } else {
        setError(res.data.message)
      }
    }).catch((err) => {
      console.log(err)
    })

  }



  return (
    <>
      <div className="flex flex-col bg-white">
        <div className="flex justify-between items-center p-4 bg-zinc-900 gap-[15px]">
          <h4 className="text-white text-[14px] uppercase">
            Change e-mail address - Temp Mail
          </h4>
          <h4 className="text-white text-[14px] uppercase" onClick={()=>{
            setchange(false)
          }}>
            Cancel
          </h4>
          
        </div>

        <div className="flex flex-col gap-6 py-6 px-10">
          <p className="text-[14px] text-gray-500">
            <span className="font-semibold">Temp Mail</span> provides the
            ability to change your temporary email address on this page.
          </p>
          <p className="text-[14px] text-gray-500">
            To change or recover the email address, please enter the desired
            E-mail address and choose domain.
          </p>
          <p className="text-[14px] text-gray-500">
            This temporary email generator feature available on Premium only.
          </p>
          <div className="flex justify-center">
            <div className="w-[90%] md:w-[340px]">
              <form action="">
                <div className="flex flex-col gap-3">
                  <input
                    type="text"
                    placeholder="User name"
                    value={email}
                    onChange={(e) => setemail(e.target.value)}
                    className="w-full bg-gray-100 p-4 rounded-full"
                  />
                  <input
                    type="text"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setpassword(e.target.value)}
                    className="w-full bg-gray-100 p-4 rounded-full"
                  />
                  <Listbox value={selected} onChange={setSelected}>
                    {({ open }) => (
                      <>
                        <div className="relative mt-1">
                          <Listbox.Button className="relative w-full cursor-default bg-gray-100 p-4 rounded-full p-4 text-left shadow-sm  sm:text-sm">
                            <span className="block truncate">
                              {selected?selected.name:""}
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
                            <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                              {domains.map((person) => (
                                <Listbox.Option
                                  key={person.id}
                                  className={({ active }) =>
                                    classNames(
                                      active
                                        ? "bg-blue-600 text-white"
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
                                            active
                                              ? "text-white"
                                              : "text-blue-600",
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

                  <button
                    type="submit"
                    className="text-[14px] text-white bg-gray-600 rounded-full p-4"
                    onClick={handlesubmit}
                  >
                    Get Domain
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
