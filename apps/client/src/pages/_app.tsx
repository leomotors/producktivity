import { ApolloProvider } from "@apollo/client";
import { createApolloClient } from "@producktivity/codegen";

import type { AppProps } from "next/app";
import Head from "next/head";

const client = createApolloClient(
  process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT as string
);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Head>
        <title>Producktivity</title>
        <meta name="description" content="10 days project" />
      </Head>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;
