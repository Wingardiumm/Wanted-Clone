import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { loginApi, recruitmentApi } from "../../api";
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
    const [name, setName] = useState();
  useEffect(()=>{
    const userId= localStorage.getItem('user_id')
    recruitmentApi.getRecruitmentList()
    .then((Response) => {
      console.log(Response.data);
      if(Response.data.isSuccess){
        setRecruitmentList(Response.data.result)
      } 
    })
    .catch((Error) => {
      console.log(Error);
    });
    loginApi.users(userId).then((Response) => {
      console.log(Response.data);
      if(Response.data.isSuccess){
        setName(Response.data.result.name)
      } 
    })
    .catch((Error) => {
      console.log(Error);
    });
  },[])
  return (
    <JobDetailPageEmploymentListWrapper>
      <h5>{name} 님, 이 포지션을 찾고 계셨나요?</h5>
    <JobList recruitmentList={recruitmentList}/>
    </JobDetailPageEmploymentListWrapper>
  );
}

export default JobDetailPageEmployList;
