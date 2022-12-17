import { Box, Flex, Text, Image, Button } from "@chakra-ui/react";

function Cart() {
  let lData = JSON.parse(localStorage.getItem("Data"));

  console.log(lData);

  return (
    <Box style={{ width: "98vw", margin: "auto" }}>
      <Box>
        <Flex mt={180} gap="35px" ml="195px">
          <Text fontSize="lg" fontWeight="500">
            CART
          </Text>
          <Text fontSize="lg" fontWeight={300}>
            FAVOURITES
          </Text>
        </Flex>

        {lData.map((el, i) => (
          <Box key={i} style={{ width: "50%", margin: "auto" }}>
            <Flex
              border={"3px solid black"}
              marginTop={"20px"}
              gap={10}
              fontSize={"20px"}
              alignItems={"center"}
              fontFamily={"Neue-Helvetica, Helvetica, Arial, sans-serif"}
              padding={"8px"}
              mb={"10px"}
            >
              <Image
                w={"130px"}
                src={el.imgUrl}
                borderRadius={"20px"}
                alt={el.prod_name}
              ></Image>
              <Text>Price : $ {el.price}</Text>
              <Text>Size : {el.size}</Text>
              <Text>Category : {el.type1}</Text>
              <Button
                bg={"black"}
                color={"white"}
                _hover={{ bg: "grey", color: "white" }}
              >
                Delete
              </Button>
            </Flex>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default Cart;
