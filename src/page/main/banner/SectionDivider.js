import React from "react";
import styled from "styled-components";

const SectionDividerContainer = styled.div`
  max-width: 1060px;
  width: 87.72%;
  margin: 0 auto;
  hr {
    height: 1px;
    margin: 0;
    border: none;
    -ms-flex-negative: 0;
    flex-shrink: 0;
    background-color: #ececec;
  }
`;

function SectionDivider() {
  return (
    <SectionDividerContainer>
      <hr />
    </SectionDividerContainer>
  );
}

export default SectionDivider;
