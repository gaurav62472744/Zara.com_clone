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
import Footer from "../components/Footer";
import { FcGoogle } from "react-icons/fc";
import { useContext } from "react";
import { AllContext } from "../AuthContext/AuthContext";

import React, { useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { app } from "../firebase";
import { Navigate } from "react-router-dom";

const auth = getAuth(app);
const Google = new GoogleAuthProvider();

const Signuppage = () => {
  const { isAuth, setIsAuth, newUser, setNewUser } = useContext(AllContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [number, setNumber] = useState("");
  const [name, setName] = useState("");
  const toast = useToast();

  const createUser = () => {
    createUserWithEmailAndPassword(auth, email, password, name, number)
      .then((value) => {
        toast({
          title: "Account created.",
          description: `Welcome, ${email} `,
          status: "success",
          duration: 5000,
          position: "top",
          isClosable: true,
        });
        setEmail("");
        setName("");
        setNumber("");
        setPassword("");
        console.log(value);
        setNewUser(true);
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
        setName("");
        setNumber("");
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
        setName("");
        setNumber("");
        setPassword("");
        console.log(value);
        setIsAuth(true);
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
        setName("");
        setNumber("");
        setPassword("");
      });
  };

  if (isAuth) {
    return <Navigate to="/" />;
  }

  if (newUser) {
    return <Navigate to="/login" />;
  }
  return (
    <Box>
      <Box
        mt={170}
        ml="40%"
        style={{ fontFamily: "Neue-Helvetica, Helvetica, Arial, sans-serif" }}
      >
        <Flex gap={200}>
          <Box width={"35%"} textAlign={"start"}>
            <Text fontSize="18px" fontWeight={600}>
              SIGN UP
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
                  border="none"
                  borderRadius="none"
                  borderColor="black"
                  borderBottom="1px"
                  textDecoration="none"
                  name="name"
                  type="text"
                  placeholder="NAME"
                  mt={"25px"}
                  alignItems="start"
                  padding="0px"
                  fontSize="12px"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </FormControl>
            </Box>
            <Box>
              <FormControl isRequired>
                <Input
                  border="none"
                  borderRadius="none"
                  borderColor="black"
                  borderBottom="1px"
                  textDecoration="none"
                  name="number"
                  type="number"
                  placeholder="MOBILE NUMBER"
                  mt={"25px"}
                  alignItems="start"
                  padding="0px"
                  fontSize="12px"
                  value={number}
                  onChange={(e) => setNumber(e.target.value)}
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
            </Box>
            <Box mt="15%">
              <Button
                type="submit"
                w={"100%"}
                borderRadius="none"
                bg={"black"}
                color={"white"}
                _hover={{ bg: "grey", color: "white" }}
                onClick={createUser}
              >
                SIGN UP
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
                  <Text>Sign Up with Google</Text>
                </Center>
              </Button>
            </Box>
          </Box>
        </Flex>
      </Box>
      <Footer />
    </Box>
  );
};

export default Signuppage;
