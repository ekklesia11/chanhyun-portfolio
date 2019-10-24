import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";

export default function About() {
  return (
    <div className="mb-56">
      <div className="mt-10 text-4xl text-gray-800 font-bold ml-12">
        About me
      </div>
      <div className="mx-20 mt-10 text-gray-700 text-xl">
        <p>
          안녕하세요. 에너지 뿜뿜 개발자 박찬현입니다.
          <br />
          국내 혁신적인 코딩 교육 부트캠프를 수료하고, 백엔드 개발자로 살아가고
          있습니다.
          <br />
          아이디어를 가지고 무엇인가를 만들어낸다는 것이 얼마나 재미있는 일인지
          모르겠습니다.
          <br />
          좋은 설계와 구조, 협업을 통해 모던한 웹/앱서비스를 개발합니다.
          <br />
          <br />
          <a
            href="https://www.uct.ac.za"
            rel="noopener noreferrer"
            target="_blank"
            className="cursor-pointer text-teal-500 hover:text-teal-400 hover:underline"
          >
            University of Cape Town
          </a>{" "}
          를 졸업하고, 연구원, 스타트업, 영업 등 다양한 경험을 쌓았습니다.
          <br />
          단순히 코딩만 잘하는 개발자가 아니라 서비스 전체를 이해하는, 매일
          성장하는 개발자입니다.
          <br />
          <br />
          주로 활용하는 기술스택입니다.
        </p>
        <div className="flex mt-5">
          <div className="w-1/4 cursor-default hover:text-teal-500">
            <FontAwesomeIcon
              className="text-base mr-2 text-teal-500"
              icon={faCaretRight}
            />
            <span>JavaScript(ES6+)</span>
          </div>
          <div className="w-1/4 cursor-default hover:text-teal-500">
            <FontAwesomeIcon
              className="text-base mr-2 text-teal-500"
              icon={faCaretRight}
            />
            <span>React</span>
          </div>
        </div>
        <div className="flex">
          <div className="w-1/4 cursor-default hover:text-teal-500">
            <FontAwesomeIcon
              className="text-base mr-2 text-teal-500"
              icon={faCaretRight}
            />
            <span>Node.js</span>
          </div>
          <div className="w-1/4 cursor-default hover:text-teal-500">
            <FontAwesomeIcon
              className="text-base mr-2 text-teal-500"
              icon={faCaretRight}
            />
            <span>Express</span>
          </div>
        </div>
        <div className="flex">
          <div className="w-1/4 cursor-default hover:text-teal-500">
            <FontAwesomeIcon
              className="text-base mr-2 text-teal-500"
              icon={faCaretRight}
            />
            <span>Python3</span>
          </div>
          <div className="w-1/4 cursor-default hover:text-teal-500">
            <FontAwesomeIcon
              className="text-base mr-2 text-teal-500"
              icon={faCaretRight}
            />
            <span>Django</span>
          </div>
        </div>
      </div>
    </div>
  );
}
