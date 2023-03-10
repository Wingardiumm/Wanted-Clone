import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import graph from "../../../media/graph.png";
import TypeTestBanner from "../../main/banner/TypeTestBanner";
import MyWantedRecommendedList from "./MyWantedRecommendedList";

const MyPageContentWrapper = styled.div`
  flex: 1 1 75%;
  display: flex;
  flex-direction: column;
`;
const MyWantedContentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  border: 1px solid #e1e2e3;
  width: 100%;
  background-color: white;
  padding: 26px 0 34px;
  justify-content: flex-start;
  margin-bottom: 20px;
  .current-resume-title {
    font-size: 18px;
    padding: 0px 32px 26px;
    color: #333;
    font-weight: 550;
  }
  .current-resume-count {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
  }
  .profile-graph {
    position: relative;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    img {
      border-radius: 10px;
      margin-bottom: 30px;
    }
    p {
      font-size: 16px;
    }
  }
  >div:last-of-type{
    border: none;
    padding-bottom: 0;
  }
`;
const CurrentResumeCountLink = styled(Link)`
  color: #333;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-right: 1px solid #e1e2e3;
  span {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 38px;
  }
  p {
    font-size: 16px;
  }
`;
const MatchUpResumeBtnWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  button {
    min-width: 200px;
    padding: 10px;
    border: 1px solid #36f;
    border-radius: 25px;
    color: #36f;
    padding: 2px 24px 0;
    height: 48px;
    margin-top: 16px;
    font-size: 16px;
    line-height: 1.1;
    font-weight: 700;
    vertical-align: middle;
    letter-spacing: -1px;
    &:hover {
      color: #002fdb;
      border-color: #002fdb;
    }
  }
`;
const WantedRecommendPosition = styled.div`
  padding: 26px 30px 30px;
  margin: 0;
  border-bottom: 1px solid #e1e2e3;
  .recommended-position-tilte {
    font-size: 18px;
    /* padding: 0px 32px 26px; */
    color: #333;
    font-weight: 550;
  }
  .recommended-position-content {
    padding-top: 10px;
  }

  ${MatchUpResumeBtnWrapper}{
    justify-content: flex-end;
  }
`;
function MyPageContent({userData}) {
  const profileListData = [
    {
      id: 1,
      title: "????????? ??????",
      btn: "??????????????? ????????????",
      content: "????????? ???????????? ??????, 1??? ?????? ????????????????",
    },
    {
      id: 2,
      title: "MY ??????",
      btn: "????????? ????????????",
      content: "????????? ???????????? ????????? ??????????????????????????",
    },
    {
      id: 3,
      title: "??????",
      btn: "?????? ????????????",
      content: "?????? ????????? ?????? ????????? ??? ?????? ??????????????? ????????????, ????????????, ???????????????",
    },
  ];

  return (
    <MyPageContentWrapper>
      <MyWantedContentsWrapper>
        <div className="current-resume-title">?????? ??????</div>
        <div className="current-resume-count">
          <CurrentResumeCountLink to={"/"}>
            <span>{userData?.numberOfApplies}</span>
            <p>?????? ??????</p>
          </CurrentResumeCountLink>
          <CurrentResumeCountLink to={"/"}>
            <span>{userData?.numberOfPassApplication}</span>
            <p>?????? ??????</p>
          </CurrentResumeCountLink>
          <CurrentResumeCountLink to={"/"}>
            <span>{userData?.numberOfPassFinally}</span>
            <p>?????? ??????</p>
          </CurrentResumeCountLink>
          <CurrentResumeCountLink style={{ border: "none" }} to={"/"}>
            <span>{userData?.numberOfFailure}</span>
            <p>?????????</p>
          </CurrentResumeCountLink>
        </div>
      </MyWantedContentsWrapper>
      <MyWantedContentsWrapper>
        <div className="current-resume-title">?????????</div>
        <div className="profile-graph">
          <img src={graph} />
          <p>400?????? ???????????????, ?????? ????????? ?????? ???????????? ???????????????!</p>
        </div>
        <MatchUpResumeBtnWrapper>
          <button type="button">
            <span>????????? ????????? ????????? ????????? ????????????</span>
          </button>
        </MatchUpResumeBtnWrapper>
      </MyWantedContentsWrapper>
      <TypeTestBanner />
      <MyWantedContentsWrapper>
        <WantedRecommendPosition>
          <div className="recommended-position-tilte">????????? ?????? ?????????</div>
          <MyWantedRecommendedList />
        </WantedRecommendPosition>
        <WantedRecommendPosition>
          <div className="recommended-position-tilte">?????????</div>
        </WantedRecommendPosition>
        {profileListData.map((data) => (
          <WantedRecommendPosition key={data.id}>
            <div className="recommended-position-tilte">{data.title}</div>
            <p className="recommended-position-content">{data.content}</p>
            <MatchUpResumeBtnWrapper>
              <button className="mypage-btn" type="button">
                <span>{data.btn}</span>
              </button>
            </MatchUpResumeBtnWrapper>
          </WantedRecommendPosition>
        ))}
      </MyWantedContentsWrapper>
    </MyPageContentWrapper>
  );
}

export default MyPageContent;
