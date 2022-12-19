import {
  Button,
  Modal,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalOverlay,
  Text,
  ModalFooter,
  useDisclosure,
  Image,
  useToast,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

function BackdropExample({ imgUrl, price, name }) {
  const toast = useToast();
  const OverlayOne = () => (
    <ModalOverlay
      bg="blackAlpha.300"
      backdropFilter="blur(10px) hue-rotate(90deg)"
    />
  );

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [overlay, setOverlay] = React.useState(<OverlayOne />);

  return (
    <>
      <Button
        ml={"500px"}
        bg={"black"}
        w={"300px"}
        borderRadius="none"
        color={"white"}
        _hover={{ bg: "grey", color: "white" }}
        onClick={() => {
          setOverlay(<OverlayOne />);
          onOpen();
        }}
      >
        Continue to Payment
      </Button>
      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        {overlay}
        <ModalContent>
          <ModalHeader>Total Amount Payable</ModalHeader>
          <ModalCloseButton />

          <ModalBody
            display={"flex"}
            justifyContent={"space-evenly"}
            alignItems={"center"}
            flexDirection={"column"}
          >
            <Image src={imgUrl} alt={name} width={"130px"}></Image>

            <Text mt={"10px"}>ITEM : {name}</Text>
            <Text> PRiCE : $ {price}</Text>
          </ModalBody>
          <ModalFooter>
            <Button
              bg={"black"}
              w={"100px"}
              borderRadius="none"
              color={"white"}
              _hover={{ bg: "grey", color: "white" }}
              onClick={onClose}
            >
              Close
            </Button>

            <Button
              bg={"black"}
              w={"200px"}
              marginLeft={"10px"}
              borderRadius="none"
              color={"white"}
              _hover={{ bg: "grey", color: "white" }}
              onClick={() =>
                toast({
                  title: "Payment SuccessFull ",
                  description: "Hurray! we have recieved your payment",
                  status: "success",
                  duration: 3000,
                  position: "top",
                  isClosable: true,
                })
              }
            >
              <Link to="/">Pay Amount : $ {price}</Link>
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
export default BackdropExample;
