import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../components/common/Layout";
import { setLoading } from "../redux/actions/loadingAction";
import { getPlaces } from "../utils/api";
import { INITPLACE, PlaceInterface } from "../utils/types";

const Home = () => {  
  const dispatch = useDispatch()
  const loadingState = useSelector((state: any) => state.loading)

  const [places, setPlaces] = useState<PlaceInterface[]>([])

  useEffect(() => {
    getPlaces().then((response: any) => setPlaces(response.data))
  }, []);

  const addPost = () => {
    setPlaces((prev: PlaceInterface[]) =>  [...prev, INITPLACE])
  };

  return (
    <Layout>
      <div>
        <ul>
          {places?.map((post: any, idx: number) => {
            return (
              <li key={idx}>
                <h2>{post?.title}</h2>
                <p>{post?.content}</p>
              </li>
            );
          })}
        </ul>

        <button onClick={addPost} className="bg-red-500">
          add
        </button>
      </div>
    </Layout>
  );
};

export default Home;
