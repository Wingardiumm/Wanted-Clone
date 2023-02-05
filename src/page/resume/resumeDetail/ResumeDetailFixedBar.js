import React from "react";
import styled from "styled-components";
import { ResumeBtnStyle } from "../rsumeLanding/ResumeStyle";

const ResumeDetailFixedBarWrapper = styled.div`
  width: 1060px;
  margin: 0 auto;
  position: fixed;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  background-color: #fff;
  align-items: center;
  top: 50px;
  right: 5%;
  left: 5%;
  z-index: 4;
  padding: 20px 0;
`;
const ResumeDetailLanguageSelectBox = styled.div`
  padding: 0;
  height: 40px;
  border-radius: 2px;
  border: 1px solid #333;
  background-color: #fff;
  position: relative;
  width: 102px;
  > select {
    background: none;
    appearance: none;
    position: relative;
    width: 100%;
    min-width: 98px;
    height: 100%;
    padding-left: 37px;
    border: #e0e0e0;
    background-color: transparent;
    box-shadow: none;
    -webkit-appearance: none;
  }
  > svg {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }
  > svg:first-child {
    left: 10px;
  }
  > svg:last-of-type {
    right: 10px;
    color: #666;
  }
`;
const ResumeDetailWritingGuideWrapper = styled.div`
  vertical-align: middle;
  display: flex;
`;
const GuideButton = styled.div`
  margin-right: 30px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  background-color: #fff;
`;
const ResumeDownloadBtn = styled.button`
  width: 40px;
  min-width: unset;
  height: 40px;
  padding: 0;
  outline: none !important;
  border-radius: 3px;
  border: 1px solid #333;
`;
const GuideBtnItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  span {
    font-size: 14px;
  }
  .resume-detail-guideList {
    color: #36f;
    span {
      padding: 0.2em 0.6em 0.3em;
      font-weight: 600;
    }
  }
  .resume-detail-wordCheck {
    position: relative;
    padding: 6px 4px 6px 6px !important;
    &::before {
      content: "";
      width: 1px;
      height: 14px;
      background-color: #ccc;
      position: absolute;
      left: 0;
    }
    span {
      padding: 0.2em 0.6em 0.3em;
      font-weight: 600;
    }
  }
`;
const WordCheckLabel = styled.label`
  position: relative;
  display: inline-block;
  width: 56px;
  height: 30px;
  margin-bottom: 3px;
  >span {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #f2f4f7;
    transition: 0.4s;
    border-radius: 15px;
    border: 1px solid #ececec;
    font-size: 14px;
    &::before {
      position: absolute;
      content: "";
      height: 26px;
      width: 26px;
      border-radius: 50%;
      left: 2px;
      top: 1px;
      background-color: #fff;
      -webkit-transition: 0.4s;
      transition: 0.4s;
      border: 1px solid #e1e2e3;
    }
  }
`;
const StyledResumeBtn = styled(ResumeBtnStyle)`
  padding: 6px 8px;
  height: 40px;
  font-size: 15px;
  background: none;
  color: #333;
`;
function ResumeDetailFixedBar() {
  return (
    <ResumeDetailFixedBarWrapper>
      <ResumeDetailLanguageSelectBox>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="https://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8 0C12.4159 0 16 3.53194 16 7.89406C16 10.5393 14.6717 12.9619 12.4994 14.4224C12.1556 14.6535 11.6896 14.5622 11.4585 14.2184C11.2274 13.8747 11.3187 13.4087 11.6625 13.1776C12.5094 12.6082 13.1973 11.8604 13.6836 11H11.2663L11.2242 11.2597C10.7235 14.0547 9.57125 16 8 16C3.58406 16 0 12.4681 0 8.10594C0 5.46066 1.32825 3.03806 3.50061 1.57759C3.84436 1.34648 4.31037 1.4378 4.54147 1.78155C4.77257 2.1253 4.68125 2.59131 4.3375 2.82241C3.49063 3.39177 2.80273 4.13956 2.31643 5H4.73011C5.20417 2.07815 6.38241 0 8 0ZM11.4439 9.5H14.293C14.4288 8.98335 14.5 8.44466 14.5 7.89406C14.5 7.41427 14.4462 6.94674 14.3443 6.49702L14.3 6.5H11.4451C11.4814 6.98635 11.5 7.48785 11.5 8C11.5 8.27045 11.4946 8.53923 11.4838 8.8056C11.4744 9.04022 11.461 9.27183 11.4439 9.5ZM9.93803 9.5H6.06334C6.02236 9.01917 6 8.51708 6 8C6 7.48292 6.02236 6.98083 6.06334 6.5H9.93666C9.97764 6.98083 10 7.48292 10 8C10 8.25032 9.995 8.49894 9.98507 8.74516C9.97471 9.00206 9.95885 9.25393 9.93803 9.5ZM6.26095 11H9.73997C9.35657 13.0989 8.61725 14.5 8 14.5C7.51019 14.5 6.96553 13.6575 6.56844 12.3121L6.45394 11.8937C6.38275 11.6127 6.31792 11.314 6.26095 11ZM4.55487 9.5C4.51861 9.01365 4.5 8.51215 4.5 8C4.5 7.48785 4.51861 6.98635 4.55487 6.5H1.70698C1.57118 7.01665 1.5 7.55534 1.5 8.10594C1.5 8.58573 1.55375 9.05326 1.65567 9.50298L1.7 9.5H4.55487ZM2.20248 11H4.73011C4.92314 12.1897 5.23292 13.2396 5.64157 14.0662C4.14795 13.4939 2.92304 12.394 2.20248 11ZM10.3584 1.93382C11.8521 2.50612 13.077 3.60599 13.7975 5H11.2699C11.0769 3.81028 10.7671 2.76044 10.3584 1.93382ZM9.54606 4.1063C9.61725 4.38725 9.68208 4.68599 9.73905 5H6.26095C6.31792 4.68599 6.38275 4.38725 6.45394 4.1063L6.56844 3.68794C6.96553 2.34255 7.51019 1.5 8 1.5C8.48981 1.5 9.03447 2.34255 9.43156 3.68794L9.54606 4.1063Z"
            fill="#333"
          ></path>
        </svg>
        <select>
          <option defaultValue={"kr"}>한국어</option>
          <option>日本語</option>
          <option>繁體中文</option>
          <option>English</option>
        </select>
        <svg width="8" height="7" viewBox="0 0 8 7" fill="none" xmlns="https://www.w3.org/2000/svg">
          <path
            d="M7.33334 0.494202C7.85691 0.494202 8.14842 1.1611 7.82205 1.61224L4.50038 6.20371C4.25071 6.54882 3.77503 6.54971 3.5243 6.20554L0.179295 1.61408C-0.149094 1.16332 0.14211 0.494202 0.666672 0.494202H7.33334Z"
            fill="#333"
          ></path>
        </svg>
      </ResumeDetailLanguageSelectBox>
      <ResumeDetailWritingGuideWrapper>
        <GuideButton>
          <GuideBtnItem>
            <StyledResumeBtn className="resume-detail-guideList">
              <span>합격/불합격 단어 가이드</span>
            </StyledResumeBtn>
          </GuideBtnItem>
          <GuideBtnItem>
            <StyledResumeBtn className="resume-detail-wordCheck">
              <span>내 이력서 단어 체크</span>
            </StyledResumeBtn>
            <WordCheckLabel>
                <input style={{opacity: '0',width: '0', height: '0'}} type={'checkbox'}></input>
                <span></span>
            </WordCheckLabel>
          </GuideBtnItem>
        </GuideButton>
        <ResumeDownloadBtn>
          <svg width="18" height="18" viewBox="0 0 16 16" fill="none" xmlns="https://www.w3.org/2000/svg">
            <path
              d="M13.5556 9.77783C13.8931 9.77783 14.172 10.0286 14.2162 10.354L14.2223 10.4445V14.427C14.2223 14.7641 13.972 15.0428 13.647 15.0874L13.5567 15.0936L2.44555 15.1112C2.10767 15.1117 1.82817 14.8608 1.78393 14.5351L1.77783 14.4445V10.462C1.77783 10.0939 2.07631 9.79538 2.4445 9.79538C2.78201 9.79538 3.06094 10.0462 3.10508 10.3716L3.11117 10.462V13.7769L12.8889 13.7609V10.4445C12.8889 10.107 13.1397 9.82806 13.4651 9.78392L13.5556 9.77783ZM8.00005 1.77783C8.33756 1.77783 8.61649 2.02864 8.66064 2.35404L8.66672 2.4445V9.94583L10.6396 7.97325C10.8762 7.73649 11.2466 7.71485 11.5076 7.90841L11.5824 7.97294C11.8192 8.20954 11.8408 8.5799 11.6473 8.84095L11.5827 8.91575L8.47146 12.0291C8.44783 12.0527 8.42244 12.0746 8.3955 12.0944L8.47162 12.0289C8.4392 12.0614 8.40428 12.0898 8.36747 12.1141C8.35132 12.1247 8.33469 12.1347 8.31761 12.144C8.3045 12.1512 8.29109 12.1578 8.27751 12.1641C8.2612 12.1715 8.24429 12.1785 8.22706 12.1847C8.21363 12.1895 8.20045 12.1938 8.18718 12.1977C8.16857 12.2032 8.14943 12.2078 8.12998 12.2117C8.11742 12.2141 8.10519 12.2162 8.09293 12.2179C8.06278 12.2221 8.03168 12.2243 8.00005 12.2243C7.98828 12.2243 7.98145 12.2241 7.97462 12.2239L8.00005 12.2243C7.96593 12.2243 7.9324 12.2218 7.89965 12.2168C7.88984 12.2153 7.87966 12.2135 7.86952 12.2115C7.84632 12.2069 7.82382 12.2012 7.80181 12.1944C7.79272 12.1915 7.78376 12.1885 7.77485 12.1853C7.75478 12.1781 7.73517 12.17 7.71606 12.161C7.70287 12.1548 7.6898 12.1481 7.67692 12.141C7.65515 12.1289 7.63377 12.1154 7.61326 12.1007C7.60989 12.0984 7.60674 12.0961 7.60362 12.0938C7.57605 12.0732 7.55152 12.0519 7.52865 12.0291L4.41337 8.91608C4.15293 8.65582 4.15277 8.23371 4.41303 7.97327C4.64962 7.7365 5.01998 7.71485 5.28104 7.9084L5.35583 7.97292L7.33339 9.94939V2.4445C7.33339 2.07631 7.63186 1.77783 8.00005 1.77783Z"
              fill="#333"
            ></path>
          </svg>
        </ResumeDownloadBtn>
      </ResumeDetailWritingGuideWrapper>
    </ResumeDetailFixedBarWrapper>
  );
}

export default ResumeDetailFixedBar;
