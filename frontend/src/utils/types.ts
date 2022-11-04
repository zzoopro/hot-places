export interface PlaceInterface {
   admCd: string, 
   bdKdcd: string, 
   bdMgtSn: string, 
   bdNm: string, 
   buldMnnm: string, 
   buldSlno: string, 
   detBdNmList: string, 
   emdNm: string, 
   emdNo: string, 
   engAddr: string, 
   jibunAddr: string, 
   liNm: string, 
   lnbrMnnm: string, 
   lnbrSlno: string, 
   mtYn: string, 
   rn: string, 
   rnMgtSn: string, 
   roadAddr: string, 
   roadAddrPart1: string, 
   roadAddrPart2: string, 
   sggNm: string, 
   siNm: string, 
   udrtYn: string, 
   zipNo: string, 
}
export const INITPLACE = {
   admCd: "", 
   bdKdcd: "", 
   bdMgtSn: "", 
   bdNm: "", 
   buldMnnm: "", 
   buldSlno: "", 
   detBdNmList: "", 
   emdNm: "", 
   emdNo: "", 
   engAddr: "", 
   jibunAddr: "", 
   liNm: "", 
   lnbrMnnm: "", 
   lnbrSlno: "", 
   mtYn: "", 
   rn: "", 
   rnMgtSn: "", 
   roadAddr: "", 
   roadAddrPart1: "", 
   roadAddrPart2: "", 
   sggNm: "", 
   siNm: "", 
   udrtYn: "", 
   zipNo: "", 
}

export interface CoordsType {
   lat: number,
   lng: number
}

export interface PopupInterface {
   isShow: boolean,
   payload: {
      type: string,
      element: () => JSX.Element | null,
      resultFn: () => void,

   }
}
export const INIT_POPUP = {
   isShow: false,
   payload: {
      type: "init",
      element: () => null,
      resultFn: () => {},
   }
}

export const INIT_LOADING = {
   isLoading: false
}

export interface LoadingInterface {
   isLoading: boolean
}