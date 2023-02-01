import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { setInputPasswordPageOn, setSignInPageOn } from "../../../data/store";

const PasswordTitleForm = styled.div`
  padding: 0 20px;
  height: 64px;
  flex: none;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;
const BackArrowWrapper = styled.div`
  min-width: 64px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-weight: 400;
  font-size: 17px;
`;
const BackArrowBtn = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  padding: 8px;
  margin: -8px;
  fill: var(--theme-palette-colors-black-100);
  span {
    display: flex;
    align-items: inherit;
    justify-content: inherit;
    svg {
      user-select: none;
      width: 1em;
      height: 1em;
      display: inline-block;
      fill: currentColor;
      flex-shrink: 0;
      font-size: inherit;
      font-size: 20px;
    }
  }
`;
const TitleWrapper = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
`;
const Title = styled.p`
  color: var(--theme-palette-colors-black-100);
  font-weight: var(--text-weight-headline-bold);
  text-align: center;
  letter-spacing: var(--text-spacing-headline);
  font-size: var(--text-size-headline);
  line-height: var(--text-height-headline);
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
`;
function PasswordTitle() {
  const dispatch = useDispatch();
  return (
    <PasswordTitleForm>
      <BackArrowWrapper>
        <BackArrowBtn onClick={()=>{
          dispatch(setInputPasswordPageOn(false))
          dispatch(setSignInPageOn(true))
        }}>
          <span>
            <svg viewBox="0 0 18 18" className="css-ckhhlt">
              <path d="m6.045 9 5.978-5.977a.563.563 0 1 0-.796-.796L4.852 8.602a.562.562 0 0 0 0 .796l6.375 6.375a.563.563 0 0 0 .796-.796L6.045 9z"></path>
            </svg>
          </span>
        </BackArrowBtn>
      </BackArrowWrapper>
      <TitleWrapper>
        <Title>이메일로 로그인</Title>
      </TitleWrapper>
      <BackArrowWrapper/>
    </PasswordTitleForm>
  );
}

export default PasswordTitle;
