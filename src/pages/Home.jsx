import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../component/Navbar";
import { Link } from "react-router-dom";
const Home = () => {
  const [data, setData] = useState([]);

  //   const getData = () => {
  //     axios
  //       .get("https://api.mudoapi.tech/menus")
  //       .then((res) => {
  //         console.log(res.data.data.Data);
  //         const response = res.data.data.Data;
  //         setData(response);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   };

  const getData = async () => {
    try {
      const response = await axios.get("https://api.mudoapi.tech/menus");
      setData(response.data.data.Data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <Navbar />
      <h1>Home</h1>

      {data.map((item) => (
        <Link style={{ textDecoration: "none", color: "black" }} to={`/menu/${item.id}`} key={item.id}>
          <img
            style={{ width: "200px", height: "200px" }}
            src={item.imageUrl}
            alt=""
          />
          <p>{item.name}</p>
          <p>{item.priceFormatted}</p>
        </Link>
      ))}
    </div>
  );
};

export default Home;
