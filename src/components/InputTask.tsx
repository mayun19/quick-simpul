import React, { Fragment, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { EllipsisHorizontalIcon } from "@heroicons/react/20/solid";
import {
  FaRegClock,
  FaPencilAlt,
  FaAngleUp,
  FaAngleDown,
} from "react-icons/fa";

const InputTask = () => {
  const [showTask, setShowTask] = useState(false);

  const handleTask = () => {
    setShowTask(!showTask);
  };

  return (
    <div>
      <div className="todo flex flex-col py-[22px] border-b border-[#828282]">
        <form action="">
          <div className="flex flex-row items-center justify-between space-x-3">
            <div className="flex flex-row items-center gap-[22px]">
              <input
                type="checkbox"
                // checked={task.completed}
                // onChange={handleToggleCompleted}
                className="round rounded-none"
              />
              <input
                type="text"
                placeholder="Type Task Title"
                required
                // value={title}
                // onChange={({ target }) => setTitle(target.value)}
                className="w-full md:w-[380px] border border-[#828282] text-sm text-[#4F4F4F] rounded p-3"
              />
            </div>
            <div className="flex flex-row items-center gap-3.5 pe-[25px] option">
              <span className="text-[#4F4F4F]">11/06/2021</span>
              <div className="hideandsee cursor-pointer" onClick={handleTask}>
                {showTask ? (
                  <FaAngleUp
                    className="-mr-1 h-5 w-5 text-[#828282]"
                    size={2}
                  />
                ) : (
                  <FaAngleDown
                    className="-mr-1 h-5 w-5 text-[#828282]"
                    size={2}
                  />
                )}
              </div>
              <Menu as="div" className="relative inline-block text-left ">
                <div>
                  <Menu.Button className="flex w-full justify-between gap-x-1.5 bg-white text-gray-900  hover:bg-gray-50">
                    <EllipsisHorizontalIcon
                      className="-mr-1 h-5 w-5 text-[#828282]"
                      width={4}
                      color="#828282"
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
                  <Menu.Items className="right-0 z-10 mt-2 origin-top-right rounded-md bg-white shadow-lg outline-[#828282] border border-[#828282] border-focus:outline-none">
                    <div className="py-1">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href={undefined}
                            className="block p-2 text-[#EB5757] font-semibold text-sm">
                            Delete
                          </a>
                        )}
                      </Menu.Item>
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>
            </div>
          </div>
          {showTask && (
            <div className="flex flex-col items-start pt-4 pl-10 gap-[13px]">
              <div className="flex flex-row items-center date gap-[18px]">
                <FaRegClock className="text-[#2F80ED]" size={20} />
                <input
                  type="date"
                  className="bg-white border border-[#828282] text-[#4F4F4F] text-sm rounded focus:ring-blue-500 focus:border-blue-500 block p-3"
                  placeholder="12/06/2020"
                  // value="12/06/2020"
                  required
                  // onChange={({ target }) => setDate(target.value)}
                  // min={todayDate}
                  // max={maxDate}
                />
              </div>
              <div className="flex desc-todo gap-[18px]">
                <FaPencilAlt className="mt-2 text-[#2F80ED]" size={20} />
                <textarea
                  placeholder="No Description"
                  className="w-full md:w-[543px] focus:outline-none"
                  // value={description}
                  // onChange={({ target }) =>
                  //   setDescription(target.value)
                  // }
                ></textarea>
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default InputTask;
