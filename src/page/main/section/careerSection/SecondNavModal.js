import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const SecondNavDistruct = styled.div`
  position: absolute;
  left: 202px;
`;
const SecondSection = styled.ul`
  display: -ms-flexbox;
  display: flex;
  -ms-flex-direction: column;
  flex-direction: column;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  height: calc(100vh - 50px);
  background-color: #f7f9fa;
  width: 220px;
`;
const SecondSectionList = styled.li`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 200px;
  padding: 0 20px;
  svg {
    display: none;
    font-size: 10px;
    color: #36f;
  }
  &:hover {
    svg {
      display: block;
      position: absolute;
      display: inline-block;
      right: 50px;
      top: 18px;
    }
  }
  a {
    padding-top: 14px;
    display: inline-block;
    height: 40px;
    font-size: 13px;
    font-weight: 400;
    font-style: normal;
    color: #333;
    flex: 1 1;
    vertical-align: middle;
    max-width: 140px;
    width: 100%;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    &:hover {
      color: #36f;
    }
  }
`;
function SecondNavModal({ secondData }) {
  return (
    <SecondNavDistruct>
      <SecondSection>
        {secondData?.map((data,i) => (
          <SecondSectionList key={i}>
            <Link to={"/"}>{data}</Link>
            {/* <i className="icon-arrow_right"></i> */}
            <ArrowForwardIosIcon></ArrowForwardIosIcon>
          </SecondSectionList>
        ))}
      </SecondSection>
    </SecondNavDistruct>
  );
}

export default SecondNavModal;
