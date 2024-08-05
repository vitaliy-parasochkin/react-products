import React from "react";
import { twMerge } from "tailwind-merge";

interface IBadge {
  children: React.ReactNode;
  variant: "danger" | "success";
  className?: string;
}
export default function Badge({ children, variant, className }: IBadge) {
  const baseStyles = "py-1 px-3 rounded text-xs uppercase";
  const variantStyles: Record<string, string> = {
    danger: "bg-red-600 text-white",
    success: "bg-green-600 text-white",
  };

  const badgeClass = twMerge(baseStyles, variantStyles[variant], className);
  return <span className={badgeClass}>{children}</span>;
}
