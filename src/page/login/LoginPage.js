import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import InputSignInPassword from "./password/InputSignInPassword";
import SignInForm from "./SignInForm";
import SignUpForm from "./SignUpForm";

export const LoginPageBackground = styled.div`
  width: 100%;
  height: calc(var(--vh, 1vh) * 100);
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  background-color: var(--theme-palette-colors-base-bg);
  overflow: hidden;
`;
export const LoginBoxWrapper = styled.div`
  max-width: 400px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  -webkit-box-pack: center;
  justify-content: center;
  align-items: flex-end;
`;
const LoginBox = styled.div`
  border-radius: 5px;
  width: 100%;
  max-height: calc(100vh - 100px);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  background-color: var(--theme-palette-colors-contents-bg);
  border: 1px solid var(--theme-palette-colors-bluegray-200);
  ::-webkit-scrollbar {
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
    display: none;
  }
`;

function LoginPage() {
  const signInPageOn = useSelector((props) => props.signInPageOn);
  const signUpPageOn = useSelector((props) => props.signUpPageOn);
  const inputPasswordPageOn = useSelector((props) => props.inputPasswordPageOn);
  return (
    <LoginPageBackground>
      <LoginBoxWrapper>
        <LoginBox>
          {signInPageOn && <SignInForm />}
          {signUpPageOn && <SignUpForm/>}
          {inputPasswordPageOn &&<InputSignInPassword />}
        </LoginBox>
      </LoginBoxWrapper>
    </LoginPageBackground>
  );
}

export default LoginPage;
