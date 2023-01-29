import Slider from "react-slick";
import "./slick.css";
import "./slick-theme.css";
import bannerData from "../../data/bannerData";
import BannerImg, { BannerTextCard } from "../../page/main/banner/BannerImg";
import SliderPrevBtn from "./SliderPrevBtn";
import SliderNextBtn from "./SliderNextBtn";
import styled from "styled-components";

function SamplePrevArrow(props) {
  const { className, onClick } = props;
  return <SliderPrevBtn className={className} onClick={onClick} />;
}
function SampleNextArrow(props) {
  const { className, onClick } = props;
  return <SliderNextBtn className={className} onClick={onClick} />;
}
const CenterSlider = styled(Slider)`
  .slick-center {
    ${BannerTextCard} {
      opacity: 1;
    }
  }
`;
export const SimpleSlider = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 4000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <CenterSlider {...settings}>
      {bannerData.map((banner) => (
        <BannerImg key={banner.id} bannerData={banner} />
      ))}
    </CenterSlider>
  );
};
