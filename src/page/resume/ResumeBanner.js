import React from "react";
import styled from "styled-components";

const ResumeBannerWrapper = styled.div`
  margin-top: 30px;
  position: relative;
  width: 100%;
  height: 103px;
  border-radius: 10px;
  margin-bottom: 20px;
  background: #2b4bc8;
  cursor: pointer;
  overflow: hidden;
  > picture {
    width: 72%;
    z-index: 0;
    position: absolute;
    right: 0;
    bottom: 0;
    height: 100%;
  }
`;
const ResumeBannerBtn = styled.button`
  position: relative;
  width: 100%;
  height: 100%;
  padding: 32px 40px;
  font-size: 22px;
  font-weight: 800;
  line-height: 26px;
  color: #fff;
  > div {
    width: 100%;
    height: 100%;
    display: -ms-flexbox;
    display: flex;
    align-items: center;
    justify-content: space-between;
    > p {
      z-index: 1;
    }
    > strong {
      z-index: 1;
      border-radius: 20px;
      background-color: #fff;
      color: #2b4bc8;
      font-size: 15px;
      line-height: 18px;
      font-weight: 600;
      padding: 11px 20px;
    }
  }
  > picture {
    width: 333px;
    height: 90px;
    bottom: 0;
    right: 200px;
    z-index: 0;
    position: absolute;
    > img {
      width: 100%;
      height: 100%;
    }
  }
`;
function ResumeBanner() {
  return (
    <ResumeBannerWrapper>
      <picture>
        <source srcSet="https://static.wanted.co.kr/career_connect/banner-back-pc-common.webp" type="image/webp" />
        <img src="https://static.wanted.co.kr/career_connect/banner-back-pc-common.webp" alt="career-connect-icon" />
      </picture>
      <ResumeBannerBtn>
        <div>
          <p>이력서 작성이 쉬워진다! 1분 만에 채워지는 경력정보</p>
          <strong>내 경력 불러오기</strong>
        </div>
        <picture>
          <source srcSet="https://static.wanted.co.kr/career_connect/trio.webp" type="image/webp" />
          <img src="https://static.wanted.co.kr/career_connect/trio.webp" alt="career-connect-icon" />
        </picture>
      </ResumeBannerBtn>
    </ResumeBannerWrapper>
  );
}

export default ResumeBanner;
