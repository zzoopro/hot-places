import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Layout from "../components/common/Layout";
import { setLoading } from "../redux/actions/loadingAction";
import { getPlaces } from "../utils/api";
import { INITADDRESS } from "../utils/constants";
import { AddressInterface } from "../utils/types";

const Home = () => {  
  const dispatch = useDispatch()
  const loadingState = useSelector((state: any) => state.loading)

  const [places, setPlaces] = useState<AddressInterface[]>([])

  useEffect(() => {
    getPlaces().then((response: any) => setPlaces(response.data))
  }, []);
  
  return (
    <Layout>
      <div>
        <ul>
          {places?.map((post: any) => {
            return (
              <Link to={`/places/${post._id}`}  key={post._id}>
                <li key={post._id}>
                  <h2>{post?.title}</h2>
                  <p>{post?.description}</p>
                  <p>{post.address}</p>
                </li>
              </Link>              
            );
          })}
        </ul>
      </div>
    </Layout>
  );
};

export default Home;
