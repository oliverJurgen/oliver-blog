import { AppProps } from "next/app";
import Layout from "../components/Layout";
import { ChakraProvider } from "@chakra-ui/react";
import { MDXProvider } from "@mdx-js/react";
import "styles/globals.css";
import theme from "styles/theme";

import "@fontsource/montserrat";
import "@fontsource/merriweather";

export default function App({ Component, pageProps }: AppProps) {
  const components = {
    pre: (props: any) => <div {...props} />,
    code: (props: any) => <pre style={{ color: "tomato" }} {...props} />,
  };

  return (
    <ChakraProvider theme={theme}>
      <MDXProvider components={components}>
        <Layout pageTitle="Blog" description="My Personal Blog">
          <Component {...pageProps} />
        </Layout>
      </MDXProvider>
    </ChakraProvider>
  );
}
