import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const BannerImgBox = styled.div`
  position: relative;
  padding-bottom: 28.3%;
  width: 1060px;
  height: 300px;
  a {
    color: inherit;
    text-decoration: inherit;
    cursor: pointer;
  }
  img {
    display: inline-block;
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    -o-object-fit: cover;
    border-radius: 4px;
    object-fit: cover;
  }
`;

export const BannerTextCard = styled.div`
  /* 액티브일때 
-webkit-animation: Information_in__LsISw .4s ease-in-out;
    animation: Information_in__LsISw .4s ease-in-out;
    opacity: 1; */
  position: absolute;
  bottom: 28px;
  width: 330px;
  height: 146px;
  border-radius: 4px;
  background-color: #fff;
  opacity: 0;
  text-align: left;
  left: 30px;

  h2 {
    margin-top: 20px;
    font-size: 18px;
    line-height: 1;
    font-weight: 700;
    color: #333;
    width: "auto";
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    @media (min-width: 1200px) {
      margin-left: 20px;
      margin-right: 20px;
      font-size: 20px;
      line-height: 1.5;
    }
  }
  h3 {
    margin-top: 6px;
    font-size: 13px;
    font-weight: 500;
    line-height: 1.15;
    color: #666;
    width: "auto";
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    @media (min-width: 1200px) {
      margin: 0 20px;
      height: 44px;
      font-size: 14px;
      line-height: 1.64;
      color: #333;
    }
  }

  hr {
    height: 1px;
    margin: 0;
    border: none;
    -ms-flex-negative: 0;
    flex-shrink: 0;
    background-color: #ececec;
    display: none;
    @media (min-width: 1200px) {
      display: block;
    }
  }
  .banner-card-link {
    font-size: 14px;
    font-weight: 700;
    line-height: 1;
    color: #36f;
    height: 40px;
    padding: 6px 8px;
    
    position: relative;
    display: -ms-inline-flexbox;
    display: inline-flex;
    -ms-flex-align: center;
    align-items: center;
    -ms-flex-pack: center;
    justify-content: center;
    vertical-align: middle;
    min-width: 64px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    border-radius: 25px;
    font-weight: 700;
    line-height: normal;
    border: none;
    background-color: none;
    cursor: pointer;
    @media (min-width: 1200px) {
      margin: 6px 0 0 13px;
    }
    .link-span {
      width: 100%;
      font-size: inherit;
      font-weight: inherit;
      display: inherit;
      -ms-flex-align: inherit;
      align-items: inherit;
      -ms-flex-pack: inherit;
      justify-content: inherit;
      color: inherit;
      .link-span-arrow {
        /* margin-top: ; */
        margin-right: -1px;
        margin-left: 2px;
        span {
          display: -ms-flexbox;
          display: flex;
          -ms-flex-align: inherit;
          align-items: inherit;
          -ms-flex-pack: inherit;
          justify-content: inherit;
        }
        svg {
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
          width: 0.8em;
          height: 0.8em;
          display: inline-block;
          fill: currentColor;
          -ms-flex-negative: 0;
          flex-shrink: 0;
          font-size: inherit;
        }
      }
    }
  }
`;

function BannerImg({ bannerData }) {
  return (
    <>
      <BannerImgBox>
        <Link to={"/"}>
          <img alt={bannerData.title} src={bannerData.img_path} />
        </Link>
      <BannerTextCard>
        <h2>{bannerData.title}</h2>
        <h3>{bannerData.content_txt}</h3>
        <hr />
        <Link to={"/"} className="banner-card-link">
          <span className="link-span">
            바로가기
            <span className="link-span-arrow">
              <span>
                <svg className="SvgIcon_SvgIcon__root__svg__DKYBi" viewBox="0 0 18 18">
                  <path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path>
                </svg>
              </span>
            </span>
          </span>
        </Link>
      </BannerTextCard>
      </BannerImgBox>
    </>
  );
}

export default BannerImg;
