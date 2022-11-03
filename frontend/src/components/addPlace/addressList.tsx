
import { ChangeCoords } from "../../utils/maps"
import { PlaceInterface, CoordsType } from "../../utils/types"

interface AddressListProps {
   placeList: PlaceInterface[],   
   setSelectedPlace: React.Dispatch<React.SetStateAction<PlaceInterface>>
   selectedPlace: PlaceInterface
}
const AddressList = ({ placeList, setSelectedPlace, selectedPlace }: AddressListProps) => {   

   const onClick = (place: PlaceInterface) => {
      ChangeCoords(place.roadAddr)
      setSelectedPlace(place)
   }
   return (
      <ul>
         {placeList?.map((place, i) => {
            return (
               <li key={i} onClick={() => onClick(place)} className={selectedPlace === place ? "bg-black text-white" : ""}>{place.roadAddr}</li>
            )
         })}
      </ul>
   )
}

export default AddressList