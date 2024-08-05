import React from "react";
import { twMerge } from "tailwind-merge";

interface IIconButton {
  variant: "light" | "secondary";
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
}

export default function IconButton({
  children,
  onClick,
  variant,
  className,
}: IIconButton) {
  const baseStyles =
    "p-2 flex items-center justify-center rounded-full transition ease-in-out focus:outline-none focus:ring-1";
  const typeStyles: Record<string, string> = {
    light: "bg-white text-black hover:bg-slate-100 focus:ring-gray-500",
    secondary: "bg-gray-200 text-black hover:bg-gray-300 focus:ring-gray-500",
  };

  const buttonClass = twMerge(baseStyles, typeStyles[variant], className);

  return (
    <button onClick={onClick} className={buttonClass}>
      {children}
    </button>
  );
}
