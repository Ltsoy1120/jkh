import Head from "next/head";
import { setUserData } from "../store/slices/userSlice";
import { wrapper } from "../store/store";
import getAuthUser from "./api/getAuthUser";
import "../styles/globals.scss";
import { ThemeProvider } from "@mui/material";
import { theme } from "../utils/theme";
import { setCompaniesData, setCompanyData } from "../store/slices/companySlice";

function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>CRM</title>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
      </Head>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
App.getInitialProps = wrapper.getInitialAppProps(
  (store) =>
    async ({ ctx, Component }) => {
      try {
        const userData = await getAuthUser(ctx);
        store.dispatch(setUserData(userData));
        userData.company && store.dispatch(setCompanyData(userData.company));
      } catch (error) {
        console.log(error);
      }
      return {
        pageProps: Component.getInitialProps
          ? await Component.getInitialProps({ ...ctx, store })
          : {},
      };
    }
);
export default wrapper.withRedux(App);
