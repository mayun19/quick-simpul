import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import ItemTask from "./ItemTask";
import InputTask from "./InputTask";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const PopupTask = () => {
  return (
    <div className="container flex w-full justify-center">
      <div className="flex flex-col w-[734px] h-max-[737px] bg-[#FFFFFF] p-6 rounded">
        <div className="flex flex-row container justify-between items-start todo-action">
          <Menu as="div" className="relative inline-block text-left ">
            <div>
              <Menu.Button className="flex w-full justify-between gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-[#828282] hover:bg-gray-50">
                My Task
                <ChevronDownIcon
                  className="-mr-1 h-5 w-5 text-[#828282]"
                  aria-hidden="true"
                />
              </Menu.Button>
            </div>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95">
              <Menu.Items className="right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 outline-[#828282] border border-[#828282] border-focus:outline-none divide-y divide-[#828282]">
                <div className="py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block px-4 py-2 font-semibold text-sm"
                        )}>
                        Personal Errands
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
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block px-4 py-2 font-semibold text-sm"
                        )}>
                        Urgent To-Do
                      </a>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
          <button className="rounded bg-[#2F80ED] text-white py-3.5 font-semibold px-4">
            New Task
          </button>
        </div>
        <ItemTask/>
        <InputTask/>
      </div>
    </div>
  );
};

export default PopupTask;
