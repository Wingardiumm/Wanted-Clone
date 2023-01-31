import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import BtnArrowSvg from "../svg/BtnArrowSvg";
import recruitData from "../../../../data/recruitmentInfoData";

const RecruitInfoWrapper = styled.div`
  border: 1px solid #ececec;
  border-radius: 4px;
  color: #333;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
`;
const RecruitInfoItemContainer = styled.div`
  padding: 18px 0 0;
  border-right: 1px solid #ececec;
  width: 25%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
`;
const StyledInfoLink = styled(Link)`
  height: 32px;
  font-size: 32px;
  color: inherit;
  span {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: inherit;
    align-items: inherit;
    -ms-flex-pack: inherit;
    justify-content: inherit;
    svg {
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
      width: 1em;
      height: 1em;
      display: inline-block;
      fill: currentColor;
      -ms-flex-negative: 0;
      flex-shrink: 0;
      font-size: inherit;
    }
  }
`;
const InfoLinkBtn = styled.button`
  height: 50px;
  font-size: 16px;
  padding: 6px 8px;
  color: #333;
  position: relative;
  display: -ms-inline-flexbox;
  display: inline-flex;
  -ms-flex-align: center;
  align-items: center;
  -ms-flex-pack: center;
  justify-content: center;
  vertical-align: middle;
  min-width: 64px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  border-radius: 25px;
  font-weight: 700;
  line-height: normal;
  border: none;
  background-color: none;
  cursor: pointer;
`;
const BtnLabel = styled.span`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  .svg-arrow {
    margin-top: 1px;
  }
`;
function RecruitInfoLinks() {
  return (
    <RecruitInfoWrapper>
      {recruitData.map(({ id, title, Image }) => (
        <RecruitInfoItemContainer>
          <StyledInfoLink to={"/"}>
            <Image />
          </StyledInfoLink>
          <InfoLinkBtn>
            <BtnLabel>
              {title}
              <BtnArrowSvg />
            </BtnLabel>
          </InfoLinkBtn>
        </RecruitInfoItemContainer>
      ))}
    </RecruitInfoWrapper>
  );
}

export default RecruitInfoLinks;
