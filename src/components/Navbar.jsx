import {
  Box,
  Flex,
  Avatar,
  Link,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
  Image,
  useDisclosure,
  RadioGroup,
  Radio,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  IconButton,
  HamburgerIcon,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import React from "react";

const NavLink = ({ children }) => (
  <Link
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
    href={"#"}
  >
    {children}
  </Link>
);

export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  //   const { isOpen, onOpen, onClose } = useDisclosure();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [placement, setPlacement] = React.useState("right");
  return (
    <>
      <Box bg={useColorModeValue("white", "white")} px={4} height={"100px"}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Menu>
            <MenuButton
              as={IconButton}
              aria-label="Options"
              variant="outline"
              color="blue"
            />
            <MenuList>
              <MenuItem command="⌘T">New Tab</MenuItem>
              <MenuItem command="⌘N">New Window</MenuItem>
              <MenuItem command="⌘⇧N">Open Closed Tab</MenuItem>
              <MenuItem command="⌘O">Open File...</MenuItem>
            </MenuList>
          </Menu>
          <Box>
            <Image
              src="Images/Sara.jpg"
              alt="Dan Abramov"
              style={{ width: "300px", marginTop: "50px" }}
            />
          </Box>

          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={7}>
              <Button onClick={toggleColorMode}>
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </Button>

              <Menu>
                <MenuButton
                  as={Button}
                  rounded={"full"}
                  variant={"link"}
                  cursor={"pointer"}
                  minW={0}
                >
                  <Avatar
                    size={"sm"}
                    src={"https://avatars.dicebear.com/api/male/username.svg"}
                  />
                </MenuButton>
                <MenuList alignItems={"center"}>
                  <br />
                  <Center>
                    <Avatar
                      size={"2xl"}
                      src={"https://avatars.dicebear.com/api/male/username.svg"}
                    />
                  </Center>
                  <br />
                  <Center>
                    <p>Username</p>
                  </Center>
                  <br />
                  <MenuDivider />
                  <MenuItem>Your Servers</MenuItem>
                  <MenuItem>Account Settings</MenuItem>
                  <MenuItem>Logout</MenuItem>
                </MenuList>
              </Menu>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
