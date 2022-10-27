import { useEffect, useState } from "react";

export const GetCurrentCoords: any = () => {
  const [coords, setCoords] = useState<number[]>([0, 0]);

  useEffect(() => {
    const successCallback = ({ coords, timestamp }: any) => {
      setCoords([coords.latitude, coords.longitude]);
    };
    const errorCallback = (error: any) => {
      console.log("geo error", error);
    };
    navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
  }, []);

  return coords;
};

export const SetMap = (lat: number, lng: number, option?: any) => {
  const kakao = (window as any).kakao;
  const container = document.getElementById("map");
  const options = {
    //지도를 생성할 때 필요한 기본 옵션
    center: new kakao.maps.LatLng(lat, lng), //지도의 중심좌표.
    level: option?.level ? option?.level : 3, //지도의 레벨(확대, 축소 정도)
  };
  const map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴
  const marker = new kakao.maps.Marker({
    map: map,
    position: new kakao.maps.LatLng(lat, lng),
  });

  //   kakao.maps.event.addListener(map, "dblclick", function (mouseEvent: any) {
  //     var latlng = mouseEvent.latLng;
  //     alert("double click! " + latlng.toString());
  //   }); 더블 클릭
};
