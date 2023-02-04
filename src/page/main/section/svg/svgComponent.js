import React from "react";
import { ReactComponent as BookMark } from "./bookmark.svg";
import { ReactComponent as BookMarkArrow } from "./BookmarkTitleArrow.svg";
import { ReactComponent as BookMarkNoFilled } from "./bookmarkNoFilled.svg";
import { ReactComponent as BookMarkNoFilled2 } from "./bookmarkNoFilled2.svg";


export function BookMarkSvg() {
  return (
      <BookMark />
  );
}
export function BookMarArrowkSvg() {
  return (
      <BookMarkArrow />
  );
}


export function BookmarkNoFilled(){ //회색
  return(
    <BookMarkNoFilled/>
  );
}
export function BookmarkNoFilled2(){ // 비어있음
  return(
    <BookMarkNoFilled2/>
  );
}
