import React from "react";
import { toast } from "react-toastify";
import css from "./toast.module.scss";

interface ErrorToastProps {
  title?: string;
  error?: string;
}

const ErrorToast: React.FC<ErrorToastProps> = ({
  title = "Ошибка",
  error = "Неизвестная ошибка",
}) => (
  <div className={css.ErrorToast}>
    <div className={css.Close} />
    <div>
      <div className={css.Error} />
      <div className={css.Description}>
        <div className={css.Header}>{title}</div>
        <div className={css.Text}>{error}</div>
      </div>
    </div>
  </div>
);

interface SuccessToastProps {
  title?: string;
  success: string;
}

const SuccessToast: React.FC<SuccessToastProps> = ({
  title = "Успешно",
  success,
}) => (
  <>
    <div className="toastify-header">
      <div className="title-wrapper">
        <h6>{title}</h6>
      </div>
    </div>
    <div className="toastify-body">
      <span>{success}</span>
    </div>
  </>
);

const errorToast = (error?: string, title?: string) =>
  toast.error(error, {
    autoClose: 10000,
    hideProgressBar: true,
  });

const successToast = (success: string, title?: string) =>
  toast.error(success, {
    autoClose: 10000,
    hideProgressBar: true,
  });

export { errorToast, successToast };
