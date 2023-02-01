import React from "react";
import styled from "styled-components";
const AgreementCheckBox = styled.div`
  width: 18px;
  height: 18px;
  font-size: 11px;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  border-radius: 3px;
  border: ${(props) => props.checkOn ? "none" : " 1px solid var(--theme-palette-colors-gray-200)"};
  background-color: ${(props) => props.checkOn && "var(--theme-palette-colors-blue-400)"};
  span {
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
    svg {
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
      width: 1em;
      height: 1em;
      display: inline-block;
      fill: currentColor;
      -webkit-flex-shrink: 0;
      -ms-flex-negative: 0;
      flex-shrink: 0;
      font-size: inherit;
    }
  }
`;

function SignUpCheckBox({ checkOn = false }) {
  return (
    <AgreementCheckBox checkOn={checkOn}>
      {checkOn && (
        <span>
          <svg viewBox="0 0 12 8" className="css-1h47l4s">
            <path
              d="M1.5 4L4.5 7L10.5 1"
              stroke="var(--theme-palette-colors-common-white)"
              fill="none"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        </span>
      )}
    </AgreementCheckBox>
  );
}

export default SignUpCheckBox;
