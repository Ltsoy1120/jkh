import type { GetServerSideProps, NextPage } from "next";
import { useState } from "react";
import { parseCookies } from "nookies";
import MainLayout from "../../components/MainLayout/MainLayout";
import { Box, Typography, Modal } from "@mui/material";
import Button from "../../components/Buttons/Button";
import Remove from "../../components/Buttons/CircleButtons/Remove/Remove";
import { wrapper } from "../../src/store/store";
import { IRequest } from "../../src/models/IRequest";
import styles from "../../styles/Request.module.css";
import { cancelRequest } from "../../src/store/actions/requestActions";
import { API_URL } from "../../src/config";
import moment from "moment";

interface RequestProps {
  request: IRequest;
}
const Request: NextPage<RequestProps> = ({ request }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleRequestCanceled = () => {
    cancelRequest(request.number);
  };
  return (
    <MainLayout title="Заявка" mainTitle="Страница заявки">
      <div className={styles.content}>
        <div className={styles.titleblock}>
          <div className={styles.titlediv}>
            <h1 className={styles.pagetitle}>Заявка №{request.number}</h1>
            <span className={styles.breadcrumbs}>
              Диспетчерская / Заявки / Заявка №{request.number}
            </span>
          </div>
          <div className={styles.buttondiv}>
            <Button bg="white" onClick={handleOpen}>
              Отменить заявку
            </Button>
          </div>
        </div>
        <div className={styles.contentBox}>
          <div className={styles.requestInfo}>
            <div className={styles.tdate}>
              <span className={styles.createDateLabel}>Создано</span>
              <span>
                {moment(request.createDate).format("DD.MM.YYYY, HH:mm")}
              </span>
            </div>
            <div className={styles.tdate}>
              <span className={styles.createDateLabel}>Срок исполнения</span>
              {request.workDate ? (
                <span>
                  {moment(request.workDate).format("DD.MM.YYYY")} до{" "}
                  {moment(request.workDate).format("HH.mm")}
                </span>
              ) : (
                <span>еще не назначен</span>
              )}
            </div>
            <div className={styles.tdate}>
              <span className={styles.createDateLabel}>Статус</span>
              <span
                className={
                  request.status === "Новая"
                    ? styles.new
                    : request.status === "Выполнена"
                    ? styles.done
                    : styles.canceled
                }
              >
                {request.status}
              </span>
            </div>
          </div>
          <div className={styles.requestData}>
            <div className={styles.requestText}>
              <span className={styles.title}>Текст заявки</span>
              <div className={styles.data}>{request.text}</div>
            </div>
            <div className={styles.executant}>
              <span className={styles.title}>Исполнитель</span>
              <div className={styles.executantInfo}>
                <div className={styles.initials}>
                  <span className={styles.createDateLabel}>Фамилия Имя</span>
                  <div className={styles.data}>
                    {request.perfomer?.lastName} {request.perfomer?.name} (
                    {request.perfomer?.position})
                  </div>
                </div>
                <div className={styles.tel}>
                  <span className={styles.createDateLabel}>
                    Контактный телефон
                  </span>
                  <div className={styles.data}>+7 (900) 762-98-09</div>
                </div>
              </div>
            </div>
            <div className={styles.requestResult}>
              <span className={styles.title}>Результат работы по заявке</span>
              {request.result ? (
                <div className={styles.data}>{request.result}</div>
              ) : (
                <div className={styles.data}>пока нет результата</div>
              )}
            </div>
            {request.resultFile && (
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
                Оценить результат работы по заявке
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
            Отменить заявку №{request.number}?
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <Button bg="green" width={100} onClick={handleRequestCanceled}>
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
    const res = await fetch(`${API_URL}/request/${ctx.query.id}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    });
    const request = await res.json();
    return {
      props: {
        request
      }
    };
  });
export default Request;
