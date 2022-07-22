import React from "react";
import MainLayout from "../components/MainLayout/MainLayout";
import withAuth from "../utils/withAuth";
import { gql, useQuery } from "@apollo/client";
import client from "../clientApollo";

function Home() {
  return <MainLayout></MainLayout>;
}

export async function getServerSideProps(props) {
  console.log(props);

  return {
    props: {},
  };
}

export default withAuth(Home);
