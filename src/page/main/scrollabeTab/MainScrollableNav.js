import React, { useState } from "react";
import styled from "styled-components";
import Slider from "react-slick";
import mainTabData from "../../../data/mainTabData";
import TabList from "./TabList";
import TabPrevBtn from "./TabPrevBtn";
import TabNextBtn from "./TabNextBtn";
import AllTabShowBtn from "./AllTabShowBtn";

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
const ScrollableNavSlider = styled(Slider)`
  display: flex !important;
  align-items: center;
  flex-wrap: wrap;
  width: calc(100% - 40px - 8px);
  .tab-selected {
    border-color: #36f;
    color: #36f;
  }
  .slick-list {
    padding: 0;
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

function MainScrollableNav({setChoiceTabId}) {
  const [tabList] = useState(mainTabData);
  
  const tabActiveHandling = (e) => {
    setChoiceTabId(e.target.name);
    for (let i = 0; i < tabList.length; i++) {
      if (tabList[i].id === Number(e.target.id)) {
        tabList[i].isChecked = true;
      } else {
        tabList[i].isChecked = false;
      }
    }
  };
  const settings = {
    infinite: false,
    speed: 200,
    slidesToShow: 9,
    slidesToScroll: 3,
    variableWidth: true,
    slidePerRow: 1,
    // arrow: false,
    // focusOnSelect:true,
    prevArrow: <SamplePrevArrow />,
    nextArrow: <SampleNextArrow />,
  };

  return (
    <SliderContainer>
      <ScrollableNavSlider {...settings}>
        {tabList.map((tab) => {
          return <TabList key={tab.id} tabData={tab} onClick={tabActiveHandling} />;
        })}
      </ScrollableNavSlider>
      <AllTabShowBtn />
    </SliderContainer>
  );
}

function SamplePrevArrow(props) {
  const { className, onClick } = props;
  return onClick !== null && <TabPrevBtn className={className} onClick={onClick} />;
}
function SampleNextArrow(props) {
  const { className, onClick } = props;
  //   console.log(props);
  return onClick !== null && <TabNextBtn className={className} onClick={onClick} />;
}

export default MainScrollableNav;
