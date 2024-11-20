import { useState } from "react";
import Minus from "../icons/Minus";
import Plus from "../icons/Plus";

/* eslint-disable react/prop-types */
function Dropdown({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);
  function handleClick() {
    setIsOpen(!isOpen);
  }
  return (
    <div>
      <div className="h-[74px] bg-primary/25 w-[1104px] px-8 text-xl text-primary flex justify-between items-center ">
        <p>{title}</p>
        <div
          className=" cursor-pointer transition- duration-500 ease-in-out"
          onClick={handleClick}
        >
          {isOpen ? <Minus /> : <Plus />}
        </div>
      </div>
      {isOpen && (
        <div className="h-32 w-[1104px] bg-primary/20 px-8 py-4 transition-all duration-500 ease-in-out">
          <p className="text-primary text-lg">{content}</p>
        </div>
      )}
    </div>
  );
}

export default Dropdown;
