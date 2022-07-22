import type { GetServerSideProps, NextPage } from "next";
import * as React from "react";
import styles from "../styles/Dashboard.module.css";
import {
  Box,
  FormControl,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent
} from "@mui/material";
import MainLayout from "../components/MainLayout/MainLayout";
import { wrapper } from "../src/store/store";
import { parseCookies } from "nookies";
import userService from "../src/services/user.service";
import { setUserData } from "../src/store/slices/userSlice";

const Dashboard: NextPage = () => {
  const [age, setAge] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };
  return (
    <MainLayout title="Моя компания" mainTitle="Страница компании">
      <div className={styles.content}>
        <div className={styles.infoblock}>
          <div className={styles.table}>
            <div className={styles.tablehead}>
              <div className={styles.tperiod}>Лицевой счёт</div>
              <div className={styles.tresource}>Адрес</div>
              <div className={styles.treceipt}>Собственник</div>
              <div className={styles.tpaystatus}>Помещение</div>
            </div>

            <div className={styles.tableinfo}>
              <div className={styles.tableitem}>
                <div className={styles.tperiod}>
                  <a href="#">
                    <span className={styles.number}>123456789</span>
                  </a>
                </div>

                <div className={styles.tresource}>
                  <span className={styles.createDateLabel}>
                    +7 (900) 000-00-00
                  </span>
                  <span className={styles.createDateLabel}>
                    Путиловская 17, кв 60
                  </span>
                </div>
                <div className={styles.treceipt}>
                  <span className={styles.bold}>Петров С.С.</span>
                </div>

                <div className={styles.tpaystatus}>
                  <span className={styles.createDateLabel}>
                    Площадь помещения: <b>89.65 м²</b>
                  </span>
                  <span className={styles.createDateLabel}>
                    Площадь по Л/С: <b>89.65 м²</b>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.notifications}>
            <div className={styles.columnwrapper}>
              <span className={styles.title}>Заявки</span>
              <div className={styles.column}>
                <Box className={styles.item}>
                  <div className={styles.num}>
                    <b>1234</b> <br />
                  </div>
                  <div className={styles.date}>
                    от 20.02.2021 в 12:33
                    <br />
                  </div>
                  <div className={styles.message}>
                    <b>Кран течет, хелппппппп...</b> <br />
                  </div>
                  <button className={styles.paid}>В работе</button>
                </Box>
                <Box className={styles.item}>
                  <div className={styles.num}>
                    <b>1234</b> <br />
                  </div>
                  <div className={styles.date}>
                    от 20.02.2021 в 12:33
                    <br />
                  </div>
                  <div className={styles.message}>
                    <b>Кран течет, хелппппппп...</b> <br />
                  </div>
                  <button className={styles.paid}>В работе</button>
                </Box>
                <Box className={styles.item}>
                  <a href="#">
                    <span className={styles.number}>Смотреть все</span>
                  </a>
                </Box>
              </div>
            </div>
            <div className={styles.columnwrapper}>
              <span className={styles.title}>Обращения</span>
              <div className={styles.column}>
                <Box className={styles.item}>
                  <div className={styles.num}>
                    <b>1234</b> <br />
                  </div>
                  <div className={styles.date}>
                    от 20.02.2021 в 12:33
                    <br />
                  </div>
                  <div className={styles.message}>
                    <b>Хочу поболтать, дома скучно(((((</b> <br />
                  </div>
                  <button className={styles.new}>Новое</button>
                </Box>
                <Box className={styles.item}>
                  <div className={styles.num}>
                    <b>1234</b> <br />
                  </div>
                  <div className={styles.date}>
                    от 20.02.2021 в 12:33
                    <br />
                  </div>
                  <div className={styles.message}>
                    <b>Хочу поболтать, дома скучно(((((</b> <br />
                  </div>
                  <button className={styles.new}>Новое</button>
                </Box>
                <Box className={styles.item}>
                  <div className={styles.num}>
                    <b>1234</b> <br />
                  </div>
                  <div className={styles.date}>
                    от 20.02.2021 в 12:33
                    <br />
                  </div>
                  <div className={styles.message}>
                    <b>Хочу поболтать, дома скучно(((((</b> <br />
                  </div>
                  <button className={styles.new}>Новое</button>
                </Box>
                <Box className={styles.item}>
                  <a href="#">
                    <span className={styles.number}>Смотреть все</span>
                  </a>
                </Box>
              </div>
            </div>
            <div className={styles.columnwrapper}>
              <span className={styles.title}>Записи на посещение УК</span>
              <div className={styles.column}>
                <Box className={styles.item}>
                  <div className={styles.date}>
                    <b>20.02.2021 в 12:33</b> <br />
                  </div>
                  <div className={styles.message}>
                    Главный офис
                    <br />
                  </div>
                  <div className={styles.date}>
                    г. Воронеж, ул. Перхоровича, д. 11, офис 4<br />
                  </div>
                  <button className={styles.new}>На согласовании</button>
                </Box>
                <Box className={styles.item}>
                  <div className={styles.date}>
                    <b>20.02.2021 в 12:33</b> <br />
                  </div>
                  <div className={styles.message}>
                    Главный офис
                    <br />
                  </div>
                  <div className={styles.date}>
                    г. Воронеж, ул. Перхоровича, д. 11, офис 4<br />
                  </div>
                  <button className={styles.new}>На согласовании</button>
                </Box>
                <Box className={styles.item}>
                  <div className={styles.date}>
                    <b>20.02.2021 в 12:33</b> <br />
                  </div>
                  <div className={styles.message}>
                    Главный офис
                    <br />
                  </div>
                  <div className={styles.date}>
                    г. Воронеж, ул. Перхоровича, д. 11, офис 4<br />
                  </div>
                  <button className={styles.new}>На согласовании</button>
                </Box>
                <Box className={styles.item}>
                  <a href="#">
                    <span className={styles.number}>Смотреть все</span>
                  </a>
                </Box>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

// export const getServerSideProps: GetServerSideProps =
//   wrapper.getServerSideProps(store => async ctx => {
//     try {
//       const { accessToken } = parseCookies(ctx);
//       const userData = await userService.getMe(accessToken);
//       store.dispatch(setUserData(userData));
//       console.log("store", store.getState());
//     } catch (error) {
//       console.log(error);
//     }

//     return { props: {} };
//   });
export default Dashboard;
