import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { setInputPasswordPageOn, setSignInPageOn, setSignUpPageOn } from "../../data/store";
import CheckSvg from "./CheckSvg";
import LabelFormat from "./LabelFormat";
import SignUpCheckBox from "./signUp/SignUpCheckBox";
import { SignErrorMessage } from "./styleComponent/ErrorMessage";
import { BtnText, NextButton } from "./styleComponent/NextButton";
import { SignUpInput } from "./styleComponent/SignUpInput";

const SignUpBoxTitle = styled.div`
  padding: 0px 20px;
  height: 64px;
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  .between-div {
    display: flex;
    min-width: 64px;
    -webkit-box-pack: end;
    justify-content: flex-end;
    -webkit-box-align: center;
    align-items: center;
  }
`;
const CancleBtnWrapper = styled.div`
  min-width: 64px;
  display: flex;
  -webkit-box-pack: start;
  justify-content: flex-start;
  -webkit-box-align: center;
  align-items: center;
  font-weight: 400;
  font-size: 17px;

  button {
    border: none;
    background: none;
    cursor: pointer;
    padding: 8px;
    margin: -8px;
    fill: var(--theme-palette-colors-black-100);
    p {
      color: var(--theme-palette-colors-black-100);
      text-align: center;
      letter-spacing: var(--text-spacing-headline);
      line-height: var(--text-height-headline);
      min-width: 64px;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      font-weight: 400;
      font-size: 17px;
    }
  }
`;
const TitleWrapper = styled.div`
  display: flex;
  flex: 1 1 0%;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  p {
    color: var(--theme-palette-colors-black-100);
    font-weight: var(--text-weight-headline-bold);
    text-align: center;
    letter-spacing: var(--text-spacing-headline);
    font-size: var(--text-size-headline);
    line-height: var(--text-height-headline);
    display: flex;
    flex: 1 1 0%;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
  }
`;
const SignUpFormWrapper = styled.div`
  overflow: auto;
  position: relative;
  padding: 20px;
  scrollbar-width: none;
  -ms-overflow-style: none;
  ::-webkit-scrollbar {
    display: none;
  }
`;
const LabelWrapper = styled.div`
  margin: 17px 0px 7px;
`;
const NationalPhoneNumSelectBox = styled.div`
  height: 50px;
  min-height: 50px;
  border-radius: 5px;
  width: 100%;
  border: 1px solid var(--theme-palette-colors-bluegray-200);
  background-color: var(--theme-palette-colors-contents-bg);
  margin-bottom: 10px;
  position: relative;
`;
const NationalNumSelect = styled.select`
  padding-left: 12px;
  width: 100%;
  position: absolute;
  left: 0;
  -webkit-appearance: none;
  -moz-appearance: none;
  -ms-appearance: none;
  appearance: none;
  height: 100%;
  border: none;
  background: none;
  z-index: 1;
  font-size: 16px;
  color: var(--theme-palette-colors-gray-900);
  font-weight: 400;
`;
const SelectBoxArrow = styled.div`
  position: absolute;
  right: 20px;
  font-size: 10px;
  top: 50%;
  -webkit-transform: translateY(-50%);
  -moz-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  span {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-align-items: inherit;
    -webkit-box-align: inherit;
    -ms-flex-align: inherit;
    align-items: inherit;
    -webkit-box-pack: inherit;
    -ms-flex-pack: inherit;
    -webkit-justify-content: inherit;
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
      -webkit-flex-shrink: 0;
      -ms-flex-negative: 0;
      flex-shrink: 0;
      font-size: inherit;
    }
  }
`;
const PhoneNumBox = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
`;
const CertificationNumBtn = styled.button`
  height: 50px;
  min-height: 50px;
  font-size: 16px;
  margin-bottom: 10px;
  cursor: pointer;
  background-color: var(--theme-palette-colors-contents-bg);
  margin-left: 10px;
  padding: 0px 15px;
  width: auto;
  flex: 0 0 auto;
  border-radius: 5px;
  border: 1px solid var(--theme-palette-colors-bluegray-200);
  span {
    color: var(--theme-palette-colors-black-100);
    font-weight: var(--text-weight-body-bold);
    text-align: left;
    letter-spacing: var(--text-spacing-body);
    font-size: var(--text-size-body);
    line-height: var(--text-height-body);
  }
`;
const PasswordValiNotice = styled.p`
  color: var(--theme-palette-colors-gray-600);
  font-weight: var(--text-weight-footnote-normal);
  text-align: left;
  letter-spacing: var(--text-spacing-footnote);
  font-size: var(--text-size-footnote);
  line-height: var(--text-height-footnote);
  margin-bottom: 10px;
  margin-top: 0px;
`;
const AgreementAllBox = styled.div`
  display: flex;
  flex-direction: row;
  -webkit-box-align: center;
  align-items: center;
  position: relative;
  min-height: 25px;
  width: 100%;
  margin: 28px 0px 10px;
`;
const AgreementCheckInput = styled.input`
  opacity: 0;
  width: calc(100% - 90px);
  height: 100%;
  position: absolute;
  cursor: pointer;
`;
const AgreementTitleBox = styled.div`
  display: flex;
  flex: 1 1 0%;
`;
const AgreementAllTitle = styled.p`
  color: var(--theme-palette-colors-gray-900);
  font-weight: var(--text-weight-bodyalt-bold);
  text-align: left;
  letter-spacing: var(--text-spacing-bodyalt);
  font-size: var(--text-size-bodyalt);
  line-height: var(--text-height-bodyalt);
  margin: 0px 0px 0px 7px;
  word-break: keep-all;
`;
const AgreementSectionDivider = styled.hr`
  border-top: none;
  border-right: none;
  border-left: none;
  border-image: initial;
  width: 100%;
  border-bottom: 1px solid var(--theme-palette-colors-bluegray-200);
`;
const AgreementBox = styled.div`
  display: flex;
  flex-direction: row;
  -webkit-box-align: center;
  align-items: center;
  position: relative;
  min-height: 25px;
  width: 100%;
  margin: 10px 0px;
  a {
    color: var(--theme-palette-colors-gray-600);
    font-weight: var(--text-weight-bodyalt-bold);
    text-align: left;
    letter-spacing: var(--text-spacing-bodyalt);
    font-size: var(--text-size-bodyalt);
    line-height: var(--text-height-bodyalt);
    cursor: pointer;
    margin: 0px;
  }
`;
const AgreementTitle = styled.p`
  color: var(--theme-palette-colors-gray-600);
  font-weight: var(--text-weight-bodyalt-medium);
  text-align: left;
  letter-spacing: var(--text-spacing-bodyalt);
  font-size: var(--text-size-bodyalt);
  line-height: var(--text-height-bodyalt);
  margin: 0px 0px 0px 7px;
  word-break: keep-all;
`;
const MessageMethod = styled.div`
  display: flex;
  margin-left: 28px;
  p {
    color: var(--theme-palette-colors-gray-600);
    font-weight: var(--text-weight-body-normal);
    text-align: left;
    letter-spacing: var(--text-spacing-body);
    font-size: var(--text-size-body);
    line-height: var(--text-height-body);
    margin-left: 0px;
    margin-top: 0px;
    margin-bottom: 0px;
  }
`;
const MessageMethodLabel = styled.label`
  height: 22px;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  margin-right: 18px;
  cursor: pointer;
`;
const SubmitBox = styled.div`
  z-index: 10;
  position: sticky;
  bottom: 0px;
`;
const SignUpBtn = styled.button`
  width: 100%;
  height: 50px;
  min-height: 50px;
  border-radius: 25px;
  font-size: 16px;
  margin-bottom: 10px;
  cursor: pointer;
  background-color: var(--theme-palette-colors-blue-400);
  border: none;
  margin-top: 30px;
  span {
    color: var(--theme-palette-colors-common-white);
    font-weight: var(--text-weight-body-bold);
    text-align: left;
    letter-spacing: var(--text-spacing-body);
    font-size: var(--text-size-body);
    line-height: var(--text-height-body);
  }
`;
const SignUpBtnOverlay = styled.div`
  position: absolute;
  inset: 30px 0px -20px;
  background: var(--theme-palette-colors-contents-bg);
  z-index: -1;
`;
const SignUpBtnOverlay2 = styled.div`
  position: absolute;
  left: 0px;
  right: 0px;
  bottom: 60px;
  height: 30px;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, var(--theme-palette-colors-contents-bg) 100%);
  z-index: -1;
  pointer-events: none;
`;
function SignUpForm() {
  const signInEmail = useSelector((state) => {
    return state.signInEmail;
  });
  //   const [email, setEmail] = useState("test3342@email.com");

  const [password, setPassword] = useState(); //비밀번호
  const [password2, setPassword2] = useState(); //비밀번호2
  const [name, setName] = useState(); //이름
  const [phoneNumber, setPhoneNumber] = useState(); //핸드폰번호
  const [phoneNumErrorMessageOn, setPhoneNumErrorMessageOn] = useState(false); //핸드폰번호 에러메시지
  const [passwordErrorMessageOn, setPasswordErrorMessageOn] = useState(false); //비밀번호 에러메시지
  const [passwordCheckErrorMessageOn, setPasswordCheckErrorMessageOn] = useState(false); //비밀번호 확인 에러메시지
  const [allCheck, setAllCheck] = useState(false); //전체동의
  const [fourteenAndOverTF, setFourteenAndOverTF] = useState(false); // 만 14세 이상 동의
  const [termsAndConditionsTF, setTermsAndConditionsTF] = useState(false); //이용약관 동의
  const [personalInformationCollectionTF, setPersonalInformationCollectionTF] = useState(false);
  //개인 정보 수집
  const [receiveAdvertisementTF, setReceiveAdvertisementTF] = useState(false);
  // 광고 받기 동의
  const [receiveMessageAd, setReceiveMessageAd] = useState(false);
  // 이메일로 광고받기
  const [receiveAppAd, setReceiveAppAd] = useState(false);
  // 앱 푸시로 광고 받기
  const [receiveEmailAd, setReceiveEmailAd] = useState(false);
  // 문자로 광고 받기
  const [submitBtnOn, setSubmitBtnOn] = useState(false);
  const dispatch = useDispatch();
  const submit = () => {
    axios
      .post("https://dev.risingserver13forever.shop/app/users", {
        email: signInEmail,
        password: password,
        name: name,
        phoneNumber: phoneNumber,
        termsAndConditionsTF: termsAndConditionsTF,
        personalInformationCollectionTF: personalInformationCollectionTF,
        fourteenAndOverTF: fourteenAndOverTF,
        receiveAdvertisementTF: receiveAdvertisementTF,
        receiveMessageAd: receiveMessageAd,
        receiveAppAd: receiveAppAd,
        receiveEmailAd: receiveEmailAd,
      })
      .then((Response) => {
        const data = Response.data;
        console.log(data);
        if (!data.isSuccess) {
          alert(data.message);
          if (data.code === 2002) {
            //이메일은 30자리 미만으로 입력해주세요
            alert("이메일은 30자리 미만으로 입력해주세요");
            dispatch(setSignUpPageOn(false));
            dispatch(setInputPasswordPageOn(false));
            dispatch(setSignInPageOn(true));
          } else if (data.code === 2059) {
            //전화번호는 11자리로 하이픈 없이
            setPhoneNumErrorMessageOn(true);
          } else if (data.code === 2019) {
            // 성명을 입력해주세요
          }
        } else {
          dispatch(setSignUpPageOn(false));
          dispatch(setInputPasswordPageOn(false));
          dispatch(setSignInPageOn(true));
          console.log("회원가입 성공");
        }
      })
      .catch((Error) => {
        console.log(Error);
      });
  };

  const phoneNumberCheck = (e) => {
    var regExp = /^01(?:0|1|[6-9])(?:\d{3}|\d{4})\d{4}$/;
    // 형식에 맞는 경우 true 리턴
    console.log("핸드폰번호 유효성 검사 :: ", regExp.test(e.target.value));
    if (regExp.test(e.target.value)) {
      setPhoneNumErrorMessageOn(false);
      setPhoneNumber(e.target.value);
    } else {
      setPhoneNumErrorMessageOn(true);
    }
  };
  const checkPassword = (password) => {
    //  8 ~ 10자 영문, 숫자,특수문자 조합
    var regExp = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/;
    // 형식에 맞는 경우 true 리턴
    return regExp.test(password);
  };
  const passwordCheck = (e) => {
    const pw = e.target.value;
    setPassword(pw);
    if (pw === "") {
      setPasswordErrorMessageOn(false);
    } else {
      if (checkPassword(pw)) {
        setPasswordErrorMessageOn(false);
      } else {
        setPasswordErrorMessageOn(true);
      }
    }
  };
  const samePassword = (e) => {
    if (password === e.target.value) {
      setPasswordCheckErrorMessageOn(false);
    } else {
      setPasswordCheckErrorMessageOn(true);
    }
    setPassword2(e.target.value);
  };
  const checkBoxHandling = (value, setValue) => {
    if (value) {
      setValue(!value);
    } else {
      setValue(!value);
    }
    // if (
    //   fourteenAndOverTF &&
    //   termsAndConditionsTF &&
    //   personalInformationCollectionTF &&
    //   receiveAdvertisementTF &&
    //   receiveMessageAd &&
    //   receiveAppAd &&
    //   receiveEmailAd
    // ) {
    //   setAllCheck(true);
    // }
    // if (receiveMessageAd && receiveAppAd && receiveEmailAd) {
    //   setReceiveAdvertisementTF(true);
    // } else if (receiveMessageAd === false && receiveAppAd === false && receiveEmailAd === false) {
    //   setReceiveAdvertisementTF(false);
    // }
    console.log(value, setValue);
  };
  const cancle = () => {
    dispatch(setSignUpPageOn(false));
    dispatch(setInputPasswordPageOn(false));
    dispatch(setSignInPageOn(true));
  };
  const allCheckHandling = () => {
    if (allCheck) {
      setAllCheck(!allCheck);
      setFourteenAndOverTF(!allCheck);
      setTermsAndConditionsTF(!allCheck);
      setPersonalInformationCollectionTF(!allCheck);
      setReceiveAdvertisementTF(!allCheck);
      setReceiveMessageAd(!allCheck);
      setReceiveAppAd(!allCheck);
      setReceiveEmailAd(!allCheck);
    } else {
      setAllCheck(!allCheck);
      setFourteenAndOverTF(!allCheck);
      setTermsAndConditionsTF(!allCheck);
      setPersonalInformationCollectionTF(!allCheck);
      setReceiveAdvertisementTF(!allCheck);
      setReceiveMessageAd(!allCheck);
      setReceiveAppAd(!allCheck);
      setReceiveEmailAd(!allCheck);
    }
  };
  const receiveInfoHandling = () => {
    if (receiveAdvertisementTF) {
      setReceiveAdvertisementTF(!receiveAdvertisementTF);
      setReceiveMessageAd(!receiveAdvertisementTF);
      setReceiveAppAd(!receiveAdvertisementTF);
      setReceiveEmailAd(!receiveAdvertisementTF);
    } else {
      setReceiveAdvertisementTF(!receiveAdvertisementTF);
      setReceiveMessageAd(!receiveAdvertisementTF);
      setReceiveAppAd(!receiveAdvertisementTF);
      setReceiveEmailAd(!receiveAdvertisementTF);
    }
  };
  useEffect(() => {
    if (
      fourteenAndOverTF &&
      termsAndConditionsTF &&
      personalInformationCollectionTF &&
      !phoneNumErrorMessageOn &&
      !passwordErrorMessageOn &&
      !passwordCheckErrorMessageOn &&
      password  &&
      phoneNumber  &&
      password2  &&
      name 
    ) {
        console.log(name,password)
      setSubmitBtnOn(true);
    } else {
      setSubmitBtnOn(false);
    }
  }, [
    phoneNumErrorMessageOn,
    passwordErrorMessageOn,
    passwordCheckErrorMessageOn,
    allCheck,
    fourteenAndOverTF,
    termsAndConditionsTF,
    personalInformationCollectionTF,
    receiveAdvertisementTF,
    receiveAdvertisementTF,
    receiveMessageAd,
    receiveAppAd,
    receiveEmailAd,
    submitBtnOn,
    name,
  ]);
  useEffect(() => {
    if (
      fourteenAndOverTF &&
      termsAndConditionsTF &&
      personalInformationCollectionTF &&
      receiveAdvertisementTF &&
      receiveEmailAd &&
      receiveMessageAd &&
      receiveAppAd
    ) {
      setAllCheck(true);
    } else {
      setAllCheck(false);
    }
  }, [
    allCheck,
    fourteenAndOverTF,
    termsAndConditionsTF,
    personalInformationCollectionTF,
    receiveAdvertisementTF,
    receiveMessageAd,
    receiveAppAd,
    receiveEmailAd,
  ]);
  useEffect(() => {
    if (receiveEmailAd && receiveMessageAd && receiveAppAd) {
      setReceiveAdvertisementTF(true);
    } else {
      setReceiveAdvertisementTF(false);
    }
  }, [receiveAdvertisementTF, receiveMessageAd, receiveAppAd, receiveEmailAd]);
  return (
    <>
      <SignUpBoxTitle>
        <CancleBtnWrapper>
          <button onClick={cancle}>
            <p>취소</p>
          </button>
        </CancleBtnWrapper>
        <TitleWrapper>
          <p>회원가입</p>
        </TitleWrapper>
        <div className="between-div" />
      </SignUpBoxTitle>
      <SignUpFormWrapper>
        <form>
          <LabelWrapper>
            {/* 라벨 컴포넌트 */}
            <LabelFormat content={"이메일"}></LabelFormat>
          </LabelWrapper>
          <SignUpInput value={signInEmail} disabled></SignUpInput>
          <LabelWrapper>
            <LabelFormat content={"이름"}></LabelFormat>
          </LabelWrapper>
          <SignUpInput
            onChange={(e) => {
              setName(e.target.value);
            }}
            placeholder="이름을 입력해주세요."
          ></SignUpInput>
          <LabelWrapper>
            <LabelFormat content={"휴대폰 번호"}></LabelFormat>
          </LabelWrapper>
          <div>
            <NationalPhoneNumSelectBox>
              <NationalNumSelect>
                <option>South Korea +82</option>
              </NationalNumSelect>
              <SelectBoxArrow>
                <span>
                  <svg viewBox="0 0 10 6" className="css-1h47l4s">
                    <path
                      d="M5 3.93934L1.28033 0.21967C0.987437 -0.0732233 0.512563 -0.0732233 0.21967 0.21967C-0.0732233 0.512563 -0.0732233 0.987437 0.21967 1.28033L4.46967 5.53033C4.76256 5.82322 5.23744 5.82322 5.53033 5.53033L9.78033 1.28033C10.0732 0.987437 10.0732 0.512563 9.78033 0.21967C9.48744 -0.0732233 9.01256 -0.0732233 8.71967 0.21967L5 3.93934Z"
                      fill="var(--theme-palette-colors-gray-900)"
                    ></path>
                  </svg>
                </span>
              </SelectBoxArrow>
            </NationalPhoneNumSelectBox>
          </div>
          <PhoneNumBox>
            <SignUpInput checkOn={phoneNumErrorMessageOn} onChange={phoneNumberCheck} placeholder="(예시) 01013245768"></SignUpInput>

            <CertificationNumBtn disabled>
              {/* disabled일때 border: 1px solid var(--theme-palette-colors-bluegray-100);     color: var(--theme-palette-colors-gray-300);
                    background-color: var(--theme-palette-colors-bluegray-100);
                    border: none;
                    cursor: default;*/}
              <span>인증번호 받기</span>
              {/** disabled 일 때   color: var(--theme-palette-colors-gray-300); */}
            </CertificationNumBtn>
          </PhoneNumBox>
          {phoneNumErrorMessageOn && <SignErrorMessage>올바른 전화번호를 입력해주세요</SignErrorMessage>}
          <PhoneNumBox>
            <SignUpInput placeholder="인증번호를 입력해주세요." disabled></SignUpInput>
          </PhoneNumBox>
          <LabelWrapper>
            <LabelFormat content={"비밀번호"}></LabelFormat>
          </LabelWrapper>
          <SignUpInput checkOn={passwordErrorMessageOn} onChange={passwordCheck} type="password" placeholder="비밀번호를 입력해주세요."></SignUpInput>
          {passwordErrorMessageOn && <SignErrorMessage>올바르지 않은 비밀번호입니다.</SignErrorMessage>}
          <SignUpInput
            checkOn={passwordCheckErrorMessageOn}
            onChange={samePassword}
            type="password"
            placeholder="비밀번호를 다시 한번 입력해주세요."
          ></SignUpInput>
          {passwordCheckErrorMessageOn && <SignErrorMessage>비밀번호가 서로 일치하지 않습니다.</SignErrorMessage>}
          <PasswordValiNotice>영문 대소문자, 숫자, 특수문자를 3가지 이상으로 조합해 8자 이상 16자 이하로 입력해주세요.</PasswordValiNotice>
          <AgreementAllBox>
            <SignUpCheckBox checkOn={allCheck} />
            {/**동의 체크박스 */}
            <AgreementCheckInput onClick={allCheckHandling} />
            <AgreementTitleBox>
              <AgreementAllTitle>전체 동의</AgreementAllTitle>
            </AgreementTitleBox>
          </AgreementAllBox>
          <AgreementSectionDivider />

          <AgreementBox>
            <SignUpCheckBox checkOn={fourteenAndOverTF} />
            {/**동의 체크박스 */}
            <AgreementCheckInput onClick={() => checkBoxHandling(fourteenAndOverTF, setFourteenAndOverTF)} />
            <AgreementTitleBox>
              <AgreementTitle>만 14세 이상입니다. (필수)</AgreementTitle>
            </AgreementTitleBox>
          </AgreementBox>

          <AgreementBox>
            <SignUpCheckBox checkOn={termsAndConditionsTF} />
            {/**동의 체크박스 */}
            <AgreementCheckInput onClick={() => checkBoxHandling(termsAndConditionsTF, setTermsAndConditionsTF)} />
            <AgreementTitleBox>
              <AgreementTitle>원티드 이용약관 동의 (필수)</AgreementTitle>
            </AgreementTitleBox>
            <Link to={"/"}>자세히</Link>
          </AgreementBox>

          <AgreementBox>
            <SignUpCheckBox checkOn={personalInformationCollectionTF} />
            {/**동의 체크박스 */}
            <AgreementCheckInput onClick={() => checkBoxHandling(personalInformationCollectionTF, setPersonalInformationCollectionTF)} />
            <AgreementTitleBox>
              <AgreementTitle>원티드 개인정보 수집 및 이용 동의 (필수)</AgreementTitle>
            </AgreementTitleBox>
            <Link to={"/"}>자세히</Link>
          </AgreementBox>
          <AgreementBox>
            <SignUpCheckBox checkOn={receiveAdvertisementTF} />
            {/**동의 체크박스 */}
            <AgreementCheckInput onClick={receiveInfoHandling} />
            <AgreementTitleBox>
              <AgreementTitle>채용 소식, 커리어 콘텐츠, 이벤트 등 원티드 맞춤 정보 받기</AgreementTitle>
            </AgreementTitleBox>
          </AgreementBox>
          <MessageMethod>
            <MessageMethodLabel onClick={() => checkBoxHandling(receiveEmailAd, setReceiveEmailAd)}>
              {/* 인풋박스 만들어서 값 담아야함 */}
              <CheckSvg checkOn={receiveEmailAd} />
              <p>이메일</p>
            </MessageMethodLabel>
            <MessageMethodLabel onClick={() => checkBoxHandling(receiveAppAd, setReceiveAppAd)}>
              {/* 인풋박스 만들어서 값 담아야함 */}
              <CheckSvg checkOn={receiveAppAd} />
              <p>앱 푸시</p>
            </MessageMethodLabel>
            <MessageMethodLabel onClick={() => checkBoxHandling(receiveMessageAd, setReceiveMessageAd)}>
              {/* 인풋박스 만들어서 값 담아야함 */}
              <CheckSvg checkOn={receiveMessageAd} />
              <p>문자 메시지</p>
            </MessageMethodLabel>
          </MessageMethod>
          <SubmitBox>
            {/* validation 하면 비밀번호나 휴대폰번호에 추가 css 가 붙기에 form박스 크기가 변화하는데
                가입하기 버튼은 sticky로 고정되어 있고 form 아랫부분이 밑으로 내려가면서 부드럽게 안보여지는 css가 있음 
                또한 스크롤링 가능*/}
            <SignUpBtnOverlay />
            <SignUpBtnOverlay2 />
            <NextButton type="button" onClick={submit} disabled={!submitBtnOn}>
              <BtnText className={!submitBtnOn && "disabled"}>가입하기</BtnText>
            </NextButton>
          </SubmitBox>
        </form>
      </SignUpFormWrapper>
    </>
  );
}

export default SignUpForm;
