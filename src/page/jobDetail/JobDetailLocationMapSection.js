import React, { useEffect } from "react";
import styled from "styled-components";
import KakaoMap from "./KakaoMap";

const JobDetailMapWrapper = styled.section`
  margin: 40px 0;
  margin-top: 20px;
  > div {
    margin-bottom: 20px;
    span {
      display: inline-block;
      font-size: 16px;
      font-weight: 600;
      vertical-align: text-top;
    }
    > span:first-child {
      color: #999;
      width: 80px;
      display: inline-block;
    }
    > span:last-of-type {
      color: #333;
      width: calc(100% - 80px);
    }
  }
`;

function JobDetailLocationMapSection({detailData}) {
  return (
    <JobDetailMapWrapper>
      <div>
        <span>마감일</span>
        <span>{detailData?.deadLine}</span>
      </div>
      <div>
        <span>근무지역</span>
        <span>{detailData?.serviceArea}</span>
      </div>
      <KakaoMap detailData={detailData}/>
    </JobDetailMapWrapper>
  );
}

export default JobDetailLocationMapSection;

