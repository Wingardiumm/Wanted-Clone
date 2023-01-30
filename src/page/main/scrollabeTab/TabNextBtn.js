import React from "react";
import styled from "styled-components";

const NextBtnContainer = styled.div`
  /* top: 0; */
  right: 0;
  display: flex;
  -ms-flex-pack: end;
  justify-content: flex-end;
  background: linear-gradient(270deg, #fff 21.82%, hsla(0, 0%, 100%, 0));
  position: absolute;
  -ms-flex-align: center;
  align-items: center;
  width: 80px;
  height: 100%;
  z-index: 1;
`;
const NextBtn = styled.button`
  width: 40px;
  height: 40px;
  font-size: 18px;
  display: -ms-inline-flexbox;
  display: inline-flex;
  -ms-flex-pack: center;
  justify-content: center;
  -ms-flex-align: center;
  align-items: center;
  min-width: 30px;
  min-height: 30px;
  border: 1px solid #ececec;
  border-radius: 50%;
  background-color: #fff;
  -webkit-box-shadow: 0 2px 2px 0 rgb(0 0 0 / 5%);
  box-shadow: 0 2px 2px 0 rgb(0 0 0 / 5%);
  color: #888;
  position: relative;
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
function TabNextBtn({ onClick }) {
  return (
    <NextBtnContainer>
      <NextBtn onClick={onClick}>
        <span>
          <svg className="SvgIcon_SvgIcon__root__svg__DKYBi" viewBox="0 0 18 18">
            <path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path>
          </svg>
        </span>
      </NextBtn>
    </NextBtnContainer>
  );
}

export default TabNextBtn;
