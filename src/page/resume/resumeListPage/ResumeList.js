import React, { useState } from "react";
import styled from "styled-components";

const ResumeListWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: calc(100% + 20px);
  flex-wrap: wrap;
`;
const AddItem = styled.div`
  background-color: #36f;
`;
const FileUpload = styled.div`
  background-color: #e1e2e3;
`;
const ResumeItemWrapper = styled.div`
  height: 190px;
  width: calc(25% - 20px);
  margin-bottom: 20px;
  margin-right: 20px;
  position: relative;
  border: 1px solid #dbdbdb;
  background-color: #fff;
  cursor: pointer;
  ${AddItem}, ${FileUpload} {
    cursor: pointer;
    width: 74px;
    height: 74px;
    margin: 0 auto;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const ResumeAddWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  p {
    font-size: 16px;
    font-weight: 600;
    letter-spacing: normal;
    text-align: center;
    color: #333;
    margin: 20px 0 0;
  }
`;
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
function ResumeList() {
  const resumeMenuData = ["이력서 이름 변경", "사본 만들기", "다운로드", "이력서 삭제"];
  const [menuModalOn, setMenuModalOn] = useState(false);
  const menuHandling = () => {
    console.log('됨')
    setMenuModalOn(!menuModalOn);
  };
  return (
    <ResumeListWrapper>
      <ResumeItemWrapper>
        <ResumeAddWrapper>
          <AddItem>
            <svg width="22" height="22" viewBox="0 0 16 16" fill="none" xmlns="https://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12.25 0H0.75C0.335786 0 0 0.335786 0 0.75V12.25C0 12.6642 0.335786 13 0.75 13H3V15.25L3.00685 15.3518C3.05651 15.7178 3.3703 16 3.75 16H15.25L15.3518 15.9932C15.7178 15.9435 16 15.6297 16 15.25V3.75L15.9932 3.64823C15.9435 3.28215 15.6297 3 15.25 3L15.1482 3.00685C14.7822 3.05651 14.5 3.3703 14.5 3.75L14.499 14.499H4.499L4.49975 13H12.25C12.6642 13 13 12.6642 13 12.25V0.75C13 0.335786 12.6642 0 12.25 0ZM11.499 1.5V11.5H1.499V1.5H11.499Z"
                fill="#fff"
              ></path>
            </svg>
          </AddItem>
          <p>새 이력서 작성</p>
        </ResumeAddWrapper>
      </ResumeItemWrapper>
      <ResumeItemWrapper>
        <ResumeAddWrapper>
          <FileUpload>
            <svg xmlns="https://www.w3.org/2000/svg" width="26" height="28" viewBox="0 0 32 34">
              <g fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round">
                <g stroke="#666" strokeWidth="3">
                  <g>
                    <g>
                      <path
                        d="M25.6 20.117L25.6 28.579 0 28.617 0 20.154M12.8.708L12.8 21.108"
                        transform="translate(-543 -398) translate(543 398) translate(3.2 2.55)"
                      ></path>
                      <path d="M18.8 0L12.8 7.083 6.8 0" transform="translate(-543 -398) translate(543 398) translate(3.2 2.55) rotate(-180 12.8 3.542)"></path>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
          </FileUpload>
          <p>새 이력서 작성</p>
        </ResumeAddWrapper>
      </ResumeItemWrapper>
      <ResumeItemWrapper>
        <ResumeItemBadge />
        <ResumeItemTitle>
            {/* 제목의 경우 작성중, 작성완료 상태에 따라 글자 색 변환 */}
          <h3>제목이 들어가겠지요</h3>
          <p>날짜가 들어가겠지요</p>
        </ResumeItemTitle>
        <ResumeItemStatus>
          <ResumeItemLanguage>한{/* 한 EN あ  */}</ResumeItemLanguage>
          {/* 작성중 작성완료 상태에 따라 글자 색 변환 */}
          <span>작성중 or 작성 완료</span>
          <ResumeItemMenu>
            <button onClick={menuHandling}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="https://www.w3.org/2000/svg">
                <path d="M10 6C10 7.104 10.896 8 12 8C13.104 8 14 7.104 14 6C14 4.896 13.104 4 12 4C10.896 4 10 4.896 10 6Z" fill="#767676"></path>
                <path d="M12 14C10.896 14 10 13.104 10 12C10 10.896 10.896 10 12 10C13.104 10 14 10.896 14 12C14 13.104 13.104 14 12 14Z" fill="#767676"></path>
                <path d="M12 20C10.896 20 10 19.104 10 18C10 16.896 10.896 16 12 16C13.104 16 14 16.896 14 18C14 19.104 13.104 20 12 20Z" fill="#767676"></path>
              </svg>
            </button>
            {menuModalOn && (
              <>
                <ResumeItemMenuModalOverlay onClick={menuHandling} />
                <ResumeMenuDropDown>
                  {resumeMenuData.map((data) => (
                    <button type="button" key={data}>
                      {data}
                    </button>
                  ))}
                </ResumeMenuDropDown>
              </>
            )}
          </ResumeItemMenu>
        </ResumeItemStatus>
      </ResumeItemWrapper>
    </ResumeListWrapper>
  );
}

export default ResumeList;
