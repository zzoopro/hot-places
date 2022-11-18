import React from "react";

export interface AddressInterface {
  admCd: string;
  bdKdcd: string;
  bdMgtSn: string;
  bdNm: string;
  buldMnnm: string;
  buldSlno: string;
  detBdNmList: string;
  emdNm: string;
  emdNo: string;
  engAddr: string;
  jibunAddr: string;
  liNm: string;
  lnbrMnnm: string;
  lnbrSlno: string;
  mtYn: string;
  rn: string;
  rnMgtSn: string;
  roadAddr: string;
  roadAddrPart1: string;
  roadAddrPart2: string;
  sggNm: string;
  siNm: string;
  udrtYn: string;
  zipNo: string;
}


export interface CoordsType {
  lat: number;
  lng: number;
}

export interface PopupInterface {
  isShow: boolean;
  element: any;
  resultFn: () => void;
  key?: string;
}


export interface LoadingInterface {
  isLoading: boolean;
}

export interface UserInterface {
  username: string;
  email: string;
  phone?: number;
  avater?: string;
  password: string;
  createdAt: Date;
  places: PlaceInterface[];
  likedPlaces: PlaceInterface[];
}
export interface PlaceInterface {
  creator?: UserInterface | number;
  title: string;
  description: string;
  address: string;
  photo?: string;
  createdAt: Date;
  liked?: number;
  viewCount?: number;
}
export interface CommentInterface {
  commenter: UserInterface;
  receiver: UserInterface;
  place: PlaceInterface;
  comment: string;
  createdAt: Date;
}
