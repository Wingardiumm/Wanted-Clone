import React from "react";
import styled from "styled-components";
import ResumeBtn, { ResumeBtnStyle } from "./ResumeStyle";
import { SectionContentWrapper } from "./ResumeLandingPagestyleComponents";

const SectionBackground = styled.div`
  width: 100%;
  height: 442px;
  background-image: url(https://static.wanted.co.kr/images/userweb/resume_intro/intro_img_web.png);
  background-size: cover;
  background-repeat: no-repeat;
  div {
    width: 100%;
    text-align: center;
    color: #fff;
    padding-top: 100px !important;
    padding-bottom: 0 !important;
    h1 {
      font-weight: 700;
      font-size: 56px;
      line-height: 128.6%;
      letter-spacing: -0.027em;
    }
    h2 {
      font-weight: 400;
      font-size: 22px;
      line-height: 127.3%;
      letter-spacing: -0.012em;
    }
  }
  button {
    height: 54px;
    padding: 12px 32px;
    margin-top: 50px;
    font-weight: 600;
    font-size: 20px;
    line-height: 150%;
    letter-spacing: 0.0056em;
  }
  button:first-of-type {
    background: #fff;
    color: #36f;
    border: 1px solid #36f;
  }
  button+button{
    margin-left: 10px;
  }
`;

function ResumeLandingPageFirstSection() {
  return (
    <SectionBackground>
      <SectionContentWrapper>
        <h1>합격을 부르는 이력서</h1>
        <h2>
          원티드 이력서로 지원 시 <br />
          일반 이력서보다 서류 합격률이 2배 높아집니다.
        </h2>
        <ResumeBtnStyle>이력서 관리</ResumeBtnStyle>
        <ResumeBtnStyle>새 이력서 작성</ResumeBtnStyle>
      </SectionContentWrapper>
    </SectionBackground>
  );
}

export default ResumeLandingPageFirstSection;
