import React from "react";
import styled from "styled-components";

const CheckSvgWrapper = styled.span`
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-align-items: inherit;
  -webkit-box-align: inherit;
  -ms-flex-align: inherit;
  align-items: inherit;
  -webkit-box-pack: inherit;
  -ms-flex-pack: inherit;
  -webkit-justify-content: inherit;
  justify-content: inherit;
  width: 15px;
  margin-right: 10px;
`;
function CheckSvg() {
  return (
    <CheckSvgWrapper>
      <svg viewBox="0 0 12 8" className="css-1h47l4s">
        <path
          d="M1.5 4L4.5 7L10.5 1"
          stroke="var(--theme-palette-colors-gray-300)"
          fill="none"
          strokeWidth="1.5"
        ></path>
      </svg>
    </CheckSvgWrapper>
  );
}

export default CheckSvg;
