import React, { useEffect } from "react";
import { BsShare } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import InsightDetailContent from "./InsightDetailContent";

const InsightDetaillContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const InsightDetailBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
`;
const InsightDetailBodyWrapper = styled.div`
  display: flex;
  padding: 0;
  position: relative;
  overflow-x: visible;
  overflow-y: auto;
  width: 700px;
  z-index: 1399;
  flex-direction: column;
  height: 100%;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 4px 4px 4px 0 rgb(0 0 0 / 10%);
`;
const InsightDetailCloseBtn = styled.button`
  border: none;
  position: absolute;
  top: 16px;
  right: 16px;
  z-index: 1400;
  cursor: pointer;
  color: #fff;
`;
const ButtonWrapper = styled.div`
  display: flex;
  padding: 0;
  position: relative;
  width: 700px;
  z-index: 1399;
  flex-direction: column;
  height: calc(100% - 64px);
  background-color: #fff;
  border-radius: 5px;
`;
const InsightShareBtn = styled.button`
  position: absolute !important;
  bottom: 30px !important;
  right: 30px !important;
  width: 55px !important;
  height: 55px !important;
  background: #fff !important;
  border: 1px solid #36f !important;
  border-radius: 50% !important;
  -webkit-box-shadow: 8px 8px 20px rgba(0, 0, 0, 0.07) !important;
  box-shadow: 8px 8px 20px rgba(0, 0, 0, 0.07) !important;
  padding: 0;
  min-width: auto;
  z-index: 1400;
  svg{
    position: relative;
    right: 1px;
    width: 18px;
    height: 18px;
    color: #36F;
  }
`;
function InsightDetail() {
  const navigate = useNavigate();
  useEffect(() => {
    document.body.style = `overflow:hidden`;
    return () => (document.body.style = `overflow-x: hidden`);
  }, []);
  return (
    <InsightDetaillContainer>
      <InsightDetailBackground
        onClick={() => {
          navigate('/');
        }}
      />
      <ButtonWrapper>
        <InsightDetailCloseBtn onClick={() => {
          navigate('/');
        }}>
          <svg xmlns="https://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 18 18" fill="none">
            <path d="M0 9C0 4.02944 4.02944 0 9 0C13.9706 0 18 4.02944 18 9C18 13.9706 13.9706 18 9 18C4.02944 18 0 13.9706 0 9Z" fill="#e1e2e3"></path>
            <path
              d="M5.79747 5.09803C5.60173 4.9528 5.32396 4.96894 5.14645 5.14645C4.95118 5.34171 4.95118 5.65829 5.14645 5.85355L8.29289 9L5.14645 12.1464L5.09803 12.2025C4.9528 12.3983 4.96894 12.676 5.14645 12.8536L5.20253 12.902C5.39827 13.0472 5.67604 13.0311 5.85355 12.8536L9 9.70733L12.1464 12.8536L12.2025 12.902C12.3983 13.0472 12.676 13.0311 12.8536 12.8536C13.0488 12.6583 13.0488 12.3417 12.8536 12.1464L9.70711 9L12.8536 5.85355L12.902 5.79747C13.0472 5.60173 13.0311 5.32396 12.8536 5.14645L12.7975 5.09803C12.6017 4.9528 12.324 4.96894 12.1464 5.14645L9 8.29267L5.85355 5.14645L5.79747 5.09803Z"
              fill="#fff"
            ></path>
          </svg>
        </InsightDetailCloseBtn>
        <InsightDetailBodyWrapper>
          <InsightDetailContent />
        </InsightDetailBodyWrapper>
        <InsightShareBtn>
          <BsShare />
        </InsightShareBtn>
      </ButtonWrapper>
    </InsightDetaillContainer>
  );
}

export default InsightDetail;
