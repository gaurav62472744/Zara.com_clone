import { Box, Flex, Text, Image, Button } from "@chakra-ui/react";
import { useState } from "react";
import { Link } from "react-router-dom";

function Cart() {
  let lData = JSON.parse(localStorage.getItem("Data"));

  console.log(lData);

  const handleDelete = (id) => {
    console.log(id);
    let newData = lData.splice(id, 1);
    localStorage.setItem("Data", JSON.stringify(newData));
  };

  console.log(lData);
  const [incr, setIncr] = useState(1);

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
          <Button
            ml={"500px"}
            w={"200px"}
            borderRadius="none"
            bg={"black"}
            color={"white"}
            _hover={{ bg: "grey", color: "white" }}
          >
            <Link to="/checkout"> Proceed to checkout</Link>
          </Button>
        </Flex>

        {lData.map((el, i) => (
          <Box key={i} style={{ width: "75%", margin: "auto" }}>
            <Flex
              border={"3px solid black"}
              marginTop={"20px"}
              gap={10}
              fontSize={"20px"}
              alignItems={"center"}
              fontFamily={"Neue-Helvetica, Helvetica, Arial, sans-serif"}
              padding={"1rem"}
              mb={"10px"}
            >
              <Image
                w={"200px"}
                src={el.imgUrl}
                borderRadius={"20px"}
                alt={el.prod_name}
              ></Image>
              <Text>Price : $ {el.price * incr}</Text>
              <Text>Size : {el.size}</Text>
              <Text>Category : {el.type1}</Text>
              <Button
                bg={"black"}
                color={"white"}
                _hover={{ bg: "grey", color: "white" }}
                onClick={() => handleDelete(el.id)}
              >
                Delete
              </Button>

              <Button
                bg={"black"}
                color={"white"}
                _hover={{ bg: "grey", color: "white" }}
                onClick={() => setIncr(incr + 1)}
              >
                +
              </Button>
              <Text>{incr}</Text>
              <Button
                bg={"black"}
                color={"white"}
                _hover={{ bg: "grey", color: "white" }}
                onClick={() => setIncr(incr - 1)}
                disabled={incr === 1}
              >
                -
              </Button>
            </Flex>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default Cart;
