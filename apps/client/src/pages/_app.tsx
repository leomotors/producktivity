import type { AppProps } from "next/app";
import Head from "next/head";
import Script from "next/script";

import { ApolloProvider } from "@apollo/client";
import { createApolloClient } from "@producktivity/codegen";

import { AuthProvider } from "$modules/authentication";
import { Renderer } from "$modules/authentication/layouts/renderer";
import "$styles/global.scss";

const client = createApolloClient(
  process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT as string
);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Producktivity</title>
        <meta content="10 days project" name="description" />
      </Head>

      <Script id="check-dark-light">
        {`(()=>{const e=localStorage.getItem("producktivity-theme"),a=window.matchMedia("(prefers-color-scheme: dark)").matches;(!e||e==="auto"?a:e==="dark")&&document.documentElement.classList.add("dark")})()`}
      </Script>

      <ApolloProvider client={client}>
        <AuthProvider>
          <Renderer page={Component} props={pageProps} />
        </AuthProvider>
      </ApolloProvider>
    </>
  );
}

export default MyApp;
