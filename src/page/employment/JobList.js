import React from "react";
import styled from "styled-components";
import JobCard from "./JobCard";
// import {}

const JobListContainer = styled.div`
  > ul {
    margin: -10px;
    padding: 0;
    li {
      width: 25%;
      padding: 10px;
      list-style: none;
      display: inline-block;
      vertical-align: top;
    }
  }
`;

function JobList() {
  return (
    <JobListContainer>
      <ul>
        <li>
          <JobCard/>
        </li>
      </ul>
    </JobListContainer>
  );
}

export default JobList;
