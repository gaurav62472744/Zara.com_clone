import { Box, Button, Flex, Input, Text, FormControl } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function Login() {
  return (
    <Box>
      <Box>
        <Navbar />
      </Box>

      <Box
        mt={250}
        ml="12%"
        style={{ fontFamily: "Neue-Helvetica, Helvetica, Arial, sans-serif" }}
      >
        <Flex gap={200}>
          <Box width={"20%"} textAlign={"start"}>
            <Text fontSize="18px" fontWeight={600}>
              LOG IN
            </Text>
            <Box>
              <FormControl isRequired>
                <Input
                  border="none"
                  borderRadius="none"
                  borderColor="black"
                  borderBottom="1px"
                  textDecoration="none"
                  name="email"
                  type="text"
                  placeholder="E-MAIL"
                  mt={"25px"}
                  alignItems="start"
                  padding="0px"
                  fontSize="12px"
                />
              </FormControl>
            </Box>
            <Box>
              <FormControl isRequired>
                <Input
                  fontSize="12px"
                  border="none"
                  borderRadius="none"
                  borderColor="black"
                  borderBottom="1px"
                  textDecoration="none"
                  name="password"
                  type="text"
                  placeholder="PASSWORD"
                  mt={"25px"}
                  alignItems="start"
                  padding="0px"
                />
              </FormControl>
              <Text fontSize="10px" fontWeight="600" mt="10%">
                HAVE YOU FORGOTTEN YOUR PASSWORD?
              </Text>
            </Box>
            <Box mt="15%">
              <Button
                type="submit"
                w={"100%"}
                borderRadius="none"
                bg={"black"}
                color={"white"}
                _hover={{ bg: "grey", color: "white" }}
              >
                LOG IN
              </Button>
            </Box>
          </Box>
          <Box>
            <Text fontSize="18px" fontWeight="600" textAlign={"start"}>
              REGISTER
            </Text>

            <Box>
              <Text fontSize="12px" mt="7%" textAlign={"start"}>
                IF YOU STILL DON'T HAVE A <b> ZARA.COM </b> ACCOUNT, USE THIS
                OPTION TO <br /> ACCESS THE REGISTRATION FORM.
              </Text>
            </Box>

            <Box>
              <Text fontSize="12px" mt="7%" textAlign={"start"}>
                BY GIVING US YOUR DETAILS, PURCHASING IN
                <b> ZARA.COM </b> WILL BE FASTER <br />
                AND AN ENJOYABLE EXPERIENCE.
              </Text>
            </Box>

            <Box display={"flex"} flexDirection={"column"} alignItems={"start"}>
              <Link to="/signup">
                <Button
                  mt="26%"
                  w={"300px"}
                  borderRadius="none"
                  bg={"black"}
                  color={"white"}
                  _hover={{ bg: "grey", color: "white" }}
                >
                  CREATE ACCOUNT
                </Button>
              </Link>
            </Box>
          </Box>
        </Flex>
      </Box>

      <Footer />
    </Box>
  );
}

export default Login;
