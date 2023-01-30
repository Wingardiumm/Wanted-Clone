import React from "react";
import styled from "styled-components";

const BannerContainer = styled.div`
  max-width: 1060px;
  width: 87.72%;
  margin: 0 auto 48px;
`;
const BannerBackground = styled.div`
  cursor: pointer;
  background: #0d99ff;
  color: #fff;
  border-radius: 10px;
  padding: 28px 0 22px 120px;
  background-image: url(https://static.wanted.co.kr/images/type-test/typetest-banner-image.png);
  background-size: auto 100%;
  background-position: 100%;
  background-repeat: no-repeat;
`;
const BannerTitle = styled.div`
  font-weight: 800;
  font-size: 22px;
  line-height: 26px;
`;
const TestLink = styled.div`
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  font-weight: 600;
  font-size: 16px;
  letter-spacing: 0.0056em;
  height: 32px;
`;
const TestLinkArrow = styled.span`
  width: 16px;
  height: 16px;
  margin-left: 4px;
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
function TypeTestBanner() {
  return (
    <BannerContainer>
      <BannerBackground>
        <BannerTitle>내 유형과 가장 어울리는 회사는?</BannerTitle>
        <TestLink>
          유형테스트 하러가기
          <TestLinkArrow>
            <span>
              <svg className="SvgIcon_SvgIcon__root__svg__DKYBi" viewBox="0 0 18 18">
                <path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path>
              </svg>
            </span>
          </TestLinkArrow>
        </TestLink>
      </BannerBackground>
    </BannerContainer>
  );
}

export default TypeTestBanner;
