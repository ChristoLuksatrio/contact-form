import React from "react";
import Header from "./Header";
import { Flex } from "@chakra-ui/react";

const Layout = ({ children }) => {
  return (
    <Flex flexDirection={"column"} p={4}>
      <Header />
      {children}
    </Flex>
  );
};

export default Layout;
