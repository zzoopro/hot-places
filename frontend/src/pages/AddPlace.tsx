import React, { Suspense, useEffect, useState } from "react";
import Layout from "../components/common/Layout";
import Map from "../components/common/map";
import { getAddress } from "../utils/api";
import { GetCurrentCoords, SetMap } from "../utils/maps";
import { PlaceInterface, CoordsType, INITPLACE } from "../utils/types";
import AddressList from "../components/addPlace/addressList";

const AddPlace = () => {
  const [currentlat, currentlng] = GetCurrentCoords(); // current coords  
  const [placeList, setPlaceList] = useState<PlaceInterface[]>([]);
  const [selectedPlace, setSelectedPlace] = useState<PlaceInterface>(INITPLACE);

  const [address, setAddress] = useState<string>(""); 
  const [title, setTitle] = useState<string>("")
  const [description, setDescription] = useState<string>("")

  useEffect(() => {
    console.log(placeList);
  }, [placeList]);

  useEffect(() => {
    SetMap(currentlat, currentlng);
  }, [currentlat, currentlng]);

  const onAddressChange = (event: any) => {
    setAddress(event.target.value);
  };
  const onSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    await getAddress(address).then((response) =>
      setPlaceList(response.data.results.juso)
    );
  };

  const onTitleChange = (event: any) => {
    setTitle(event.target.value) 
  }
  const onDescriptionChange = (event: any) => {
    setDescription(event.target.value)
  }

  const upload = () => {
    const placeData = {
      title,
      description,
      location: {
        lat: 0,
        lng: 0,
        address: selectedPlace.roadAddr,
        zipCode: selectedPlace.zipNo
      }
    }

    console.log(placeData)
  }

  return (
    <Layout>
      <Suspense>
        <Map height={300}></Map>
      </Suspense>
      <form onSubmit={onSubmit} className="flex">
        <input
          type="text"
          placeholder="주소를 입력하세요"
          className="border w-full mt-4"
          onChange={onAddressChange}
          value={address}
        />
        <button className="bg-black text-white ml-4 w-max">검색</button>
      </form>
      <Suspense fallback={"loading"}>
        <AddressList
          placeList={placeList}
          setSelectedPlace={setSelectedPlace}
          selectedPlace={selectedPlace}
        ></AddressList>
      </Suspense>
      <form className="flex flex-col mt-4">
        <input type="text" placeholder="제목" onChange={onTitleChange} value={title}/>
        <label htmlFor="place_desc">설명</label>
        <textarea id="place_desc" className="block border h-36" onChange={onDescriptionChange} value={description}></textarea>
      </form>

      <button className="w-full bg-black text-white" onClick={upload}>업로드</button>
    </Layout>
  );
};

export default AddPlace;
