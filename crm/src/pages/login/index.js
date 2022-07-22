import Login from "../../screens/Login/Login";
import client from "../../clientApollo";
import { gql } from "@apollo/client";

export default function Home(props) {
  return <Login {...props} />;
}
