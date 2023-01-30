import React from "react";
import styled from "styled-components";
import TabList from "./TabList";
import mainTabData from "../../../data/mainTabData";

const ModalContainer = styled.div`
  padding: 25px;
  position: absolute;
  top: 50px;
  max-width: 1060px;
  border: 1px solid #ececec;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-box-shadow: 0 4px 20px rgb(0 0 0 / 15%);
  box-shadow: 0 4px 20px rgb(0 0 0 / 15%);
  border-radius: 4px;
  z-index: 1400;
  background-color: #fff;
`;
const TagListContainer = styled.div`
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  grid-gap: 8px;
  gap: 8px;
  padding: 0;
`;
function AllTabModal() {
  const tagSelect = (e)=>{
    
  }
  return (
    <ModalContainer>
      <TagListContainer>
        {mainTabData.map((tab) => {
          return <TabList tabData={tab} onClick={tagSelect}/>;
        })}
      </TagListContainer>
    </ModalContainer>
  );
}

export default AllTabModal;
