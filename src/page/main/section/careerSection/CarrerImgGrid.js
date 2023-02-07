import React, { useEffect, useState } from "react";
import styled from "styled-components";
import CareerItem from "./CareerItem";
import _ from "lodash";

const CareerList = styled.ul`
  width: 100%;
  margin-bottom: 50px;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  list-style-type: none;
  grid-gap: 32px 20px;
  gap: 32px 20px;
  width: 1060px;
  max-width: 1060px;
  
`;
const CarrerContainer = styled.li`
  position: relative;
  -webkit-transition: all 0.1s ease-out;
  transition: all 0.1s ease-out;
  will-change: transform;
  width: calc(25% - 15px);
  &:hover{
    bottom: 10px;
  }
  /* display: grid;
  grid-template-columns: 1fr 1fr 1fr; */
  a {
    -webkit-transition: opacity, color 0.1s ease-out;
    transition: opacity, color 0.1s ease-out;
    color: inherit;
  }
`;
const CareerListBtnContainer = styled.div`
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: center;
  justify-content: center;
  button {
    position: relative;
    display: -ms-inline-flexbox;
    display: inline-flex;
    -ms-flex-align: center;
    align-items: center;
    -ms-flex-pack: center;
    justify-content: center;
    vertical-align: middle;
    min-width: 64px;
    padding: 0 27px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    border-radius: 25px;
    font-size: 16px;
    font-weight: 700;
    line-height: normal;
    cursor: pointer;
    width: 345px;
    background-color: #fff;
    border-color: #ececec !important;
    color: #333 !important;
    height: 50px;
    margin: 0 auto;
    border: 1px solid;
  }
`;
const BtnName = styled.span`
  width: 100%;
  font-size: inherit;
  font-weight: inherit;
  display: inherit;
  -ms-flex-align: inherit;
  align-items: inherit;
  -ms-flex-pack: inherit;
  justify-content: inherit;
  color: inherit;
  .btn-svg-wrapper {
    margin-top: -2px;
    margin-right: -1px;
    margin-left: 2px;
    span {
      margin-left: 3px;
      color: #333 !important;
      display: -ms-flexbox;
      display: flex;
      -ms-flex-align: inherit;
      align-items: inherit;
      -ms-flex-pack: inherit;
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
  }
`;
function CarrerImgGrid({insightList}) {
  const [count, setCount] = useState(0);
  const [careerSliceData, setCareerSliceData] = useState(insightList);
  useEffect(() => {
    console.log(count, careerSliceData);
    if (count === 0) {
      setCareerSliceData(insightList?.slice(0, 12));
    } else if (count === 1) {
      setCareerSliceData([...careerSliceData, ...insightList?.slice(12, 20)]);
    } else {
      console.log(count);
      setCareerSliceData(_.shuffle(insightList)?.slice(0, 20));
    }
    console.log(careerSliceData)
  }, [count,insightList]);
  return (
    <>
      <CareerList>
        {careerSliceData?.map((data, i) => {
          return (
            <CarrerContainer key={i}>
              <CareerItem careerData={data} />
            </CarrerContainer>
          );
        })}
      </CareerList>
      <CareerListBtnContainer>
        <button onClick={() => setCount((prev) => prev + 1)}>
          <BtnName>
            더 많은 콘텐츠 보기
            <span className="btn-svg-wrapper">
              <span>
                <svg className="SvgIcon_SvgIcon__root__svg__DKYBi" viewBox="0 0 19 19">
                  <path
                    d="M13.1626 2.18324C12.9646 1.81941 12.5091 1.68497 12.1453 1.88297L9.1415 3.51761L9.05032 3.57599C8.84573 3.72869 8.73855 3.97138 8.7508 4.21497C8.75027 4.22658 8.75 4.23825 8.75 4.24999C8.75 4.4931 8.86567 4.7092 9.04499 4.84625L10.8472 7.55276L10.9154 7.6405C11.1604 7.91184 11.5737 7.97005 11.8871 7.76134L11.9749 7.69315C12.2462 7.44811 12.3044 7.03482 12.0957 6.72139L11.1089 5.23906C13.3615 5.9271 15 8.0222 15 10.5C15 13.5376 12.5376 16 9.5 16C8.02047 16 6.63595 15.4146 5.61069 14.3893C4.58543 13.364 4 11.9795 4 10.5C4 9.02131 4.58545 7.63672 5.6109 6.61047C5.90367 6.31746 5.90349 5.84259 5.61048 5.54981C5.31747 5.25703 4.8426 5.25722 4.54982 5.55023C3.24615 6.85493 2.5 8.61955 2.5 10.5C2.5 12.3814 3.24621 14.1461 4.55003 15.45C5.85384 16.7538 7.61862 17.5 9.5 17.5C13.366 17.5 16.5 14.366 16.5 10.5C16.5 7.39419 14.4773 4.76082 11.6774 3.84527L12.8623 3.20051L12.9484 3.14585C13.2462 2.92724 13.344 2.51675 13.1626 2.18324Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </span>
            </span>
          </BtnName>
        </button>
      </CareerListBtnContainer>
    </>
  );
}

export default CarrerImgGrid;
