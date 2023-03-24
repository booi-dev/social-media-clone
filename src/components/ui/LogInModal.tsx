import React from "react";
import { createPortal } from "react-dom";
import { IconType } from "react-icons";
import { RxCross2 } from "react-icons/rx";
import AppIcon from "./AppIcon";

import BackDrop from "./BackDrop";

type LogInModalType = {
  icon: IconType;
  title: string;
  text: string;
  closeHandler: () => void;
};

function LogInModal(props: LogInModalType) {
  const { icon, title, text, closeHandler } = props;

  const portal = document.getElementById("portal");

  let LogSignPortal: React.ReactPortal | React.ReactElement = <div />;
  if (portal) {
    LogSignPortal = createPortal(
      <>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  w-[550px] p-12 bg-app-black-1 text-app-white-1 rounded-xl z-20">
          <button
            type="button"
            className="absolute top-2 left-2"
            onClick={closeHandler}
          >
            <AppIcon icon={RxCross2} size={25} hoverColor="gray" />
          </button>
          <div className="flex justify-center pb-6">
            <AppIcon icon={icon} size={30} color="pink" />
          </div>
          <h1 className="text-2xl font-bold">{title}</h1>
          <p className="text-app-gray-3">{text}</p>
          <div className="flex flex-col gap-2 mt-6 [&>button]:py-2 [&>button]:font-bold [&>button]:rounded-2xl">
            <button type="button" className="bg-pri-blue-1">
              Log in{" "}
            </button>
            <button
              type="button"
              className="border border-app-gray-1 text-pri-blue-1"
            >
              Sign up
            </button>
          </div>
        </div>
        <BackDrop handleClose={closeHandler} color="white" />
      </>,
      portal
    );
  }

  console.log("kdjhf");

  return LogSignPortal;
}

export default LogInModal;
