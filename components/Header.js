import React from "react";
import {
  Flex,
  Link,
  Image,
  Box,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

const Header = () => {
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
        <Image h={8} src="/images/logo.png" alt="Plotly Logo" />
      </Link>
      <Box rounded={"lg"} bg={useColorModeValue("white", "gray.700")}>
        <Text>Light</Text>
      </Box>
    </Flex>
  );
};

export default Header;
