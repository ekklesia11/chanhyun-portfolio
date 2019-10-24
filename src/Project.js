import React from "react";
import ProjectA from "./ProjectA";
import ProjectB from "./ProjectB";

export default function Project() {
  return (
    <div className="mb-56">
      <div className="mt-10 text-4xl text-gray-800 font-bold ml-12 mb-10">
        Projects done so far
      </div>
      <ProjectA />
      <ProjectB />
    </div>
  );
}
