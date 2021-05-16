import { AppProps } from "next/app";
import Layout from "../components/Layout";
// import { chakra, Heading } from "@chakra-ui/react";
import { ChakraProvider } from "@chakra-ui/react";
import { MDXProvider } from "@mdx-js/react";
import "styles/globals.css";
import theme from "styles/theme";

import "@fontsource/montserrat";
import "@fontsource/merriweather";

export default function App({ Component, pageProps }: AppProps) {
  const components = {
    // strong: (props: any) => <chakra.span {...props} fontWeight="bold" />,
    // em: (props: any) => <em {...props} />,
    // blockquote: (props: any) => <blockquote {...props} />,
    // h6: (props: any) => <Heading {...props} sm="xs" />,
    // h5: (props: any) => <Heading {...props} sm="sm" />,
    // h4: (props: any) => <Heading {...props} size="md" />,
    // h3: (props: any) => <Heading {...props} size="lg" />,
    // h2: (props: any) => <Heading {...props} size="xl" />,
    // h1: (props: any) => <Heading {...props} size="2xl" />,
    // p: (props: any) => <chakra.p {...props} mt="1rem" mb="1rem" />,
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
