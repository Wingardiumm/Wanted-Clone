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
const TagModalSectionDivinder = styled.hr`
  margin: 25px 0 20px;
  height: 1px;
  border: none;
  -ms-flex-negative: 0;
  flex-shrink: 0;
  background-color: #ececec;
`;
const TagModalText = styled.div`
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  -ms-flex-pack: center;
  justify-content: center;
  grid-gap: 10px;
  gap: 10px;
`;
const ModalLinkText = styled.p`
  font-weight: 400;
  font-size: 15px;
  line-height: 146.7%;
  letter-spacing: 0.0096em;
  color: #666;
`;
const ModalLinkBtn = styled.button`
  font-weight: 600;
  font-size: 15px;
  line-height: 146.7%;
  letter-spacing: 0.0096em;
  -webkit-text-decoration-line: underline;
  text-decoration-line: underline;
  color: #36f;
`;
function AllTabModal() {
  const tagSelect = (e) => {};
  return (
    <ModalContainer>
      <TagListContainer>
        {mainTabData.map((tab) => {
          return <TabList key={tab.id} tabData={tab} onClick={tagSelect} />;
        })}
      </TagListContainer>
      <TagModalSectionDivinder />
      <TagModalText>
        <ModalLinkText>요즘 내 관심사 선택하고 맞춤 콘텐츠 받기!</ModalLinkText>
        <ModalLinkBtn>관심태그 설정하기</ModalLinkBtn>
      </TagModalText>
    </ModalContainer>
  );
}

export default AllTabModal;
