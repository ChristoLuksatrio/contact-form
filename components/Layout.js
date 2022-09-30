import React from "react";
import Header from "./Header";
import { Flex, useColorModeValue } from "@chakra-ui/react";

const Layout = ({ children }) => {
  const bg = useColorModeValue("white", "black");
  return (
    <Flex flexDirection={"column"} p={4} bg={bg}>
      <Header />
      {children}
    </Flex>
  );
};

export default Layout;
