import Head from "next/head";
import { useEffect } from "react";
import { AppProps } from "next/app";
import { parseCookies, setCookie } from "nookies";
import { ThemeProvider } from "@mui/material";
import { theme } from "../utils/theme";
import CssBaseline from "@material-ui/core/CssBaseline";
import { wrapper } from "../src/store/store";
import { setUserData } from "../src/store/slices/userSlice";
import userService from "../src/services/user.service";
import { checkAuth } from "../src/store/actions/userActions";
import { useAppDispatch, useAppSelector } from "../src/store/hooks";
import "../styles/globals.scss";
import authService from "../src/services/auth.service";
import axios from "axios";
import { AuthResponse } from "../src/models/response/AuthResponse";
import { API_URL } from "../src/config";
import cookieService from "../src/services/cookie.service";

function App({ Component, pageProps }: AppProps) {
  const userData = useAppSelector(state => state.users.userData);
  const dispatch = useAppDispatch();
  // useEffect(() => {
  //   const { accessToken } = parseCookies();
  //   if (userData && !accessToken) {
  //     dispatch(checkAuth());
  //   }
  // });
  useEffect(() => {
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement?.removeChild(jssStyles);
    }
  }, []);
  return (
    <>
      <Head>
        <title>CRM</title>
      </Head>
      <ThemeProvider theme={theme}>
        {/* <Provider store={store}> */}
        <CssBaseline />
        <Component {...pageProps} />
        {/* </Provider> */}
      </ThemeProvider>
    </>
  );
}

App.getInitialProps = wrapper.getInitialAppProps(
  store =>
    async ({ ctx, Component }) => {
      try {
        const { accessToken } = parseCookies(ctx);
        // console.log("accessToken", accessToken);

        // console.log("refreshToken+++", refreshToken);
        // if (!accessToken && refreshToken) {
        //   const response = await axios.get<AuthResponse>(API_URL + "/refresh", {
        //     withCredentials: true,
        //     headers: {
        //       Cookie: refreshToken
        //     }
        //   });
        //   setCookie(null, "accessToken", response.data.authData.accessToken, {
        //     maxAge: 60,
        //     path: "/"
        //   });
        //   setCookie(null, "refreshToken", response.data.authData.refreshToken, {
        //     maxAge: 30 * 24 * 60 * 60,
        //     path: "/"
        //   });
        //   // cookieService.setTokens(response.data.authData);
        //   console.log("ready");
        // }
        const userData = await userService.getMe(accessToken);
        store.dispatch(setUserData(userData));
      } catch (error) {
        console.log(error);
      }
      return {
        pageProps: Component.getInitialProps
          ? await Component.getInitialProps({ ...ctx, store })
          : {}
      };
    }
);
export default wrapper.withRedux(App);
