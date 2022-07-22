import type { GetServerSideProps, NextPage } from "next";
import React, { useEffect, useState } from "react";
import { parseCookies } from "nookies";
import {
  InputAdornment,
  OutlinedInput,
  SelectChangeEvent
} from "@mui/material";
import Lock from "../../ui/icons/lock";
import Rouble from "../../ui/icons/rouble";
import MainLayout from "../../components/MainLayout/MainLayout";
import SimpleSelect from "../../components/Forms/SimpleSelect";
import Button from "../../components/Buttons/Button";
import CheckBox from "../../components/CheckBox";
import { IReceipt } from "../../src/models/IReceipt";
import { wrapper } from "../../src/store/store";
import { API_URL } from "../../src/config";
import { terminalsPay } from "../../utils/constants";
import styles from "../../styles/Receipt.module.scss";
import { payReceipt } from "../../src/store/actions/receiptActions";

interface ReceiptState {
  address: string;
  account: string;
  terminalPay: string;
  sum: number;
  assignment: string;
  isAgree: boolean;
}

interface ReceiptProps {
  receipt: IReceipt;
}

const Receipt: NextPage<ReceiptProps> = ({ receipt }) => {
  const initReceipt = {
    address: receipt.homeowner.address,
    account: receipt.homeowner.account,
    terminalPay: "",
    sum: receipt.sum,
    assignment: receipt.device.assignment,
    isAgree: false
  };
  const [state, setState] = useState<ReceiptState>(initReceipt);
  const [error, setError] = useState("");

  useEffect(() => {
    if (
      Object.values(state).includes(false) ||
      Object.values(state).includes("") ||
      Object.values(state).includes("0")
    ) {
      return setError("Поля со звездочкой * должны быть заполнены!");
    } else {
      return setError("");
    }
  }, [state]);

  const handleChange = (
    event:
      | React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
      | SelectChangeEvent
  ) => {
    setState(prevState => ({
      ...prevState,
      [event.target.name]: event.target.value
    }));
  };

  const handleChecked = () => {
    setState(prevState => ({
      ...prevState,
      isAgree: !state.isAgree
    }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(state);
    await payReceipt(receipt._id);
  };
  const clearData = () => {
    setState(initReceipt);
  };
  return (
    <MainLayout title="Мои квитанции" mainTitle="Страница заявок">
      <div className={styles.content}>
        <div className={styles.titleblock}>
          <h1>
            Квитанция <span>за</span> {receipt.periodMonth} {receipt.periodYear}
          </h1>
          <div className={styles.alert}>
            <span>
              Внимание! <br />
              По Вашему лицевому счету имеется задолженность
            </span>
            <span className={styles.alertSum}>{receipt.sum}₽</span>
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <div className={styles.row}>
            <div className={styles.inputBlock}>
              <span>Адрес</span>
              <OutlinedInput
                value={state.address}
                disabled
                endAdornment={
                  <InputAdornment position="end">
                    <Lock />
                  </InputAdornment>
                }
                sx={{ width: 455, height: 37, background: "white" }}
              />
            </div>
            <div className={styles.inputBlock}>
              <span>Лицевой счёт</span>
              <OutlinedInput
                value={state.account}
                disabled
                endAdornment={
                  <InputAdornment position="end">
                    <Lock />
                  </InputAdornment>
                }
                sx={{ width: 265, height: 37, background: "white" }}
              />
            </div>
          </div>
          <div className={styles.inputBlock}>
            <span>Терминал оплаты *</span>
            <SimpleSelect
              name="terminalPay"
              data={terminalsPay}
              value={state.terminalPay}
              onChange={handleChange}
              required
              width={455}
              placeholder="Выберите вариант оплаты"
            />
          </div>
          <div className={styles.inputBlock}>
            <span>Сумма оплаты *</span>
            <OutlinedInput
              name="sum"
              value={state.sum}
              onChange={handleChange}
              required
              endAdornment={
                <InputAdornment position="end">
                  <Rouble />
                </InputAdornment>
              }
              sx={{ width: 265, height: 37, background: "white" }}
            />
          </div>
          <div className={styles.inputBlock}>
            <span>Назначение платежа</span>
            <OutlinedInput
              value={state.assignment}
              disabled
              endAdornment={
                <InputAdornment position="end">
                  <Lock />
                </InputAdornment>
              }
              sx={{ width: 455, height: 37, background: "white" }}
            />
          </div>
          <div className={styles.descr}>
            <p>
              Безопасность платежей обеспечивается с помощью Банка-эквайера,
              функционирующего на основе современных протоколов и технологий,
              разработанных платежными системами Visa International, MasterCard
              International и Мир.
            </p>
            <p>
              Информация о платеже поступает в управляющую организацию (ТСЖ) в
              режиме реального времени. Зачисление денежных средств на лицевой
              счет производится в течение 5 рабочих дней.
            </p>
            При ошибочном перечислении, денежные средства могут быть возвращены
            только на Вашу карту.
            <p>Оплата производится через защищенный платежный шлюз</p>
          </div>
          <CheckBox
            label="Я согласен с правилами оплаты *"
            checked={state.isAgree}
            onChange={handleChecked}
          />
          {error && <div className={styles.error}>{error}</div>}
          <div className={styles.submitBox}>
            <Button bg="green" mr={20} width={145} type="submit">
              Оплатить
            </Button>
            <Button bg="white" width={145} onClick={clearData}>
              Отмена
            </Button>
          </div>
        </form>
      </div>
    </MainLayout>
  );
};
export const getServerSideProps: GetServerSideProps =
  wrapper.getServerSideProps(store => async ctx => {
    const { accessToken } = parseCookies(ctx);
    const res = await fetch(`${API_URL}/receipt/${ctx.query.id}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    });
    const receipt = await res.json();
    return {
      props: {
        receipt
      }
    };
  });
export default Receipt;
