import React from "react";

export default function ProductsSectionTitle({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <h2 className="text-red-500 leading-8 pl-5 font-medium relative before:absolute before:top-0 before:bg-red-500 before:left-0 before:w-4 before:h-full before:rounded">
      {children}
    </h2>
  );
}
