import React from "react";
import styled from "styled-components";
import ResumeDetailTitleAndGuide from "../ResumeDetailTitleAndGuide";
import ResumeCareerContentList from "./ResumeCareerContentList";

const TakeCareerBanner = styled.button`
  display: flex;
  align-items: center;
  width: 100%;
  height: 70px;
  padding: 0 20px;
  border-radius: 5px;
  border: 1px solid #36f;
  margin: 10px 0 20px;
  cursor: pointer;
`;
const TakeCareerBannerContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  font-size: 15px;
  font-weight: 500;
  line-height: 18px;
  color: #555;
  .careerBanner-text {
    display: inline-flex;
    text-align: left;
  }
  .careerBanner-btn {
    display: flex;
    -ms-flex-align: center;
    align-items: center;
    font-size: 14px;
    font-weight: 700;
    line-height: 17px;
    color: #36f;
    > svg {
      margin-left: 5px;
    }
  }
`;
function ResumeCareer() {
  return (
    <div>
      <ResumeDetailTitleAndGuide index={1} />
      <TakeCareerBanner>
        <TakeCareerBannerContent>
          <div className="careerBanner-text">
            <p>내 경력 정보를 한 번에 불러올까요?</p>
            <p style={{ marginLeft: "2px" }}>기억 안 나는 경력 정보, 알아서 채워드려요!</p>
          </div>
          <div className="careerBanner-btn">
            <strong>내 경력 불러오기</strong>
            <svg width="12" height="12" viewBox="0 0 12 12">
              <path
                fill="currentColor"
                d="M3.345 9.72a.75.75 0 0 0 1.06 1.06l4.25-4.25a.75.75 0 0 0 0-1.06l-4.25-4.25a.75.75 0 0 0-1.06 1.06L7.065 6l-3.72 3.72z"
              ></path>
            </svg>
          </div>
        </TakeCareerBannerContent>
      </TakeCareerBanner>
      <ResumeCareerContentList/>
    </div>
  );
}

export default ResumeCareer;
