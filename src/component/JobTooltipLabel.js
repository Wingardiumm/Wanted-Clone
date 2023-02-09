import React, { useState } from "react";
import styled from "styled-components";

const TootipLabel = styled.button`
  position: relative;
  .job-card-tooltip {
    border: 1px solid #00aead;
    color: #00aead;
    border-radius: 2px;
    background-color: #fff;
    display: inline-block;
    font-size: 10px;
    font-weight: 600;
    height: 19px;
    line-height: 19px;
    margin-top: 4px;
    padding: 0 5px;
    > span {
      position: relative;
      line-height: 19px;
      top: -1px;
    }
  }
`;
const TooltipModal = styled.div`
  color: #333;
  font-size: 12px;
  font-weight: 400;
  min-height: 40px;
  height: auto;
  line-height: normal;
  position: absolute;
  padding: 11px 12px;
  background: #fff;
  border: 1px solid #999;
  z-index: 1;
  display: ${(props) => (props.modalOn ? "block" : "none")};
  white-space: nowrap;
  top: calc(100% + 4px);
  left: 50%;
  transform: translateX(-50%);
`;

function JobTooltipLabel({ responseRateWord,responseRate }) {
  const [modalOn, setModalOn] = useState(false);
  return (
    <TootipLabel
      type="button"
      onMouseEnter={() => {
        setModalOn(true);
      }}
      onMouseLeave={() => {
        setModalOn(false);
      }}
    >
      <div className="job-card-tooltip">
        <span>{responseRateWord}</span>
      </div>
      <TooltipModal modalOn={modalOn}>지원 후 응답받을 확률이 {responseRate}% 이상입니다.</TooltipModal>
    </TootipLabel>
  );
}

export default JobTooltipLabel;
