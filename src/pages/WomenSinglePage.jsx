import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const WomenSinglePage = () => {
  const { id } = useParams();

  const [data, setData] = useState([]);
  const getData = async () => {
    let res = await fetch(`https://saraweb.onrender.com/women/${id}`);
    res = await res.json();
    setData(res);
    console.log("ram", res);
  };

  useEffect(() => {
    getData(id);
  }, [id]);

  return (
    <div>
      <p>{data.prod_name}</p>
    </div>
  );
};

export default WomenSinglePage;
