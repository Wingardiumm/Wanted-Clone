import React from "react";
import styled from "styled-components";

const ProfileNewNotice = styled.span`
  background-color: rgb(51, 102, 255);
  width: 13px;
  height: 13px;
  position: absolute;
  top: -2px;
  left: 22px;
  padding: 0 !important;
  display: inline-flex;
  background: #36f;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  svg {
    width: 5;
    height: 5;
  }
`;
function ProfileNewImg() {
  return (
    <ProfileNewNotice>
      <svg width="5" height="5" viewBox="0 0 6 6">
        <g fill="#fff" fillRule="nonzero">
          <path
            d="M6.647 11L6.647 7.259 6.688 7.259 9.158 11 11 11 11 5 9.353 5 9.353 8.357 9.322 8.357 7.089 5 5 5 5 11z"
            transform="translate(-124 -375) translate(20 365) translate(98 5)"
          ></path>
        </g>
      </svg>
    </ProfileNewNotice>
  );
}

export default ProfileNewImg;
