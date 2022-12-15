import React from "react";
import { useState, useEffect } from "react";
import ProductAddToCart from "./WomenCards";
import { Flex, Grid } from "@chakra-ui/react";

const Women = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    let res = await fetch(`https://saraweb.onrender.com/women`);

    res = await res.json();
    setData(res);
    console.log(res);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Flex>
      <Grid gridTemplateColumns="repeat(3,1fr)" gap="1rem">
        {" "}
        {data.map((el) => {
          return <ProductAddToCart key={el._id} {...el} />;
        })}
      </Grid>
    </Flex>
  );
};

export default Women;
