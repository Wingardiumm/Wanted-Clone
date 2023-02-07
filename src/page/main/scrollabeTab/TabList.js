import styled from "@emotion/styled";
import React from "react";

const TabBtn = styled.button`
  display: -ms-flexbox;
  display: flex;
  padding: 9px 22px;
  font-weight: 600;
  font-size: 15px;
  line-height: 146.7%;
  -ms-flex-negative: 0;
  flex-shrink: 0;
  color: #888;
  outline: none;
  scroll-snap-align: start;
  height: 40px;
  position: relative;

  background-color: #fff;
  border: 1px solid;
  border-color: #ececec;
  /* border-color: ${(props)=>props.actived ? "#36f":"#ececec"}; */
  border-radius: 25px;
  &:hover {
    background-color: #ececec;
  }
  &:focus{
    border-color: #36f;
    color: #36f;
  }
`;

function TabList({ tabData,onClick }) {
  return (
    <TabBtn name={tabData.tag} id={tabData.id} 
    onClick={(e) => onClick(e)} 
    className={tabData.isChecked && "tab-selected"}
    >
      {tabData.name}
    </TabBtn>
  );
}

export default TabList;
