import React from "react";
import styled from "styled-components";

const NextBtnBox = styled.button`
  right: calc((100% - 1200px) / 2);
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  -ms-flex-pack: center;
  justify-content: center;
  position: absolute;
  top: 120px;
  width: 30px;
  height: 60px;
  opacity: 0.5;
  border-radius: 15px;
  background-color: #fff;
  font-size: 16px;
  z-index: 10;
  span {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: inherit;
    align-items: inherit;
    -ms-flex-pack: inherit;
    justify-content: inherit;
    svg {
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
      width: 1em;
      height: 1em;
      display: inline-block;
      fill: currentColor;
      -ms-flex-negative: 0;
      flex-shrink: 0;
      font-size: inherit;
    }
  }
`;
function SliderNextBtn({ onClick }) {
  return (
    <NextBtnBox onClick={onClick}>
      <span>
        <svg className="SvgIcon_SvgIcon__root__svg__DKYBi" viewBox="0 0 18 18">
          <path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path>
        </svg>
      </span>
    </NextBtnBox>
  );
}

export default SliderNextBtn;
