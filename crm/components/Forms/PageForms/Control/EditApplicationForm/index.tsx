import { ChangeEvent, SyntheticEvent, useEffect, useState } from "react";
import {
  ApplicationCancelData,
  ApplicationData,
  IApplication,
} from "../../../../../models/IApplication";
import { SelectChangeEvent } from "@mui/material";
import { IHouse } from "../../../../../models/IHouse";
import { useAppDispatch, useAppSelector } from "../../../../../store/hooks";
import { getEmployeesByCompany } from "../../../../../store/actions/userActions";
import { getEmployees } from "../../../../../store/slices/userSlice";
import {
  getContractorEmployees,
  getContractors,
  getContractorsByCompany,
  getEmployeesByContractor,
} from "../../../../../store/actions/contractorActions";
import ButtonGroup from "../../../../Buttons/ButtonGroup";
import Button from "../../../../Buttons/Button";
import PerformerInfo from "./components/PerformerInfo";
import LeftPanelInfo from "./components/LeftPanelInfo";
import ApplicationInfo from "./components/ApplicationInfo";
import ResultInfo from "./components/ResultInfo";
import CustomTextArea from "../../../ComponentForms/CustomTextArea";
import FormButtonGroup from "../../../../Buttons/FormButtonGroup";
import Modal from "../../../../Modal";
import styles from "./style.module.scss";

interface EditApplicationFormProps {
  initApplication: ApplicationData;
  editApplicationSubmit: (applicationData: FormData) => void;
  applicationInProgressSubmit: (applicationData: FormData) => void;
  applicationCanceledSubmit: (reasonData: ApplicationCancelData) => void;
  completeApplicationSubmit: (applicationData: FormData) => void;
  houses: IHouse[];
  companyId: string;
  application: IApplication;
}

type Error = {
  inProgressError?: string;
  completeError?: string;
};
const EditApplicationForm: React.FC<EditApplicationFormProps> = ({
  initApplication,
  editApplicationSubmit,
  applicationInProgressSubmit,
  applicationCanceledSubmit,
  completeApplicationSubmit,
  houses,
  companyId,
  application,
}) => {
  const [state, setState] = useState<ApplicationData>(initApplication);
  const [reasonForCancel, setReasonForCancel] = useState<ApplicationCancelData>(
    { reasonForCancel: "" }
  );
  const [error, setError] = useState<Error>({
    inProgressError: "",
    completeError: "",
  });
  const employeesOfCompany = useAppSelector(getEmployees());
  const contractorsByCompany = useAppSelector(getContractors());
  const employeesOfContractor = useAppSelector(getContractorEmployees());
  const contractor =
    state.contractor &&
    contractorsByCompany?.find(
      (contractor) => contractor.contractorName === state.contractor.label
    );

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getEmployeesByCompany(companyId));
    dispatch(getContractorsByCompany(companyId));
  }, [dispatch]);

  useEffect(() => {
    contractor?._id && dispatch(getEmployeesByContractor(contractor._id));
  }, [state]);

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
  };

  const handleDateSelect = (newValue: Date, name: string) => {
    setState((prevState) => ({
      ...prevState,
      [name]: newValue,
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
      if (key !== "files" && key !== "contractor" && key !== "performer") {
        formData.append(key, state[key]);
      }
    });
    state.files.forEach((file) => formData.append("files", file));
    formData.append("contractor", state.contractor.id);
    formData.append("performer", state.performer.id);
    editApplicationSubmit(formData);
  };

  const handleSubmitInProgress = async (
    event: React.FormEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
    if (!state.performer) {
      setError({
        inProgressError:
          "Вы не можете отправить заявку в работу не выбрав исполнителя",
      });
    }
    const formData = new FormData();
    Object.keys(state).forEach((key) => {
      if (key !== "files" && key !== "contractor" && key !== "performer") {
        formData.append(key, state[key]);
      }
    });
    state.files.forEach((file) => formData.append("files", file));
    formData.append("contractor", state.contractor.id);
    formData.append("performer", state.performer.id);
    applicationInProgressSubmit(formData);
  };

  const handleSubmitComplete = async (
    event: React.FormEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
    if (!state.result && !state.resultFiles.length) {
      setError({
        completeError:
          "Вы не можете завершить заявку не добавив результаты работы",
      });
    }
    const formData = new FormData();
    Object.keys(state).forEach((key) => {
      if (
        key !== "files" &&
        key !== "resultFiles" &&
        key !== "contractor" &&
        key !== "performer"
      ) {
        formData.append(key, state[key]);
      }
    });
    state.files.forEach((file) => formData.append("files", file));
    state.resultFiles.forEach((file) => formData.append("resultFiles", file));
    formData.append("contractor", state.contractor.id);
    formData.append("performer", state.performer.id);
    completeApplicationSubmit(formData);
  };

  const handleSubmitCancel = async (
    event: React.FormEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
    applicationCanceledSubmit(reasonForCancel);
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
      <h3>Вы действительно хотите отменить заявку № {application.number}</h3>

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
      <FormButtonGroup
        children1="Да"
        children2="Нет"
        onClick1={handleSubmitCancel}
        href={`/control/${application._id}/application`}
        isCenter
      />
    </>
  );

  return (
    <form className={styles.wrap}>
      <div className={styles.wrapContent}>
        <LeftPanelInfo
          state={state}
          handleChange={handleChange}
          handleDateSelect={handleDateSelect}
        />
        <div className={styles.wrapBlock}>
          <ApplicationInfo
            state={state}
            houses={houses}
            handleChange={handleChange}
            handleFileChange={handleFileChange}
            removeFile={removeFile}
          />
          <PerformerInfo
            state={state}
            error={error.inProgressError}
            handleChange={handleChange}
            handleSelect={handleSelect}
            employeesOfCompany={employeesOfCompany}
            employeesOfContractor={employeesOfContractor}
            contractorsByCompany={contractorsByCompany}
          />
          {state.status === "В работе" && (
            <ResultInfo
              state={state}
              error={error.completeError}
              handleChange={handleChange}
              handleFileChange={handleFileChange}
              removeFile={removeFile}
            />
          )}
          <h2>Распечатать документы</h2>
          <ButtonGroup
            children1="Распечатать заказ-наряд"
            children2="Распечатать форму осмотра помещения"
            href1={`/company/${companyId}/control/application`}
            href2={`/company/${companyId}/control/application`}
            width1={250}
            width2={360}
          />
          {showModal.show && <Modal body={modalBody} close={closeModal} />}
          <div className={styles.wrapButtons}>
            <Button onClick={handleSubmit} bg="green" width={200} mr={20}>
              Редактировать
            </Button>
            {state.status === "Новая" && (
              <Button onClick={handleSubmitInProgress} width={205} mr={20}>
                Отправить в работу
              </Button>
            )}
            {state.status === "В работе" && (
              <Button onClick={handleSubmitComplete} width={205} mr={20}>
                Закрыть заявку
              </Button>
            )}
            {state.status !== "Выполнена" && state.status !== "Отменена" && (
              <Button onClick={openModal} width={185} type="button">
                Отменить заявку
              </Button>
            )}
          </div>
        </div>
      </div>
    </form>
  );
};
export default EditApplicationForm;
