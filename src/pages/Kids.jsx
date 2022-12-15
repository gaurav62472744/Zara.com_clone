import React from "react";
import { useState, useEffect } from "react";
import { Flex, Grid } from "@chakra-ui/react";
import KidsProductAddToCart from "./KidsCard";

const Kids = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    let res = await fetch(`https://saraweb.onrender.com/kids`);
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
          return <KidsProductAddToCart key={el._id} {...el} />;
        })}
      </Grid>
    </Flex>
  );
};

export default Kids;
