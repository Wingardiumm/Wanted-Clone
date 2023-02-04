import styled from "styled-components";

export const SliderPrevButton = styled.button`
  width: 36px;
  height: 36px;
  min-width: 36px;
  min-height: 36px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  min-width: 30px;
  height: 30px;
  min-height: 30px;
  border: 1px solid #e1e2e3;
  border-radius: 50%;
  background-color: #fff;
  box-shadow: 0 2px 2px 0 rgb(0 0 0 / 5%);
  font-size: 16px;
  color: #767676;
  span {
    display: -ms-flexbox;
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
    }
  }
`;

export const SlideNextButton = styled.button`
  width: 36px;
  height: 36px;
  min-width: 36px;
  min-height: 36px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  min-width: 30px;
  height: 30px;
  min-height: 30px;
  border: 1px solid #e1e2e3;
  border-radius: 50%;
  background-color: #fff;
  box-shadow: 0 2px 2px 0 rgb(0 0 0 / 5%);
  font-size: 16px;
  color: #767676;
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
    }
  }
`;
const EventBannerSlideNextBtn = styled.button`
  width: 36px;
  height: 36px;
  min-width: 36px;
  min-height: 36px;
  display: -ms-inline-flexbox;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  min-width: 30px;
  height: 30px;
  min-height: 30px;
  border: 1px solid #e1e2e3;
  border-radius: 50%;
  background-color: #fff;
  box-shadow: 0 2px 2px 0 rgb(0 0 0 / 5%);
  font-size: 16px;
  color: #767676;
  span {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: inherit;
    align-items: inherit;
    -ms-flex-pack: inherit;
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
      -ms-flex-negative: 0;
      flex-shrink: 0;
      font-size: inherit;
    }
  }
`;
export function SlideBtnPrevArrowSvg() {
  return (
    <svg className="SvgIcon_SvgIcon__root__svg__DKYBi" viewBox="0 0 18 18">
      <path d="m6.045 9 5.978-5.977a.563.563 0 1 0-.796-.796L4.852 8.602a.562.562 0 0 0 0 .796l6.375 6.375a.563.563 0 0 0 .796-.796L6.045 9z"></path>
    </svg>
  );
}
export function SlideBtnNextArrowSvg() {
  return (
    <svg className="SvgIcon_SvgIcon__root__svg__DKYBi" viewBox="0 0 18 18">
      <path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path>
    </svg>
  );
}
export function SlideBtnGreyArrowSvg() {
  return (
    <svg viewBox="0 0 12 12">
      <path fill="#b5b5b5" d="M3.345 9.72a.75.75 0 0 0 1.06 1.06l4.25-4.25a.75.75 0 0 0 0-1.06l-4.25-4.25a.75.75 0 0 0-1.06 1.06L7.065 6l-3.72 3.72z"></path>
    </svg>
  );
}
