import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import project2 from "./styles/image/project2.png";
import secondhand from "./styles/image/secondhand.png";

export default function ProjectA() {
  return (
    <div className="flex justify-center mt-10">
      <div className="max-w-6xl rounded overflow-hidden shadow-lg">
        <div className="flex text-gray-800">
          <div className="w-1/3">
            <img className="rounded-lg my-5" src={project2} alt="login" />
          </div>
          <div className="w-2/3 flex flex-col justify-center">
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2 text-gray-800">
                Secondhand | Back-end
              </div>
              <p className="text-gray-700 text-lg mb-5">
                최근 30일 내 중고거래가를 알아보자!
                <br />
                중고거래가 활발한 유모차를 시작으로 중고거래 사이트의 크롤링한
                데이터를 브랜드와 모델로 매칭시켜 중고거래시 기준을 세우는데
                도움을 주는 어플리케이션입니다.
                <br />
                <br />
                <div className="font-bold text-gray-800">My role</div>
                - 중고거래 사이트별 크롤링 구현
                <br />
                - 게시글 타이틀/내용 필터링 함수 구현 및 브랜드/모델 매칭
                <br />- 선택가격범위 내 브랜드/모델 검색페이지 구현 및 월/일
                데이터기반 간략한 그래프 구현
              </p>
              <a
                className="flex-shrink-0 bg-teal-500 hover:bg-teal-400 border-teal-500 hover:border-teal-400 text-sm border-4 text-white py-1 px-2 rounded"
                href={secondhand}
                rel="noopener noreferrer"
                target="_blank"
              >
                안드로이드앱 바로가기
              </a>
              <a
                href="https://github.com/ekklesia11/secondhand-server-repo"
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
                #Python3
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #Django
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #KoNLPy
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #MySQL
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #ReactNative
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
