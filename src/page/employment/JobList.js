import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { recruitmentApi } from "../../api";
import JobCard from "./JobCard";
// import {}

const JobListContainer = styled.div`
  > ul {
    margin: -10px;
    padding: 0;
    li {
      width: 25%;
      padding: 10px;
      list-style: none;
      display: inline-block;
      vertical-align: top;
    }
  }
`;

function JobList({ recruitmentList }) {
  const [bookmarkList, setBookmarkList] = useState();
  useEffect(() => {
    console.log(renderBookmarkList)
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
        {recruitmentList?.map((data, i) => (
          <li key={i}>
            <JobCard jobList={data} bookmarkList={bookmarkList} setBookmarkList={setBookmarkList} />
          </li>
        ))}
      </ul>
    </JobListContainer>
  );
}

export default JobList;
