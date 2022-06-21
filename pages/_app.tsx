import { AppProps } from "next/app";
import Layout from "../components/Layout";
// import { chakra, Heading } from "@chakra-ui/react";
import { ChakraProvider } from "@chakra-ui/react";
import CodeBlock from "components/shared/CodeBlock";
import { MDXProvider } from "@mdx-js/react";
import "styles/globals.css";
import theme from "styles/theme";

import "@fontsource/merriweather";
import "@fontsource/public-sans";

export default function App({ Component, pageProps }: AppProps) {
  const components = {
    pre: (props: any) => <div {...props} />,
    code: CodeBlock,
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
