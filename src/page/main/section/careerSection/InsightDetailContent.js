import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { insightApi } from "../../../../api";
import InsightDetailRecommendedItem from "./InsightDetailRecommendedItem";

const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  max-width: 1060px;

  > video {
    width: 100%;
    height: 100%;
  }
`;

const ContentBodyWrapper = styled.div`
  padding: 30px 20px 34px;
  display: flex;
  width: 100%;
  flex-direction: column;
  max-width: 1060px;
  hr {
    width: 100%;
    margin-bottom: 30px;
    height: 1px;
    border: none;
    -ms-flex-negative: 0;
    flex-shrink: 0;
    background-color: #ececec;
  }
`;
const ContentBodyTop = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  /* height: 3000px; */
  .insight-detail-tag {
    color: #939393;
    font-weight: 500;
    font-size: 14px;
    line-height: 142.9%;
    letter-spacing: 0.0145em;
  }
  .insight-detail-title {
    color: #333;
    font-weight: 600;
    font-size: 22px;
    line-height: 127.3%;
    letter-spacing: -0.012em;
    margin-top: 8px;
  }
  .insight-detail-logo {
    margin: 30px 0;
    font-weight: 500;
    font-size: 13px;
    line-height: 19px;
    color: #939393;
    display: flex;
    align-items: center;
    div {
      display: inline-block;
      margin-right: 10px;
    }
    img {
      width: 30px;
      height: 30px;
      border-radius: 50%;
      border: 1px solid #ececec;
    }
  }
`;
const ContentBodyDescription = styled.div`
  overflow: ${(props) => (props.moreOn ? "initial" : "hidden")};
  max-height: ${(props) => (props.moreOn ? "initial" : "65.7px")};
  font-weight: 400;
  font-size: 15px;
  line-height: 146.7%;
  letter-spacing: 0.0096em;
  color: #666;
  word-break: keep-all;
  word-wrap: break-word;
  padding-right: 13px;
  /* height: 3000px; */
`;
const TextMoreBtn = styled.div`
  margin-top: 19px;
  color: #939393;
  button {
    display: flex;
    font-weight: 400;
    font-size: 14px;
    line-height: 142.9%;
    letter-spacing: 0.0145em;
    align-items: center;
    span {
      flex-shrink: 0;
    }
    span:nth-child(2) {
      flex-shrink: 1;
      margin-left: 7.78px;
      transform: ${(props) => props.moreOn && "rotate(180deg)"};
      svg {
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
const InsightDetailRecommendedList = styled.aside`
  width: 100%;
  padding: 30px 20px 37.5px;
  background-color: #f7f7f7;
  h3 {
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 144.4%;
    color: #333;
    margin-bottom: 7.5px;
  }
`;
function InsightDetailContent() {
  const [moreOn, setMoreOn] = useState(false);
  const [insightData, setInsightData] = useState();
  const [insightAllData, setInsightAllData] = useState();
  const insightId = useParams();
  useEffect(() => {
    insightApi
      .getInsightDetail(insightId.id)
      .then((Response) => {
        console.log(Response.data);
        if (Response.data.isSuccess) {
          setInsightData(Response.data.result[0]);
          setInsightAllData(Response.data.result);
          console.log(insightData);
        }
      })
      .catch((Error) => {
        console.log(Error);
      });
  }, []);

  return (
    <ContentWrapper>
      <video
        // autoPlay
        src="https://wanted.video.kr.kollus.com/kr/media-file.mp4?_s=dfb7e2d0008b58ed2f3164701794b788cb39c328c1c9b34aa9565deda289b9824a671619e98283a51c85961e1acd57887c16413ccbf62ec3a2934e44add534168dfc56c41452a5bd8a4f63881144ae65dd4b7a70f7782e5c72b4821d9bd4b34867b192f4428b6858a35877daa35e5973f78f431e68cd596475ecdb589a826ee1b9ddb4e9a290638998c3cc40f07e017b641ffc3cc51ffc43f95a75e6a72749623287f76cb341192732f53c355775c64a868b2718034409b0ecc97d5c73da7896f1e0f6ce880d4ddb26717964cb8572928d347c4856394faa71fdc14ac13906e30d5137f613e6af51b5426367d46340c97d903e5c7efad7eea6adc79fc691ff13411b289ea27101faf36f155fddfb4e2c2d4957d254cdbbb8c8b59f8d3d713f5852ed72ce3cd073c0b625032de434611eb7da609f19df6f97c84b64c3bbd89a7d84dd4984fa2790b7ad94faaf8e73826e9c49bf4db65dfec2093bb10b82216d63&channelkey=8qle38mzff18j8mw"
      />
      <ContentBodyWrapper>
        <ContentBodyTop>
          <p className="insight-detail-tag">
            {insightData?.insightTag1},{insightData?.insightTag2},{insightData?.insightTag3}
          </p>
          <h2 className="insight-detail-title">{insightData?.insightTitle}</h2>
          <div className="insight-detail-logo">
            <div>
              <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Ffavicon%2F144x144.png&w=80&q=75" alt="" />
            </div>
            <span>{insightData?.insightMakerName}</span>
          </div>
        </ContentBodyTop>
        <hr />
        <ContentBodyDescription moreOn={moreOn}>{insightData?.insightContents}</ContentBodyDescription>
        <TextMoreBtn moreOn={moreOn}>
          <button
            type="button"
            onClick={() => {
              setMoreOn(!moreOn);
            }}
          >
            {insightData?.insightContents.length > 150 && (
              <>
                <span>더보기</span>
                <span>
                  <svg className="SvgIcon_SvgIcon__root__svg__DKYBi" viewBox="0 0 19 19">
                    <path
                      d="M2.71967 5.71967C2.98594 5.4534 3.4026 5.4292 3.69621 5.64705L3.78033 5.71967L9.499 11.438L15.2162 5.7211C15.4824 5.45479 15.899 5.43051 16.1927 5.64832L16.2768 5.72092C16.5431 5.98715 16.5674 6.40381 16.3496 6.69745L16.277 6.78158L10.0304 13.0302C9.76416 13.2966 9.34745 13.3208 9.0538 13.103L8.96967 13.0303L2.71967 6.78033C2.42678 6.48744 2.42678 6.01256 2.71967 5.71967Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </span>
              </>
            )}
          </button>
        </TextMoreBtn>
      </ContentBodyWrapper>
      <InsightDetailRecommendedList>
        <h3>함께 보면 좋은 콘텐츠</h3>
        {insightAllData?.length > 1 &&
          insightAllData?.map((data, i) => {
            if (i > 0) {
              return <InsightDetailRecommendedItem data={data} />;
            }
          })}
        {/* <InsightDetailRecommendedItem/>
        <InsightDetailRecommendedItem/>
        <InsightDetailRecommendedItem/>
        <InsightDetailRecommendedItem/> */}
      </InsightDetailRecommendedList>
    </ContentWrapper>
  );
}

export default InsightDetailContent;
