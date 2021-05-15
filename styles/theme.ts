import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: {
      body: {
        background: "#333",
        padding: 0,
        margin: 0,
      },
    },
  },
  fonts: {
    heading: "Montserrat",
    body: "Merriweather",
  },
});

export default theme;
