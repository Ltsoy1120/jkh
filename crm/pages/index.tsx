import type { NextPage } from "next";
import { useState } from "react";
import Head from "next/head";
import Login from "../components/Auth/Login";
import { login } from "../store/actions/userActions";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { getError } from "../store/slices/userSlice";

type User = typeof initUser;
const initUser = {
  email: "",
  password: "",
};

const Index: NextPage = () => {
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

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(login(state.email, state.password));
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
      <Login
        showPassword={showPassword}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        handleClickShowPassword={handleClickShowPassword}
        error={error}
      />
    </>
  );
};

export default Index;
