import { Button } from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const MenSinglePage = () => {
  const { id } = useParams();

  const [data, setData] = useState([]);
  const getData = async () => {
    let res = await fetch(`https://saraweb.onrender.com/men/${id}`);
    res = await res.json();
    setData(res);
  };

  useEffect(() => {
    getData(id);
  }, [id]);

  return (
    <div
      style={{
        display: "flex",
        marginTop: "200px",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: "50%",
          display: "flex",
          justifyContent: "center",
          marginBottom: "50px",
          // borderRadius: "10px",
        }}
      >
        {" "}
        <img
          src={data.imgUrl}
          width="400px"
          alt={data.prod_name}
          style={{ borderRadius: "20px" }}
        />
      </div>
      <div
        style={{
          width: "18%",
          border: "3px solid blue",
          padding: "1rem",
          borderRadius: "10px",
        }}
      >
        <p>PRODUCT : {data.prod_name}</p>
        <p style={{ marginTop: "20px" }}>PRICE : $ {data.price}</p>
        <p style={{ marginTop: "20px" }}>DESCRIPTION : {data.material}</p>
        <p style={{ marginTop: "20px" }}>SIZE : {data.size}</p>
        <p style={{ marginTop: "20px" }}>CATEGORY : {data.type1}</p>
        <Button mt={"20px"} bg={"black"} color={"white"} _hover={"none"}>
          Add To Cart
        </Button>
      </div>
    </div>
  );
};

export default MenSinglePage;
