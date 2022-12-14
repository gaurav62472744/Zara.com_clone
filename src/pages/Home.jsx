import { Box, Button, Flex, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import Footer from "../components/Footer";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";

let Women = {
  image1:
    "https://static.zara.net/photos///contents/mkt/spots/aw22-north-woman-knitwear/subhome-xmedia-49//w/1920/IMAGE-landscape-fill-4b91c18a-fd1a-4d7e-8ddb-39cafb54cdef-default_0.jpg?ts=1670433076541",
  video: "Video/Winter.mp4",
  image2:
    "https://static.zara.net/photos///contents/mkt/spots/aw22-north-collection/subhome-xmedia-49//w/1920/IMAGE-landscape-default-fill-cdf1d01f-6f9e-46e7-a035-8079f5d17f72-default_0.jpg?ts=1670432527336",
  image3:
    "https://static.zara.net/photos///contents/mkt/spots/aw22-north-woman-new/subhome-xmedia-49-2//w/1920/IMAGE-landscape-default-fill-9470e5e9-1ec3-45c6-9045-53a692b8b504-default_0.jpg?ts=1670431933456",
  image4:
    "https://static.zara.net/photos///contents/mkt/spots/aw22-north-woman-best-sellers/subhome-xmedia-38//w/1920/IMAGE-landscape-fill-c68605f6-1f94-4830-8f4a-0f3bf22017e2-default_0.jpg?ts=1663579002306",
};

let Men = {
  image1:
    "https://static.zara.net/photos///contents/mkt/spots/aw22-north-man-athleticz/subhome-xmedia-50//w/1920/IMAGE-landscape-fill-8461d8f6-aa20-4b7c-bf56-ddbfe1ab66ea-default_0.jpg?ts=1670844315727",
  video2: "Video/Winter.mp4",
  image2:
    "https://static.zara.net/photos///contents/mkt/spots/aw22-north-man-new/subhome-xmedia-49//w/1920/IMAGE-landscape-fill-26580743-41eb-4586-859d-09e81a25b1be-default_0.jpg?ts=1670421023459",
  image3:
    "https://static.zara.net/photos///contents/mkt/spots/aw22-north-man-edition/subhome-xmedia-w47//w/1920/IMAGE-landscape-fill-88c5ba6c-832e-442e-878f-48b60c0c8aa7-default_0.jpg?ts=1669457412950",
  image4:
    "https://static.zara.net/photos///contents/mkt/spots/aw22-man-north-shoesandbags/subhome-xmedia-48//w/1920/IMAGE-landscape-fill-b24b0454-105d-41bd-80f4-604d93d15bb3-default_0.jpg?ts=1669655003956",
};

let Child = {
  image1:
    "https://static.zara.net/photos///contents/mkt/spots/aw22-north-kids-babygirl/subhome-xmedia-50//w/1920/IMAGE-landscape-fill-4c7367f4-222f-4e2a-a6a6-c5c7e22f903a-default_0.jpg?ts=1670936962182",
  video: "Video/Winter.mp4",
  image2:
    "https://static.zara.net/photos///contents/mkt/spots/aw22-north-kids-babyboy/subhome-xmedia-50//w/1920/IMAGE-landscape-fill-ff966491-7491-4c06-994e-ca71500b4c49-default_0.jpg?ts=1670935725138",
  image3:
    "https://static.zara.net/photos///contents/mkt/spots/aw22-north-kids-mini/subhome-xmedia-47//w/1920/IMAGE-landscape-fill-a8ada299-8dee-4702-abfa-b0d0040b4192-default_0.jpg?ts=1669384230932",
  image4:
    "https://static.zara.net/photos///contents/mkt/spots/aw22-joinlife-jeans-redesign/subhome-xmedia-kids//w/1920/IMAGE-landscape-fill-ac5416df-605d-44bf-aac4-d0342fec6014-default_0.jpg?ts=1670951111571",
};
let arr = [Women, Men, Child];

const Home = () => {
  const [ind, setInd] = useState(0);
  return (
    <Box pos="relative">
      <Box>
        <img src={arr[ind].image1} alt="" width="100%" height="100%" />
        <Flex zIndex={2} pos="fixed" top={50} left={1} gap={1000}>
          <Box>
            <Button
              disabled={ind === 0}
              onClick={() => setInd(ind - 1)}
              colorScheme="transparent"
              size="lg"
              mt={60}
            >
              <ChevronLeftIcon w={12} h={10} marginRight="20px" />
            </Button>
          </Box>
          <Box>
            <Button
              disabled={ind === 2}
              onClick={() => setInd(ind + 1)}
              colorScheme="transparent"
              size="lg"
              mt={60}
            >
              <ChevronRightIcon w={12} h={10} marginLeft="300px" />
            </Button>
          </Box>
        </Flex>
      </Box>

      <Flex gap={30} pos="fixed" top={630} left={490} fontWeight={"bold"}>
        <Text fontSize="sm">ZARA ATHELITIC</Text>
        <Text fontSize="sm">NEW </Text>
        <Text fontSize="sm">PARTY</Text>
        <Text fontSize="sm">SHOES</Text>
        <Text fontSize="sm">EDITION</Text>
        <Text fontSize="sm">ZARA ORIGINS</Text>
      </Flex>

      <Box height="1000px">
        <video width="100%" height="100%" autoPlay="autoPlay" loop={true} muted>
          <source src={arr[ind].video} type="video/mp4" />
        </video>
      </Box>
      {/* <Box height="400px">
        <video width="100%" height="100%" autoPlay="autoPlay" loop={true} muted>
          <source src={arr[ind].video2} type="video/mp4" />
        </video>
      </Box> */}
      <Box mt="-10%">
        <img src={arr[ind].image2} alt="" width="100%" height="100%" />
      </Box>
      <Box mt="-10%">
        <img src={arr[ind].image3} alt="" width="100%" height="100%" />
      </Box>
      <Box mt="-10%">
        <img src={arr[ind].image4} alt="" width="100%" height="100%" />
      </Box>
      <Footer />
    </Box>
  );
};

export default Home;
