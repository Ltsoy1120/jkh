import type { NextPage } from "next";
import React, { useEffect } from "react";
import styles from "../styles/Visithistory.module.css";
import MainLayout from "../components/MainLayout/MainLayout";
import Link from "next/link";
import Button from "../components/Buttons/Button";
import { useAppDispatch, useAppSelector } from "../src/store/hooks";
import { getMyVisits, getVisits } from "../src/store/actions/visitActions";
import VisitsPage from "../src/pages/visits/visits-page";
import VisitsFilter from "../src/pages/visits/visits-filter";

const Visithistory: NextPage = () => {
  const visits = useAppSelector(getVisits());
  const dispatch = useAppDispatch();
  console.log("visits", visits);

  useEffect(() => {
    dispatch(getMyVisits());
  }, [dispatch]);

  return (
    <MainLayout title="История приема" mainTitle="История приема">
      <div className={styles.content}>
        <div className={styles.titleblock}>
          <div className={styles.titlediv}>
            <h1 className={styles.pagetitle}>История приёма</h1>
            <span>Посетить УК / История приема</span>
          </div>
          <Button bg="white">
            <Link href="/newvisit">Записаться на приём</Link>
          </Button>
        </div>
        <VisitsFilter />
        <VisitsPage visits={visits} />
      </div>
    </MainLayout>
  );
};

export default Visithistory;
