import React, { useEffect, useRef, useState } from "react";
import MainEventCarouselTitle from "./MainEventBannerTitle";
import styled from "styled-components";
import Slider from "react-slick";
import EventItem from "./EventItem";
import axios from "axios";
import { eventApi } from "../../../../api";
// import { eventBannerData } from "../../../../data/eventBannerData";

const SliderContainer = styled.div`
  /* width: 100%;
  max-width: 1060px;
  margin: 30px auto;
  display: flex;
  flex-direction: row;
  position: relative; */
  margin: -8px;
`;
const EventBannerSlider = styled(Slider)`
  display: flex !important;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  .slick-list {
    padding: 0;
  }
  .slick-slide {
    outline: none;
    width: 538px;
    padding: 0;
  }
  .slick-track :nth-last-child() {
    img {
      filter: opacity(10%) brightness(90%);
    }
  }
`;
function MainEventSlide() {
  const slider1 = useRef();
  const [eventBannerData, setEventBannerData] = useState();
  const [showPrevArrow, setShowPrevArrow] = useState(false);
  const [showNextArrow, setShowNextArrow] = useState(true);
  const beforeChange = (prev, next) => {
    setShowPrevArrow(next > 0);
    setShowNextArrow(next < eventBannerData?.length - 2);
  };
  useEffect(()=>{
    eventApi.getMainEventBanner()
    .then((Response) => {
      if(Response.data.isSuccess){
        setEventBannerData(Response.data.result)
      }
    })
    .catch((Error) => {
      console.log(Error);
    });
  },[])
  const settings = {
    infinite: false,
    speed: 200,
    slidesToShow: 2,
    slidesToScroll: 2,
    variableWidth: true,
    slidePerRow: 1,
    beforeChange: beforeChange,
  };
  const next = () => {
    slider1.current.slickNext();
    console.log(slider1.current);
  };
  const prev = () => {
    slider1.current.slickPrev();
  };
  
  return (
    <>
      <MainEventCarouselTitle showPrevArrow={showPrevArrow} showNextArrow={showNextArrow} prev={prev} next={next} />
      <SliderContainer>
        <EventBannerSlider ref={(slider) => (slider1.current = slider)} {...settings}>
          {eventBannerData?.map((data, i) => {
            if (i < 6) {
              return <EventItem key={data?.eventId} eventData={data} />;
            } else if (i === 6) {
              return <EventItem key={data?.eventId} eventData={data} filterd={true} />;
            }
          })}
        </EventBannerSlider>
      </SliderContainer>
    </>
  );
}

export default MainEventSlide;
