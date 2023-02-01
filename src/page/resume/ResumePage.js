import React from "react";
import styled from "styled-components";
import ResumeBanner from "./ResumeBanner";

const ResumeListContainer = styled.div`
  @media (min-width: 1200px) {
    width: 87.72%;
    margin: 0 auto;
    position: relative;
  }
  max-width: 1060px;
`;
function ResumePage() {
  return (
    <ResumeListContainer>
        <ResumeBanner/>
    </ResumeListContainer>
  );
}

export default ResumePage;
