import React, { useRef } from "react";
import styled from "styled-components";
import { SlideBtnGreyArrowSvg } from "../../style/SlideBtnStyle";

const JobDetailImgArrowBtn = styled.button.attrs({
  type: "button",
})`
  position: absolute;
  width: 9%;
  height: 100%;
  opacity: 0.7;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    display: block;
    width: 24px;
    height: 24px;
  }
`;
const NextBtn = styled(JobDetailImgArrowBtn)`
  right: 0;
`;
const PrevBtn = styled(JobDetailImgArrowBtn)`
  left: 0;
  svg {
    transform: rotate(-180deg);
  }
`;
const JobImgContainer = styled.section`
  position: relative;
  /* overflow: hidden; */
`;
const JobImgSlider = styled.div`
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  align-items: flex-start;
  padding-bottom: 4px;
  height: auto;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  overscroll-behavior: contain;
`;
const JobImgItemContainer = styled.div`
  scroll-snap-align: start;
  position: relative;
  width: 100%;
  flex-shrink: 0;
  padding-bottom: 70%;
  transition: all 0.5s ease-in-out;
  /* transform: translateX(-400px); */

  img {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    border-radius: 4px;
    object-fit: cover;
    outline: 1px solid rgba(0, 0, 0, 0.05);
    outline-offset: -1px;
  }
`;

function JobDetailImgSection({ detailData }) {
  const slide = useRef();
  const next = () => {
    slide.current.scrollBy({ left: 100, behavior: "smooth" });
  };
  const prev = () => {
    slide.current.scrollBy({ left: -100, behavior: "smooth" });
  };
  return (
    <JobImgContainer>
      <PrevBtn onClick={prev}>
        <SlideBtnGreyArrowSvg />
      </PrevBtn>
      <NextBtn onClick={next}>
        <SlideBtnGreyArrowSvg />
      </NextBtn>
      <JobImgSlider ref={slide}>
        {detailData?.totalImages?.map((data,i) => {
          if (data !== null) {
            return(
            <JobImgItemContainer key={data+i}>
              <img width={"100%"} src={data} />
            </JobImgItemContainer>

            );
          } else{
            return null;
          }
        })}
      </JobImgSlider>
    </JobImgContainer>
  );
}

export default JobDetailImgSection;
