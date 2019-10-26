import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import project1 from "./styles/image/project1.png";

export default function ProjectA() {
  return (
    <div className="flex justify-center mt-10">
      <div className="max-w-6xl rounded overflow-hidden shadow-lg">
        <div className="flex text-gray-800">
          <div className="w-1/3">
            <img className="rounded-lg my-5" src={project1} alt="project1" />
          </div>
          <div className="w-2/3 flex flex-col justify-center">
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2 text-gray-800">
                Lunch-gogo | Back-end
              </div>
              <p className="text-gray-700 text-lg mb-5">
                오늘 뭐먹지? 매일하는 고민, 이제는 재밌게 메뉴를 골라보자!
                <br />
                직장인들이 점심메뉴를 선정할 때 실시간 투표를 통해서 재밌게
                정하고, 투표결과에 따라 반경 500m 내 거리순으로 식당목록을
                제공합니다.
                <br />
                <br />
                <div className="font-bold text-gray-800">My role</div>
                - 실시간 투표 API 구현
                <br />- 사용자 위치기반 반경 500m 내 거리순 식당목록 제공
              </p>
              <a
                className="flex-shrink-0 bg-teal-500 hover:bg-teal-400 border-teal-500 hover:border-teal-400 text-sm border-4 text-white py-1 px-2 rounded"
                href="https://flamboyant-ptolemy-79e553.netlify.com/"
                rel="noopener noreferrer"
                target="_blank"
              >
                Lunch-gogo 바로가기
              </a>
              <a
                href="https://github.com/ekklesia11/lunch-is-mundle-server-repo"
                rel="noopener noreferrer"
                target="_blank"
                className="ml-3 text-teal-500 cursor-pointer hover:text-teal-400"
              >
                <FontAwesomeIcon
                  className="text-2xl align-middle"
                  icon={faGithub}
                />
              </a>
            </div>
            <div className="px-6 py-4">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #JavaScript
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #Node.js
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #Express
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #Socket.io
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #MongoDB
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mb-2">
                #React.js
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
