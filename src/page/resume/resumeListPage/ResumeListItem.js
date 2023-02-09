import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { resumeApi } from "../../../api";
import { ResumeItemWrapper } from "./ResumeList";

const ResumeItemBadge = styled.div`
  padding-left: 18px;
  padding-top: 15px;
  display: flex;
  flex-wrap: wrap;
  grid-gap: 5px;
  gap: 5px;
`;
const ResumeItemTitle = styled.div`
  padding: 6px 20px;
  font-size: 16px;
  font-weight: 500;
  letter-spacing: normal;
  text-align: left;
  h3 {
    font-size: 18px;
    font-weight: 600;
    line-height: 1.33;
    max-height: 46px;
    max-width: 100%;
    letter-spacing: normal;
    text-align: left;
    color: #333;
    overflow: hidden;
    word-break: break-all;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    border: none;
  }
  p {
    color: #999;
    margin-top: 5px;
  }
`;
const ResumeItemStatus = styled.div`
  position: absolute;
  bottom: 0;
  height: 41px;
  width: 100%;
  display: flex;
  flex-direction: row;
  padding: 0 12px 0 20px;
  align-items: center;
  border-top: 1px solid #e0e0e0;
  > span {
    font-size: 16px;
    font-weight: 600;
    line-height: 20px;
    letter-spacing: normal;
    text-align: left;
  }
`;
const ResumeItemLanguage = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 2px;
  border: 1px solid #333;
  text-align: center;
  font-size: 12px;
  line-height: 20px;
  font-weight: 600;
  margin-right: 10px;
`;
const ResumeItemMenu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  > button {
    font-size: 24px;
    color: #76797e;
    height: 100%;
    width: 24px;
  }
`;
const ResumeItemMenuModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1200;
`;
const ResumeMenuDropDown = styled.div`
  z-index: 1400;
  position: absolute;
  top: 36px;
  right: 0;
  display: flex;
  flex-direction: column;
  min-width: 160px;
  box-shadow: 0 2px 4px rgb(0 0 0 / 10%);
  border: 1px solid #ececec;
  border-radius: 4px;
  background-color: #fff;
  padding: 10px 5px;
  > button {
    height: 26px;
    border: none;
    color: #333;
    text-align: left;
    padding: 3px 15px;
    font-size: 14px;
  }
  > button:last-child {
    color: #fe415c;
  }
  > button:hover {
    border-radius: 3px;
    background: #f2f4f7;
  }
`;

function ResumeListItem({ resumeItem,refreshResumeList }) {
  const resumeMenuData = ["이력서 이름 변경", "사본 만들기", "다운로드", "이력서 삭제"];
  const [menuModalOn, setMenuModalOn] = useState(false);
  const navigate = useNavigate();
  const menuHandling = (e) => {
    e.stopPropagation();
    console.log("됨");
    setMenuModalOn(!menuModalOn);
  };
  const deleteResume = (e)=>{
    e.stopPropagation();
    console.log('삭!')
    resumeApi.removeResume(resumeItem.resumeId)
    .then((Response)=>{
      console.log(Response.data)
      if(Response.data.isSuccess){
        refreshResumeList();
      }
    }).catch((Error)=>{
      console.log(Error)
    })
  }
  return (
    <ResumeItemWrapper
      onClick={() => {
        navigate(`/resume/${resumeItem.resumeId}`);
      }}
    >
      <ResumeItemBadge />
      <ResumeItemTitle>
        {/* 제목의 경우 작성중, 작성완료 상태에 따라 글자 색 변환 */}
        <h3>{resumeItem.resumeTitle}</h3>
        <p>{resumeItem.updatedAt}</p>
      </ResumeItemTitle>
      <ResumeItemStatus>
        <ResumeItemLanguage>한{/* 한 EN あ  */}</ResumeItemLanguage>
        {/* 작성중 작성완료 상태에 따라 글자 색 변환 */}
        <span>{resumeItem.resumeCompletion}</span>
        <ResumeItemMenu>
          <button type="button" onClick={(e) => menuHandling(e)}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="https://www.w3.org/2000/svg">
              <path d="M10 6C10 7.104 10.896 8 12 8C13.104 8 14 7.104 14 6C14 4.896 13.104 4 12 4C10.896 4 10 4.896 10 6Z" fill="#767676"></path>
              <path d="M12 14C10.896 14 10 13.104 10 12C10 10.896 10.896 10 12 10C13.104 10 14 10.896 14 12C14 13.104 13.104 14 12 14Z" fill="#767676"></path>
              <path d="M12 20C10.896 20 10 19.104 10 18C10 16.896 10.896 16 12 16C13.104 16 14 16.896 14 18C14 19.104 13.104 20 12 20Z" fill="#767676"></path>
            </svg>
          </button>
          {menuModalOn && (
            <>
              <ResumeItemMenuModalOverlay onClick={(e) => menuHandling(e)} />
              <ResumeMenuDropDown>
                {resumeMenuData.map((data, i) => {
                  if (i < 3) {
                    return (
                      <button type="button" key={data}>{data}</button>
                    );
                  } else{
                    return (
                      <button type="button" key={data} onClick={(e) => {
                        deleteResume(e)
                      }}>
                        {data}
                      </button>
                    );
                  }
                })}
              </ResumeMenuDropDown>
            </>
          )}
        </ResumeItemMenu>
      </ResumeItemStatus>
    </ResumeItemWrapper>
  );
}

export default ResumeListItem;
