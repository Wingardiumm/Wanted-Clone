import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ActiveItem = styled(Link)`
  > header {
    z-index: 1;
    border-radius: 3px 3px 0 0;
    overflow: hidden;
    > div {
      height: 147px;
      border-radius: 3px 3px 0 0;
      background-position: 50%;
      background-size: cover;
      background-color: #f2f2f2;
      background-repeat: no-repeat;
      transition: all 0.5s ease-in-out;
      box-shadow: inset 0 0 0 1px rgb(0 0 0 / 10%);
      margin: 0 9px;
    }
  }
  > footer {
    margin: 0 9px;
    padding: 34px 16px 0;
    height: 124px;
    border: 1px solid #e1e2e3;
    border-top: none;
    border-radius: 0 0 3px 3px;
    position: relative;
    > div {
      position: absolute;
      top: -25px;
      left: 16px;
      width: 50px;
      height: 50px;
      /* background-color: #f2f2f2; */
      background-position: 50%;
      /* background-size: cover; */
      background-repeat: no-repeat;
      z-index: 0;
      box-shadow: inset 0 0 0 1px rgb(0 0 0 / 10%);
      background-size: contain;
      background-color: rgb(255, 255, 255);
    }
    h4 {
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      position: relative;
      font-size: 16px;
      font-weight: 600;
      letter-spacing: -0.3px;
      color: #333;
      line-height: 1.2;
      margin: 4px 0;
      overflow: hidden;
      max-height: 58px;
    }
    h5 {
      color: #999;
      margin-top: 6px;
      font-size: 14px;
      font-weight: 400;
      letter-spacing: -0.2px;
    }
  }
`;

function ActiveJobListItem() {
  return (
    <ActiveItem to={"/"}>
      <header>
        <div
          style={{
            backgroundImage: `url("https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F16075%2Fzij45glkxnkkudc0__400_400.jpg&w=400&q=75")`,
          }}
        />
      </header>
      <footer>
        <div style={{backgroundImage: `url("https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fwdes%2F0_5.638483f6.jpg&w=100&q=75")`}} />
        <h4>팬마음</h4>
        <h5>
            8개 포지션
        </h5>
      </footer>
    </ActiveItem>
  );
}

export default ActiveJobListItem;
