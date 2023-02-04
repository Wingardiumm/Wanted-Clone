import React from "react";
import styled from "styled-components";

const CompanyInfoWrapper = styled.section`
  margin: 80px 0 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: #fff;
  border-radius: 3px;
  border: 1px solid #e1e2e3;
  padding: 20px;
  .company-info-left {
    display: flex;
    align-items: center;
    flex-direction: row;
    text-align: left;
  }
  .company-info-logo {
    background: url("https://static.wanted.co.kr/images/wdes/0_5.1bf709e8.jpg");
    background-position: 50%;
    background-size: contain;
    width: 50px;
    height: 50px;
    box-shadow: 0 0 1px 0 rgb(0 0 0 / 10%);
    margin-right: 15px;
    background-repeat: no-repeat;
  }
  h5 {
    color: #333;
    font-size: 15px;
    font-weight: 600;
    margin: 0 0 5px;
    word-break: break-word;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    padding-right: 10px;
  }
  h6 {
    color: #999;
    font-size: 15px;
    font-weight: 600;
    margin: 0;
    padding-right: 10px;
  }
  .follow-button{
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    vertical-align: middle;
    min-width: 64px;
    padding: 0 27px;
    box-sizing: border-box;
    border-radius: 25px;
    font-weight: 700;
    line-height: normal;
    background-color: none;
    cursor: pointer;
    color: #36f;
    background-color: #fff;
    height: 40px;
    font-size: 15px;
    border: 1px solid #e1e2e3;
  }
  .follow-button:active, .follow-button:hover {
    color: #002fdb;
}
`;

function JobContentCompanyInfo() {
  return (
    <CompanyInfoWrapper>
      <button className="company-info-left">
        <div className="company-info-logo"></div>
        <div>
          <h5>스누아이랩</h5>
          <h6>전문,과학기술</h6>
        </div>
      </button>
      <button className="follow-button">
        <span>팔로우</span>
      </button>
    </CompanyInfoWrapper>
  );
}

export default JobContentCompanyInfo;
