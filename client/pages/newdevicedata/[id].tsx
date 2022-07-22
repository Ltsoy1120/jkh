import React, { useEffect, useState } from "react";
import styles from "../../styles/Newdataelect.module.css";
import Link from "next/link";
import {
  FormControl,
  InputAdornment,
  OutlinedInput,
  SelectChangeEvent
} from "@mui/material";
import Lock from "../../ui/icons/lock";
import MainLayout from "../../components/MainLayout/MainLayout";
import Button from "../../components/Buttons/Button";
import { GetServerSideProps, NextPage } from "next";
import { wrapper } from "../../src/store/store";
import { parseCookies } from "nookies";
import { API_URL } from "../../src/config";
import { DeviceProps } from "../../src/pages/devices/devices-item/devices-item";
import moment from "moment";
import "moment/locale/ru";
import { createDeviceData } from "../../src/store/actions/devicedataActions";

export interface DeviceData {
  period: string;
  device: string;
  lastData?: number;
  currentData: number;
}

const Newddevicedata: NextPage<DeviceProps> = ({ device }) => {
  console.log("device1", device);
  const initDeviceData = {
    period: "",
    device: device._id,
    lastData: device.lastData ? device.lastData : 0,
    currentData: 0
  };
  const [state, setState] = useState<DeviceData>(initDeviceData);

  useEffect(() => {
    const today = moment().format("MMMM YYYY");
    const currentMonthYear = today.charAt(0).toUpperCase() + today.slice(1);
    setState(prevState => ({
      ...prevState,
      period: currentMonthYear
    }));
  }, []);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState(prevState => ({
      ...prevState,
      [event.target.name]: Number(event.target.value)
    }));
  };
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    await createDeviceData(state);
  };
  return (
    <MainLayout title="Мои приборы учёта" mainTitle="Приборы учёта">
      <div className={styles.content}>
        <div className={styles.titleblock}>
          <h1 className={styles.pagetitle}>Мои приборы учёта</h1>
          <span className={styles.breadcrumbs}>
            Приборы учета / Мои приборы учета
          </span>
        </div>
        <div className={styles.infotabs}>
          <span className={styles.companyofficesa}>
            <Link href="/devices">Счётчики</Link>
          </span>
          <span className={styles.requisites}>
            <Link href={`/device/${device.number}`}>
              История показаний по прибору
            </Link>
          </span>
        </div>
        {device && (
          <div className={styles.title}>
            Подача показаний по прибору учета {device.number} (
            {device.assignment})
          </div>
        )}
        <div className={styles.greentitle}>{state.period}</div>
        <div className={styles.form}>
          <form onSubmit={handleSubmit}>
            <div className={styles.inputBlockRow}>
              <div className={styles.inputBlock}>
                <span className={styles.greyLabel}>
                  Показания прошлого месяца
                </span>
                <FormControl variant="outlined">
                  <OutlinedInput
                    sx={{ width: 265, height: 37, color: "#C6D8E1" }}
                    id="outlined-adornment-weight"
                    value={state.lastData}
                    endAdornment={
                      <InputAdornment position="end">
                        <Lock />
                      </InputAdornment>
                    }
                    aria-describedby="outlined-weight-helper-text"
                    inputProps={{
                      "aria-label": "weight"
                    }}
                  />
                </FormControl>
              </div>
              <div className={styles.inputBlock}>
                <span className={styles.greyLabel}>Текущие показания</span>
                <FormControl variant="outlined">
                  <OutlinedInput
                    sx={{ width: 265, height: 37, color: "#C6D8E1" }}
                    id="outlined-adornment-weight"
                    value={state.currentData}
                    name="currentData"
                    onChange={handleChange}
                    aria-describedby="outlined-weight-helper-text"
                    inputProps={{
                      "aria-label": "weight"
                    }}
                    placeholder="Введите данные..."
                  />
                </FormControl>
              </div>
            </div>
            <div className={styles.controlBlock}>
              <Button type="submit" bg="green" mr={20} width={145}>
                Сохранить
              </Button>
              <Button bg="white" width={145}>
                Отмена
              </Button>
            </div>
          </form>
        </div>
      </div>
    </MainLayout>
  );
};
export const getServerSideProps: GetServerSideProps =
  wrapper.getServerSideProps(store => async ctx => {
    const { accessToken } = parseCookies(ctx);

    const res = await fetch(`${API_URL}/device/${ctx.query.id}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    });
    const device = await res.json();
    return {
      props: {
        device
      }
    };
  });
export default Newddevicedata;
