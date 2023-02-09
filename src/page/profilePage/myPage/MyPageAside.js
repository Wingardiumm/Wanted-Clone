import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const AsideWrapper = styled.div`
  flex: 1 1 25%;

  margin-right: 20px;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  .profile-background {
    border-radius: 5px;
    border: 1px solid #e1e2e3;
    width: 100%;
    background-color: white;
  }
`;
const ProfileInfoWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 15px;
  width: 100%;
  border-bottom: solid 1px #e1e2e3;
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
const ContentTextWrapper = styled.div`
  padding: 30px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  border-bottom: 1px solid #e1e2e3;
  div {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    span {
      color: #333;
      font-size: 16px;
      line-height: 17px;
      font-weight: 500;
    }
    p {
      font-size: 18px;
      font-weight: 600;
    }
  }
`;
const InterestingTestBanner = styled.div`
  width: 100%;
  margin-top: 20px;
  font-weight: 700;
  font-size: 14px;
  line-height: 130%;
  color: #fff;
  padding: 22px 18px;
  background: #0d99ff;
  border-radius: 8px;
  background-image: url(https://static.wanted.co.kr/images/type-test/typetest-mywanted-banner.png);
  background-size: auto 100%;
  background-position: 100%;
  background-repeat: no-repeat;
  white-space: pre-wrap;
`;
const StyledContentTextWrapper = styled(ContentTextWrapper)`
  padding: 30px 25px 25px 20px;
  span {
    margin-bottom: 15px;
  }
`;
function MyPageAside({userData}) {
  return (
    <AsideWrapper>
      <div className="profile-background">
        <ProfileInfoWrapper>
          <img 
          src={userData?.profileImgUrl}
          // src="https://static.wanted.co.kr/oneid-user/mYzUKvtX8QmzEKLTcDmNiY/f96f25ab525d8c5984c002e1777425bf4cbd0b4de06b615618537ce6c3a5101c"
           />
          <ProfileLinkSection to={"/"}>
            <h1>{userData?.name}</h1>
            <span>{userData?.email}</span>
            <span>{userData?.phoneNumber}</span>
          </ProfileLinkSection>
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
        </ProfileInfoWrapper>
        <ContentTextWrapper>
          <div>
            <span>포인트</span>
            <p>{userData?.point}P</p>
          </div>
        </ContentTextWrapper>
        <StyledContentTextWrapper>
          <div>
            <span>관심 있음</span>
            <p>0</p>
          </div>
          <div>
            <span>열람</span>
            <p>0</p>
          </div>
          <div>
            <span>받은 제안</span>
            <p>0</p>
          </div>
        </StyledContentTextWrapper>
        <ContentTextWrapper>
          <div>
            <span>계정설정</span>
          </div>
        </ContentTextWrapper>
      </div>
      <InterestingTestBanner>
        <span>
          내 유형과 <br />
          가장 잘 맞는 회사는?
        </span>
      </InterestingTestBanner>
    </AsideWrapper>
  );
}

export default MyPageAside;
