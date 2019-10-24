import React from "react";

export default function Footer() {
  return (
    <div className="flex justify-center bg-gray-600 h-32 text-gray-800">
      <div className="flex flex-col items-center pt-8">
        <div className="mb-3">designed & built by Daniel Park @ 2019</div>
        <div>stacks used</div>
        <div className="font-bold">React.js | Tailwind CSS</div>
      </div>
    </div>
  );
}
