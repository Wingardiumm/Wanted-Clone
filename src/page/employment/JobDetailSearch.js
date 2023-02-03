import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import JobFilterTagSlider from "./JobFilterTagSlider";

const JobDetailFilterWrapper = styled.div`
  margin-bottom: 25px;
  padding-top: 10px;
  div {
    height: 40px;
  }
  ${(props) =>
    props.scrollSwitch &&
    css`
      position: fixed;
      left: 0;
      right: 0;
      top: 50px;
      border-bottom: 1px solid #36f;
      background: #fff;
      z-index: 2;
      padding: 20px 0 25px !important;
    `}
  >hr {
    max-width: 1060px;
    margin: 25px auto;
    background-color: rgba(236, 236, 236, 0.7);
    height: 1px;
    border: none;
  }
`;
const JobFilterBtn = styled.button`
  border-radius: 2px;
  border: 1px solid #e1e2e3;
  background: #fff;
  color: #333;
  font-size: 13px;
  font-weight: 400;
  padding: 9px 15px;
  display: inline-flex;
  align-items: center;
  @media (min-width: 1200px) {
    margin-bottom: 10px;
  }
  &:hover {
    background-color: #f9f9f9;
  }
`;
const StyledJobFilterBtn = styled(JobFilterBtn)`
  align-items: center;
  display: inline-flex;
  height: 40px;
  padding: 0 15px !important;
  margin-bottom: 0;
  border-radius: 5px;
  border: 1px solid #ececec;
  position: relative;
  > span {
    font-size: 14px;
    font-weight: 400;
    letter-spacing: normal;
    color: #333;
    white-space: nowrap;
  }
  > span:first-child {
    margin-right: 15px;
  }
  > span:last-of-type {
    color: #36f !important;
    font-weight: 600;
    margin-right: 0;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  > svg {
    margin-left: 8px;
    transition: 0.3s;
  }
`;
const JobFilter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  ${(props) =>
    props.scrollSwitch &&
    css`
      max-width: 1060px;
      margin: 0 auto;
      @media (min-width: 1200px) {
        width: 87.72%;
      }
    `}

  > div {
    display: flex;
    align-items: center;
    flex: auto;
    justify-content: left;
    max-width: none;
    height: 40px;
    ${StyledJobFilterBtn}+div {
      margin-left: 10px;
    }
  }
`;
const JobFilterDropDwonSelectWrapper = styled.div`
  position: relative;
  margin-right: 10px;
`;
const JobFilterSelectBox = styled.div`
  position: relative;
  width: 104px;
  > button {
    border-radius: 4px;
    border: 1px solid #ececec;
    background-color: #fff;
    font-size: 14px;
    font-weight: 400;
    height: 40px;
    letter-spacing: normal;
    color: #000;
    padding: 0 16px;
    position: relative;
    width: 100%;
    text-align: left;
    display: flex;
    justify-content: space-between;
    align-items: center;
    > svg {
      transition: 0.3s;

      transform: ${(props) => props.selectBoxOn && "rotate(180deg)"};
    }
  }
  > ul {
    position: absolute;
    top: 39px;
    left: 0;
    right: 0;
    z-index: 98;
    background: #fff;
    border: 1px solid #ececec;
    border-radius: 0 0 4px 4px;
    > li > button {
      width: 100%;
      font-size: 14px;
      font-weight: 400;
      font-stretch: normal;
      font-style: normal;
      line-height: 40px;
      letter-spacing: normal;
      color: #333;
      text-align: left;
      padding: 0 0 0 16px;
      border-bottom: 1px solid #ececec;
    }
  }
`;
function JobDetailSearch() {
  const [scrollSwitch, setScrollSwitch] = useState(false);
  const handleScroll = () => {
    if (window.scrollY >= 300) {
      setScrollSwitch(true);
    }
    if (window.scrollY < 100) {
      setScrollSwitch(false);
    }
  };
  useEffect(() => {
    const timer = setInterval(() => {
      window.addEventListener("scroll", handleScroll);
    }, 100);
    return () => {
      clearInterval(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const sortListData = ["최신순", "보상금순", "인기순"];
  const [selectBoxOn, setSelectBoxOn] = useState(false);
  return (
    <div>
      <JobDetailFilterWrapper scrollSwitch={scrollSwitch}>
        <JobFilter scrollSwitch={scrollSwitch}>
          <div>
            <StyledJobFilterBtn>
              <span>지역</span>
              <span>지역 외</span>
            </StyledJobFilterBtn>
            <JobFilterDropDwonSelectWrapper>
              <StyledJobFilterBtn>
                <span>경력</span>
                <span>신입</span>
                <svg width="8" height="7" viewBox="0 0 8 7" fill="none" xmlns="https://www.w3.org/2000/svg">
                  <path
                    d="M7.33334 0.494202C7.85691 0.494202 8.14842 1.1611 7.82205 1.61224L4.50038 6.20371C4.25071 6.54882 3.77503 6.54971 3.5243 6.20554L0.179295 1.61408C-0.149094 1.16332 0.14211 0.494202 0.666672 0.494202H7.33334Z"
                    fill="#333"
                  ></path>
                </svg>
              </StyledJobFilterBtn>
            </JobFilterDropDwonSelectWrapper>
            <JobFilterDropDwonSelectWrapper>
              <StyledJobFilterBtn>
                <span>기술스택</span>
                <span />
                <svg width="8" height="7" viewBox="0 0 8 7" fill="none" xmlns="https://www.w3.org/2000/svg">
                  <path
                    d="M7.33334 0.494202C7.85691 0.494202 8.14842 1.1611 7.82205 1.61224L4.50038 6.20371C4.25071 6.54882 3.77503 6.54971 3.5243 6.20554L0.179295 1.61408C-0.149094 1.16332 0.14211 0.494202 0.666672 0.494202H7.33334Z"
                    fill="#333"
                  ></path>
                </svg>
              </StyledJobFilterBtn>
            </JobFilterDropDwonSelectWrapper>
            <div style={{ marginLeft: "auto" }}>
              <JobFilterSelectBox selectBoxOn={selectBoxOn}>
                <button onClick={() => setSelectBoxOn(!selectBoxOn)}>
                  {/* 정렬순 */}
                  응답률순
                  <svg width="8" height="7" viewBox="0 0 8 7" fill="none" xmlns="https://www.w3.org/2000/svg">
                    <path
                      d="M7.33334 0.494202C7.85691 0.494202 8.14842 1.1611 7.82205 1.61224L4.50038 6.20371C4.25071 6.54882 3.77503 6.54971 3.5243 6.20554L0.179295 1.61408C-0.149094 1.16332 0.14211 0.494202 0.666672 0.494202H7.33334Z"
                      fill="#333"
                    ></path>
                  </svg>
                </button>
                {selectBoxOn && (
                  <ul>
                    {sortListData.map((data) => (
                      <li key={data}>
                        <button>{data}</button>
                      </li>
                    ))}
                  </ul>
                )}
              </JobFilterSelectBox>
            </div>
          </div>
        </JobFilter>
        <hr />
        <JobFilterTagSlider />
      </JobDetailFilterWrapper>
    </div>
  );
}

export default JobDetailSearch;
