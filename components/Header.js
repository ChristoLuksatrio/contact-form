import React from "react";
import { Flex, Link, Image } from "@chakra-ui/react";

const Header = () => {
  return (
    <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
      <Link>
        <Image h={8} src="/images/logo.png" alt="Plotly Logo" />
      </Link>
      <Link>stuff</Link>
    </Flex>
  );
};

export default Header;
