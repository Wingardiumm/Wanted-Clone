import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { AiOutlineSearch } from "react-icons/ai";
import MainNavModal from "../main/section/careerSection/MainNavModal";
import axios from "axios";
import Profile from "./Profile";
const HeaderBox = styled.div`
  padding-right: initial;
  width: 100%;
  position: fixed;
  top: 0;
  background-color: #fff;
  -webkit-box-shadow: 0 1px 0 0 rgb(0 0 0 / 10%);
  box-shadow: 0 1px 0 0 rgb(0 0 0 / 10%);
  /* border: 1px solid black; */
  z-index: 800;
  font-size: 14px;
  line-height: 20px;
  font-weight: 600;
  color: #333333;
  .main-bar {
    position: relative;
    max-width: 1060px;
    height: 50px;
    margin: 0 auto;
    width: 100%;

    /* display: flex; */
    /* align-items: center; */
    /* justify-content: space-between; */
    /* border: 1px solid #e2e3e3; */
  }
`;
const HeaderPadding = styled.div`
  height: 50px;
`;
const MainBarNav = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  flex-wrap: wrap;
`;
const MainNav = styled.ul`
  /* list-style: none; */
  /* display: flex; */
  /* flex-direction: row; */
  /* display: block; */
  margin: 0;
  height: inherit;
  text-align: center;
  li:nth-child(${(props) => props.presentNav}) {
    box-shadow: inset 0 -2px #258bf7;
  }
  li {
    /* margin-right: 10px; */
    height: inherit;
    display: inline-block;
    a {
      position: relative;
      vertical-align: middle;
      font-size: 13px;
      line-height: 20px;
      font-weight: 600;
      padding: 15px;
      display: inline-block;
      /* color: #333333; */
    }
    &:hover {
      box-shadow: inset 0 -2px #e2e3e3;
    }
  }
`;
const MainMenu = styled.div`
  margin-top: 3px;

  .main-menu-logo {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  button {
    /* text-align: left; */
    padding: 0;
    margin-top: 2px;
    margin-right: 15px;
    img {
      position: relative;
      left: 0;
      width: 17px;
      height: 14px;
      object-fit: contain;
    }
  }
  .header-logo {
    width: 74px;
  }
`;
const HeaderAside = styled.div``;
const AsideList = styled.ul`
  margin: 0;
  list-style: none;
  display: flex;
  flex-direction: row;
  /* padding: 10px 0; */

  align-items: center;
  li {
    /* margin-right: 10px; */
    height: inherit;
    display: inline-block;
    position: relative;
    padding: 0 5px;
    font-size: 14px;
    color: #333;
    font-weight: 600;
    line-height: 1;
  }
  button {
    font-size: 13px;
    line-height: 20px;
    font-weight: 600;
    vertical-align: middle;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
  }
  .header-service-link {
    display: inline-flex;
    &::before {
      display: block;
      content: "";
      width: 1px;
      height: 10px;
      background-color: #e1e2e3;
      margin: auto 10px;
    }
    a {
      font-size: 13px;
      color: #666;
      line-height: 30px;
      height: 30px;
      border: 1px solid #e1e2e3;
      border-radius: 15px;
      padding: 0 10px;
      margin-left: 15px;
      font-weight: 400;
    }
  }
`;
function MainHeader() {
  const menuData = ["채용", "이벤트", "직군별 연봉", "이력서", "커뮤니티", "프리랜서", "AI합격예측"];
  const [profileModalOn, setProfileModalOn] = useState(false);
  const [
    presentNav,
    // ,setPresentNav
  ] = useState(3);
  const [navMenuOn, setNavMenuOn] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const jwt = localStorage.getItem("jwt");
    const userId = localStorage.getItem("user_id");
    if (jwt) {
      setIsLogin(true);
      axios
        .get(`https://dev.risingserver13forever.shop/app/users/${userId}`, {
          headers: {
            "x-access-token": jwt,
          },
        })
        .then((Response) => {
          console.log(Response.data);
        })
        .catch((Error) => {
          console.log(Error);
        });
    } else {
      setIsLogin(false);
    }
  }, []);
  useEffect(() => {
    // setPresentNav(localStorage.getItem('present_nav'))
  }, []);
  return (
    <>
      <HeaderBox onClick={() => setProfileModalOn(false)}>
        <div className="main-bar">
          <MainBarNav>
            <MainMenu>
              <div className="main-menu-logo">
                <button
                  onMouseEnter={() => {
                    setNavMenuOn(true);
                    setProfileModalOn(false);
                  }}
                >
                  <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Ficon-menu.png&w=17&q=75" alt="menu"></img>
                </button>
                <Link to={"/"}>
                  <img className="header-logo" src="../media/logo.png" alt="로고" />
                </Link>
              </div>
            </MainMenu>
            <MainNav presentNav={presentNav}>
              {menuData.map((e) => {
                return (
                  <li key={e}>
                    <Link to={"/"}>{e}</Link>
                  </li>
                );
              })}
            </MainNav>
            <HeaderAside>
              <AsideList>
                <li>
                  <button type="button">
                    <AiOutlineSearch style={{ fontSize: "18px", marginTop: "3px" }}></AiOutlineSearch>
                  </button>
                </li>

                {isLogin ? (
                  <Profile setProfileModalOn={setProfileModalOn} profileModalOn={profileModalOn} setNavMenuOn={setNavMenuOn} />
                ) : (
                  <li>
                    <button onClick={() => navigate("/login")}>회원가입/로그인</button>
                  </li>
                )}
                <li className="header-service-link">
                  <Link to={"/"}>기업 서비스</Link>
                </li>
              </AsideList>
            </HeaderAside>
          </MainBarNav>
          {/* 메인메뉴 모달 컴포넌트 */}
          {navMenuOn && <MainNavModal setNavMenuOn={setNavMenuOn} />}
        </div>
      </HeaderBox>
      <HeaderPadding> </HeaderPadding>
    </>
  );
}

export default MainHeader;
