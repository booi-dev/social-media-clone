import React from "react";
import { GoKebabHorizontal } from "react-icons/go";

type ProfileType = {
  userName: string;
  menuBtnHandler: () => void;
};

function Profile(props: ProfileType) {
  const { userName, menuBtnHandler } = props;

  const profileImgLink =
    "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjV8fHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60";

  return (
    <button
      type="button"
      onClick={menuBtnHandler}
      className="flex justify-between items-center  p-2 rounded-full hover:bg-app-white-4 transition-all duration-500 cursor-pointer md:gap-2"
    >
      <div className="flex gap-2">
        <img
          src={profileImgLink}
          alt=""
          className="w-12 h-12 rounded-full object-cover"
        />
        <div className="hidden text-start lg:block ">
          <h1> Booi Mangang</h1>
          <h2> @{userName}</h2>
        </div>
      </div>
      <span>
        <GoKebabHorizontal className="hidden md:block" />
      </span>
    </button>
  );
}

export default Profile;
