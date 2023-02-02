import React from "react";
import styled from "styled-components";
import { SectionContentWrapper } from "./ResumeLandingPagestyleComponents";
import { ResumeLandingSectionWrapper } from "./ResumeStyle";
import { resumeLandingSecondSectionData } from "../../../data/resumeLandingData";

const StyledSection = styled(ResumeLandingSectionWrapper)`
  width: 100%;
  padding-bottom: 100px;
  h1 {
    font-weight: 700;
    font-size: 36px;
  }
`;
const AdvantageContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 50px;
  li:nth-child(1) {
    background-color: #f1f7fe;
  }
  li:nth-child(2) {
    background-color: #f1f1fe;
  }
  li:nth-child(3) {
    margin-top: 20px;
    background-color: #f3f8ee;
  }
  li:nth-child(4) {
    margin-top: 20px;
    background-color: #ecf8fb;
  }
  li {
    display: flex;
    flex-wrap: wrap;
    align-content: space-between;
    width: 520px;
    height: 480px;
    padding-top: 50px;
    border-radius: 10px;
    text-align: left;
    div {
      padding-left: 50px;
      h2 {
        margin-top: 0;
        font-weight: 600;
        font-size: 26px;
        line-height: 135.7%;
      }
      h3 {
        font-weight: 400;
        font-size: 16px;
        line-height: 150%;
        margin-top: 15px;
      }
      h6 {
        font-weight: 400;
        font-size: 14px;
        line-height: 150%;
        margin-top: 5px;
        color: #939393;
      }
    }
    img {
      /* width: 520px; */
      /* aspect-ratio: auto 520 / 312; */
      /* height: 312px; */
    }
  }
`;
function ResumeLandingPageSecondSection() {
  return (
    <StyledSection>
      <SectionContentWrapper>
        <h1>원티드 이력서는 이런 점이 좋아요!</h1>
        <AdvantageContainer>
          {resumeLandingSecondSectionData.map((data) => (
            <li key={data.id}>
              <div>
                <h2>{data.title}</h2>
                <h3>
                  {data.content1}
                  <br />
                  {data.content2}
                </h3>
                <h6>{data.notice}</h6>
              </div>
              <img src={data.img_path} width="520" height={data.height} alt="s" />
            </li>
          ))}
        </AdvantageContainer>
      </SectionContentWrapper>
    </StyledSection>
  );
}

export default ResumeLandingPageSecondSection;
