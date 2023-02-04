import React from "react";
import styled from "styled-components";

const QuestionButton = styled.button`
  width: 17px;
  height: 17px;
  margin-left: 6px;
  margin-right: 3px;
  background-color: transparent;
  vertical-align: -4px;
`;

function QuestionMarkBtn() {
  return (
    <QuestionButton>
      <svg width="17" height="17" viewBox="0 0 17 17">
        <defs>
          <filter id="bfoh3u0w3a">
            <feColorMatrix in="SourceGraphic" values="0 0 0 0 0.600000 0 0 0 0 0.600000 0 0 0 0 0.600000 0 0 0 1.000000 0"></feColorMatrix>
          </filter>
        </defs>
        <g fill="none" fillRule="evenodd">
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
    </QuestionButton>
  );
}

export default QuestionMarkBtn;
