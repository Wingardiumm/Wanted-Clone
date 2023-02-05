import React from "react";
import styled from "styled-components";
import ResumeDetailTitleAndGuide from "./ResumeDetailTitleAndGuide";

const ResumeBasicInfoTextarea = styled.div`
  position: relative;
  overflow-x: hidden;
  .resume-basicInfo-content {
    height: 34px;
    color: rgb(59, 61, 64);
    margin: 30px 0px 3px;
    font-size: 16px;
  }
  > textarea {
    background-color: transparent;
    border: none;
    padding: 0;
    margin-bottom: 3px;
    border-radius: 0;
    height: auto;
    width: 100%;
    white-space: pre-wrap;
    word-break: break-all;
    word-wrap: break-word;
    caret-color: #000;
    overflow: hidden;
    line-height: 22px;
    -webkit-box-shadow: none !important;
    box-shadow: none !important;
    -moz-appearance: none;
    -webkit-appearance: none;
    resize: none;
    outline: none;
  }
`;
function ResumeDetailBasicIntro() {
  return (
    <div>
      <ResumeDetailTitleAndGuide index={0} />
      <div>
        <ResumeBasicInfoTextarea>
          <textarea className="resume-basicInfo-content" placeholder="간단한 자기소개를 통해 이력서를 돋보이게 만들어보세요. (3~5줄 권장)"></textarea>
        </ResumeBasicInfoTextarea>
      </div>
    </div>
  );
}

export default ResumeDetailBasicIntro;
