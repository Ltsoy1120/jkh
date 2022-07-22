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
import AppealInfo from "./components/AppealInfo";
import ResultInfo from "./components/ResultInfo";
import CustomTextArea from "../../../ComponentForms/CustomTextArea";
import FormButtonGroup from "../../../../Buttons/FormButtonGroup";
import Modal from "../../../../Modal";
import styles from "./style.module.scss";
import { AppealData, IAppeal } from "../../../../../models/IAppeal";
import {
  getAccounts,
  getFilteredAccounts,
} from "../../../../../store/actions/controlObjectActions";

interface EditAppealFormProps {
  initAppeal: AppealData;
  editAppealSubmit: (appealData: FormData) => void;
  applicationInProgressSubmit: (appealData: FormData) => void;
  applicationCanceledSubmit: (reasonData: ApplicationCancelData) => void;
  doneAppealSubmit: (appealData: FormData) => void;
  houses: IHouse[];
  companyId: string;
}

const EditAppealForm: React.FC<EditAppealFormProps> = ({
  initAppeal,
  editAppealSubmit,
  applicationInProgressSubmit,
  applicationCanceledSubmit,
  doneAppealSubmit,
  houses,
  companyId,
}) => {
  const [state, setState] = useState<AppealData>(initAppeal);
  const [reasonForCancel, setReasonForCancel] = useState<ApplicationCancelData>(
    { reasonForCancel: "" }
  );
  const [error, setError] = useState("");
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
  }, [state.address, state.numberOfApartment]);

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
      if (key !== "files" && key !== "performer" && key !== "account") {
        formData.append(key, state[key]);
      }
    });
    state.files.forEach((file) => formData.append("files", file));
    formData.append("performer", state.performer.id);
    formData.append("account", state.account.id);
    editAppealSubmit(formData);
  };

  const handleSubmitDone = async (
    event: React.FormEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
    if (!state.result && !state.resultFiles.length) {
      setError("Вы не можете закрыть обращение не добавив результаты работы");
    }
    const formData = new FormData();
    Object.keys(state).forEach((key) => {
      if (
        key !== "files" &&
        key !== "resultFiles" &&
        key !== "performer" &&
        key !== "account"
      ) {
        formData.append(key, state[key]);
      }
    });
    state.files.forEach((file) => formData.append("files", file));
    state.resultFiles.forEach((file) => formData.append("resultFiles", file));
    formData.append("performer", state.performer.id);
    formData.append("account", state.account.id);
    doneAppealSubmit(formData);
  };

  return (
    <form className={styles.wrap}>
      <div className={styles.wrapContent}>
        <LeftPanelInfo
          state={state}
          handleChange={handleChange}
          handleDateSelect={handleDateSelect}
        />
        <div className={styles.wrapBlock}>
          <AppealInfo
            state={state}
            houses={houses}
            accounts={accounts}
            handleChange={handleChange}
            handleSelect={handleSelect}
            handleFileChange={handleFileChange}
            removeFile={removeFile}
          />
          <PerformerInfo
            state={state}
            error={error}
            handleChange={handleChange}
            handleSelect={handleSelect}
            employeesOfCompany={employeesOfCompany}
          />
          {state.status === "В работе" && (
            <ResultInfo
              state={state}
              error={error}
              handleChange={handleChange}
              handleFileChange={handleFileChange}
              removeFile={removeFile}
            />
          )}
          <ButtonGroup
            children1="Ответить и закрыть обращение"
            children2="Закрыть обращение без ответа"
            href1={`/company/${companyId}/appeals`}
            onClick2={handleSubmitDone}
            width1={300}
            width2={300}
          />
          <div className={styles.wrapButtons}>
            <Button onClick={handleSubmit} bg="green" width={200} mr={20}>
              Сохранить
            </Button>
          </div>
        </div>
      </div>
    </form>
  );
};
export default EditAppealForm;
