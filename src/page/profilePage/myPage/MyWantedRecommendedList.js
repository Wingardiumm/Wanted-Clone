import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { recruitmentApi } from "../../../api";
import JobCard from "../../employment/JobCard";

const JobListContainer = styled.div`
margin: 15px 0;
  > ul {
    margin: -10px;
    padding: 0;
    li {
      width: 33%;
      padding: 10px;
      list-style: none;
      display: inline-block;
      vertical-align: top;
    }
  }
`;
function MyWantedRecommendedList() {
  const [recruitmentList, setRecruitmentList] = useState();
  const [bookmarkList, setBookmarkList] = useState();
  useEffect(() => {
    recruitmentApi
      .getRecruitmentList()
      .then((Response) => {
        console.log(Response.data);
        if (Response.data.isSuccess) {
          setRecruitmentList(Response.data.result);
        }
      })
      .catch((Error) => {
        console.log(Error);
      });
    renderBookmarkList();
  }, []);
  const renderBookmarkList = () => {
    const userId = localStorage.getItem("user_id");
    recruitmentApi
      .getBookmarkList(userId)
      .then((Response) => {
        console.log(Response.data);
        if (Response.data.isSuccess) {
          setBookmarkList(Response.data.result);
        }
      })
      .catch((Error) => {
        console.log(Error);
      });
  };
  return (
    <JobListContainer>
      <ul>
        {recruitmentList?.map((data, i) => {
          if (i < 3) {
            return (
              <li key={i}>
                <JobCard jobList={data} bookmarkList={bookmarkList} setBookmarkList={setBookmarkList} />
              </li>
            );
          }
        })}
      </ul>
    </JobListContainer>
  );
}

export default MyWantedRecommendedList;
