import { Box, Flex, Text } from "@chakra-ui/react";
// import React, { useContext } from 'react'
// import { Appcontext } from '../Context/AppContext';
import Footer from "../components/Footer";
import BackdropExample from "./Payment";
import Visa from "./VisaModal";

function Checkout() {
  //  const { state, dispatch, total } = useContext(Appcontext);
  let lData = JSON.parse(localStorage.getItem("Data"));
  return (
    <Box>
      <Box mt={40} ml="180px">
        <Text ml="-30px">CHOOSE A PAYMENT METHOD</Text>

        <Box border="1px solid black" p={3} mt="40px" mr="250px">
          <Text color="black" fontSize="14px" fontWeight="200">
            Please note that only cards that use 3D Secure are accepted. Contact
            your bank to activate it or for
            <br /> further instructions.
          </Text>
        </Box>

        <Flex mt="50px" gap="48px">
          <Box
            border="2px solid black"
            textAlign="center"
            boxShadow="rgb(0,0,0,0.75px)"
            padding={"5px"}
            _hover={{ cursor: "pointer", padding: "8px" }}
          >
            <img
              src="https://static.zara.net/static/images/payment/payment/icon-payment-visa.svg"
              alt=""
            />
            <Visa />
          </Box>

          <Box
            border="2px solid black"
            textAlign="center"
            boxShadow="rgb(0,0,0,0.75px)"
            _hover={{ cursor: "pointer", padding: "5px" }}
          >
            <img
              src="https://static.zara.net/static/images/payment/payment/icon-payment-mastercard.svg"
              alt=""
            />
            <span>MASTERCARD</span>
          </Box>

          <Box
            border="2px solid black"
            textAlign="center"
            boxShadow="rgb(0,0,0,0.75px)"
            _hover={{ cursor: "pointer", padding: "5px" }}
          >
            <img
              src="https://static.zara.net/static/images/payment/payment/icon-payment-amex_2.svg"
              alt=""
            />
            <span>AMERICAN EXPRESS</span>
          </Box>

          <Box
            border="2px solid black"
            textAlign="center"
            boxShadow="rgb(0,0,0,0.75px)"
            _hover={{ cursor: "pointer", padding: "5px" }}
          >
            <img
              src="https://static.zara.net/static/images/payment/payment/ru-pay.svg"
              alt=""
            />
            <span>RUPAY</span>
          </Box>

          <Box
            border="2px solid black"
            textAlign="center"
            boxShadow="rgb(0,0,0,0.75px)"
            _hover={{ cursor: "pointer", padding: "5px" }}
          >
            <img
              src="https://static.zara.net/static/images/payment/payment/net-banking.svg"
              alt=""
            />
            <span>NETBANK</span>
          </Box>

          <Box border="2px solid black" textAlign="center">
            <img
              src="https://static.zara.net/static/images/payment/payment/upi.svg"
              alt=""
            />
            <span>UPI</span>
          </Box>
        </Flex>

        <Box
          w={"300px"}
          mt="15px"
          border="2px solid black"
          marginRight="700px"
          textAlign="center"
          boxShadow="rgb(0,0,0,0.75px)"
          _hover={{ cursor: "pointer", padding: "5px" }}
        >
          <img
            src="https://static.zara.net/static/images/payment/payment/co-djpen.svg"
            alt=""
          />
          <span>Cash On Delivery</span>
        </Box>

        <Box bgColor="white">
          <Flex
            justify="center"
            align="center"
            pos="fixed"
            bottom="1px"
            right="5px"
            gap="20px"
            boxShadow="rgb(0,0,0,0.75px)"
          >
            <Box>
              <BackdropExample
                imgUrl={lData[0].imgUrl}
                price={lData[0].price}
                name={lData[0].prod_name}
              />
            </Box>
          </Flex>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
}

export default Checkout;
