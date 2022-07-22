import Link from "next/link";
import { Alert, InputBase, IconButton, InputAdornment } from "@mui/material";
import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";
import Button from "../../Buttons/Button";
import { styled } from "@mui/material/styles";
import styles from "./Login.module.scss";

const Input = styled(InputBase)(({ theme }) => ({
  "& .MuiInputBase-input": {
    width: 265,
    height: 37,
    borderRadius: 4,
    position: "relative",
    backgroundColor: theme.palette.background.paper,
    border: "1px solid #ced4da",
    fontSize: 16,
    padding: 0,
    marginBottom: 28,
    "&:focus": {
      borderRadius: 4,
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)",
    },
  },
  "& .MuiButtonBase-root": {
    position: "absolute",
    right: 13,
    top: 0,
  },
  "& .MuiInputAdornment-root": {
    margin: 0,
  },
}));
function Vis(props: SvgIconProps) {
  return (
    <SvgIcon viewBox="0 0 17 17" {...props}>
      <svg
        width="17"
        height="17"
        viewBox="0 0 17 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1.16732 9.41618C2.14646 10.6432 5.0591 13.9153 8.50469 13.9153C11.9503 13.9153 14.8629 10.6433 15.8421 9.41618C16.0526 9.14351 16.0526 8.75929 15.8421 8.49913C14.8629 7.27211 11.9503 4.00004 8.50469 4.00004C5.0591 3.98764 2.14646 7.25971 1.16732 8.48674C0.944226 8.75941 0.944226 9.14351 1.16732 9.41618ZM8.50469 5.97071C10.1531 5.97071 11.4793 7.29689 11.4793 8.94532C11.4793 10.5938 10.1531 11.9199 8.50469 11.9199C6.85626 11.9199 5.53008 10.5938 5.53008 8.94532C5.53008 7.29689 6.85626 5.97071 8.50469 5.97071Z"
          fill="#6B8795"
        />
        <path
          d="M8.50586 10.4326C9.32728 10.4326 9.99317 9.7667 9.99317 8.94528C9.99317 8.12387 9.32728 7.45798 8.50586 7.45798C7.68444 7.45798 7.01855 8.12387 7.01855 8.94528C7.01855 9.7667 7.68444 10.4326 8.50586 10.4326Z"
          fill="#6B8795"
        />
      </svg>
    </SvgIcon>
  );
}
function Visoff(props: SvgIconProps) {
  return (
    <SvgIcon viewBox="0 0 17 17" {...props}>
      <svg
        width="17"
        height="17"
        viewBox="0 0 17 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15.0842 7.59525L15.1901 7.53304C15.3961 7.40614 15.4445 7.15559 15.3019 6.97331C15.1581 6.78941 14.8751 6.74791 14.6734 6.87307C7.61398 11.2683 2.47524 7.08938 2.25936 6.90981C2.07719 6.75798 1.79012 6.76568 1.62048 6.92693C1.44999 7.08884 1.45827 7.3421 1.63861 7.49447C1.64835 7.5027 1.8091 7.63372 2.1025 7.82759L1.19821 9.15566C1.06922 9.3451 1.13688 9.5924 1.34972 9.70824C1.42249 9.74726 1.50512 9.76687 1.58507 9.76687C1.73706 9.76687 1.88504 9.69806 1.97107 9.57419L2.85527 8.27668C3.35104 8.54543 3.98675 8.8389 4.74415 9.08685L4.30838 10.3843C4.23622 10.5979 4.37117 10.8207 4.60957 10.8842L4.73953 10.9013C4.93217 10.9013 5.11227 10.7886 5.17092 10.6142L5.60244 9.33458C6.30155 9.50483 7.08366 9.61981 7.9277 9.64712V10.9322C7.9277 11.1545 8.12934 11.3341 8.37905 11.3341C8.62852 11.3341 8.83028 11.1545 8.83028 10.9322V9.63997C9.56675 9.60399 10.3473 9.49118 11.1622 9.28419L11.7178 10.5887C11.787 10.7495 11.9586 10.8479 12.1398 10.8479L12.2994 10.8225C12.5325 10.7436 12.6506 10.5118 12.562 10.3044L12.0211 9.03332C12.7632 8.78786 13.5302 8.4647 14.3224 8.03599L15.0537 8.90522C15.1427 9.01023 15.2787 9.06659 15.4145 9.06659C15.5091 9.06659 15.6037 9.04101 15.6849 8.98585C15.8849 8.85255 15.9253 8.6006 15.7764 8.42319L15.0842 7.59525Z"
          fill="#C6D8E1"
        />
      </svg>
    </SvgIcon>
  );
}

interface LoginProps {
  showPassword: boolean;
  handleChange: (
    prop: string
  ) => (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  handleClickShowPassword: () => void;
  error: string | null;
}

const Login: React.FC<LoginProps> = ({
  showPassword,
  handleChange,
  handleSubmit,
  handleClickShowPassword,
  error,
}) => {
  return (
    <main className={styles.main}>
      <div className={styles.form}>
        <h2>ВХОД</h2>
        <form onSubmit={handleSubmit}>
          <Input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange("email")}
            autoComplete="current-email"
            inputProps={{
              style: { textAlign: "center" },
            }}
          />
          <Input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Пароль"
            onChange={handleChange("password")}
            inputProps={{
              style: { textAlign: "center" },
            }}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  edge="end"
                >
                  {showPassword ? <Visoff /> : <Vis />}
                </IconButton>
              </InputAdornment>
            }
          />
          {error && (
            <Alert severity="error" style={{ marginTop: "20px" }}>
              {error}
            </Alert>
          )}
          <div className={styles.buttonbox}>
            <Button type="submit" bg="green" width={265}>
              Войти
            </Button>
          </div>
        </form>
        <h5 style={{ textAlign: "center" }}>
          Вы еще не зарегистрированны?
          <span className={styles.link}>
            <Link href="/register"> Зарегистрировать</Link>
          </span>
        </h5>
      </div>
    </main>
  );
};
export default Login;
