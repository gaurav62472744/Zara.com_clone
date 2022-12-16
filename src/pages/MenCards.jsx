import {
  Flex,
  Box,
  Image,
  useColorModeValue,
  chakra,
  Tooltip,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
function MensProductAddToCart({ id, imgUrl, prod_name, price }) {
  return (
    <Flex
      p={50}
      w="full"
      alignItems="center"
      mt={"25%"}
      justifyContent="center"
      ml={"5px"}
    >
      <Link to={`/menproduct/${id}`}>
        <Box
          bg={useColorModeValue("white", "gray.800")}
          maxW="sm"
          borderWidth="1px"
          rounded="lg"
          shadow="lg"
          position="relative"
        >
          <Image
            src={imgUrl}
            w={"400px"}
            h={"600px"}
            alt={`Picture of ${prod_name}`}
            roundedTop="lg"
          />

          <Box p="6">
            <Flex mt="1" justifyContent="space-between" alignContent="center">
              <Box
                fontWeight="semibold"
                as="h4"
                lineHeight="tight"
                isTruncated
                fontSize="sm"
                fontFamily={"Neue-Helvetica, Helvetica, Arial, sans-serif"}
              >
                {prod_name}
              </Box>
              <Tooltip
                label="Add to cart"
                bg="white"
                placement={"top"}
                color={"gray.800"}
                fontSize={"1.2em"}
              >
                <chakra.a href={"#"} display={"flex"}></chakra.a>
              </Tooltip>
            </Flex>

            <Flex justifyContent="space-between" alignContent="center">
              <Box
                fontSize="2xl"
                color={useColorModeValue("gray.800", "white")}
              >
                <Box
                  as="span"
                  color={"gray.600"}
                  fontSize="sm"
                  fontFamily={"Neue-Helvetica, Helvetica, Arial, sans-serif"}
                >
                  $
                </Box>
                {price}
              </Box>
            </Flex>
          </Box>
        </Box>
      </Link>
    </Flex>
  );
}

export default MensProductAddToCart;
