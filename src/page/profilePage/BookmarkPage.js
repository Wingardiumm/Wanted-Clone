import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { recruitmentApi } from "../../api";
import JobCard from "../employment/JobCard";

const BookmarkPageContainer = styled.div`
  display: flex;
  /* align-items: center; */
  flex-direction: column;
  position: relative;
  max-width: 1060px;
  width: 100%;

  justify-content: flex-start;
  color: #333;
  margin: 0 auto;
`;
const BookmarkTitle = styled.div`
  /* margin-top: 50px; */
  h1 {
    font-size: 20px;
    font-weight: 700;
    color: #333;
    padding: 50px 0 20px;
  }
`;
const BookmarkListWrapper = styled.div`
  /* display: flex;
  flex-wrap: wrap;
  align-items: center; */
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
const NoBookmarkNotice = styled.div`
  display: flex;
  position: relative;
  align-content: center;
  justify-content: center;
  width: 100%;
  margin: 30% auto;
  color: #d1d1d1;
  h1 {
    font-size: 25px;
  }
`;
function BookmarkPage() {
  const [bookmarkList, setBookmarkList] = useState();

  useEffect(() => {
    console.log(renderBookmarkList);
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
    <BookmarkPageContainer>
      <BookmarkTitle>
        <h1>북마크</h1>
      </BookmarkTitle>
      {bookmarkList?.length !== 0 ? (
        <BookmarkListWrapper>
          <ul>
            {bookmarkList?.map((data, i) => (
              <li key={i}>
                <JobCard jobList={data} bookmarkList={data} renderBookmarkList={renderBookmarkList} isBookmark={true} setBookmarkList={setBookmarkList} />
              </li>
            ))}
          </ul>
        </BookmarkListWrapper>
      ) : (
        <NoBookmarkNotice>
          <h1>아직 북마크한 포지션이 없습니다.</h1>
        </NoBookmarkNotice>
      )}
    </BookmarkPageContainer>
  );
}

export default BookmarkPage;
