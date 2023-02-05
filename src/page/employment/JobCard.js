import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import JobTooltipLabel from "../../component/JobTooltipLabel";
import { BookmarkNoFilled } from "../main/section/svg/svgComponent";

const JobCardContainer = styled.div`
  header {
    padding-bottom: 75%;
    position: relative;
    background-size: cover;
    background-position: 50%;
    border-radius: 4px;
    box-shadow: inset 0 0 0 1px rgb(0 0 0 / 10%);
    button {
      width: 60px;
      height: 30px;
      border-radius: 3px;
      position: absolute;
      background: rgba(0, 0, 0, 0.3);
      color: #fff;
      font-size: 12px;
      font-weight: 400;
      justify-content: center;
      align-items: center;
      display: flex;
    }
    .job-card-button {
      background: none;
      padding: 8px 6px;
      width: 42px;
      height: 42px;
      top: 0;
      right: 0;
      flex-direction: row;
      z-index: 1;
      justify-content: flex-end;
      align-items: flex-start;
    }
  }
  a {
    display: block;
  }
  .job-card-body {
    padding: 14px 0;
  }
  .job-card-position {
    position: relative;
    color: #333;
    font-size: 18px;
    font-weight: 600;
    line-height: 1.2;
    max-height: 2.4em;
    overflow: hidden;
    text-align: left;
    word-break: break-word;
  }
  .job-card-company {
    font-weight: 400;
    color: #999;
  }
  .job-card-reward {
    margin-top: 10px;
    color: #333;
    font-size: 14px;
    font-weight: 550;
    text-align: left;
    word-break: break-word;
    width: 100%;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
`;

function JobCard({jobList}) {
  return (
    <JobCardContainer>
      {" "}
      <Link to={`/employment/${jobList.compensationApplicant}`}>
        <header
          style={{
            backgroundImage: `url(${jobList.companyRepresentativeImg})`,
          }}
        >
          <button type="button" className="job-card-button">
            <BookmarkNoFilled />
          </button>
        </header>
      <div className="job-card-body">
        <div className="job-card-position">{jobList.recruitmentPositionName}</div>
        <div>{jobList.companyName}</div>
        <div>
          {/* 응답률 */}
          <JobTooltipLabel responseRateWord={jobList.companyResponseRateWord}/>
        </div>
        <div className="job-card-company">
          {jobList.region}
          <span style={{ margin: "0 3px" }}>·</span>
          <span>{jobList.country}</span>
        </div>
        <div className="job-card-reward">채용보상금 1,000,000원</div>
      </div>
      </Link>
    </JobCardContainer>
  );
}

export default JobCard;