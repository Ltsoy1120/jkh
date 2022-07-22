import type { NextPage } from "next";
import { useState } from "react";
import Router from "next/router";
import Head from "next/head";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { getError } from "../store/slices/userSlice";
import { register } from "../store/actions/userActions";
import Register from "../components/Auth/Register";

export type User = typeof initUser;
const initUser = {
  lastName: "",
  name: "",
  email: "",
  password: "",
  phone: "",
};

const RegisterPage: NextPage = () => {
  const dispatch = useAppDispatch();
  const error = useAppSelector(getError);
  const [showPassword, setShowPassword] = useState(false);
  const [state, setState] = useState<User>(initUser);

  const handleChange =
    (prop: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setState((prevState) => ({
        ...prevState,
        [event.target.name]: event.target.value,
      }));
    };

  const handleChangePhone = (event: {
    target: { name: string; value: string };
  }) => {
    setState((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(register(state));
    Router.push("/company");
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <Head>
        <title>ЖХК</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <Register
        showPassword={showPassword}
        handleChange={handleChange}
        handleChangePhone={handleChangePhone}
        handleSubmit={handleSubmit}
        handleClickShowPassword={handleClickShowPassword}
        error={error}
      />
    </>
  );
};

export default RegisterPage;
