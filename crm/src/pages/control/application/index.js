import React from "react";
import MainLayout from "../../../components/MainLayout/MainLayout";
import styles from "../../../styles/control/application/application.module.scss";
import TabsControl from "../../../components/Tabs/TabsControl/TabsControl";
import Link from "next/link";
import { Button as ButtonStatus } from "@mui/material";
import Button from "../../../components/Buttons/Button/Button";
import InputLabel from "../../../components/Forms/InputLabel/InputLabel";
import { ResetFilter } from "../../../components/Buttons/ResetFilter/ResetFilter";
import { styled } from "@mui/system";

import { AppealsIcon } from "../../../components/AppealsIcon/AppealsIcon";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
export default function Home() {
  const statusProcessBcg = {
    new: "#DED6FD",
    progress: "#B8EEC1",
    canceled: "#FDD6DB",
    finish: "#C6D8E1",
  };
  const statusProcessTextColor = {
    new: "#7B61FF",
    progress: "#1EA133",
    canceled: "#EB5757",
    finish: "#6B8795",
  };
  const StyledButtonNew = styled(ButtonStatus)((props) => {
    const { theme, ownerState } = props;
    return {
      background: statusProcessBcg.new,
      color: statusProcessTextColor.new,
      maxWidth: "170px",
      width: "fit-content",
      textTransform: "none",
      fontSize: "12px",
    };
  });
  const StyledButtonProgress = styled(ButtonStatus)((props) => {
    const { theme, ownerState } = props;
    return {
      background: statusProcessBcg.progress,
      color: statusProcessTextColor.progress,
      maxWidth: "170px",
      width: "fit-content",
      textTransform: "none",
      fontSize: "12px",
    };
  });
  const getPriorityButton = {
    critical: (
      <div className={styles.critical}>
        <RocketLaunchIcon />
        <p>Критический</p>
      </div>
    ),
    high: (
      <div className={styles.high}>
        <LocalFireDepartmentIcon />
        <p>Высокий</p>
      </div>
    ),
    middle: (
      <div className={styles.middle}>
        <AppealsIcon />
        <p>Средний</p>
      </div>
    ),
  };
  return (
    <React.Fragment>
      <MainLayout title="Заявка № 1" mainTitle="Заявка № 1" breadcrumbs="Диспетчерская / Заявки / Просмотр заявки">
        <TabsControl />
        <div className={styles.wrapper}>
          <div className={styles.wrapBtn}>
            <Link href="/controlObjects/journals/editJournal/addRecord">
              <a>
                <Button>Создать доченюю заявку</Button>
              </a>
            </Link>
            <Link href="/controlObjects/journals/editJournal/addRecord">
              <a>
                <Button>Отложить заявку</Button>
              </a>
            </Link>
          </div>

          <div className={`${styles.wrapContent} flex`}>
            <div className={`${styles.wrapBlock}`}>
              <div className={`${styles.content}`}>
                <label>Создано</label>
                <p>26.05.2021 13:00</p>
                <label>Тип</label>
                <p>Ремонт сантехники</p>
                <label>Статус </label>
                <div style={{ marginBottom: 30 }}>
                  <StyledButtonNew>Новая</StyledButtonNew>
                </div>
                <label>Приоритет</label>
                <div className={`${styles.status}`}>{getPriorityButton.high}</div>
              </div>
            </div>
            <div className={`${styles.wrapBlock}`}>
              <InputLabel label={"Текст заявки"} width={550} placeholder={"Потек кран"} />
              <div className={`flex`} style={{ marginTop: 40 }}>
                <div>
                  <p>Адрес</p>
                  <div className={`${styles.contentText}`}>г. Воронеж, ул. Южно-Моравская, д. 18</div>
                </div>
                <div>
                  <p style={{ width: 70, marginRight: 99 }}>Подъезд</p>
                  <div className={`${styles.contentText}`}>1</div>
                </div>
                <div>
                  <p>Этаж</p>
                  <div className={`${styles.contentText}`}>3</div>
                </div>
              </div>
              <div className={`flex`}>
                <div>
                  <p>ФИО или номер лицевого счета</p>
                  <div className={`${styles.contentText}`}>Петрова Ю.Б. (Л/С 12345)</div>
                </div>
                <div className={`${styles.contentText}`} style={{ color: "#E82F45", fontSize: "14px", width: 204 }}>
                  Внимание! По данному лицевому счету имеется задолженность 100 руб
                </div>
              </div>
              <p>Контактный телефон</p>
              <div className={`${styles.contentText}`}>+7 (920)-333-21-13</div>
              <p>Исполнитель</p>
              <div className={`${styles.contentText}`}>Не выбран</div>
              <div>
                <Button bcg={true}>Редактировать</Button>
              </div>
            </div>
            <div className={`${styles.wrapBlock}`}>
              <div className={`${styles.content}`}>
                <p>Параллельно</p>
                <p style={{ marginBottom: 0 }}>Созданные заявки</p>
                <div style={{ marginTop: 15 }}>
                  <a>1234</a>
                  <div className={`${styles.contentText}`} style={{ fontSize: 12, marginTop: 5, marginBottom: 10 }}>
                    {" "}
                    от 20.02.2021 в 12:33{" "}
                  </div>
                  <StyledButtonProgress>В работе</StyledButtonProgress>
                </div>
                <div style={{ marginTop: 15 }}>
                  <a>1234</a>
                  <div className={`${styles.contentText}`} style={{ fontSize: 12, marginTop: 5, marginBottom: 10 }}>
                    {" "}
                    от 20.02.2021 в 12:33{" "}
                  </div>
                  <StyledButtonProgress>В работе</StyledButtonProgress>
                </div>
                <div style={{ marginTop: 15 }}>
                  <a>1234</a>
                  <div className={`${styles.contentText}`} style={{ fontSize: 12, marginTop: 5, marginBottom: 10 }}>
                    {" "}
                    от 20.02.2021 в 12:33{" "}
                  </div>
                  <StyledButtonProgress>В работе</StyledButtonProgress>
                </div>
                <div style={{ marginTop: 20 }}>
                  <Link href="/">
                    <a style={{ fontSize: 12, color: "#1EA133" }}>Смотреть все</a>
                  </Link>
                </div>

                <div style={{ marginTop: 30 }}>
                  <Link href="/">
                    <a style={{ textDecoration: "none", fontWeight: "bold" }}>Аварии</a>
                  </Link>
                </div>
                <div style={{ marginTop: 15 }}>
                  <a style={{ fontWeight: "bold", fontSize: 12 }}>Ремонт теплосети</a>
                  <div style={{ fontWeight: 200, marginTop: 5, fontSize: 12 }}>с 20.02.2021 по 29.02.2021</div>
                </div>
                <div style={{ marginTop: 15 }}>
                  <a style={{ fontWeight: "bold", fontSize: 12 }}>Ремонт теплосети</a>
                  <div style={{ fontWeight: 200, marginTop: 5, fontSize: 12 }}>с 20.02.2021 по 29.02.2021</div>
                </div>
                <div style={{ marginTop: 15 }}>
                  <a style={{ fontWeight: "bold", fontSize: 12 }}>Ремонт теплосети</a>
                  <div style={{ fontWeight: 200, marginTop: 5, fontSize: 12 }}>с 20.02.2021 по 29.02.2021</div>
                </div>
                <div style={{ marginTop: 20 }}>
                  <Link href="/">
                    <a style={{ fontSize: 12, color: "#1EA133" }}>Смотреть все</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </MainLayout>
    </React.Fragment>
  );
}
