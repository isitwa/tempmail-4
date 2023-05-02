import React from "react";
import { Fragment, useState } from "react";
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

export default function Change_Mail_Temp() {
  const [selected, setSelected] = useState(people[1]);
  return (
    <>
      <div className="flex flex-col bg-white">
        <div className="flex items-center p-4 bg-zinc-900 gap-[15px]">
          <h4 className="text-white text-[14px] uppercase">
            Change e-mail address - Temp Mail
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
                    className="w-full bg-gray-100 p-4 rounded-full"
                  />
                  <input
                    type="text"
                    placeholder="Password"
                    className="w-full bg-gray-100 p-4 rounded-full"
                  />
                  <Listbox value={selected} onChange={setSelected}>
                    {({ open }) => (
                      <>
                        <div className="relative mt-1">
                          <Listbox.Button className="relative w-full cursor-default bg-gray-100 p-4 rounded-full p-4 text-left shadow-sm  sm:text-sm">
                            <span className="block truncate">
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
                            <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                              {people.map((person) => (
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
