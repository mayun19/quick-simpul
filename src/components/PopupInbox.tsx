import { FaSearch } from "react-icons/fa";

const PopupInbox = () => {
  return (
    <div className="container flex w-full justify-center">
      <div className="flex flex-col w-full md:w-[734px] h-max-[737px] bg-[#FFFFFF] p-6 rounded">
        <div className="flex flex-row w-full h-10 items-center px-[60px] input-wrapper border rounded border-[#828282]">
          <input
            placeholder="Search"
            className="w-full h-full text-[#4F4F4F] text-sm focus:outline-none"
            // value={input}
            // onChange={(e) => handleChange(e.target.value)}
          />
          <FaSearch id="search-icon" size={12} className="text-[333333]" />
        </div>
        <div className="flex flex-row py-[22px] gap-x-[17px] border-b border-[#828282]">
          <div className="flex flex-col">
            <div className="account"></div>
          </div>
          <div className="flex flex-col gap-[9px]">
            <div className="flex flex-row gap-4">
              <div className="head-message font-bold text-base text-[#2F80ED]">
                109220-Naturalization
              </div>
              <div className="date text-sm">January 1,2021 19:10</div>
            </div>
            <div className="flex flex-col">
              <p className="font-bold text-sm">Ellen:</p>
              <span className="text-sm">Hey, please read.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopupInbox;
