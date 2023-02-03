import React from "react";
import styled from "styled-components";

const ArrowWrapper = styled.span`
  position: relative;
  border: 1px solid #e1e2e3;
  border-radius: 9999px;
  background-color: #fff;
  width: 26px;
  height: 26px;
  transition: 0.3s;
  flex-shrink: 0;
  svg{
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%,-50%);
    transform: translate(-50%,-50%);
  }
`;
function SelectJobBtnArrow() {
  return (
    <ArrowWrapper>
      <svg xmlns="https://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" className="MoreButton_MoreButton__icon__L_DpL">
        <path
          fill="#767676"
          fillRule="nonzero"
          d="M2.28 3.22a.75.75 0 0 0-1.06 1.06l4.25 4.25a.75.75 0 0 0 1.06 0l4.25-4.25a.75.75 0 0 0-1.06-1.06L6 6.94 2.28 3.22z"
        ></path>
      </svg>
    </ArrowWrapper>
  );
}

export default SelectJobBtnArrow;
