import {
  Box,
  Button,
  Flex,
  Input,
  Text,
  FormControl,
  Center,
  useToast,
} from "@chakra-ui/react";
import { Link, Navigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import Footer from "../components/Footer";
import React, { useState } from "react";
import {
  getAuth,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

import { app } from "../firebase";
import { useContext } from "react";
import { AllContext } from "../AuthContext/AuthContext";

const auth = getAuth(app);
const Google = new GoogleAuthProvider();

function Login() {
  const { isAuth, setIsAuth } = useContext(AllContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const toast = useToast();

  const singinUser = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((value) => {
        toast({
          title: "SignIn Successfull.",
          description: `Welcome, ${email}`,
          status: "success",
          duration: 5000,
          position: "top",
          isClosable: true,
        });
        setEmail("");
        setPassword("");
        setIsAuth(true);
        console.log(value);
      })
      .catch((err) => {
        toast({
          title: `${err.message}`,
          status: "error",
          isClosable: true,
          position: "top",
          duration: 3000,
        });
        setEmail("");
        setPassword("");
      });
  };

  const googleLogin = () => {
    signInWithPopup(auth, Google)
      .then((value) => {
        toast({
          title: "Account created.",
          description: `Welcome to Sara.com`,
          status: "success",
          duration: 5000,
          position: "top",
          isClosable: true,
        });
        setEmail("");
        setPassword("");
        setIsAuth(true);
        console.log(value);
      })
      .catch((err) => {
        toast({
          title: `${err.message}`,
          status: "error",
          isClosable: true,
          position: "top",
          duration: 3000,
        });
        setEmail("");
        setPassword("");
      });
  };
  if (isAuth) {
    return <Navigate to="/" />;
  }

  return (
    <Box>
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
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
                  type="password"
                  placeholder="PASSWORD"
                  mt={"25px"}
                  alignItems="start"
                  padding="0px"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
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
                onClick={singinUser}
              >
                LOG IN
              </Button>
            </Box>
            <Box mt="15%">
              <Button
                onClick={googleLogin}
                w={"full"}
                variant={"outline"}
                borderRadius="none"
                bg={"black"}
                color={"white"}
                _hover={{ bg: "grey", color: "white" }}
                leftIcon={<FcGoogle />}
              >
                <Center>
                  <Text>Sign in with Google</Text>
                </Center>
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
