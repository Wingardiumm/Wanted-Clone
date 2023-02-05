import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import JobTooltipLabel from "../../component/JobTooltipLabel";

const JobHeaderSectionWrapper = styled.section`
  margin: 40px 0 30px;
  > h2 {
    color: #333;
    font-size: 22px;
    font-weight: 600;
    margin: 0 0 10px;
    word-break: keep-all;
    word-wrap: break-word;
  }
  > div {
    > h6 {
      color: #999;
      font-size: 14px;
      font-weight: 600;
      margin: 0;
      display: inline-flex;
      &::after {
        content: "";
        display: block;
        clear: both;
      }
      > a {
        color: #333;
        position: relative;
        width: 100%;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        width: auto;
        line-height: 1.4;
      }
    }
    .job-card-company {
      padding: 0 10px;
      position: relative;
      white-space: nowrap;
      margin-left: 10px;
      color: #999;
      display: inline-block;
      &::before {
        content: "";
        display: block;
        width: 1px;
        height: 12px;
        background: #e1e2e3;
        position: absolute;
        top: 4px;
        left: 0;
      }
    }
  }
`;
const JobTitleTootipContainer = styled.div`
  display: inline-flex;
  white-space: nowrap;
  margin: 0 0 0 10px;
  position: relative;
  top: -1px;
`;
const JobDetailTagWrapper = styled.div`
  margin-top: 20px;
  > ul {
    > li {
      display: inline-block;
      > a {
        display: inline-block;
        margin-right: 6px;
        margin-bottom: 10px;
        padding: 9px 14px;
        font-size: 12px;
        font-weight: 500;
        line-height: 1;
        color: #333;
        background-color: #f3f5f8;
        border-radius: 25px;
      }
    }
  }
`;
function JobContentHeaderSection({detailData}) {
  console.log(detailData)
  return (
    <JobHeaderSectionWrapper>
      <h2> {detailData?.positionName}</h2>
      <div>
        <h6>
          <Link to={"/"}>스누아이랩</Link>
        </h6>
        <JobTitleTootipContainer>
          <JobTooltipLabel />
        </JobTitleTootipContainer>
        <span className="job-card-company">
          서울
          <span style={{ margin: "0 3px" }}>·</span>
          한국
        </span>
      </div>
      <JobDetailTagWrapper>
        <ul>
          <li>
            <Link to={"/"}>#연봉업계평균이상</Link>
          </li>
         
        </ul>
      </JobDetailTagWrapper>
    </JobHeaderSectionWrapper>
  );
}

export default JobContentHeaderSection;
