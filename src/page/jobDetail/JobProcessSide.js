import React from "react";
import styled from "styled-components";
import { BsShare } from "react-icons/bs";
import { BookmarkNoFilled2 } from "../main/section/svg/svgComponent";
import QuestionMarkBtn from "../../component/QuestionMarkBtn";

const JobProcessContainer = styled.aside`
  width: 340px;
  /* right: calc((100% - 1060px) / 2); */
  margin-left: 20px;
  display: block;
  position: sticky;
  top: 70px;
`;
const JobProcessWrapper = styled.div`
  > header {
    width: 340px;
    border: 1px solid #e1e2e3;
    background-color: #fff;
    padding: 24px 20px;
    border-radius: 3px;
  }
`;
const RewardContainer = styled.div`
  > h3 {
    font-size: 15px;
    font-weight: 600;
    letter-spacing: normal;
    text-align: left;
    color: #333;
  }
  > ul {
    overflow: hidden;
    margin: 24px 0;
    > li {
      float: left;
      width: 50%;
      letter-spacing: normal;
      text-align: left;
      > h4 {
        font-size: 14px;
        font-weight: 600;
        color: #999;
        margin-bottom: 8px;
        line-height: 1.2;
      }
      > p {
        font-size: 15px;
        color: #333;
        font-weight: 600;
      }
    }
  }
`;
const JobProcessShareBtn = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  width: 40px;
  height: 40px;
  background: #fff;
  border-radius: 20px;
  border: 1px solid #e1e2e3;
  display: flex;
  align-items: center;
  -ms-flex-pack: center;
  justify-content: center;
  svg {
    color: #3366ff;
    position: relative;
    left: -1px;
    width: 18px;
    height: 18px;
  }
`;
const StyledBookmarkBtn = styled.button`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50px;
  border-radius: 25px;
  background-color: #fff;
  border: 1px solid #36f;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: normal;
  color: #36f;
  text-align: center;
  margin-bottom: 10px;
  svg {
    margin-right: 8px;
  }
`;
const JobProcessApplyBtn = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-content: stretch;
  align-items: flex-start;
`;
const ApplyButtonWrapper = styled.div`
  flex: 1 1;
  align-self: auto;
  > button {
    width: 100%;
    height: 50px;
    border-radius: 25px;
    background-color: #36f;
    font-size: 16px;
    font-weight: 600;
    letter-spacing: normal;
    color: #fff;
    text-align: center;
  }
`;
const JobProcessReactionWrapper = styled.div`
  margin: 24px 0 0;
  height: 30px;
  .reaction-like {
    height: 30px;
    border-radius: 15px;
    border: 1px solid #e1e2e3;
    margin-right: 12px;
    padding: 0 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    grid-gap: 5px;
    gap: 5px;
    span {
      font-size: 14px;
      font-weight: 600;
      line-height: 30px;
      letter-spacing: normal;
      text-align: left;
      color: #333;
      position: relative;
      top: -1.5px;
    }
  }
`;
const JobProcessAiBannerWrapper = styled.div`
  align-items: stretch;
  margin-top: 14px;
  background-color: #f3f5f8;
  padding: 11px 15px 10px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  border-radius: 4px;
  svg {
    position: relative;
    top: -5px;
  }
  .ai-banner-title {
    span {
      font-weight: 600;
      vertical-align: -1px;
      img {
        margin-bottom: 4px !important;
      }
    }
  }
  .ai-banner-description {
    line-height: 1.5;
    color: #999;
  }
`;
const AiBannerItemContainer = styled.div`
  order: 0;
  flex: 0 1 auto;
  align-self: auto;
  font-size: 12px;
  color: #111;
  * {
    margin-right: 5px;
    vertical-align: middle;
  }
`;
function JobProcessSide({ scrollSwitch }) {
  return (
    <JobProcessContainer scrollSwitch={scrollSwitch}>
      <JobProcessWrapper>
        <header>
          <RewardContainer>
            <h3>채용보상금</h3>
            <ul>
              <li>
                <h4>추천인</h4>
                <p>500,000</p>
              </li>
              <li>
                <h4>지원자</h4>
                <p>500,000</p>
              </li>
            </ul>
            {/* 공유하기 버튼 */}
            <JobProcessShareBtn>
              <BsShare />
            </JobProcessShareBtn>
          </RewardContainer>
          <StyledBookmarkBtn>
            {/* 북마크 svg */}
            <BookmarkNoFilled2 />
            {/* 북마크 체크시 '북마크 완료' 로 바꿈 및 북마크 완료 모달 등장 + 북마크 비어있는거 채워짐*/}
            북마크하기
          </StyledBookmarkBtn>
          <JobProcessApplyBtn>
            <ApplyButtonWrapper>
              <button type="button">지원하기</button>
            </ApplyButtonWrapper>
          </JobProcessApplyBtn>
          <JobProcessReactionWrapper>
            <button type="button" className="reaction-like">
              <svg width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="https://www.w3.org/2000/svg">
                <path
                  d="M1.98852 1.98283C3.58579 0.392081 6.16023 0.340767 7.82069 1.82903L7.98362 1.98299L8.99998 2.995L10.0165 1.98299C11.6131 0.392035 14.1885 0.340714 15.848 1.82888L16.0108 1.98283C17.4969 3.46279 17.6616 5.81633 16.4236 7.48727C16.177 7.82009 15.7073 7.88999 15.3745 7.64341C15.0416 7.39682 14.9717 6.92712 15.2183 6.5943C16.0151 5.51885 15.9087 3.99811 14.9522 3.0455C13.9322 2.02903 12.2842 1.98668 11.2119 2.91844L11.0754 3.0455L9.52949 4.58599C9.26341 4.85114 8.84795 4.87524 8.55471 4.6583L8.47068 4.58599L6.92497 3.04566C5.85974 1.98478 4.11224 1.98478 3.04717 3.0455C2.02851 4.06061 1.98607 5.69874 2.92183 6.76832L3.04943 6.90451L8.79883 12.683C8.84342 12.7274 8.90729 12.7516 9.01638 12.7499C9.06686 12.751 9.11206 12.7406 9.14962 12.7206L9.19993 12.6836L13.72 8.16933C14.0131 7.87662 14.4879 7.87693 14.7807 8.17001C15.0467 8.43645 15.0707 8.85313 14.8526 9.1466L14.78 9.23067L10.2593 13.7455C9.91801 14.0856 9.45787 14.2599 9.01633 14.2496C8.59436 14.2587 8.18389 14.1221 7.8565 13.8511L7.73776 13.7432L1.9882 7.9646C0.337212 6.31836 0.337212 3.62839 1.98852 1.98283Z"
                  fill="#ccc"
                ></path>
              </svg>
              {/* 하트 누르면 변동.. 되려나? 그리고 누르면 옆에 누른 사람 정보 나오는데 이거는 차차.. */}
              <span>0</span>
            </button>
          </JobProcessReactionWrapper>
        </header>
      </JobProcessWrapper>
      <JobProcessAiBannerWrapper>
        <AiBannerItemContainer className="ai-banner-title">
          <img src="https://static.wanted.co.kr/images/ai/logo-wantedai.png" width="70" alt="logo-wantedai" />
          <span>합격예측</span>
        </AiBannerItemContainer>
        <AiBannerItemContainer className="ai-banner-description">
          서류합격률이 궁금하다면?
          <QuestionMarkBtn />
        </AiBannerItemContainer>
      </JobProcessAiBannerWrapper>
    </JobProcessContainer>
  );
}

export default JobProcessSide;
