import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const AsideWrapper = styled.div`
  flex: 1 1 25%;
  background-color: white;
  margin-right: 20px;
  padding: 15px;
  border-radius: 5px;
  border: 1px solid #e1e2e3;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;
const ProfileInfoWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  img {
    border-radius: 100%;
    width: 75px;
    margin: 20px 0 15px 0;
  }
`;
const ProfileLinkSection = styled(Link)`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-bottom: 10px;
  &:hover {
    text-decoration: underline;
  }
  h1 {
    font-size: 18px;
    font-weight: 600;
    margin: 10px 0 15px 0;
  }
  span {
    font-size: 14px;
    color: #767676;
    margin-bottom: 5px;
  }
`;
const InterestTagBtn = styled.button`
  border-radius: 15px;
  background-color: #f2f4f7;
  padding: 10px 15px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
  
  &:hover {
    background-color: #eceef1;
  }
  div {
    display: flex;
    align-items: center;
    height: 23px;
    text-align: left;
    font-size: 12px;
    span:first-of-type {
      display: inline-flex;
      width: 16px;
      height: 16px;
      background: #36f;
      align-items: center;
      justify-content: center;
      border-radius: 5px;
      margin-right: 5px;
    }
  }
`;
const PointWrapper = styled.div`
    
`
function MyPageAside() {
  return (
    <AsideWrapper>
      <ProfileInfoWrapper>
        <img src="https://static.wanted.co.kr/oneid-user/mYzUKvtX8QmzEKLTcDmNiY/f96f25ab525d8c5984c002e1777425bf4cbd0b4de06b615618537ce6c3a5101c" />
        <ProfileLinkSection to={"/"}>
          <h1>Crap the God</h1>
          <span>dkodw@email.com</span>
          <span>010-1111-2222</span>
        </ProfileLinkSection>
      </ProfileInfoWrapper>
        <InterestTagBtn type="button">
          <div>
            <span
              style={{
                width: "16px",
                height: "16px",
                backgroundColor: "rgb(51, 102, 255)",
              }}
            >
              <svg width="6" height="6" viewBox="0 0 6 6">
                <g fill="#fff" fillRule="nonzero">
                  <path
                    d="M6.647 11L6.647 7.259 6.688 7.259 9.158 11 11 11 11 5 9.353 5 9.353 8.357 9.322 8.357 7.089 5 5 5 5 11z"
                    transform="translate(-123 -375) translate(20 365) translate(98 5)"
                  ></path>
                </g>
              </svg>
            </span>
            <span>관심태그 설정하기</span>
          </div>
          <svg width="12" height="12" viewBox="0 0 12 12">
            <path
              fill="#666666"
              d="M3.345 9.72a.75.75 0 0 0 1.06 1.06l4.25-4.25a.75.75 0 0 0 0-1.06l-4.25-4.25a.75.75 0 0 0-1.06 1.06L7.065 6l-3.72 3.72z"
            ></path>
          </svg>
        </InterestTagBtn>

    </AsideWrapper>
  );
}

export default MyPageAside;
