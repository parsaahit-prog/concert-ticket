import { memo, type FC } from "react";
import { twMerge } from "tailwind-merge";
import type { ButtonProps, ButtonVariant } from "./types/types";

const Button: FC<ButtonProps> = ({
  onClick,
  disabled = false,
  loading = false,
  children,
  className = "",
  variant = "primary",
  tabIndex,
  name,
}) => {
  const baseClasses =
    "w-full flex items-center justify-center transition-all font-medium rounded-lg py-3 px-6 text-sm m-0 shadow-sm";

  const isInactive = disabled || loading;

  const variantStyles: Record<ButtonVariant, string> = {
    primary: isInactive
      ? "bg-gray-200 text-gray-400 cursor-not-allowed"
      : "bg-[#4F46E5] text-white hover:bg-[#6366F1] shadow-lg",
    secondary: isInactive
      ? "bg-gray-100 text-gray-400 cursor-not-allowed"
      : "bg-white text-[#4F46E5] border-2 border-[#4F46E5] hover:bg-[#EEF2FF]",
  };

  const finalClass = twMerge(
    baseClasses,
    variantStyles[variant],
    disabled || loading ? "cursor-not-allowed bg-[#DCDDDE]" : "cursor-pointer",
    className
  );

  return (
    <button
      name={name}
      onClick={onClick}
      disabled={disabled || loading}
      tabIndex={tabIndex}
      className={finalClass}
    >
      {loading ? (
        <span className="animate-spin w-5 h-5 border-2 border-t-transparent border-current rounded-full"></span>
      ) : (
        children
      )}
    </button>
  );
};

export default memo(Button);
