import React from "react";
import { useState, useEffect } from "react";
import { Flex, Grid } from "@chakra-ui/react";
import MensProductAddToCart from "./MenCards";
import Loading from "./Loading";

const Mens = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const getData = async () => {
    setLoading(true);
    try {
      let res = await fetch(`https://saraweb.onrender.com/men`);
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
            return <MensProductAddToCart key={el._id} {...el} />;
          })}
        </Grid>
      </Flex>
    );
};

export default Mens;
