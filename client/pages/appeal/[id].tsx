import type { GetServerSideProps, NextPage } from "next";
import moment from "moment";
import styles from "../../styles/Appeal.module.scss";
import MainLayout from "../../components/MainLayout/MainLayout";
import { useState } from "react";
import { Box, Modal, Typography } from "@mui/material";
import Button from "../../components/Buttons/Button";
import Remove from "../../components/Buttons/CircleButtons/Remove/Remove";
import { wrapper } from "../../src/store/store";
import { parseCookies } from "nookies";
import { API_URL } from "../../src/config";
import { IAppeal } from "../../src/models/IAppeal";
import { cancelAppeal } from "../../src/store/actions/appealActions";

interface AppealProps {
  appeal: IAppeal;
}

const Appeal: NextPage<AppealProps> = ({ appeal }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleAppealCanceled = () => {
    cancelAppeal(appeal.number);
  };
  return (
    <MainLayout title="Обращение" mainTitle="Страница обращения">
      <div className={styles.content}>
        <div className={styles.titleblock}>
          <div className={styles.titlediv}>
            <h1 className={styles.pagetitle}>Обращение №{appeal.number}</h1>
            <span className={styles.breadcrumbs}>
              Обращения / Мои обращения / Обращение №{appeal.number}
            </span>
          </div>
          <div className={styles.buttondiv}>
            <Button bg="white" onClick={handleOpen}>
              Отменить обращение
            </Button>
          </div>
        </div>
        <div className={styles.contentBox}>
          <div className={styles.requestInfo}>
            <div className={styles.tdate}>
              <span className={styles.createDateLabel}>Создано</span>
              <span>
                {moment(appeal.createDate).format("DD.MM.YYYY, HH:mm")}
              </span>
            </div>
            <div className={styles.tdate}>
              <span className={styles.createDateLabel}>Срок исполнения</span>
              {appeal.workDate ? (
                <span>
                  {moment(appeal.workDate).format("DD.MM.YYYY")} до{" "}
                  {moment(appeal.workDate).format("HH.mm")}
                </span>
              ) : (
                <span>еще не назначен</span>
              )}
            </div>
            <div className={styles.tdate}>
              <span className={styles.createDateLabel}>Статус</span>
              <span
                className={
                  appeal.status === "Новое"
                    ? styles.new
                    : appeal.status === "Выполнено"
                    ? styles.done
                    : styles.canceled
                }
              >
                {appeal.status}
              </span>
            </div>
          </div>
          <div className={styles.requestData}>
            <div className={styles.requestText}>
              <span className={styles.title}>Тип обращения</span>
              <div className={styles.data}>{appeal.type}</div>
            </div>
            <div className={styles.requestText}>
              <span className={styles.title}>Текст обращения</span>
              <div className={styles.data}>{appeal.text}</div>
            </div>
            <div className={styles.executant}>
              <span className={styles.title}>Исполнитель</span>
              {appeal.perfomer ? (
                <div className={styles.executantInfo}>
                  <div className={styles.initials}>
                    <span className={styles.createDateLabel}>Фамилия Имя</span>
                    <div className={styles.data}>
                      {appeal.perfomer?.lastName} {appeal.perfomer?.name} (
                      {appeal.perfomer?.position})
                    </div>
                  </div>
                  <div className={styles.tel}>
                    <span className={styles.createDateLabel}>
                      Контактный телефон
                    </span>
                    <div className={styles.data}>+7 (900) 762-98-09</div>
                  </div>
                </div>
              ) : (
                <div className={styles.data}>не назначен</div>
              )}
            </div>
            <div className={styles.requestResult}>
              <span className={styles.title}>
                Результат работы по обращению
              </span>
              {appeal.result ? (
                <div className={styles.data}>{appeal.result}</div>
              ) : (
                <div className={styles.data}>пока нет результата</div>
              )}
            </div>
            {appeal.resultFile && (
              <div className={styles.requestResultImage}>
                <span className={styles.requestResultTitle}>Фото отчет</span>
                <img
                  className={styles.img}
                  src="../../public/image/docs.png"
                  alt=""
                />
              </div>
            )}
            <div className={styles.requestRating}>
              <span className={styles.title}>
                Оценить результат работы по обращению
              </span>
              <div className={styles.rating}>
                <div className={styles.fullstar}></div>
                <div className={styles.fullstar}></div>
                <div className={styles.star}></div>
                <div className={styles.star}></div>
                <div className={styles.star}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className={styles.modal}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Отменить обращение №{appeal.number}?
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <Button bg="green" width={100} onClick={handleAppealCanceled}>
              Да
            </Button>
          </Typography>
          <div className={styles.close} onClick={handleClose}>
            <Remove />
          </div>
        </Box>
      </Modal>
    </MainLayout>
  );
};
export const getServerSideProps: GetServerSideProps =
  wrapper.getServerSideProps(store => async ctx => {
    const { accessToken } = parseCookies(ctx);
    const res = await fetch(`${API_URL}/appeal/${ctx.query.id}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    });
    const appeal = await res.json();
    return {
      props: {
        appeal
      }
    };
  });

export default Appeal;
