import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const BannerContainer = styled.div`
  max-width: 1060px;
  width: 87.72%;
  margin: 60px auto 0;
  margin-top: 0 !important;
  a {
    color: inherit;
  }
`;
const InterestTagBannerTextContainer = styled.div`
  display: flex;
  word-break: keep-all;
  text-align: center;
`;
const TextBackground = styled.div`
  background-image: linear-gradient(90deg, #01a9fe -12%, #2f5fef 37%, #046afe 72%, #00d2dd 110%);
  padding: 21px 30px;
  font-size: 17px;
  border-radius: 38.5px;
  line-height: normal;
  color: #fff;
  font-weight: 700;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-positive: 1;
  flex-grow: 1;
  -ms-flex-pack: center;
  justify-content: center;
  -ms-flex-align: center;
  align-items: center;
`;
const TextBox = styled.span`
  line-height: normal;
  em {
    font-weight: 400;
    font-style: normal;
  }
  span {
    display: -ms-inline-flexbox !important;
    display: inline-flex !important;
    width: 10px !important;
    margin-left: 2px !important;
    vertical-align: text-top !important;
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
function InterestTagBanner() {
  return (
    <BannerContainer>
      <Link to={"/"}>
        <InterestTagBannerTextContainer>
          <TextBackground>
            <TextBox>
              관심 태그를 설정하면 취향에 맞는 콘텐츠를 추천해 드려요.
              <em>🎁</em>
              <span>
                <svg className="SvgIcon_SvgIcon__root__svg__DKYBi" viewBox="0 0 18 18">
                  <path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path>
                </svg>
              </span>
            </TextBox>
          </TextBackground>
        </InterestTagBannerTextContainer>
      </Link>
    </BannerContainer>
  );
}

export default InterestTagBanner;
