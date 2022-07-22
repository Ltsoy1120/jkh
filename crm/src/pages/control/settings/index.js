import React from "react";
import MainLayout from "../../../components/MainLayout/MainLayout";
import styles from "../../../styles/controlObjects/meteringDevices/index.module.scss";
import Link from "next/link";
import Button from "../../../components/Buttons/Button/Button";
import BtnWrapper from "../../../components/BtnWrapper/BtnWrapper";
import { ControlApplicationTypesTable } from "../../../components/Tables/ControlApplicationTypesTable/ControlApplicationTypesTable";

export default function Home() {
  return (
    <React.Fragment>
      <MainLayout title="Типы заявок" mainTitle="Типы заявок" breadcrumbs="Диспетчерская / Настройки / Типы заявок">
        <BtnWrapper>
          <Link href="/">
            <a>
              <Button>Добавить новый тип</Button>
            </a>
          </Link>
        </BtnWrapper>

        <ControlApplicationTypesTable />
      </MainLayout>
    </React.Fragment>
  );
}
