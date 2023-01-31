import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as WantedLogo1 } from "../svg/wanted-logo.svg";
import { ReactComponent as WantedLogo2 } from "../svg/wanted-logo2.svg";
import FooterSnsLink from "./FooterSnsLink";

const FooterLinksWrapper = styled.div`
  width: 90%;
  max-width: 1060px;
  margin: 0 auto 18px;
  display: -ms-flexbox;
  display: flex;
`;
const NavLinksWrapper = styled.div`
  flex-grow: 1;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  .footer-nav-link {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: center;
    align-items: center;
    -ms-flex-pack: justify;
    justify-content: space-between;
    margin-right: 43px;
    width: 113px;
    svg {
      /* width: 31.4%; */
      height: 100%;
      margin-right: 5px;
    }
    .wanted-logo-text {
      position: relative;
      bottom: 2px;
    }
  }
`;
const LinksList = styled.div`
  display: flex;
  a {
    font-size: 15px;
    color: #3a3a3a;
    font-weight: 500;
    line-height: 2.6;
    margin-right: 45px;
    white-space: nowrap;
  }
`;
function FooterLinks() {
  const textData = ["기업소개", "이용약관", "고객센터"];
  return (
    <FooterLinksWrapper>
      <NavLinksWrapper>
        <Link className="footer-nav-link" to={"/"}>
          <WantedLogo1 />
          <WantedLogo2 className="wanted-logo-text" />
        </Link>
        <LinksList>
          {textData.map((data) => (
            <Link key={data} to={"/"}>
              {data}
            </Link>
          ))}
          <Link to={"/"}>
            <b>개인정보 처리방침</b>
          </Link>
        </LinksList>
      </NavLinksWrapper>
      {/* footer sns link 컴포넌트 */}
      <FooterSnsLink />
    </FooterLinksWrapper>
  );
}

export default FooterLinks;
