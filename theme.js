import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  initialColorMode: "light",
  useSystemColorMode: false,
  colors: {
    brand: "#7A76FF",
  },
  fonts: {
    body: `'Roboto', sans-serif`,
  },
});

export default theme;
