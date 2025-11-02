import React, { memo, useState } from "react";
import { BiShow, BiHide } from "react-icons/bi";
import { twMerge } from "tailwind-merge";
import type { InputProps } from "./types/types";

const Input: React.FC<InputProps> = ({
  type,
  id,
  placeholder,
  value,
  onChange,
  className,
  readOnly,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const mergedClassNames = twMerge(
    `placeholder:text-left hover:border-[#dad0d0] focus:shadow-inputShadow placeholder:text-[0.8rem] focus:bg-[white] focus:border-[#400000] bg-[#F4F7FA] rounded-[8px] py-[10px] font-normal text-[0.95rem] px-5 outline-0 hover:border-gray-500 transition-all w-full border text-gray-700`,
    readOnly && "cursor-no-drop",
    type === "password" && "pr-10",
    className
  );

  return (
    <div className="relative w-full">
      <input
        type={type === "password" && showPassword ? "text" : type}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        readOnly={readOnly}
        className={mergedClassNames}
        onWheel={(e) => {
          if (type === "number") {
            e.currentTarget.blur();
          }
        }}
        data-tooltip-id={`Input-tooltip-${id}`}
      />
      {type === "password" ? (
        <span
          onClick={togglePasswordVisibility}
          className="absolute right-3 top-[55%] transform -translate-y-1/2 cursor-pointer text-xl text-gray-600 block"
        >
          {showPassword ? (
            <BiShow className="translate-y-[-5px]" />
          ) : (
            <BiHide className="translate-y-[-5px]" />
          )}
        </span>
      ) : null}
    </div>
  );
};

export default memo(Input);
