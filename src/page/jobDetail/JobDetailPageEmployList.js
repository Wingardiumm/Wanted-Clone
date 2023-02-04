import React from "react";
import styled from "styled-components";
import JobList from "../employment/JobList";

const JobDetailPageEmploymentListWrapper = styled.div`
  margin: 80px 0 0;
  h5 {
    margin: 0 0 20px;
    font-size: 20px;
    font-weight: 600;
    color: #333;
    line-height: normal;
  }
`;
function JobDetailPageEmployList() {
  return (
    <JobDetailPageEmploymentListWrapper>
      <h5>(이름) 님, 이 포지션을 찾고 계셨나요?</h5>
    <JobList/>
    </JobDetailPageEmploymentListWrapper>
  );
}

export default JobDetailPageEmployList;
