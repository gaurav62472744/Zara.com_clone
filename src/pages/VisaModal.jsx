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
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import React from "react";

function Visa() {
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();

  //   const initialRef = React.useRef(null);
  //   const finalRef = React.useRef(null);

  return (
    <>
      <button onClick={onOpen}>Visa</button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>VISA</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <Input placeholder="ENTER FULL NAME" type="text" isRequired />
            </FormControl>

            <FormControl mt={4}>
              <Input placeholder="CVV" type="number" isRequired />
            </FormControl>
            <FormControl mt={4}>
              <Input placeholder="ERPIRY DATE" type="number" isRequired />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="blue"
              mr="10px"
              onClick={() =>
                toast({
                  title: "VISA",
                  description: "Payment Details Successfully Saved",
                  status: "success",
                  duration: 3000,
                  position: "top",
                  isClosable: true,
                })
              }
            >
              {" "}
              Submit Details
            </Button>
            <Button onClick={onClose}> Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
export default Visa;
