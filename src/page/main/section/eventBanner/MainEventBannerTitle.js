import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { SlideBtnNextArrowSvg, SlideBtnPrevArrowSvg, SlideNextButton, SliderPrevButton } from "../../../../style/SlideBtnStyle";
import { MainContentTitleWrapper, MainTitle } from "../../MainContentSection";

const EventBannerTopContainer = styled.div`
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  margin-bottom: 30px;
  grid-gap: 8px;
  gap: 8px;
  justify-content: space-between;
  .disabled {
    cursor: not-allowed;
    opacity: 0.7;
    color: #ddd;
    border: 1px solid #eee;
    svg {
      opacity: 0.3;
    }
  }
`;
const EventBannerTitle = styled.div`
  text-align: center;
`;
const EventBannerLink = styled(Link)`
  margin: 5px 0 0;
  font-size: 15px;
  font-weight: 500;
  line-height: normal;
  vertical-align: middle;
  color: #767676 !important;
  span {
    display: inline-flex !important;
    width: 10px !important;
    margin-left: 4px !important;
    vertical-align: middle !important;
    margin-bottom: 2px;
    align-items: inherit;
    justify-content: inherit;
    svg {
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
      width: 1em;
      height: 1em;
      display: inline-block;
      fill: currentColor;
      -ms-flex-negative: 0;
      flex-shrink: 0;
      font-size: inherit;
    }
  }
`;
function MainEventCarouselTitle({ showPrevArrow, showNextArrow, next, prev }) {
  return (
    <EventBannerTopContainer>
      <SliderPrevButton className={!showPrevArrow && "disabled"} onClick={prev}>
      <SlideBtnPrevArrowSvg/>
      </SliderPrevButton>
      <EventBannerTitle>
        <MainContentTitleWrapper>
          <MainTitle>
            <h2>커리어 성장을 위한 맞춤 이벤트</h2>
          </MainTitle>
        </MainContentTitleWrapper>
        <EventBannerLink to={"/"}>
          이벤트 전체보기
          <span>
            <svg className="SvgIcon_SvgIcon__root__svg__DKYBi" viewBox="0 0 19 19">
              <path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path>
            </svg>
          </span>
        </EventBannerLink>
      </EventBannerTitle>
      <SlideNextButton className={!showNextArrow && "disabled"}  onClick={next}>
        <span>
          <SlideBtnNextArrowSvg/>
        </span>
      </SlideNextButton>
    </EventBannerTopContainer>
  );
}

export default MainEventCarouselTitle;
