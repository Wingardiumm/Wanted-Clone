import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { AiOutlineSearch } from "react-icons/ai";
import MainNavModal from "../main/section/careerSection/MainNavModal";
import Profile from "./Profile";
const HeaderBox = styled.div`
  padding-right: initial;
  width: 100%;
  position: fixed;
  top: 0;
  background-color: #fff;
  -webkit-box-shadow: 0 1px 0 0 rgb(0 0 0 / 10%);
  box-shadow: 0 1px 0 0 rgb(0 0 0 / 10%);
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

  margin: 0;
  height: inherit;
  text-align: center;
  li:nth-child(${(props) => props.presentNav}) {
    box-shadow: inset 0 -2px #258bf7;
  }
  li {
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

  align-items: center;
  li {
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
  const menuData = [{ name: "??????", url: "employment" ,id:1}, { name: "?????????", url: "",id:2 }, { name: "????????? ??????",url:"",id:3 }, {name:"?????????",url:"resume",id:4}, {name:"????????????",url:"",id:5}, {name:"????????????",url:"",id:6}, {name:"AI????????????",url:"",id:7}];
  const [profileModalOn, setProfileModalOn] = useState(false);
  const [navClick, setNavClick] = useState(false);
  const [
    presentNav,
  setPresentNav] = useState(1);
  const [navMenuOn, setNavMenuOn] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const {pathname} = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    const jwt = localStorage.getItem("jwt");
    if(pathname === '/'){
      localStorage.setItem('presentNav', '')
    }
    const nav = localStorage.getItem("presentNav");
    setPresentNav(nav)
    console.log(pathname)
    if (jwt) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  }, [navClick]);

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
                <Link to={"/"} onClick={()=>{
                  localStorage.setItem('presentNav', '')
                  setNavClick(!navClick)
                }}>
                  <img className="header-logo" src="../media/logo.png" alt="??????" />
                </Link>
              </div>
            </MainMenu>
            <MainNav presentNav={presentNav}>
              {menuData.map((e) => {
                return (
                  <li key={e.name} onClick={()=>{
                    localStorage.setItem('presentNav', e.id)
                    setNavClick(!navClick)
                  }}>
                    <Link to={`/${e.url}`}>{e.name}</Link>
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
                    <button onClick={() => navigate("/login")}>????????????/?????????</button>
                  </li>
                )}
                <li className="header-service-link">
                  <Link to={"/"}>?????? ?????????</Link>
                </li>
              </AsideList>
            </HeaderAside>
          </MainBarNav>
          {/* ???????????? ?????? ???????????? */}
          {navMenuOn && <MainNavModal setNavMenuOn={setNavMenuOn} />}
        </div>
      </HeaderBox>
      <HeaderPadding> </HeaderPadding>
    </>
  );
}

export default MainHeader;
