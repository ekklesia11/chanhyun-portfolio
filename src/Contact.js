import React from "react";

export default function Contact() {
  return (
    <div>
      <div className="mt-10 text-4xl text-gray-800 font-bold ml-12 mb-10">
        Contact me
      </div>
      <div className="flex justify-center text-gray-800 mb-12">
        <div className="flex w-1/2 rounded-lg overflow-hidden shadow-lg py-10 pl-10">
          <div className="flex-col w-1/2">
            <div className="text-3xl mb-12">Details</div>
            <div className="text-xl">
              <span className="font-medium">email</span> ekklesia89@gmail.com
            </div>
            <div className="text-xl">
              <span className="font-medium">mobile</span> 010-2614-0384
            </div>
          </div>
          <div className="flex w-1/2 justify-center items-center">
            <a
              className="h-10 flex-shrink-0 bg-teal-500 hover:bg-teal-400 border-teal-500 hover:border-teal-400 text-sm border-4 text-white py-1 px-2 rounded"
              href="mailto:ekklesia89@gmail.com"
              rel="noopener noreferrer"
              target="_blank"
            >
              Send mail
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
