import React from "react";
import styled from "styled-components";
import EmployMentList from "./EmployMentList";
import JobArticle from "./JobArticle";

const JopListPageWrapper = styled.div`
  background: #fff;
  min-height: calc(100vh - 50px);
`;

function EmploymentPage() {
  return (
    <JopListPageWrapper>
      <JobArticle />
      <EmployMentList/>
    </JopListPageWrapper>
  );
}

export default EmploymentPage;
