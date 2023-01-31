import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Imgbox = styled.div`
  position: relative;
  height: auto;
  padding-left: 0;
  width: 100%;
  padding-bottom: 70%;
  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, 0.06);
  overflow: hidden;
  img {
    object-fit: cover;
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    -o-object-position: center;
    object-position: center;
    z-index: 2;
    &::after {
      content: "";
      position: absolute;
      height: 48px;
      top: 0;
      left: 0;
      width: 100%;
      -webkit-transform: rotate(180deg);
      transform: rotate(180deg);
      opacity: 0;
      -webkit-transition: all 0.1s ease-out;
      transition: all 0.1s ease-out;
    }
  }
`;
const CareerExplain = styled.div`
  -ms-flex-direction: column;
  flex-direction: column;
  grid-gap: 4px;
  gap: 4px;
  margin-top: 12px;
  display: -ms-flexbox;
  display: flex;
  padding-right: 4px !important;
`;
const ItemTitle = styled.p`
  font-size: 18px;
  line-height: 144.4%;
  letter-spacing: -0.0002em;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  font-style: normal;
  font-weight: 600;
  color: #333;
  margin: 0;
  word-break: keep-all;
  overflow-wrap: anywhere;
`;
const ItemDescription = styled.p`
  font-size: 13px;
  line-height: 138.5%;
  color: #939393;
  margin: 0;
  font-weight: 400;
  letter-spacing: 0.025em;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: keep-all;
  overflow-wrap: anywhere;
`;
const ItemFromContainer = styled.div`
  display: -ms-flexbox;
  display: flex;
  -ms-flex-direction: row;
  flex-direction: row;
  -ms-flex-align: center;
  align-items: center;
  grid-gap: 6px;
  gap: 6px;
  padding: 1px 0;
`;
const ItemFromLogo = styled.img`
  border-radius: 50%;
  border: 1px solid #ececec;
  width: 24px;
  height: 24px;
`;
const ItemFromLogoName = styled.span`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-style: normal;
  font-weight: 400;
  letter-spacing: 0.031em;
  color: #888;
  font-size: 12px;
  line-height: 133.3%;
`;

function CareerItem({careerData}) {
  return (
    <Link to={"/"}>
      <Imgbox>
        <img
        src={careerData.img_path}
          alt={careerData.title}
        ></img>
      </Imgbox>
      <CareerExplain>
        <ItemTitle>{careerData.title}</ItemTitle>
        <ItemDescription>
        {careerData.content}
        </ItemDescription>
      </CareerExplain>
      <ItemFromContainer>
        <ItemFromLogo
          src={careerData.logo_img}
          alt={careerData.logo_name}
        />
        <ItemFromLogoName>{careerData.logo_name}</ItemFromLogoName>
      </ItemFromContainer>
    </Link>
  );
}

export default CareerItem;
