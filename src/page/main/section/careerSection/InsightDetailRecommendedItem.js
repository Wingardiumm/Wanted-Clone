import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ItemContainer = styled(Link)`
  width: 100%;
`;

const ItemWrapper = styled.div`
  padding: 7.5px 0;
  display: flex;
  cursor: pointer;
  img {
    position: relative;
    width: 120px;
    height: 80px;
    border-radius: 4px;
    object-fit: cover;
    object-position: top;
    outline: 1px solid rgba(0, 0, 0, 0.05);
    outline-offset: -1px;
    flex-shrink: 0;
  }
`;
const ItemContent = styled.div`
  margin-left: 12px;
  display: flex;
  flex-direction: column;
  width: 100%;
  p {
    font-weight: 400;
    font-size: 13px;
    line-height: 138.5%;
    letter-spacing: 0.025em;
    color: #888;
    -webkit-line-clamp: 1;
  }
  .insight-recommended-title {
    font-weight: 600;
    font-size: 14px;
    line-height: 142.9%;
    letter-spacing: 0.0192em;
    color: #333;
    -webkit-line-clamp: 2;
    margin: 4px 0;
  }
`;
function InsightDetailRecommendedItem({data}) {
  return (
    <ItemContainer to={"/"}>
      <ItemWrapper>
        <img
          alt="dd"
          src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fwanted.video.kr.kollus.com%2Fkr%2Fsnapshot%2Fwanted%2F20211218%2F6%2F33398540.jpg&w=700&q=75"
        />
        <ItemContent>
          <p>{data?.recommendedInsightTag1},{data?.recommendedInsightTag2},{data?.recommendedInsightTag3}</p>
          <h5 className=".insight-recommended-title">{data?.recommendedInsightTitle}</h5>
          <p>{data?.recommendedInsightMakerName}</p>
        </ItemContent>
      </ItemWrapper>
    </ItemContainer>
  );
}

export default InsightDetailRecommendedItem;
