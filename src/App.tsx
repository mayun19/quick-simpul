import { useState } from "react";
import PopupTask from "./components/PopupTask";
import PopupInbox from "./components/PopupInbox";

const App = () => {
  const [showButton, setShowButton] = useState(false);
  const [showTask, setShowTask] = useState(false);
  const [showInbox, setShowInbox] = useState(false);

  const handleShowMenu = () => {
    setShowButton(!showButton);
  };

  const handleShowInbox = () => {
    setShowInbox(!showInbox);
  };

  const handleShowTask = () => {
    setShowTask(!showTask);
  };

  return (
    <div className="w-full min-h-screen box-border p-7 bg-[#4F4F4F]">
      <nav className="fixed right-7 bottom-7 z-10">
        <div className="flex flex-row gap-x-[26px] items-end">
          {showButton && (
            <div className="flex flex-row gap-x-[26px] text-[#F2F2F2]">
              <div className="button-task flex flex-col items-center gap-[13px]">
                <span className="font-bold">Task</span>
                <button
                  className={
                    showTask
                      ? "rounded-full shadow bg-[#F8B76B] task-open"
                      : "rounded-full shadow bg-[#F2F2F2] task"
                  }
                  onClick={handleShowTask}></button>
              </div>

              <div className="button-inbox flex flex-col items-center gap-[13px]">
                <span className="font-bold">Inbox</span>
                <button
                  className={
                    showInbox
                      ? "rounded-full shadow bg-[#8785FF] inbox-open"
                      : "rounded-full shadow bg-[#F2F2F2] inbox"
                  }
                  onClick={handleShowInbox}></button>
              </div>
            </div>
          )}
          {(!showTask ) && (
            <div className="main-button flex">
              <button
                className="rounded-full button-quick bg-[#2F80ED]"
                onClick={handleShowMenu}></button>
            </div>
          )}
        </div>
      </nav>
      {showTask && <PopupTask />}
      {showInbox && <PopupInbox />}
    </div>
  );
};

export default App;
