import styled from "@emotion/styled";
import React from "react";
const PrevBtnContainer = styled.div`
  top: 0;
  left: 0;
  display: flex;
  -ms-flex-pack: start;
  justify-content: flex-start;
  background: linear-gradient(90deg, #fff 21.82%, hsla(0, 0%, 100%, 0));
  position: absolute;
  -ms-flex-align: center;
  align-items: center;
  width: 80px;
  height: 100%;
  z-index: 1;
`;
const PrevBtn = styled.button`
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
function TabPrevBtn({ onClick }) {
  return ( 
    <PrevBtnContainer>
      <PrevBtn onClick={onClick}>
        <span>
          <svg className="SvgIcon_SvgIcon__root__svg__DKYBi" viewBox="0 0 18 18">
            <path d="m6.045 9 5.978-5.977a.563.563 0 1 0-.796-.796L4.852 8.602a.562.562 0 0 0 0 .796l6.375 6.375a.563.563 0 0 0 .796-.796L6.045 9z"></path>
          </svg>
        </span>
      </PrevBtn>
    </PrevBtnContainer>
  );
}

export default TabPrevBtn;
