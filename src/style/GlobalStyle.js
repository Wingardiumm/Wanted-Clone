import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
    ${reset};
    body{
        padding: 0;
        margin: 0;
        background-color: #f8f8f8;
        font-family: Pretendard,Pretendard JP,Pretendard Std,-apple-system,system-ui,BlinkMacSystemFont,Roboto,Segoe UI,Helvetica,Arial,Apple SD Gothic Neo,Nanum Gothic,Malgun Gothic,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,sans-serif;
        /* font-family: 'Noto Sans KR', sans-serif; */
        font-size: 14px;
        line-height: 1.42857143;
        color: #333333;
    };
    button{
        /* display: flex; */
        font-family: inherit;
        cursor: pointer;
        outline: none;
        border: 0;
        background-color: transparent;
        /* border-radius: 3px; */
    };
    input{
        /* display: flex; */
        /* outline: none; */
        /* padding-left: 10px; */
    }
    ul,li{
        list-style: none;
        display: block;
    /* list-style-type: disc;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 40px; */
    }
    a{
        &:hover, &:visited, &:active{
            color: inherit;
            font-family: inherit;
        }
        text-decoration: none;
    }
    font-family: inherit;
`;

export default GlobalStyle;
