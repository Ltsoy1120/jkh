import Link from "next/link";
import { useRef } from "react";
import { Alert, InputBase, IconButton, InputAdornment } from "@mui/material";
import { IMaskInput } from "react-imask";
import { Vis, Visoff } from "../../icons";
import Button from "../../Buttons/Button";
import { styled } from "@mui/material/styles";
import styles from "./Register.module.scss";

const Input = styled(InputBase)(() => ({
  "& .MuiButtonBase-root": {
    position: "absolute",
    right: 13,
    top: 0,
  },
  "& .MuiInputAdornment-root": {
    margin: 0,
  },
}));

interface RegisterProps {
  showPassword: boolean;
  handleChange: (
    prop: string
  ) => (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleChangePhone: (event: {
    target: { name: string; value: string };
  }) => void;
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  handleClickShowPassword: () => void;
  error: string | null;
}

const Register: React.FC<RegisterProps> = ({
  showPassword,
  handleChange,
  handleChangePhone,
  handleSubmit,
  handleClickShowPassword,
  error,
}) => {
  const ref = useRef(null);
  return (
    <main className={styles.main}>
      <div className={styles.form}>
        <h2>ВХОД</h2>
        <form onSubmit={handleSubmit}>
          <Input
            type="text"
            name="lastName"
            placeholder="Фамилия"
            required
            onChange={handleChange("lastName")}
          />
          <Input
            type="text"
            name="name"
            placeholder="Имя"
            required
            onChange={handleChange("name")}
          />
          <Input
            type="email"
            name="email"
            placeholder="Email"
            required
            onChange={handleChange("email")}
            autoComplete="current-email"
          />
          <Input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Пароль"
            required
            onChange={handleChange("password")}
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
          <IMaskInput
            ref={ref}
            mask="+7 (000) 000-00-00"
            onAccept={(value: any) =>
              handleChangePhone({ target: { name: "phone", value } })
            }
            placeholder="Телефон"
            name="phone"
            required
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
          Вы уже зарегистрированны?
          <span className={styles.link}>
            <Link href="/"> Войти</Link>
          </span>
        </h5>
      </div>
    </main>
  );
};
export default Register;
