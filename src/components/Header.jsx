import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineSearch, AiFillBell } from "react-icons/ai";

const Header = () => {
  return (
    <header className="flex justify-between items-center p-[17px] bg-[#0f0f0f] text-white ">
      <Link className="flex items-center gap-3 text-3xl" to={"/"}>
        <img width={50} src="/public/youtube_logo.png" />
        <h1>Youtube</h1>
      </Link>

      <form className="bg-white text-black rounded flex items-center">
        <input
          className="rounded px-4 py-1 outline-none"
          placeholder="Ara"
          type="text"
        />
        <button className=" mr-2 text-2xl transition duration-300 hover:bg-gray-100 rounded-full p-1">
          <AiOutlineSearch />
        </button>
      </form>

      <AiFillBell className="cursor-pointer text-xl" />
    </header>
  );
};

export default Header;
