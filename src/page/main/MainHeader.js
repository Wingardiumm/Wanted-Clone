import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { AiOutlineSearch } from "react-icons/ai";
import MainNavModal from "./MainNavModal";
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
`
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
  }
  button {
    font-size: 13px;
    line-height: 20px;
    font-weight: 600;
    vertical-align: middle;
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

  // const [blurOn, setBlurOn] = useState(false);
  // const [clickOn, setClickOn] = useState(false);
  const [navMenuOn, setNavMenuOn] = useState(false);

  // const menuMouseHandling = (e) => {
  //   if (e.type === "mouseenter") {
  //     setBlurOn(true);
  //   } else if (e.type === "mouseleave") {
  //     setBlurOn(false);
  //   } else if (e.type === "click") {
  //     // setClickOn(true);
  //   }
  // };

  return (
    <>
      <HeaderBox>
        <div className="main-bar">
          <MainBarNav>
            <MainMenu>
              <div className="main-menu-logo">
                <button
                  onMouseEnter={() => {
                    setNavMenuOn(true);
                  }}
                >
                  <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Ficon-menu.png&w=17&q=75" alt="menu"></img>
                </button>
                <Link to={"/"}>
                  <img className="header-logo" src="./media/logo.png" alt="로고"/>
                </Link>
              </div>
            </MainMenu>
            <MainNav>
              {menuData.map((e) => {
                return (
                  <li
                    key={e}
                    // className={blurOn && `list-active`}
                  >
                    <Link to={"/"}>{e}</Link>
                  </li>
                );
              })}
              {/* <li>
              <Link to={"/"}>Wanted</Link>
            </li> */}
            </MainNav>
            <HeaderAside>
              <AsideList>
                <li>
                  <AiOutlineSearch style={{ fontSize: "18px", marginTop: "3px" }}></AiOutlineSearch>
                </li>
                {/* <li>
                <VscBell></VscBell>
              </li> */}
                <li>
                  <button>회원가입/로그인</button>
                </li>
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
