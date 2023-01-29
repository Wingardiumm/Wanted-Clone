import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
    ${reset};
    :root{
        --text-weight-caption2-bold: 600;
    --text-weight-caption2-medium: 500;
    --text-weight-caption2-normal: 400;
    --text-weight-caption1-bold: 600;
    --text-weight-caption1-medium: 500;
    --text-weight-caption1-normal: 400;
    --text-weight-footnote-bold: 600;
    --text-weight-footnote-medium: 500;
    --text-weight-footnote-normal: 400;
    --text-weight-subhead-bold: 600;
    --text-weight-subhead-medium: 500;
    --text-weight-subhead-normal: 400;
    --text-weight-bodyalt-bold: 600;
    --text-weight-bodyalt-medium: 500;
    --text-weight-bodyalt-normal: 400;
    --text-weight-body-bold: 600;
    --text-weight-body-medium: 500;
    --text-weight-body-normal: 400;
    --text-weight-headline-bold: 600;
    --text-weight-headline-medium: 500;
    --text-weight-headline-normal: 400;
    --text-weight-heading-bold: 600;
    --text-weight-heading-medium: 500;
    --text-weight-heading-normal: 400;
    --text-weight-subtitle-bold: 700;
    --text-weight-subtitle-medium: 500;
    --text-weight-subtitle-normal: 400;
    --text-weight-title-bold: 700;
    --text-weight-title-medium: 500;
    --text-weight-title-normal: 400;
    --text-weight-display-bold: 700;
    --text-weight-display-medium: 500;
    --text-weight-display-normal: 400;
    --text-spacing-caption2: 0.031em;
    --text-spacing-caption1: 0.025em;
    --text-spacing-footnote: 0.0192em;
    --text-spacing-subhead: 0.0145em;
    --text-spacing-bodyalt: 0.0096em;
    --text-spacing-body: 0.0056em;
    --text-spacing-headline: 0em;
    --text-spacing-heading: -0.012em;
    --text-spacing-subtitle: -0.023em;
    --text-spacing-title: -0.024em;
    --text-spacing-display: -0.027em;
    --text-height-caption2: 14px;
    --text-height-caption1: 16px;
    --text-height-footnote: 18px;
    --text-height-subhead: 20px;
    --text-height-bodyalt-reading: 24px;
    --text-height-bodyalt: 22px;
    --text-height-body-reading: 26px;
    --text-height-body: 24px;
    --text-height-headline: 24px;
    --text-height-heading: 26px;
    --text-height-subtitle: 32px;
    --text-height-title: 38px;
    --text-height-display: 48px;
    --text-size-caption2: 11px;
    --text-size-caption1: 12px;
    --text-size-footnote: 13px;
    --text-size-subhead: 14px;
    --text-size-bodyalt: 15px;
    --text-size-body: 16px;
    --text-size-headline: 17px;
    --text-size-heading: 20px;
    --text-size-subtitle: 24px;
    --text-size-title: 28px;
    --text-size-display: 36px;
    }
    :root, html[data-theme=light] {
        --theme-palette-colors-pink-400: #f348a3;
    --theme-palette-colors-gray-900: #333;
    --theme-palette-colors-black-100: #000;
    --theme-palette-colors-bluegray-200: #e1e2e3;
    --theme-palette-colors-gray-700: #767676;
    --theme-palette-colors-blue-800: #002fdb;
    --theme-palette-colors-gray-600: #888;
    --theme-palette-colors-gray-800: #666;
    --theme-palette-colors-purple-400: #8958fa;
    --theme-palette-colors-gray-300: #ccc;
    --theme-palette-colors-green-400: #08ba9c;
    --theme-palette-colors-blue-400: #36f;
    --theme-palette-colors-gray-200: #ececec;
    --theme-palette-colors-red-400: #fe415c;
    --theme-palette-colors-gray-500: #939393;
    --theme-palette-colors-gray-400: #aaa;
    --theme-palette-colors-pastel-lime-50: #f6f8ee;
    --theme-palette-colors-pastel-purple-50: #f7f2f9;
    --theme-palette-colors-pastel-blue-50: #eff1fb;
    --theme-palette-colors-pastel-lightblue-50: #f3f9fe;
    --theme-palette-colors-pastel-cyan-50: #eefaf9;
    --theme-palette-colors-pastel-green-100: #e4f4ec;
    --theme-palette-colors-bluegray-100: #f2f4f7;
    --theme-palette-colors-pastel-green-50: #f2fbf5;
    --theme-palette-colors-base-bg: #f7f7f7;
    --theme-palette-colors-white-100: #fff;
    --theme-palette-colors-pastel-indigo-50: #f3f2fb;
    --theme-palette-colors-gray-100: #f8f8f8;
    --theme-palette-colors-elevated-bg: #fff;
    --theme-palette-colors-contents-bg: #fff;
    --theme-palette-colors-common-white: #fff;
    --theme-palette-colors-orange-400: #ff9100;
    --theme-palette-colors-blue-invert: #4d7dff;
    --theme-palette-colors-dimmer: rgba(0,0,0,.5);
    --theme-palette-colors-blue-600: #2658f6;
    }
    *{
        box-sizing: border-box;
    }
    :root{
        --vh: 100%;
        
    }
    html,:root{
        width: 100%;
        height: 100%;
    }
    body{
        padding: 0;
        margin: 0;
        background-color: #f8f8f8;
        font-family: Pretendard,Pretendard JP,Pretendard Std,-apple-system,system-ui,BlinkMacSystemFont,Roboto,Segoe UI,Helvetica,Arial,Apple SD Gothic Neo,Nanum Gothic,Malgun Gothic,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,sans-serif;
        /* font-family: 'Noto Sans KR', sans-serif; */
        font-size: 14px;
        line-height: 1.42857143;
        color: #333333;
    width: 100%;
    height: 100%;
    min-width: 320px;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -webkit-text-size-adjust: none;
    word-break: keep-all;
    overflow-wrap: anywhere;
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
