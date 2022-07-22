import React, { useState } from "react";
import styles from "../../../styles/controlObjects/meteringDevices/index.module.scss";
import BtnWrapper from "../../../components/BtnWrapper/BtnWrapper";
import Link from "next/link";
import Button from "../../../components/Buttons/Button/Button";
import { SimpleInput } from "../../../components/Forms/SimpleInput/SimpleInput";
import MainLayout from "../../../components/MainLayout/MainLayout";
import Panel from "../../../ui/Panel/Panel";
import CheckBox from "../../../components/CheckBox/CheckBox";
import { MagazineTable } from "../../../components/Tables/MagazineTable/MagazineTable";
import { ResetFilter } from "../../../components/Buttons/ResetFilter/ResetFilter";

import FormHelperText from "@mui/material/FormHelperText";
import { TimeSelect } from "../../../ui/TimePickers/TimeSelect";

export default function Home() {
  const [clearedDate, setClearedDate] = useState(null);
  const [value, setValue] = useState(new Date("2019-01-01T18:54"));

  return (
    <React.Fragment>
      <MainLayout title="Журнал" mainTitle="Журнал" breadcrumbs="Диспетчерская / Журнал">
        <div className={styles.wrapper}>
          <BtnWrapper>
            <Link href="/">
              <a>
                <Button>Добавить новую запись</Button>
              </a>
            </Link>
          </BtnWrapper>

          <Panel>
            <div className={`flex ${styles.wrapBlock}`}>
              <div className={`flex ${styles.wrapMagazine}`}>
                <SimpleInput placeholder="Введите данные..." label="Адрес" size="middle" />
                <div>
                  <FormHelperText>Дата возникновения неисправности</FormHelperText>
                  <TimeSelect />
                </div>
                <div>
                  <FormHelperText>Дата устранения неисправности</FormHelperText>
                  <TimeSelect />
                </div>
              </div>

              <div className={styles.btnBlock}>
                <Button bcg={true}>Найти</Button>
                <ResetFilter />
              </div>
            </div>

            <div className={`flex ${styles.block}`}>
              <div className={`flex items-center justify-center`}>
                <CheckBox />
              </div>
              <div className={`flex ${styles.text}`}>
                <span>Все дома в управлении</span>
              </div>
            </div>
          </Panel>
          <MagazineTable />
        </div>
      </MainLayout>
    </React.Fragment>
  );
}
