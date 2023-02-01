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
`;
const ProfileItem = styled.li`
  height: 34px !important;
  width: 100%;

`;
const ProfileListLink = styled(Link)`
    display: flex !important;
    align-items: center;
    justify-content: center;
    position: relative;
    font-weight: 500 !important;
    line-height: normal !important;
    padding: 8px !important;
    width: 100%;
    span {
      position: relative;
    }
`
function ProfileModal() {
  return (
    <ModalWrapper>
      <ProfileModalListWrapper>
        <ListWrapper>
          <ProfileItem>
            {profileModalData.map((data) => {
              let section = false;
              if (data.section) {
                section = true;
              } else {
                section = false;
              }
              return (
                <ProfileListLink key={data.id} to={"/"} sectionCheck={section}>
                  <span>{data.name}</span>
                </ProfileListLink>
              );
            })}
          </ProfileItem>
        </ListWrapper>
      </ProfileModalListWrapper>
      <ProfileModalCustom />
    </ModalWrapper>
  );
}

export default ProfileModal;
