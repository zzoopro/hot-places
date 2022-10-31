import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import Layout from "../components/common/Layout";

import { BASE_BACKEND_URL } from "../utils/constants"

const Home = () => {
  const reduxState = useSelector((state) => state) as any;
  const dispatch = useDispatch();
  console.log("redux data", reduxState);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios(`${BASE_BACKEND_URL}/api/places/all`).then((response: any) => {
      dispatch({ type: "renewal", payload: response.data });
    });
  };

  const dummy = {
    content: "content",
    postId: 22,
    creatorId: 11,
    createdAt: 123,
    title: "title",
  };

  const addPost = () => {
    dispatch({ type: "add", payload: dummy });
  };

  return (
    <Layout>
      <div>
        <ul>
          {reduxState?.posts?.map((post: any, idx: number) => {
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
