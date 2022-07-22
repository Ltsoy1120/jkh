import Router from "next/router";
import { useEffect } from "react";
import { logOut } from "../store/actions/userActions";
import { useAppDispatch } from "../store/hooks";

const LogOut = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(logOut());
    Router.push("/");
  }, []);

  return <h1>Loading...</h1>;
};

export default LogOut;
