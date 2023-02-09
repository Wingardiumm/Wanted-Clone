import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { recruitmentApi } from "../../api";
import JobContentCompanyInfo from "./JobContentCompanyInfo";
import JobContentDescriptionSection from "./JobContentDescriptionSection";
import JobContentHeaderSection from "./JobContentHeaderSection";
import JobDetailImgSection from "./JobDetailImgSection";
import JobDetailWarningSection from "./JobDetailWarningSection";
import JobProcessSide from "./JobProcessSide";

const JobContentWrapper = styled.div`
  display: inline-block;
  position: relative;
  width: calc(100% - 360px);
  vertical-align: top;
`;

function JobDetailContent() {
  const [detailData, setDetailData] = useState();

  const param = useParams();
  useEffect(() => {
    const jwt = localStorage.getItem("jwt");
    console.log(param.id);
    // 이거 다시 살펴보기! 
    recruitmentApi.getRecruitmentDetail(param.id,jwt)
      .then((Response) => {
        setDetailData(Response.data.result[0]);
        console.log(Response.data, detailData);
      })
      .catch((Error) => {
        console.log(Error);
      });
  }, []);

  return (
    <>
      <div style={{ position: "relative", display:"flex"}}>
        <JobContentWrapper
        // ref={container}
        > 
          <JobDetailImgSection detailData={detailData} />
          <JobContentHeaderSection detailData={detailData} />
          <JobContentDescriptionSection detailData={detailData} />
          <JobContentCompanyInfo detailData={detailData} />
          <JobDetailWarningSection detailData={detailData} />
        </JobContentWrapper>
        <div>
          <JobProcessSide detailData={detailData} />
        </div>
      </div>
    </>
  );
}

export default JobDetailContent;
