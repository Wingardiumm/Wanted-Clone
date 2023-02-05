import React from "react";
import styled from "styled-components";
import JobDetailContent from "./JobDetailContent";
import JobDetailPageEmployList from "./JobDetailPageEmployList";

const JobDetailContainer = styled.div`
  background: #fff;
`;
const JobDetailPageWrapper = styled.div`
  margin: 0 auto;
  padding: 20px 0 80px;
  max-width: 1060px;
  position: relative;
  @media (min-width: 1200px) {
    width: 87.72%;
  }
  @media (min-width: 768px) and (max-width: 991px) {
    width: 90%;
  }
`;
const JobDetailContentWrapper = styled.div`
  position: relative;
`;

function JobDetailPage() {
  return (
    <JobDetailContainer>
      <JobDetailPageWrapper>
        <JobDetailContentWrapper>
          {/* 상세페이지 내용 */}
          <JobDetailContent />
        </JobDetailContentWrapper>
        {/* 상세페이지 채용공고 리스트*/}
      <JobDetailPageEmployList />
      </JobDetailPageWrapper>
    </JobDetailContainer>
  );
}

export default JobDetailPage;
