import React, { useState } from "react";
import styled from "styled-components";
import Slider from "react-slick";
import { SlideBtnNextArrowSvg, SlideBtnPrevArrowSvg, SlideNextButton, SliderPrevButton } from "../../style/SlideBtnStyle";
import JobTagItem from "./jobTagSlider/JobTagItem";
import { jobTagData } from "../../data/jobTagData";
const SliderContainer = styled.div`
  width: 100%;
  max-width: 1060px;
  margin: 30px auto;
  display: flex;
  flex-direction: row;
  position: relative;
  grid-gap: 8px;
  gap: 8px;
`;
const StyledArrowBtn = styled(SlideNextButton)`
  position: absolute;
  z-index: 1;
  width: 30px;
  height: 30px;
  border: 1px solid #e1e2e3;
  border-radius: 9999px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  right: 10px;
  top: 16px;
  span {
    display: flex;
    justify-content: center;
    align-items: center;
    svg {
      user-select: none;
      width: 1em;
      height: 1em;
      display: inline-block;
      fill: currentColor;
      flex-shrink: 0;
      font-size: inherit;
    }
  }
`;
const StyledPrevBtn = styled(StyledArrowBtn)`
right: 0;
    left: 5px;
`
const ScrollableNavSlider = styled(Slider)`
  display: flex !important;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  .slick-prev:hover, .slick-prev:focus, .slick-next:hover, .slick-next:focus
   {
    color: inherit;
    outline: inherit;
    background: inherit;
  }
  .slick-next::before,
  .slick-prev::before {
    font-size: 0;
  }
  .slick-list .slick-track .slick-slide{
    padding: 0;
  }
  .tab-selected {
    border-color: #36f;
    color: #36f;
  }
   .slick-list {
    padding: 0px;
  }
  .slick-list::after,
  .slick-list::before {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    z-index: 1;
    width: 80px;
    height: 32px;
  }
  .slick-list::before {
    opacity: ${(props) => !props.showPrevArrow && 0};
    left: 0;
    background-color: #fff;
    @media (min-width: 1200px) {
      background: linear-gradient(270deg, hsla(0, 0%, 100%, 0), #fff 50%);
    }
  }
  .slick-list::after {
    opacity: ${(props) => !props.showNextArrow && 0};
    right: 0;
    background-color: #fff;
    @media (min-width: 1200px) {
      background: linear-gradient(90deg, hsla(0, 0%, 100%, 0), #fff 50%);
    }
  }
  .slick-slide {
    padding: 0 3px;
  }
  /* .slick-current{
    border: 1px solid black;
} */
  .slick-list .slick-track :first-child {
    /* padding-left: 0 !important; */
  }
`;

function JobFilterTagSlider() {
  const [showPrevArrow, setShowPrevArrow] = useState(false);
  const [showNextArrow, setShowNextArrow] = useState(jobTagData.length > 1);
  const beforeChange = (prev, next) => {
    setShowPrevArrow(next > 0);
    setShowNextArrow(next < jobTagData.length - 2);
  };
  const settings = {
    infinite: false,
    speed: 200,
    slidesToShow: 9,
    slidesToScroll: 2,
    variableWidth: true,
    slidePerRow: 1,
    beforeChange: beforeChange,
    prevArrow: <SamplePrevArrow />,
    nextArrow: <SampleNextArrow />,
  };

  return (
    <SliderContainer>
      <ScrollableNavSlider showPrevArrow={showPrevArrow} showNextArrow={showNextArrow} {...settings}>
        {jobTagData.map((data) => (
          <JobTagItem key={data.id} tagData={data} />
        ))}
      </ScrollableNavSlider>
      {/* <AllTabShowBtn /> */}
    </SliderContainer>
  );
}

function SamplePrevArrow(props) {
  const { className, onClick } = props;
  return (
    onClick !== null && (
      <StyledPrevBtn className={className} onClick={onClick}>
        <span>
          <SlideBtnPrevArrowSvg />
        </span>
      </StyledPrevBtn>
    )
  );
}
function SampleNextArrow(props) {
  const { className, onClick } = props;
  // console.log(props);
  return (
    onClick !== null && (
      <StyledArrowBtn className={className} onClick={onClick}>
        <span>
          <SlideBtnNextArrowSvg />
        </span>
      </StyledArrowBtn>
    )
  );
}

export default JobFilterTagSlider;
