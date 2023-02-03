import React from "react";
import styled from "styled-components";

const JobTagItemWrapper = styled.button`
  position: relative;
  height: 32px;
  padding: 8px 14px;
  border-radius: 20px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin-right: 8px;
  font-size: 13px;
  line-height: 16px;
  font-weight: 400;
  color: #333;
  border: 1px solid transparent;
  background: rgb(242, 251, 245);
  @media (min-width: 1200px) {
    &:hover {
      border: 1px solid rgba(51, 102, 255, 0.3);
    }
  }
  > img {
    width: 16px;
    height: 16px;
    margin-left: 5px;
  }
`;

function JobTagItem({tagData}) {
  return (
    <JobTagItemWrapper style={{background : tagData?.background_color}}>
      {tagData?.title}
      <img
        src={tagData?.img_path}
        alt={tagData?.title}
      />
    </JobTagItemWrapper>
  );
}

export default JobTagItem;
