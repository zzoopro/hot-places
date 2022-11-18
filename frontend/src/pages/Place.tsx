import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Layout from "../components/common/Layout"
import { getPlace } from "../utils/api"
import { PlaceInterface } from "../utils/types"

const Place = () => {
   const param = useParams()
   const [place, setPlace] = useState<PlaceInterface | null>(null)
   useEffect(() => {      
      getPlace(param.id + "").then(response => {setPlace(response.data.place)})
   }, [param])

   console.log(place)
   return (
      <Layout>
         <div>
            <h1>{place?.title}</h1>
            <span>{place?.description}</span>
            <span>{place?.address}</span>
         </div>
      </Layout>
   )
   
}

export default Place