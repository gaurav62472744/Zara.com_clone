import React from "react";
import { useState, useEffect } from "react";
import { Flex, Grid } from "@chakra-ui/react";
import MensProductAddToCart from "./MenCards";

const Mens = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    let res = await fetch(`https://saraweb.onrender.com/men`);
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
          return <MensProductAddToCart key={el._id} {...el} />;
        })}
      </Grid>
    </Flex>
  );
};

export default Mens;
