import React from "react";
import {
  Flex,
  Link,
  Image,
  Box,
  Button,
  useColorModeValue,
  useColorMode,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex
      h={16}
      alignItems={"center"}
      justifyContent={"space-between"}
      width="100%"
      maxWidth={1248}
      mx={"auto"}
      mb={6}
    >
      <Link href="/">
        <Image
          h={8}
          src={`/images/logo${useColorModeValue("", "-white")}.png`}
          alt="Plotly Logo"
        />
      </Link>
      <Box border={"1px"} borderColor={"#dark"} rounded={"lg"} bg={"dark"}>
        <Menu maxWidth="100px">
          <MenuButton
            as={Button}
            leftIcon={<Image src={`/images/light-icon.png`} alt="Sun Icon" />}
          >
            {colorMode === "light" ? "Light" : "Dark"}
          </MenuButton>
          <MenuList zIndex={50}>
            <MenuItem
              display={"flex"}
              justifyContent={"center"}
              onClick={toggleColorMode}
            >
              <Image src={`/images/light-icon.png`} alt="Sun Icon" mr={2} />
              Light
            </MenuItem>
            <MenuItem
              display={"flex"}
              justifyContent={"center"}
              onClick={toggleColorMode}
            >
              <Image src={`/images/dark-icon.png`} alt="Sun Icon" mr={2} />
              Dark
            </MenuItem>
          </MenuList>
        </Menu>
      </Box>
    </Flex>
  );
};

export default Header;
