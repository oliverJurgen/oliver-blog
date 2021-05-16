import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: {
      body: {
        backgroundColor: "#000",
        padding: 0,
        margin: 0,
      },
    },
  },
  fonts: {
    heading: "Merriweather",
    body: "-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji",
  },
});

export default theme;
