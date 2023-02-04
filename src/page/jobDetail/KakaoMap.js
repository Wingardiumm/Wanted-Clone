/*global kakao */
import React, { useEffect, useRef } from "react";

function KakaoMap() {
  const { kakao } = window;
  const container = useRef(null);
  const options = {
    //지도를 생성할 때 필요한 기본 옵션
    center: new kakao.maps.LatLng(33.450701, 126.570667), //지도의 중심좌표.
    level: 3, //지도의 레벨(확대, 축소 정도)
  };
  useEffect(() => {
    const map = new kakao.maps.Map(container.current, options);
    const markerPosition = new kakao.maps.LatLng(33.450701, 126.570667);
    const marker = new kakao.maps.Marker({
      position: markerPosition,
    });
    marker.setMap(map);
    return () => {};
  }, []);
  return <div id="map" ref={container} style={{ width: "100%", height: "254px", backgroundSize: "cover" }}></div>;
}

export default KakaoMap;
