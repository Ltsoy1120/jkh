import type { NextPage } from "next";
import * as React from "react";
import { useState } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useAppDispatch, useAppSelector } from "../src/store/hooks";
import RegisterPage from "../src/pages/register";
import { register } from "../src/store/actions/userActions";
import { getError } from "../src/store/slices/userSlice";

export type User = typeof initUser;
const initUser = {
  lastName: "",
  name: "",
  email: "",
  password: "",
  address: "",
  account: "",
  phone: ""
};

const Register: NextPage = () => {
  const dispatch = useAppDispatch();
  const error = useAppSelector(getError);
  const [showPassword, setShowPassword] = useState(false);
  const [state, setState] = useState<User>(initUser);

  const handleChange =
    (prop: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setState(prevState => ({
        ...prevState,
        [event.target.name]: event.target.value
      }));
    };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(state);
    dispatch(register(state));
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>ЖХК</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600&display=swap"
          rel="stylesheet"
        ></link>
      </Head>

      <main className={styles.main}>
        <RegisterPage
          showPassword={showPassword}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          handleClickShowPassword={handleClickShowPassword}
          handleMouseDownPassword={handleMouseDownPassword}
          error={error}
        />
      </main>
    </div>
  );
};

export default Register;
