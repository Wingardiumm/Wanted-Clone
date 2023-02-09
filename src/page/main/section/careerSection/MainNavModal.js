import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import SecondNavModal from "./SecondNavModal";
import { mainNavData } from "../../../../data/mainNavData";
const HeaderModalBackground = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  top: 50px;
  overflow: hidden;
  width: 100%;
`;
const NavDistruct = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  max-width: 1100px;
  /* display: -ms-flexbox; */
  display: flex;
  margin: 0 auto;
  z-index: 1400 !important;
`;
const NavFirstSection = styled.div`
  a {
    height: 40px;
    display: flex;
    align-items: center;
    flex: 1 1;
    padding: 0 20px;
    width: 100%;
    color: inherit;
  }
  border-left: 1px solid #f7f9fa;
  border-right: 1px solid #f7f9fa;
  height: calc(100vh - 50px);
  width: 220px;
  background-color: #fff;
  overflow-y: auto;
  overflow-x: hidden;
`;
const FirstSectionList = styled.ul`
  em {
    font-size: 13px;
    font-weight: 700;
    font-style: normal;
    letter-spacing: normal;
    color: #333;
    width: 100%;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
  li {
    &:hover {
      color: #36f;
      background-color: #f7f9fa;
      em {
        color: #36f;
      }
    }
  }
`;
const FreelancerNav = styled.li`
  width: ${(props) => (props.firstListMouseOn ? "90%" : "100%")};
  padding: 8px 20px;
  box-sizing: border-box;
  a {
    display: block;
    height: max-content;
    padding: 0;
    background-color: #fff !important;
  }
  .freelancer-banner {
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    border-radius: 4px;
    background: #f5f7ff url(https://image.wanted.co.kr/gigs/www/wanted/gigs_banner_background_img.png) no-repeat 100%;
    background-size: 160px 50px;
    span {
      margin-left: 16px;
      font-weight: 700;
      font-size: 13px;
      color: #0a4ff4;
    }
  }
`;
function MainNavModal({ setNavMenuOn }) {
  const [firstListMouseOn, setFirstListMouseOn] = useState(false);
  const [dataId, setDataId] = useState();
  const [secondData, setSecondData] = useState();
  return (
    <HeaderModalBackground>
      <NavDistruct
        onPointerLeave={() => {
          setNavMenuOn(false);
          setFirstListMouseOn(false);
        }}
      >
        <NavFirstSection>
          <FirstSectionList>
            <li onMouseEnter={() => {
                  setFirstListMouseOn(false);
                }}>
              <Link className="all-op" to={"/"}>
                직군 전체
              </Link>
            </li>

            {mainNavData.map((data) => (
              <li
                key={data.id}
                onMouseEnter={() => {
                  setFirstListMouseOn(true);
                  setDataId(data.id);
                  setSecondData(data.second);
                }}
              >
                <Link to={"/"}>
                  <em>{data.first}</em>
                </Link>
              </li>
            ))}

            <FreelancerNav firstListMouseOn={firstListMouseOn}>
              <Link to={"/"}>
                <div className="freelancer-banner">
                  <span>프리랜서</span>
                </div>
              </Link>
            </FreelancerNav>
          </FirstSectionList>
        </NavFirstSection>
        {/* 세부Nav 모달열기*/}

       {firstListMouseOn&& <SecondNavModal secondData={secondData} />}
      </NavDistruct>
    </HeaderModalBackground>
  );
}

export default MainNavModal;
