export const SHOW_POPUP = "show_popup"
export const HIDE_POPUP = "hide_popup"
export const SET_LOADING = "loading"
export const STOP_LOADING = "stop_loading"
export const SET_USER = "set_user"
export const RESET_USER = "reset_user"

export const INITADDRESS = {
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
 };
export const INIT_POPUP = {
   key: "init",
   isShow: false,
   element: () => null,
   resultFn: () => {},
 };
 
 export const INIT_LOADING = {
   isLoading: false,
 };
 export const INIT_USER = {
  isLogin: false,
  email: "",
  username: "",  
  avatar: "",
  phone: ""
 }