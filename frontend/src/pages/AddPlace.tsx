import React, { Suspense, useEffect, useState } from "react";
import Layout from "../components/common/Layout";
import Map from "../components/common/map";
import { getAddress } from "../utils/api";
import { GetCurrentCoords, SetMap } from "../utils/maps";
import { PlaceInterface, CoordsType, INITPLACE } from "../utils/types"
import AddressList from "../components/addPlace/addressList";

const AddPlace = () => {
  const [currentlat, currentlng] = GetCurrentCoords();
  const [input, setInput] = useState<string>("");
  const [placeList, setPlaceList] = useState<PlaceInterface[]>([])
  const [selectedPlace, setSelectedPlace] = useState<PlaceInterface>(INITPLACE)

  const onChange = (event: any) => {
    setInput(event.target.value);
  };
  const onSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    await getAddress(input).then((response) => setPlaceList(response.data.results.juso));    
  };
  
  useEffect(() => {
    console.log(placeList)
  }, [placeList])

  useEffect(() => {
    SetMap(currentlat, currentlng);
  }, [currentlat, currentlng]);

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
          onChange={onChange}
          value={input}
        />
        <button className="bg-black text-white ml-4 w-max">업로드</button>
      </form>
      <Suspense fallback={"loading"}>
        <AddressList placeList={placeList} setSelectedPlace={setSelectedPlace} selectedPlace={selectedPlace}></AddressList>
      </Suspense>
    </Layout>
  );
};

export default AddPlace;
