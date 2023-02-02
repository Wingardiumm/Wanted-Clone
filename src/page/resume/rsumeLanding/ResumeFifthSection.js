import React from "react";
import styled from "styled-components";
import { SectionContentWrapper } from "./ResumeLandingPagestyleComponents";
import { ResumeBtnStyle, ResumeLandingSectionWrapper } from "./ResumeStyle";

const StyledSection = styled(ResumeLandingSectionWrapper)`
  padding: 0 !important;
  height: 452px;
  > div {
    position: relative;
    height: 100%;
    display: flex;
    align-items: center;
    text-align: left;
    > img {
      position: absolute;
      bottom: 0;
      left: 575px;
    }
  }
`;
const ResumeAiContent = styled.div`
  > div {
    font-weight: 700;
    font-size: 36px;
    line-height: 130%;
    letter-spacing: -0.024em;
    > p {
      height: 47px;
      display: flex;
      align-items: baseline;
      grid-gap: 5px;
      gap: 5px;
    }
  }
  > p {
    font-weight: 400;
    font-size: 18px;
    line-height: 160%;
    margin-top: 20px;
  }
  button{
    height: 54px;
    margin-top: 30px;
    font-weight: 600;
    font-size: 20px;
    line-height: 150%;
    letter-spacing: .0056em;
  }
`;
function ResumeFifthSection() {
  return (
    <StyledSection>
      <SectionContentWrapper>
        <ResumeAiContent>
          <div>
            이력서 완성하면
            <p>
              <img width={"198"} height={"33"} alt="wanted-logo" src="https://static.wanted.co.kr/images/userweb/resume_intro/resume_ai_logo.png" />가
              포지션추천까지
            </p>
          </div>
          <p>
            이력서를 분석하여 딱 맞는 포지션을 찾아드려요.
            <br />
            원티드AI가 추천한 포지션은 서류합격률이 일반 지원 대비 4배 높습니다.
          </p>
          <ResumeBtnStyle>
            <span>지금 시작하기</span>
          </ResumeBtnStyle>
        </ResumeAiContent>
        <img width={"516"} height={"352"} src="https://static.wanted.co.kr/images/userweb/resume_intro/resume_ai_sample.png" alt="ai-example-img" />
      </SectionContentWrapper>
    </StyledSection>
  );
}

export default ResumeFifthSection;
