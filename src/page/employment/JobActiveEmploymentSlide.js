import React, { useRef, useState } from "react";
import Slider from "react-slick";
import styled from "styled-components";
import { SlideBtnNextArrowSvg, SlideBtnPrevArrowSvg, SlideNextButton, SliderPrevButton } from "../../style/SlideBtnStyle";
import ActiveJobListItem from "./ActiveJobListItem";

const ActiveEmploymentTitle = styled.h3`
  font-size: 22px;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.3px;
  color: #333;
  margin: 20px 0 14px;
`;
const ActiveEmploymentSlideBtnWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: -40px 0 14px;
  > button {
    &:disabled {
      cursor: not-allowed;
      opacity: 0.7;
      color: #ddd;
      border: 1px solid #eee;
      &:hover {
        border: 1px solid #eee;
      }
    }
    &:hover {
      border: 1px solid #aaa;
    }
  }
  > button:first-child {
    margin-right: 11px;
  }
`;
const JobActiveEmploymentSlider = styled(Slider)`
  display: flex !important;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  margin-left: -9px;
  margin-right: -4.5px;
  .slick-list {
    padding: 0;
  }
  .slick-list .slick-slide {
    /* width: 201px; */
    padding: 0;
  }
  &::after {
    display: ${(props) => (props.showNextArrow ? "block" : "none")};
    content: "";
    position: absolute;
    z-index: 1;
    width: 4.7%;
    top: 0;
    height: 271px;
    pointer-events: none;
    right: -5px;
    background: linear-gradient(270deg, #fff, hsla(0, 0%, 100%, 0) 115.52%);
  }
`;
const SliderContainer = styled.div`
  max-width: 1060px;
  margin-bottom: 40px;
  margin-right: 9px;
  position: relative;
`;
function JobActiveEmploymentSlide() {
  const [showNextArrow, setShowNextArrow] = useState(12 - 2 > 0);
  const [showPrevArrow, setShowPrevArrow] = useState(false);
  const beforeChange = (prev, next) => {
    console.log(next);
    setShowPrevArrow(next > 0);
    setShowNextArrow(next < 12 - 5.2);
  };
  const slider = useRef();
  const settings = {
    infinite: false,
    speed: 200,
    slidesToShow: 5.2,
    slidesToScroll: 5,
    variableWidth: false,
    slidePerRow: 1,
    arrows: true,
    beforeChange: beforeChange,
  };
  const next = () => {
    slider.current.slickNext();
    console.log(slider.current);
  };
  const prev = () => {
    slider.current.slickPrev();
  };
  return (
    <>
      <ActiveEmploymentTitle>적극 채용중인 회사</ActiveEmploymentTitle>
      <ActiveEmploymentSlideBtnWrapper>
        <SliderPrevButton onClick={prev} disabled={!showPrevArrow}>
          <span>
            <SlideBtnPrevArrowSvg />
          </span>
        </SliderPrevButton>
        <SlideNextButton onClick={next} disabled={!showNextArrow}>
          <span>
            <SlideBtnNextArrowSvg />
          </span>
        </SlideNextButton>
      </ActiveEmploymentSlideBtnWrapper>
      <SliderContainer>
        <JobActiveEmploymentSlider ref={slider} {...settings} showNextArrow={showNextArrow}>
          <ActiveJobListItem />
          <ActiveJobListItem />
          <ActiveJobListItem />
          <ActiveJobListItem />
          <ActiveJobListItem />
          <ActiveJobListItem />
          <ActiveJobListItem />
          <ActiveJobListItem />
          <ActiveJobListItem />
          <ActiveJobListItem />
          <ActiveJobListItem />
          <ActiveJobListItem />
        </JobActiveEmploymentSlider>
      </SliderContainer>
    </>
  );
}

export default JobActiveEmploymentSlide;
