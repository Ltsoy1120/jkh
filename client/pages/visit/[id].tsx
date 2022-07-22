import type { GetServerSideProps, NextPage } from "next";
import styles from "../../styles/Appeal.module.scss";
import MainLayout from "../../components/MainLayout/MainLayout";
import { useState } from "react";
import { Box, Modal, Typography } from "@mui/material";
import Button from "../../components/Buttons/Button";
import Remove from "../../components/Buttons/CircleButtons/Remove/Remove";
import { wrapper } from "../../src/store/store";
import { parseCookies } from "nookies";
import { apiURL, API_URL } from "../../src/config";
import { cancelAppeal } from "../../src/store/actions/appealActions";
import { IVisit } from "../../src/models/IVisit";

interface VisitProps {
  visit: IVisit;
}

const Visit: NextPage<VisitProps> = ({ visit }) => {
  console.log("visit", visit);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleAppealCanceled = () => {
    cancelAppeal(visit.number);
  };
  return (
    <MainLayout title="Запись на прием" mainTitle="Запись на прием">
      <div className={styles.content}>
        <div className={styles.titleblock}>
          <div className={styles.titlediv}>
            <h1 className={styles.pagetitle}>Прием №{visit.number}</h1>
            <span className={styles.breadcrumbs}>
              Прием граждан / Мои приемы / Запись на прием №{visit.number}
            </span>
          </div>
          <div className={styles.buttondiv}>
            <Button bg="white" onClick={handleOpen}>
              Отменить запись на прием
            </Button>
          </div>
        </div>
        <div className={styles.contentBox}>
          <div className={styles.requestInfo}>
            {/* <div className={styles.tdate}>
              <span className={styles.createDateLabel}>Создано</span>
              <span>
                {moment(visit.createDate).format("DD.MM.YYYY, HH:mm")}
              </span>
            </div> */}
            <div className={styles.tdate}>
              <span className={styles.createDateLabel}>
                Дата и время приема
              </span>
              {visit.date ? (
                <span>
                  {visit.date} в {visit.time}
                </span>
              ) : (
                <span>еще не назначен</span>
              )}
            </div>
            <div className={styles.tdate}>
              <span className={styles.createDateLabel}>Статус</span>
              <span
                className={
                  visit.status === "Новое"
                    ? styles.new
                    : visit.status === "Выполнено"
                    ? styles.done
                    : styles.canceled
                }
              >
                {visit.status}
              </span>
            </div>
          </div>
          <div className={styles.requestData}>
            <div className={styles.requestText}>
              <span className={styles.title}>Тема приема</span>
              <div className={styles.data}>{visit.topic}</div>
            </div>
            <div className={styles.requestText}>
              <span className={styles.title}>Комментарий</span>
              <div className={styles.data}>{visit.text}</div>
            </div>
            <div className={styles.executant}>
              <span className={styles.title}>Исполнитель</span>
              {visit.responsiblePerson ? (
                <div className={styles.executantInfo}>
                  <div className={styles.initials}>
                    <span className={styles.createDateLabel}>Фамилия Имя</span>
                    <div className={styles.data}>
                      {visit.responsiblePerson?.lastName}{" "}
                      {visit.responsiblePerson?.name} (
                      {visit.responsiblePerson?.position})
                    </div>
                  </div>
                  <div className={styles.tel}>
                    <span className={styles.createDateLabel}>
                      Контактный телефон
                    </span>
                    <div className={styles.data}>
                      {visit.responsiblePerson?.phone}
                    </div>
                  </div>
                </div>
              ) : (
                <div className={styles.data}>не назначен</div>
              )}
            </div>
            <div className={styles.requestResult}>
              <span className={styles.title}>Результаты проведения приема</span>
              {visit.result ? (
                <div className={styles.data}>{visit.result}</div>
              ) : (
                <div className={styles.data}>пока нет результата</div>
              )}
            </div>
            {visit.resultFile && (
              <div className={styles.requestResultImage}>
                <span className={styles.requestResultTitle}>Фото отчет</span>
                <img
                  className={styles.img}
                  src={apiURL + "/uploads/" + visit.resultFile}
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
            Отменить обращение №{visit.number}?
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
    const res = await fetch(`${API_URL}/visit/${ctx.query.id}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    });
    const visit = await res.json();
    return {
      props: {
        visit
      }
    };
  });

export default Visit;
