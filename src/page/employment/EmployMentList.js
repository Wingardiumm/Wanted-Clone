import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { BookMarArrowkSvg, BookMarkSvg } from "../main/section/svg/svgComponent";
import JobActiveEmploymentSlide from "./JobActiveEmploymentSlide";
import JobDetailSearch from "./JobDetailSearch";
import JobList from "./JobList";
import {recruitmentApi} from "../../api"

const JobListWrapper = styled.div`
  margin: 0 auto;
  padding: 20px 0 80px;
  position: relative;
  max-width: 1060px;
  height: 3000px;
  > hr {
    width: 100vw;
    margin-bottom: 38px;
    margin-left: calc(-50vw + 50%);
    background-color: #e1e2e3;
    height: 1px;
    border: none;
    flex-shrink: 0;
  }
`;

const JobListBookmarkSection = styled.div`
  margin-bottom: 12px;
  button {
    display: flex;
    align-items: center;
    line-height: 24px;
    color: #36f;
    > span {
      font-size: 15px;
      font-weight: 600;
      font-stretch: normal;
      font-style: normal;
      line-height: 24px;
      letter-spacing: normal;
    }
    > svg {
      width: 11px;
      height: 16px;
      margin-right: 8px;
    }
    > svg:last-of-type {
      width: 10px;
      margin: 2px 0 0 2px;
    }
  }
`;

function EmployMentList() {
  const [recruitmentList, setRecruitmentList] = useState();
  
  useEffect(()=>{
    const jwt = localStorage.getItem('jwt')
    console.log(jwt)
    axios.get('https://dev.risingserver13forever.shop/app/recruitments',{
      headers:{
        "x-access-token":jwt,
      }
    })
    .then((Response) => {
      if(Response.data.isSuccess){
        setRecruitmentList(Response.data.result)
      } 
    })
    .catch((Error) => {
      console.log(Error);
    });
  },[])

  return (
    <JobListWrapper>
      <div>
        <JobDetailSearch />
      </div>
      <hr />
      <JobListBookmarkSection>
        <button>
          <BookMarkSvg />
          <span>북마크 모아보기</span>
          <BookMarArrowkSvg />
        </button>
      </JobListBookmarkSection>
      <JobActiveEmploymentSlide/>
      <JobList recruitmentList={recruitmentList}/>
    </JobListWrapper>
  );
}

export default EmployMentList;
