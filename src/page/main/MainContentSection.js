import React from "react";
import styled from "styled-components";
import CarrerImgGrid from "./section/careerSection/CarrerImgGrid";
import MainScrollableNav from "./scrollabeTab/MainScrollableNav";


export const MainContentTitleWrapper = styled.div`
  text-align: center;
  h2 {
    font-size: 18px;
    line-height: 1.33;
    font-weight: 700;
    color: #333;
    margin-left: 4px;
    @media (min-width: 1200px) {
      font-size: 22px;
    }
  }
`;
export const MainTitle = styled.div`
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  -ms-flex-pack: center;
  justify-content: center;
  * {
    margin-left: 4px;
    line-height: normal;
  }
  button {
    margin-top: 3px;
  }
`;
function MainContentSection() {
  return (
    <>
      <MainContentTitleWrapper>
        <MainTitle>
          <h2>나에게 필요한 커리어 인사이트</h2>
          <button>
            <svg width="24" height="24" viewBox="0 0 17 17">
              <defs>
                <filter id="bfoh3u0w3a">
                  <feColorMatrix in="SourceGraphic" values="0 0 0 0 0.600000 0 0 0 0 0.600000 0 0 0 0 0.600000 0 0 0 1.000000 0"></feColorMatrix>
                </filter>
              </defs>
              <g fill="none">
                <g>
                  <g>
                    <g transform="translate(-1080 -374) translate(1080 374)">
                      <g>
                        <path
                          stroke="#999"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.2"
                          d="M9.421 13.334c-.736.277-1.535.43-2.368.43-3.706 0-6.71-3.005-6.71-6.711 0-3.707 3.004-6.71 6.71-6.71 1.853 0 3.53.75 4.745 1.965 1.214 1.214 1.965 2.892 1.965 4.745 0 1.853-.75 3.53-1.965 4.745"
                          transform="translate(1 1)"
                        ></path>
                        <path
                          fill="#999"
                          d="M6.382 10.408c0-.371.3-.671.67-.671.371 0 .672.3.672.67 0 .372-.3.672-.671.672-.37 0-.671-.3-.671-.671"
                          transform="translate(1 1) rotate(-180 7.053 10.408)"
                        ></path>
                        <path
                          stroke="#999"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.2"
                          d="M5.04 5.655c0-1.08.901-1.958 2.013-1.958 1.11 0 2.013.877 2.013 1.958 0 1.08-1.007 1.957-2.013 1.957v.783"
                          transform="translate(1 1)"
                        ></path>
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
          </button>
        </MainTitle>
      </MainContentTitleWrapper>
      <MainScrollableNav /> {/* 커리어 구분 탭 */}
      <CarrerImgGrid />
      {/**커리어 목록 */}
    </>
  );
}

export default MainContentSection;
