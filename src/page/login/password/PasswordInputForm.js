import axios from "axios";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { loginApi } from "../../../api";
import { SignErrorMessage } from "../styleComponent/ErrorMessage";
import { BtnText, NextButton } from "../styleComponent/NextButton";
import { SignUpInput } from "../styleComponent/SignUpInput";

const FormWrapper = styled.div`
  overflow: auto;
  position: relative;
  padding: 20px;
`;
const LabelWrapper = styled.div`
  margin: 17px 0px 7px 0px;
`;
const InputNameLabel = styled.label`
  color: var(--theme-palette-colors-gray-600);
  font-weight: var(--text-weight-subhead-bold);
  text-align: left;
  letter-spacing: var(--text-spacing-subhead);
  font-size: var(--text-size-subhead);
  line-height: var(--text-height-subhead);
`;
const ChangePasswordBtn = styled.button`
  width: 100%;
  height: 50px;
  min-height: 50px;
  border-radius: 25px;
  font-size: 16px;
  margin-bottom: 10px;
  cursor: pointer;
  background-color: var(--theme-palette-colors-contents-bg);
  border: none;
  margin-top: 10px;
`;
const ChangePasswordBtnText = styled.span`
  color: var(--theme-palette-colors-blue-400);
  font-weight: var(--text-weight-subhead-bold);
  text-align: left;
  letter-spacing: var(--text-spacing-subhead);
  font-size: var(--text-size-subhead);
  line-height: var(--text-height-subhead);
`;
function PasswordInputForm() {
    const [passwordErrorOn,setPasswordErrorOn] = useState(false);
    const [btnOff, setBtnOff] = useState(false);
    const [password, setPassword] = useState();
    const email = useSelector((props)=> props.signInEmail)
    const btnHandling = (e)=>{
        if(e.target.value === ''){
            setBtnOff(true);
        }else{
            setBtnOff(false);
        }
        setPasswordErrorOn(false)
        setPassword(e.target.value);
    }
    const submit =()=>{
       loginApi.signUp(email,password)
      .then((Response) => {
        console.log(Response.data);
        if(Response.data.isSuccess){
            localStorage.setItem('jwt', Response.data.result.jwt)
            localStorage.setItem('user_id', Response.data.result.user_id)
            window.location.replace("/")
        } else{
            setPasswordErrorOn(true);
            setBtnOff(true);
        }
      })
      .catch((Error) => {
        console.log(Error);
      });
    }
    console.log(email)
  return (
    <FormWrapper>
      <form>
        <LabelWrapper>
          <InputNameLabel>비밀번호</InputNameLabel>
        </LabelWrapper>
        <SignUpInput onChange={(e) =>btnHandling(e)} type="password" placeholder="비밀번호를 입력해주세요" checkOn={passwordErrorOn}/>
        {
            passwordErrorOn && <SignErrorMessage>비밀번호가 일치하지 않습니다.</SignErrorMessage>
        }
        {/* disabled 지정 */}
        <NextButton disabled={btnOff} type="button" onClick={submit}>
          {/* disabled 조건에 따른 클래스 disabled 지정 */}
          <BtnText className={btnOff && "disabled"}>다음</BtnText>
        </NextButton>
        <ChangePasswordBtn>
          <ChangePasswordBtnText>비밀번호 초기화/변경</ChangePasswordBtnText>
        </ChangePasswordBtn>
      </form>
    </FormWrapper>
  );
}

export default PasswordInputForm;
