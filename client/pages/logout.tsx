import Router from "next/router";
import { useEffect } from "react";
import { logOut } from "../src/store/actions/userActions";
import { useAppDispatch } from "../src/store/hooks";

const LogOut = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(logOut());
    Router.push("/");
  }, []);

  return <h1>Loading...</h1>;
};

export default LogOut;
