import React from "react";
import styled from "styled-components";
import {RiArrowDropDownFill} from "react-icons/ri"

const LanguageSelectBox = styled.div`
  position: relative;
  width: 250px;
  height: 36px;
  float: left;
  img {
    position: absolute;
    left: 15px;
    top: 55%;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
    width: 24px;
    height: 17px;
    z-index: 1;
  }
  select {
    width: 100%;
    height: 40px;
    background: #f2f4f7;
    border-radius: 5px;
    border: none;
    font-size: 14px;
    line-height: 2.1;
    color: #717171;
    padding: 0 45px;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    font-weight: 500;
  }
  .language-select-arrow{
    position: absolute;
    width: 30px;
    height: 30px;
    /* font-size: 20px; */
    line-height: 1.6;
    right: 15px;
    top: 50%;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
    color: #717171;
  }
`;

function FooterLanguageSelector() {
  return (
    <LanguageSelectBox>
      <img src="https://static.wanted.co.kr/images/userweb/ico_KR.svg" alt="country flag KR" />
      <select>
        <option defaultValue={"KR"}>한국 (한국어)</option>
        <option value={"JP"}>日本 (日本語)</option>
        <option value={"WW"}>Worldwide (English)</option>
        <option value={"SG"}>Singapore (English)</option>
      </select>
      <RiArrowDropDownFill className="language-select-arrow"/>
    </LanguageSelectBox>
  );
}

export default FooterLanguageSelector;
