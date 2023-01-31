import React from "react";
import styled from "styled-components";

const EduLogo = styled.span`
  color: #333;
  border-color: #333;
  display: -ms-inline-flexbox;
  display: inline-flex;
  -ms-flex-pack: center;
  justify-content: center;
  -ms-flex-align: center;
  align-items: center;
  height: 20px;
  border: 1px solid;
  border-radius: 2px;
  span {
    font-size: 11px;
    font-weight: 700;
    line-height: normal;
    padding: 0 6px;
  }
`;
function EventKindEdu() {
  return (
    <EduLogo>
      <span>교육</span>
    </EduLogo>
  );
}

export default EventKindEdu;
