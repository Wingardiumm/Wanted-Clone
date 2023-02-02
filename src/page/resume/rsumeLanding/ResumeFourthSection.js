import React from "react";
import styled from "styled-components";
import { ResumeBtnStyle, ResumeLandingSectionWrapper } from "./ResumeStyle";

const StyledSection = styled(ResumeLandingSectionWrapper)`
  padding-top: 50px !important;
  padding-bottom: 100px !important;
  background-color: #f8f8f8;
  display: flex;
  justify-content: center;
  button {
    width: fit-content;
    height: 54px;
    padding: 12px 32px;
    font-weight: 600;
    font-size: 20px;
    line-height: 150%;
    letter-spacing: 0.0056em;
  }
  button:first-of-type {
    margin-right: 10px;
    background-color: #fff;
    border: 1px solid #e1e2e3;
    color: #333;
  }
`;

function ResumeFourthSection() {
  return (
    <StyledSection>
      <ResumeBtnStyle>샘플 다운로드</ResumeBtnStyle>
      <ResumeBtnStyle>새 이력서 작성</ResumeBtnStyle>
    </StyledSection>
  );
}

export default ResumeFourthSection;
