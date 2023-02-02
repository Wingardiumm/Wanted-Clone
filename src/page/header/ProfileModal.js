import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { profileModalData } from "../../data/profileModalData";

const ModalWrapper = styled.div`
  position: absolute;
  top: 100%;
  right: -27px;
  margin-top: 13px;
  padding: 0 !important;
  display: block;
  transform: translate(50%, 8px);
`;
const ProfileModalListWrapper = styled.div`
  overflow: hidden;
  min-width: 194px;
  border-radius: 10px;
  box-shadow: 1px 2px 10px 0 rgb(0 0 0 / 30%);
  border: 1px solid #cdcdcd;
  background-color: #fff;
`;
const ProfileModalCustom = styled.div`
  position: absolute;
  right: 50%;
  bottom: 100%;
  height: 11px;
  overflow: hidden;
  margin-bottom: -1px;
  -webkit-transform: translateX(-47px);
  transform: translateX(-47px);
  &::after {
    content: "";
    margin-top: 4px;
    border: 1px solid #cdcdcd;
    background-color: #fff;
    height: 14px;
    width: 14px;
    display: block;
    border-top-right-radius: 30%;
    -webkit-transform: rotate(-55deg) skewX(-20deg);
    transform: rotate(-55deg) skewX(-20deg);
  }
`;
const ListWrapper = styled.ul`
  padding-top: 14px;
  li:nth-child(2):after,
  li:nth-child(6):after {
    content: "";
    display: block;
    margin: 9px 7px;
    height: 1px;
    background-color: #ececec;
    box-sizing: border-box;
  }
  li:nth-child(3),
  li:nth-child(7) {
    margin-top: 18px;
  }
  li:last-child {
    border: 0;
    margin-top: 9px;
    background-color: #f7f7f7;
    overflow: hidden;
    height: 50px !important;
    border-radius: 0 0 10px 10px;
    border-top: 1px solid #ececec;
  }
`;
const ProfileItem = styled.li`
  height: 34px !important;
  width: 100%;
  position: relative;
  display: inline-block;
  vertical-align: middle;
  a ,button{
    display: flex !important;
    align-items: center;
    justify-content: center;
    position: relative;
    font-weight: 500 !important;
    line-height: normal !important;
    padding: 8px !important;
    width: 100%;
    text-align: center;
    font-size: 14px;
    color: #333;
    span {
      font-weight: 500;
      /* line-height: normal !important; */
      /* padding: 8px !important; */
      width: 100%;
      position: relative;
    }
  }
`;
function ProfileModal() {
    const logout =()=>{
        localStorage.removeItem('jwt');
        localStorage.removeItem('user_id');
        window.location.replace('/')
    }
  return (
    <ModalWrapper>
      <ProfileModalListWrapper>
        <ListWrapper>
          {profileModalData.map((data) => {
            return (
              <ProfileItem key={data.id}>
                <Link to={"/"}>
                  <span>{data.name}</span>
                </Link>
              </ProfileItem>
            );
          })}
          <ProfileItem>
            <button type="button" onClick={logout}>
                <span>로그아웃</span>
            </button>
          </ProfileItem>
        </ListWrapper>
      </ProfileModalListWrapper>
      <ProfileModalCustom />
    </ModalWrapper>
  );
}

export default ProfileModal;
