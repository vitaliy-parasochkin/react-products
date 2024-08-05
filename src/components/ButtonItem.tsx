import React from "react";
import { Button } from "@headlessui/react";
import { twMerge } from "tailwind-merge";

interface IButton {
  variant: "danger" | "secondary-outline" | "dark";
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  as?: React.ReactNode;
}

export default function ButtonItem({
  variant,
  children,
  onClick,
  className,
}: IButton) {
  const baseStyles =
    "px-12 py-4 rounded text-base font-semibold transition duration-300 ease-in-out focus:outline-none";
  const typeStyles: Record<string, string> = {
    danger:
      "bg-red-600 text-white  hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-300",
    "secondary-outline":
      "bg-transparent text-gray-800 border border-gray-800   hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-300",
    dark: "bg-gray-800 text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500",
  };

  const buttonClass = twMerge(baseStyles, typeStyles[variant], className);

  return (
    <Button onClick={onClick} className={buttonClass}>
      {children}
    </Button>
  );
}
