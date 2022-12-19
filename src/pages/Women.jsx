import React from "react";
import { useState, useEffect } from "react";
import ProductAddToCart from "./WomenCards";
import { Flex, Grid } from "@chakra-ui/react";
import Loading from "./Loading";

const Women = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const getData = async () => {
    setLoading(true);
    try {
      let res = await fetch(`https://saraweb.onrender.com/women`);
      res = await res.json();
      setData(res);
      console.log(res);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  if (loading) {
    return <Loading />;
  } else
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
