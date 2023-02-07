import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import ResumeListItem from "./ResumeListItem";

const ResumeListWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: calc(100% + 20px);
  flex-wrap: wrap;
`;
const AddItem = styled.div`
  background-color: #36f;
`;
const FileUpload = styled.div`
  background-color: #e1e2e3;
`;
export const ResumeItemWrapper = styled.div`
  height: 190px;
  width: calc(25% - 20px);
  margin-bottom: 20px;
  margin-right: 20px;
  position: relative;
  border: 1px solid #dbdbdb;
  background-color: #fff;
  cursor: pointer;
  ${AddItem}, ${FileUpload} {
    cursor: pointer;
    width: 74px;
    height: 74px;
    margin: 0 auto;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const ResumeAddWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  p {
    font-size: 16px;
    font-weight: 600;
    letter-spacing: normal;
    text-align: center;
    color: #333;
    margin: 20px 0 0;
  }
`;

function ResumeList({resumeList}) {
  const navigate = useNavigate();
  const addResume = ()=>{
    const jwt = localStorage.getItem('jwt')
    axios
    .post(`https://dev.risingserver13forever.shop/app/resumes`,{}, {
      headers: {
        "x-access-token": jwt,
      },
    })
    .then((Response) => {
      console.log(Response.data.result.user_id);
      if(Response.data.isSuccess){
        navigate(`/resume/${Response.data.result.added_resume_id}`)
      }
    })
    .catch((Error) => {
      console.log(Error);
    });
  }
  
  return (
    <ResumeListWrapper>
      <ResumeItemWrapper>
        <ResumeAddWrapper onClick={addResume}>
          <AddItem>
            <svg width="22" height="22" viewBox="0 0 16 16" fill="none" xmlns="https://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12.25 0H0.75C0.335786 0 0 0.335786 0 0.75V12.25C0 12.6642 0.335786 13 0.75 13H3V15.25L3.00685 15.3518C3.05651 15.7178 3.3703 16 3.75 16H15.25L15.3518 15.9932C15.7178 15.9435 16 15.6297 16 15.25V3.75L15.9932 3.64823C15.9435 3.28215 15.6297 3 15.25 3L15.1482 3.00685C14.7822 3.05651 14.5 3.3703 14.5 3.75L14.499 14.499H4.499L4.49975 13H12.25C12.6642 13 13 12.6642 13 12.25V0.75C13 0.335786 12.6642 0 12.25 0ZM11.499 1.5V11.5H1.499V1.5H11.499Z"
                fill="#fff"
              ></path>
            </svg>
          </AddItem>
          <p>새 이력서 작성</p>
        </ResumeAddWrapper>
      </ResumeItemWrapper>
      <ResumeItemWrapper>
        <ResumeAddWrapper>
          <FileUpload>
            <svg xmlns="https://www.w3.org/2000/svg" width="26" height="28" viewBox="0 0 32 34">
              <g fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round">
                <g stroke="#666" strokeWidth="3">
                  <g>
                    <g>
                      <path
                        d="M25.6 20.117L25.6 28.579 0 28.617 0 20.154M12.8.708L12.8 21.108"
                        transform="translate(-543 -398) translate(543 398) translate(3.2 2.55)"
                      ></path>
                      <path d="M18.8 0L12.8 7.083 6.8 0" transform="translate(-543 -398) translate(543 398) translate(3.2 2.55) rotate(-180 12.8 3.542)"></path>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
          </FileUpload>
          <p>새 이력서 작성</p>
        </ResumeAddWrapper>
      </ResumeItemWrapper>
        {resumeList?.map((data)=>(
          <ResumeListItem key={data.resumeId} resumeItem = {data}/>
        ))}
    </ResumeListWrapper>
  );
}

export default ResumeList;
