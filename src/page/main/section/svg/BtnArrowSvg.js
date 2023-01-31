import React from "react";
import styled from "styled-components";

const BtnArrowWrapper = styled.span`
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: inherit;
  align-items: inherit;
  -ms-flex-pack: inherit;
  justify-content: inherit;
`;
const StyledSvg = styled.svg`
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
`;
function BtnArrowSvg() {
  return (
    <BtnArrowWrapper className="svg-arrow">
      <StyledSvg viewBox="0 0 18 18">
        <path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path>
      </StyledSvg>
    </BtnArrowWrapper>
  );
}

export default BtnArrowSvg;
