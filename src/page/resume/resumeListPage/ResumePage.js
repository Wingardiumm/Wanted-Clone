import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ResumeBanner from "../ResumeBanner";
import ResumeList from "./ResumeList";
import ResumeListHeader from "./ResumeListHeader";

const ResumeListContainer = styled.div`
  @media (min-width: 1200px) {
    width: 87.72%;
    margin: 0 auto;
    position: relative;
  }
  max-width: 1060px;
`;
function ResumePage() {
  const [resumeList, setResumeList] = useState();
  useEffect(() => {
    const jwt = localStorage.getItem("jwt");
    const userId = localStorage.getItem('user_id')
    axios
      .get(`https://dev.risingserver13forever.shop/app/users/${userId}/resumes`, {
        headers: {
          "x-access-token": jwt,
        },
      })
      .then((Response) => {
        console.log(Response.data);
        if(Response.data.isSuccess){
          setResumeList(Response.data.result)
        }
      })
      .catch((Error) => {
        console.log(Error);
      });
  }, []);
  return (
    <ResumeListContainer>
      <ResumeBanner />
      <ResumeListHeader />
      <ResumeList resumeList={resumeList}/>
    </ResumeListContainer>
  );
}

export default ResumePage;
