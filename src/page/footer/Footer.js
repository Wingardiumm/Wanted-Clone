import React from "react";
import styled from "styled-components";
import FooterLanguageSelector from "./FooterLanguageSelector";
import FooterLinks from "./FooterLinks";

const FooterWrapper = styled.div`
  padding: 18px 0 65px;
  background-color: #fff;
  border-top: 1px solid #ececec;
`;
const FooterInfo = styled.div`
  border-top: 1px solid #ececec;
  padding-top: 25px;
  width: 90%;
  max-width: 1060px;
  margin: 0 auto 18px;
  display: -ms-flexbox;
  display: flex;
  p{
    float: left;
    font-size: 12px;
    font-weight: 500;
    line-height: 1.6666666667em;
    color: #767676;
    width: calc(100% - 290px);
    margin-right: 40px;
  }
`;
function Footer() {
  return (
    <FooterWrapper>
      <FooterLinks />
      <FooterInfo>
        <p>
          (주)원티드랩 (대표이사:이복기) | 서울특별시 송파구 올림픽로 300 롯데월드타워 35층 | 통신판매번호 : 2020-서울송파-3147
          <br />
          유료직업소개사업등록번호 : (국내) 제2020-3230259-14-5-00018호 | 사업자등록번호 : 299-86-00021 | 02-539-7118
          <br />© Wantedlab, Inc.
        </p>
        <FooterLanguageSelector/>
      </FooterInfo>
    </FooterWrapper>
  );
}

export default Footer;
