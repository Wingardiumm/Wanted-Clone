import React from "react";
import { IconData } from "../main/section/svg/snsLinkData";
import { Link } from "react-router-dom";
import styled from "styled-components";

const SnsLinkWrapper = styled.div`
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: nowrap;
  flex-wrap: nowrap;
  line-height: 2.6;
  a {
    position: relative;
    display: block;
    float: left;
    height: 20px;
    svg {
      margin-left: 14px;
    }
  }
`;

function FooterSnsLink() {
  return (
    <SnsLinkWrapper>
      {IconData.map((data) => (
        <Link to={"/"} key={data.id}>{data.icon}</Link>
      ))}
      {/* <BsApple />
      <FaGooglePlay />
      <SiNaver /> */}
    </SnsLinkWrapper>
  );
}

export default FooterSnsLink;
