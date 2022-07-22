import Head from "next/head";
import React from "react";
import "../styles/globals.scss";
import { ThemeProvider } from "@mui/material";
import { theme } from "../utils/theme";
import { ApolloProvider } from "@apollo/client";
import { useApollo } from "../clientApollo";
import { getData } from "../utils/jwt";

function MyApp({ Component, pageProps }) {
  const { token } = getData();
  const apolloClient = useApollo(token);
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>CRM</title>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
      </Head>
      <ApolloProvider client={apolloClient}>
        <Component {...pageProps} />
      </ApolloProvider>
    </ThemeProvider>
  );
}

export default MyApp;

export const getServerSideProps = async ({ req, res, query }) => {
  console.log(req);
};
