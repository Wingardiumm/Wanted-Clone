import axios from "axios";
import React, { useEffect, useState } from "react";
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
    const [recruitmentList, setRecruitmentList] = useState();
  useEffect(()=>{
    const jwt = localStorage.getItem('jwt')
    console.log(jwt)
    axios
    .get("https://dev.risingserver13forever.shop/app/recruitments")
    .then((Response) => {
      console.log(Response.data);
      if(Response.data.isSuccess){
        setRecruitmentList(Response.data.result)
        console.log(recruitmentList)
      } 
    })
    .catch((Error) => {
      console.log(Error);
    });
  },[])
  return (
    <JobDetailPageEmploymentListWrapper>
      <h5>(이름) 님, 이 포지션을 찾고 계셨나요?</h5>
    <JobList recruitmentList={recruitmentList}/>
    </JobDetailPageEmploymentListWrapper>
  );
}

export default JobDetailPageEmployList;
