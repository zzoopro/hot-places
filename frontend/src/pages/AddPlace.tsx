import React, { useEffect, useState } from "react";
import Layout from "../components/common/Layout";
import Map from "../components/common/map";
import { getAddress } from "../utils/api";
import { GetCurrentCoords, SetMap } from "../utils/utils";

const AddPlace = () => {
  const [lat, lng] = GetCurrentCoords();
  const [address, setAddress] = useState<string>("");
  const onChange = (event: any) => {
    setAddress(event.target.value);
  };
  const onSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    await getAddress(address).then((response) => console.log(response));
  };

  useEffect(() => {
    SetMap(lat, lng);
  }, [lat, lng]);

  return (
    <Layout>
      <Map height={200}></Map>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="주소를 입력하세요"
          className="border w-full mt-4"
          onChange={onChange}
          value={address}
        />
        <button>업로드</button>
      </form>
    </Layout>
  );
};

export default AddPlace;
