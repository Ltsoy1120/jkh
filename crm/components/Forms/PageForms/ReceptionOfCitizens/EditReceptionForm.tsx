import { ChangeEvent, SyntheticEvent, useEffect, useState } from "react";
import { SelectChangeEvent } from "@mui/material";
import { IHouse } from "../../../../models/IHouse";
import { useAppDispatch, useAppSelector } from "../../../../store/hooks";
import { getEmployeesByCompany } from "../../../../store/actions/userActions";
import { getEmployees } from "../../../../store/slices/userSlice";
import Button from "../../../Buttons/Button";
import ResponsiblePersonInfo from "./components/ResponsiblePersonInfo";
import LeftPanelInfo from "./components/LeftPanelInfo";
import ApplicationInfo from "./components/ApplicationInfo";
import ResultInfo from "./components/ResultInfo";
import CustomTextArea from "../../ComponentForms/CustomTextArea";
import Modal from "../../../Modal";
import {
  IReception,
  ReceptionCancelData,
  ReceptionData,
} from "../../../../models/IReception";
import {
  getAccounts,
  getFilteredAccounts,
} from "../../../../store/actions/controlObjectActions";
import { IOffice } from "../../../../models/IOffice";
import styles from "./style.module.scss";

interface EditReceptionFormProps {
  initReception: ReceptionData;
  editReceptionSubmit: (receptionData: FormData) => void;
  confirmReceptionSubmit: (receptionData: FormData) => void;
  completeReceptionSubmit: (receptionData: FormData) => void;
  cancelReceptionSubmit: (reasonForCancel: ReceptionCancelData) => void;
  houses: IHouse[];
  offices: IOffice[];
  companyId: string;
  reception: IReception;
}

type Error = {
  confirmError?: string;
  completeError?: string;
};
const EditReceptionForm: React.FC<EditReceptionFormProps> = ({
  initReception,
  editReceptionSubmit,
  confirmReceptionSubmit,
  completeReceptionSubmit,
  cancelReceptionSubmit,
  houses,
  offices,
  companyId,
  reception,
}) => {
  const [state, setState] = useState<ReceptionData>(initReception);
  const [reasonForCancel, setReasonForCancel] = useState<ReceptionCancelData>({
    reasonForCancel: "",
  });
  const [error, setError] = useState<Error>({
    confirmError: "",
    completeError: "",
  });
  const employeesOfCompany = useAppSelector(getEmployees());
  const accounts = useAppSelector(getAccounts());

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getEmployeesByCompany(companyId));
  }, [dispatch]);

  useEffect(() => {
    dispatch(
      getFilteredAccounts({
        address: state.address,
        numberOfApartment: state.numberOfApartment,
        company: companyId,
      })
    );
  }, [dispatch, state.address, state.numberOfApartment]);

  const handleChange = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | ChangeEvent<HTMLTextAreaElement>
      | SelectChangeEvent<string>
  ) => {
    setState((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
    setError((prevState) => ({
      ...prevState,
      completeError: "",
    }));
  };

  const handleCancelChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setReasonForCancel({ reasonForCancel: event.target.value });
  };

  const handleSelect = (
    event: SyntheticEvent<Element, Event>,
    value: { label: string; id: string },
    name: string
  ) => {
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    setError((prevState) => ({
      ...prevState,
      confirmError: "",
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files);
    const name = e.target.name;
    const filesCopy = [...state[name]];
    const newFiles = filesCopy.concat(files);
    setState((prevState) => ({
      ...prevState,
      [name]: newFiles,
    }));
  };

  const removeFile = (index: number, name: string) => {
    const filesCopy = [...state[name]];
    filesCopy.splice(index, 1);
    setState((prevState) => {
      return { ...prevState, [name]: filesCopy };
    });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const formData = new FormData();
    Object.keys(state).forEach((key) => {
      if (
        key !== "files" &&
        key !== "office" &&
        key !== "responsiblePerson" &&
        key !== "account"
      ) {
        formData.append(key, state[key]);
      }
    });
    state.files.forEach((file) => formData.append("files", file));
    formData.append("office", state.office.id);
    state.responsiblePerson &&
      formData.append("responsiblePerson", state.responsiblePerson.id);
    formData.append("account", state.account.id);
    editReceptionSubmit(formData);
  };

  const confirmHandleSubmit = async (
    event: React.FormEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
    if (!state.responsiblePerson) {
      setError({
        confirmError: "Вы не подтвердить прием не выбрав ответственного",
      });
    }
    const formData = new FormData();
    Object.keys(state).forEach((key) => {
      if (
        key !== "files" &&
        key !== "office" &&
        key !== "responsiblePerson" &&
        key !== "account"
      ) {
        formData.append(key, state[key]);
      }
    });
    state.files.forEach((file) => formData.append("files", file));
    formData.append("office", state.office.id);
    state.responsiblePerson &&
      formData.append("responsiblePerson", state.responsiblePerson.id);
    formData.append("account", state.account.id);
    confirmReceptionSubmit(formData);
  };

  const completeHandleSubmit = async (
    event: React.FormEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
    if (!state.resultComment && !state.resultFiles.length) {
      setError({
        completeError:
          "Вы не можете завершить прием не добавив результаты работы",
      });
    }
    const formData = new FormData();
    Object.keys(state).forEach((key) => {
      if (
        key !== "files" &&
        key !== "office" &&
        key !== "responsiblePerson" &&
        key !== "account"
      ) {
        formData.append(key, state[key]);
      }
    });
    state.files.forEach((file) => formData.append("files", file));
    formData.append("office", state.office.id);
    formData.append("responsiblePerson", state.responsiblePerson.id);
    formData.append("account", state.account.id);
    completeReceptionSubmit(formData);
  };

  const cancelHandleSubmit = async (
    event: React.FormEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
    cancelReceptionSubmit(reasonForCancel);
  };

  // для модалки
  const [showModal, setShowModal] = useState({
    show: false,
  });
  const openModal = () => {
    setShowModal({ show: true });
  };
  const closeModal = () => {
    setShowModal({ show: false });
  };
  const modalBody = (
    <>
      <h3>ПРИЕМ № {reception.number}</h3>
      <h3>
        ДАТА ПРИЕМА: {reception.date} В {reception.time}
      </h3>
      <div>
        <CustomTextArea
          placeholder="Причина отмены"
          name="reasonForCancel"
          value={reasonForCancel.reasonForCancel}
          onChange={handleCancelChange}
          required
          width={450}
        />
      </div>
      <Button onClick={cancelHandleSubmit} bg="green" width={200} mt={30}>
        Отменить запись
      </Button>
    </>
  );

  return (
    <form className={styles.wrap}>
      <div className={styles.wrapContent}>
        <LeftPanelInfo state={state} />
        <div className={styles.wrapBlock}>
          <ApplicationInfo
            state={state}
            houses={houses}
            offices={offices}
            accounts={accounts}
            handleChange={handleChange}
            handleSelect={handleSelect}
            handleFileChange={handleFileChange}
            removeFile={removeFile}
          />
          <ResponsiblePersonInfo
            state={state}
            error={error.confirmError}
            handleSelect={handleSelect}
            employeesOfCompany={employeesOfCompany}
          />
          {state.status === "Согласован" && (
            <ResultInfo
              state={state}
              error={error.completeError}
              handleChange={handleChange}
              handleFileChange={handleFileChange}
              removeFile={removeFile}
            />
          )}
          {showModal.show && <Modal body={modalBody} close={closeModal} />}
          <div className={styles.wrapButtons}>
            {state.status !== "Завершен" && state.status !== "Отменен" && (
              <Button onClick={handleSubmit} bg="green" width={150} mr={20}>
                Сохранить
              </Button>
            )}
            {state.status === "На согласовании" && (
              <Button onClick={confirmHandleSubmit} width={205} mr={20}>
                Подтвердить прием
              </Button>
            )}
            {state.status === "Согласован" && (
              <Button onClick={completeHandleSubmit} width={205} mr={20}>
                Завершить прием
              </Button>
            )}
            {state.status !== "Завершен" && state.status !== "Отменен" && (
              <Button onClick={openModal} width={185} type="button">
                Отменить прием
              </Button>
            )}
          </div>
        </div>
      </div>
    </form>
  );
};
export default EditReceptionForm;
