import { LegacyRef, useEffect, useRef, useState } from "react";
import { getAddress } from "../../utils/api";
import { ChangeCoords } from "../../utils/maps";
import { CoordsType, AddressInterface } from "../../utils/types";

interface AddressListProps {
  addressList: AddressInterface[];
  setSelectedAddress: React.Dispatch<React.SetStateAction<AddressInterface>>;
  selectedAddress: AddressInterface;
  reference: LegacyRef<HTMLUListElement>;
}
const AddressList = ({
  addressList,
  setSelectedAddress,
  selectedAddress,
  reference,
}: AddressListProps) => {
  const onClick = (place: AddressInterface) => {
    ChangeCoords(place.roadAddr);
    setSelectedAddress(place);
  };

  return (
    <ul className="max-h-24 overflow-y-scroll" ref={reference}>
      {addressList?.map((address, i) => {
        return (
          <li
            key={i}
            onClick={() => onClick(address)}
            className={selectedAddress === address ? "bg-black text-white" : ""}
          >
            {address.roadAddr}
          </li>
        );
      })}
    </ul>
  );
};

export default AddressList;
