import React from "react";
import { Box } from "@chakra-ui/react";

const Loading = () => {
  return (
    <Box
      as="div"
      width="100vw"
      height="100vh"
      style={{
        backgroundImage: `url("https://smashinghub.com/wp-content/uploads/2014/08/cool-loading-animated-gif-8.gif")`,
      }}
    ></Box>
  );
};

export default Loading;
