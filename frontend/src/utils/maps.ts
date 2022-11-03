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
}

export const ChangeCoords = async (address: string) => {   
   const kakao = (window as any).kakao
   const mapContainer = document.getElementById('map'), // 지도를 표시할 div 
    mapOption = {
        center: new kakao.maps.LatLng(0, 0), // 지도의 중심좌표
        level: 3 // 지도의 확대 레벨
    };  

// 지도를 생성합니다    
   const map = new kakao.maps.Map(mapContainer, mapOption); 
   const geocoder = new kakao.maps.services.Geocoder();
   let coords

   // 주소로 좌표를 검색합니다
   await geocoder.addressSearch(address, function(result: any, status: any) {
   
       // 정상적으로 검색이 완료됐으면 
        if (status === kakao.maps.services.Status.OK) {
   
            coords = new kakao.maps.LatLng(result[0].y, result[0].x);
   
           // 결과값으로 받은 위치를 마커로 표시합니다
           const marker = new kakao.maps.Marker({
               map: map,
               position: coords
           });
   
         //   // 인포윈도우로 장소에 대한 설명을 표시합니다
         //   const infowindow = new kakao.maps.InfoWindow({
         //       content: '<div style="width:150px;text-align:center;padding:6px 0;">우리회사</div>'
         //   });
         //   infowindow.open(map, marker);
   
           // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
           map.setCenter(coords);
       } 
   });    
   return coords
}
