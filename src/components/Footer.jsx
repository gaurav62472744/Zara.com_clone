import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";

function Footer() {
  return (
    <Box height="500px">
      <Flex align="center" justify="center" mt="15%">
        <Text
          fontSize="md"
          fontFamily={"Neue-Helvetica, Helvetica, Arial, sans-serif"}
        >
          JOIN OUR NEWSLETTER
        </Text>
      </Flex>

      <Box>
        <Flex
          align="center"
          gap={"5px"}
          justify="center"
          mt="10%"
          fontFamily={"Neue-Helvetica, Helvetica, Arial, sans-serif"}
        >
          <Box p="2%">
            <Text
              fontSize="sm"
              fontWeight={300}
              onClick={() =>
                (window.location.href = "https://www.instagram.com/zara/")
              }
              cursor={"pointer"}
            >
              INSTAGRAM
            </Text>
          </Box>
          <Box p="2%">
            <Text
              fontSize="sm"
              fontWeight={300}
              onClick={() =>
                (window.location.href = "https://twitter.com/ZARA")
              }
              cursor={"pointer"}
            >
              TWITTER
            </Text>
          </Box>
          <Box p="2%">
            <Text
              fontSize="sm"
              fontWeight={300}
              onClick={() =>
                (window.location.href = "https://www.facebook.com/Zara")
              }
              cursor={"pointer"}
            >
              FACEBOOK
            </Text>
          </Box>
          <Box p="2%">
            <Text
              fontSize="sm"
              fontWeight={300}
              onClick={() =>
                (window.location.href = "https://es.pinterest.com/zaraofficial")
              }
            >
              PINTEREST
            </Text>
          </Box>
          <Box p="2%">
            <Text
              fontSize="sm"
              fontWeight={300}
              onClick={() =>
                (window.location.href = "http://www.youtube.com/user/zara")
              }
            >
              YOUTUBE
            </Text>
          </Box>
          <Box p="2%">
            <Text
              fontSize="sm"
              fontWeight={300}
              cursor={"pointer"}
              onClick={() =>
                (window.location.href =
                  "https://open.spotify.com/user/r6ivwuv0ebk346hhxo446pbfv")
              }
            >
              SPOTIFY
            </Text>
          </Box>
        </Flex>
      </Box>
      <Box p="np2%" mt={"120px"} ml="15%" mb={"100px"}>
        <Text
          fontSize="11px"
          lineHeight={1.2}
          fontWeight={300}
          fontFamily={"Neue-Helvetica, Helvetica, Arial, sans-serif"}
          marginRight={"900px"}
          textAlign="start"
        >
          Name and address of the manufacturer:
        </Text>
        <Text
          fontSize="11px"
          lineHeight={1.2}
          fontWeight={300}
          fontFamily={"Neue-Helvetica, Helvetica, Arial, sans-serif"}
          marginRight={"900px"}
          textAlign="start"
        >
          Industria de Diseño Textil, S.A. (INDITEX, S.A.)
        </Text>
        <Text
          fontSize="11px"
          lineHeight={1.2}
          fontWeight={300}
          fontFamily={"Neue-Helvetica, Helvetica, Arial, sans-serif"}
          marginRight={"900px"}
          textAlign="start"
        >
          Avenida de la Diputación, Edificio Inditex, 15143, Arteixo (A Coruña),
          Spain
        </Text>
      </Box>
      <Box></Box>
    </Box>
  );
}

export default Footer;
