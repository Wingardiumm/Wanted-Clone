/*global kakao */
import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

function KakaoMap({ detailData }) {
  const { kakao } = window;
  const container = useRef(null);
  const centerRef = useRef({ lat: null, lng: null });
  useEffect(() => {
    centerRef.current.lat = Number(detailData?.latitude);
    centerRef.current.lng = Number(detailData?.longitude);
    const options = {
      //지도를 생성할 때 필요한 기본 옵션
      center: new kakao.maps.LatLng(centerRef.current.lat,centerRef.current.lng), //지도의 중심좌표.
      level: 3, //지도의 레벨(확대, 축소 정도)
    };
    console.log(centerRef)
    const map = new kakao.maps.Map(container.current, options);
    const markerPosition = new kakao.maps.LatLng(Number(detailData?.latitude), Number(detailData?.longitude));
    const marker = new kakao.maps.Marker({
      position: markerPosition,
    });
    marker.setMap(map);
    return () => {}; 
  }, []);
  return <div 
  onClick={() =>
    window.open(
      "https://map.naver.com/v5/entry/address/14144951.03737915,4509991.95041897,%EC%84%9C%EC%9A%B8%ED%8A%B9%EB%B3%84%EC%8B%9C%20%EA%B0%95%EB%82%A8%EA%B5%AC%20%EB%8C%80%EC%B9%98%EB%8F%99%201003,jibun?c=18,0,0,0,dh",
      "_blank"
    )
  }
  id="map" ref={container} style={{ width: "100%", height: "254px", backgroundSize: "cover" }}></div>;
}

export default KakaoMap;
