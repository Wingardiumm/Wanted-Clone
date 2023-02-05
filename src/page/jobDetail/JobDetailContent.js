import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import JobContentCompanyInfo from "./JobContentCompanyInfo";
import JobContentDescriptionSection from "./JobContentDescriptionSection";
import JobContentHeaderSection from "./JobContentHeaderSection";
import JobDetailImgSection from "./JobDetailImgSection";
import JobDetailWarningSection from "./JobDetailWarningSection";
import JobProcessSide from "./JobProcessSide";

const JobContentWrapper = styled.div`
  display: inline-block;
  width: calc(100% - 360px);
  vertical-align: top;
`;

function JobDetailContent() {
  const [scrollSwitch, setScrollSwitch] = useState(false);
  const [detailData, setDetailData] = useState();
  // const container = useRef(null);
  // const handleScroll = () => {
  //   if (window.scrollY >= 1800) {
  //     setScrollSwitch(true);
  //   }else{
  //     setScrollSwitch(false)
  //   }
  //   console.log(window.scrollY)
  // };
  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     window.addEventListener("scroll", handleScroll);
  //   }, 100);
  //   return () => {
  //     clearInterval(timer);
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);
  
  const param = useParams();
  useEffect(() => {
    const jwt = localStorage.getItem("jwt");
    console.log(param.id);
    axios
      .get(`https://dev.risingserver13forever.shop/app/recruitments/5`, {
        headers: {
          "x-access-token": jwt,
        },
      })
      .then((Response) => {
        setDetailData(Response.data.result[0]) 
        console.log(Response.data.result, detailData);
      })
      .catch((Error) => {
        console.log(Error);
      });
  }, []);

  return (
    <div>
      <JobContentWrapper
      // ref={container}
      >
        <JobDetailImgSection detailData={detailData}/>
        <JobContentHeaderSection detailData={detailData}/>
        <JobContentDescriptionSection detailData={detailData}/>
        <JobContentCompanyInfo detailData={detailData}/>
        <JobDetailWarningSection detailData={detailData}/>
      </JobContentWrapper>
      <JobProcessSide scrollSwitch={scrollSwitch} detailData={detailData}/>
    </div>
  );
}

export default JobDetailContent;
