import { Link } from "@mui/material";
import React from "react";
import styled from "styled-components";
import EventKindEdu from "../eventKindLogo/EventKindEdu";
import { BsPlusCircle } from "react-icons/bs";

const EventItemContainer = styled.div`
  width: 100%;
  display: inline-block;
  padding: 8px;
  a {
    text-decoration: none;
    cursor: pointer;
  }
`;
const EventItemBannerImg = styled.div`
  position: relative;
  height: auto;
  padding-bottom: 52.3%;
  padding-left: 0;
  img {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    border-radius: 4px;
    -o-object-fit: cover;
    object-fit: cover;
    outline: 1px solid rgba(0, 0, 0, 0.05);
    outline-offset: -1px;
    display: block;
    filter: ${(props) => (props.filterd ? "opacity(10%) brightness(90%)" : null)};
    /* filter: 'opacity(10%) brightness(90%)' */
  }
`;
const EventBannerDescription = styled.div`
  margin-top: 12px;
  filter: ${(props) => (props.filterd ? "opacity(10%)" : null)};
  h3 {
    @media (min-width: 1200px) {
      font-size: 16px;
      margin-top: 8px;
      font-weight: 700;
      line-height: 1.5;
      color: #333;
    }
    font-size: 14px;
  }
  p {
    @media (min-width: 1200px) {
      margin-top: 3px;
    }
    margin-top: 5px;
    font-size: 13px;
    font-weight: 500;
    color: #aaa;
  }
`;
const EventMoreBtnContainer = styled.div`
  position: absolute;
  top: 53%;
  left: 47%;
  -webkit-transform: translateX(-50%) translateY(-50%);
  transform: translateX(-50%) translateY(-50%);
`;
const EventMoreBtn = styled.button`
  color: #666;
  font-size: 14px;
  font-weight: 700;
  white-space: nowrap;
  @media (min-width: 1200px) {
    font-size: 16px;
  }
  span {
    width: 100%;
    font-size: inherit;
    font-weight: inherit;
    color: inherit;
    display: flex;
    align-items: center;
    justify-content: center;
    .bsplus-icon {
      margin-right: 15px;
      margin-left: -1px;
      padding-top: 2px;
      /* color: black */
      height: 20px;
    }
  }
`;
function EventItem({ eventData, filterd = false }) {
  return (
    <EventItemContainer>
      <Link to={"/"}>
        <EventItemBannerImg filterd={filterd}>
          <img src={eventData.img_path} alt="" />
          <EventMoreBtnContainer>
            {filterd && (
              <EventMoreBtn>
                <span>
                  <BsPlusCircle className="bsplus-icon" />더 보기
                </span>
              </EventMoreBtn>
            )}
          </EventMoreBtnContainer>
        </EventItemBannerImg>
        <EventBannerDescription filterd={filterd}>
          <div style={{ display: "flex" }}>
            <EventKindEdu />
          </div>
          <h3>{eventData.title}</h3>
          <p>{eventData.date}</p>
        </EventBannerDescription>
      </Link>
    </EventItemContainer>
  );
}

export default EventItem;
