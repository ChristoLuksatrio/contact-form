import React from "react";
import {
  Flex,
  Link,
  Image,
  Box,
  Button,
  useColorModeValue,
  useColorMode,
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
        <Button
          leftIcon={<Image src={`/images/light-icon.png`} alt="Sun Icon" />}
          onClick={toggleColorMode}
        >
          {colorMode === "light" ? "Light" : "Dark"}
        </Button>
      </Box>
    </Flex>
  );
};

export default Header;
