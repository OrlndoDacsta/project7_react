import { useParams } from "react-router";
import { useState, useEffect } from "react";
import axios from "axios";
const DetailMenu = () => {
  const param = useParams();

  console.log(param?.id);

  const [menu, setMenu] = useState({});

  const getMenu = () => {
    axios
      .get(`https://api.mudoapi.tech/menu/${param?.id}`)
      .then((res) => {
        console.log(res);
        setMenu(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getMenu();
  }, []);

  return (
    <div>
      <div style={{ width: "300px", margin: "auto",border: "3px solid black", padding: "10px" }}>
        <img style={{ width: "200px"}} src={menu.imageUrl} alt={menu.name} />
        <h1>{menu.name}</h1>
        <p><b>ID:</b> {menu.id}</p>
        <p><b>Kategori:</b> {menu.type}</p>
        <p><b>Deskripsi:</b></p>
        <p>{menu.description}</p>
        <p><b>Harga:</b> {menu.price} K</p>
      </div>
    </div>
  );
};

export default DetailMenu;
