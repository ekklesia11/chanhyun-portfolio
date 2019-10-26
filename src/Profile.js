import React from "react";
import profile from "./styles/image/profile.jpg";
import resume from "./styles/image/daniel_resume.pdf";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faInstagram,
  faBlogger
} from "@fortawesome/free-brands-svg-icons";

function Profile() {
  return (
    <div className="mb-56">
      <img
        className="h-48 rounded-full m-auto mt-20 border border-gray-200 p-1 shadow-lg hover:border-teal-200 cursor-pointer"
        src={profile}
        alt="me"
      />
      <div className="mt-5 flex justify-center">
        <a
          href="https://github.com/ekklesia11"
          rel="noopener noreferrer"
          target="_blank"
          className="flex flex-col items-center text-gray-800 cursor-pointer hover:text-teal-500"
        >
          <FontAwesomeIcon className="text-2xl" icon={faGithub} />
          <div className="text-xs">github</div>
        </a>
        <a
          href="https://youwaytogo.tistory.com"
          rel="noopener noreferrer"
          target="_blank"
          className="ml-8 flex flex-col items-center text-gray-800 cursor-pointer hover:text-teal-500"
        >
          <FontAwesomeIcon className="text-2xl" icon={faBlogger} />
          <div className="text-xs">blog</div>
        </a>
        <a
          href="https://www.instagram.com/daniel_park30/"
          rel="noopener noreferrer"
          target="_blank"
          className="ml-5 flex flex-col items-center text-gray-800 cursor-pointer hover:text-teal-500"
        >
          <FontAwesomeIcon className="text-2xl" icon={faInstagram} />
          <div className="text-xs">instagram</div>
        </a>
        <a
          href={resume}
          rel="noopener noreferrer"
          target="_blank"
          className="ml-4 flex flex-col items-center text-gray-800 cursor-pointer hover:text-teal-500"
        >
          <FontAwesomeIcon className="text-2xl" icon={faFilePdf} />
          <div className="text-xs">resume</div>
        </a>
      </div>
      <div className="flex flex-col items-center mt-5 text-gray-800">
        <div className="text-4xl font-extrabold">
          Hi, I'm <span className="text-teal-500">Chanhyun Park</span>
        </div>
        <div className="text-base font-bold mb-5">
          <span className="text-teal-500">Back-end</span> Developer
        </div>
        <div className="text-xl">
          아이디어만 있다면 어디서나 웹/앱서비스를 개발합니다.
        </div>
        <div className="text-xl">
          주로 서버개발을 하고 있습니다만, 프론트엔드도 가끔 합니다.
        </div>
        <div className="text-xl">
          하하, 개발이 너무 재밌습니다.
          <span role="img" aria-label="sheep">
            😻
          </span>
        </div>
      </div>
    </div>
  );
}

export default Profile;
