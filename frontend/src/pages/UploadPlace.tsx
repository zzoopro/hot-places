import React, { Suspense, useEffect, useRef, useState } from "react";
import Layout from "../components/common/Layout";
import Map from "../components/common/map";
import { getAddress, postPlace } from "../utils/api";
import { GetCurrentCoords, SetMap } from "../utils/maps";
import { AddressInterface } from "../utils/types";
import AddressList from "../components/addPlace/addressList";
import { useDispatch, useSelector } from "react-redux";
import { hidePopup, showPopup } from "../redux/actions/popupAction";
import { useNavigate } from "react-router-dom";
import { INITADDRESS } from "../utils/constants";

const UploadPlace = () => {
  const [currentlat, currentlng] = GetCurrentCoords(); // current coords
  const [addressList, setAddress] = useState<AddressInterface[]>([]);
  const [selectedAddress, setSelectedAddress] = useState<AddressInterface>(INITADDRESS);
  const [addressOffset, setAddressOffset] = useState<number>(1); // address offset
  const [addressInput, setAddressInput] = useState<string>(""); // address Input
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const listRef = useRef<HTMLUListElement>(null);

  const dispatch = useDispatch();
  const reduxState = useSelector((reduxState: any) => reduxState);
  const navigate = useNavigate();

  useEffect(() => {
    SetMap(currentlat, currentlng);
  }, [currentlat, currentlng]);

  useEffect(() => {
    listRef.current?.addEventListener("scroll", onListScroll);
    return () => listRef.current?.removeEventListener("scroll", onListScroll);
  }, [listRef, addressInput]);

  const onAddressChange = (event: any) => {
    setAddressInput(event.target.value);
  };

  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    getAddressFn("init");
    listRef?.current?.scroll(0, 0);
  };

  const getAddressFn = async (type?: string) => {
    await getAddress(addressInput, addressOffset).then((response) => {
      if (response.data.results.juso) {
        if (type === "init") {
          setAddress((prev) => [...response.data.results.juso]);
          // listRef.current?.scrollTo(0);
        } else {
          setAddress((prev) => [...prev, ...response.data.results.juso]);
        }
      }
    });
  };

  const onTitleChange = (event: any) => {
    setTitle(event.target.value);
  };
  const onDescriptionChange = (event: any) => {
    setDescription(event.target.value);
  };

  const BasicPopup = () => {
    return (
      <div className="w-[300px] h-[200px] bg-white z-50">
        <span className="">안녕하세요</span>
        <button
          onClick={() => {
            dispatch(hidePopup());
          }}
        >
          확인
        </button>
      </div>
    );
  };

  const uploadClick = async () => {
    const placeData = {
      title,
      description,
      address: addressInput,
    };

    postData(placeData);

    dispatch(
      showPopup({
        element: BasicPopup,
        resultFn: () => {
          dispatch(hidePopup());
        },
      })
    );
  };

  const postData = async (data: any) => {
    await postPlace(data).then((response: any) => {
      if (response.data.ok) {
        console.log("ok");
        navigate("/");
      } else {
        console.log("failed");
      }
    });
  };

  const onListScroll = () => {
    const scrollTop = listRef.current?.scrollTop;
    const uiHeight = listRef.current?.offsetHeight;
    const scrollHeight = listRef.current?.scrollHeight;
    if (scrollTop! + uiHeight! === scrollHeight) {
      setAddressOffset((prev) => prev + 1);
      getAddressFn();
    }
  };

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
          value={addressInput}
        />
        <button className="bg-black text-white ml-4 w-max">검색</button>
      </form>

      <AddressList
        reference={listRef}
        addressList={addressList}
        setSelectedAddress={setSelectedAddress}
        selectedAddress={selectedAddress}
      ></AddressList>

      <form className="flex flex-col mt-4">
        <input
          type="text"
          placeholder="제목"
          onChange={onTitleChange}
          value={title}
        />
        <label htmlFor="place_desc">설명</label>
        <textarea
          id="place_desc"
          className="block border h-36"
          onChange={onDescriptionChange}
          value={description}
        ></textarea>
      </form>

      <button className="w-full bg-black text-white" onClick={uploadClick}>
        업로드
      </button>
    </Layout>
  );
};

export default UploadPlace;
