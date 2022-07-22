import React from "react";
import MainLayout from "../../../components/MainLayout/MainLayout";
import styles from "../../../styles/controlObjects/journals/index.module.scss";
import Link from "next/link";
import Button from "../../../components/Buttons/Button/Button";
import Journals from "../../../components/Tables/JournalsTables/Journals";

export default function Home() {
  return (
    <React.Fragment>
      <MainLayout title="Журналы" mainTitle="Журналы">
        <div className={styles.wrapper}>
          <div className={styles.wrapBtn}>
            <Link href="">
              <a>
                <Button>Добавить новый субъект</Button>
              </a>
            </Link>
          </div>
        </div>
        <div className={`mt-14`}>
          <Journals
            title="Журнал регистрации фактов предоставления коммунальных услуг ненадлежащего качества"
            text="Последняя созданная запись : 27.04.2021 15:05"
          />
          <Journals
            title="Журнал регистрации перерывов в предоставлении коммунальных услуг"
            text="Последняя созданная запись : 27.04.2021 15:05"
          />
          <Journals
            title="Сведения о работе организаций, оказывающих услуги в сфере жилищно-коммунального хозяйства, в условиях реформы (22-ЖКХ)"
            text="Последняя созданная запись : 27.04.2021 15:05"
          />
        </div>
      </MainLayout>
    </React.Fragment>
  );
}
