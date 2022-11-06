import { LegacyRef, useEffect, useRef, useState } from "react";
import { getAddress } from "../../utils/api";
import { ChangeCoords } from "../../utils/maps";
import { PlaceInterface, CoordsType } from "../../utils/types";

interface AddressListProps {
  placeList: PlaceInterface[];
  setSelectedPlace: React.Dispatch<React.SetStateAction<PlaceInterface>>;
  selectedPlace: PlaceInterface;
  reference: LegacyRef<HTMLUListElement>;
}
const AddressList = ({
  placeList,
  setSelectedPlace,
  selectedPlace,
  reference,
}: AddressListProps) => {
  const onClick = (place: PlaceInterface) => {
    ChangeCoords(place.roadAddr);
    setSelectedPlace(place);
  };

  return (
    <ul className="max-h-24 overflow-y-scroll" ref={reference}>
      {placeList?.map((place, i) => {
        return (
          <li
            key={i}
            onClick={() => onClick(place)}
            className={selectedPlace === place ? "bg-black text-white" : ""}
          >
            {place.roadAddr}
          </li>
        );
      })}
    </ul>
  );
};

export default AddressList;
