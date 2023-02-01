import React from "react";
import { VscBell } from "react-icons/vsc";
import styled from "styled-components";
import ProfileModal from "./ProfileModal";
import ProfileNewImg from "./ProfileNewImg";

const ProfileImgBtn = styled.button`
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  vertical-align: top;
  padding: 0;
  margin-right: 11px;
`;
const ProfileImgWrapper = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 1px solid #e1e2e3;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;
const ProfileImgBackground = styled.div`
  background-image: url(https://static.wanted.co.kr/oneid-user/mYzUKvtX8QmzEKLTcDmNiY/f96f25ab525d8c5984c002e1777425bf4cbd0b4de06b615618537ce6c3a5101c),
    url(https://static.wanted.co.kr/images/profile_default.png);
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background-position: 50%;
  background-size: cover;
  background-repeat: no-repeat;
`;
function Profile() {
  return (
    <>
      <li>
        <button>
          <VscBell
            style={{
              fontSize: "18px",
              marginTop: "3px",
              // padding: "0 5px",
              color: "#333",
              fontWeight: "600",
              lineHeight: 1,
            }}
          ></VscBell>
        </button>
      </li>
      <li>
        <ProfileImgBtn type="button">
          <ProfileImgWrapper>
            <ProfileImgBackground />
          </ProfileImgWrapper>
        </ProfileImgBtn>
        <ProfileNewImg></ProfileNewImg>
        <ProfileModal/>
      </li>
    </>
  );
}

export default Profile;
