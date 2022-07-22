import type { GetServerSideProps, NextPage } from "next";
import React, { useEffect } from "react";
import styles from "../styles/Receipts.module.css";
import MainLayout from "../components/MainLayout/MainLayout";
import { wrapper } from "../src/store/store";
import { parseCookies } from "nookies";
import { API_URL } from "../src/config";
import { IDevice } from "../src/models/IDevice";
import ReceiptsPage from "../src/pages/receipts/receipts-page";
import { useAppDispatch, useAppSelector } from "../src/store/hooks";
import {
  getMyReceipts,
  getReceipts
} from "../src/store/actions/receiptActions";

interface DevicesProps {
  devices: IDevice[];
}
const Receipts: NextPage<DevicesProps> = ({ devices }) => {
  const receipts = useAppSelector(getReceipts());
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getMyReceipts());
  }, [dispatch]);

  return (
    <MainLayout title="Мои квитанции" mainTitle="Список квитанций">
      <ReceiptsPage receipts={receipts} devices={devices} />
    </MainLayout>
  );
};
export const getServerSideProps: GetServerSideProps =
  wrapper.getServerSideProps(store => async ctx => {
    const { accessToken } = parseCookies(ctx);
    const res = await fetch(`${API_URL}/devices/my`, {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    });
    const devices = await res.json();
    return {
      props: {
        devices
      }
    };
  });
export default Receipts;
