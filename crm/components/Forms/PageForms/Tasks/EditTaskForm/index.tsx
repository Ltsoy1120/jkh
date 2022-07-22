import { ChangeEvent, SyntheticEvent, useEffect, useState } from "react";
import { getEmployeesByCompany } from "../../../../../store/actions/userActions";
import { useAppDispatch, useAppSelector } from "../../../../../store/hooks";
import { getEmployees } from "../../../../../store/slices/userSlice";
import {
  Employee,
  ITask,
  TaskCancelData,
  TaskInit,
} from "../../../../../models/ITask";

import { SelectChangeEvent } from "@mui/material";
import {
  getHouses,
  getHousesByCompany,
} from "../../../../../store/actions/controlObjectActions";
import {
  getTaskTypes,
  getTaskTypesByCompany,
} from "../../../../../store/actions/taskActions";
import InfoCard from "./components/InfoCard";
import Button from "../../../../Buttons/Button";
import LeftPanelInfo from "./components/LeftPanelInfo";
import styles from "./style.module.scss";
import DeadlineInfo from "./components/DeadlineInfo";
import TaskInfo from "./components/TaskInfo";
import PerformersInfo from "./components/PerformersInfo";
import ObserversInfo from "./components/ObserversInfo";
import ResultInfo from "./components/ResultInfo";
import CustomTextArea from "../../../ComponentForms/CustomTextArea";
import FormButtonGroup from "../../../../Buttons/FormButtonGroup";
import Modal from "../../../../Modal";

interface EditTaskFormProps {
  companyId: string;
  task: ITask;
  initTask: TaskInit;
  editTaskSubmit: (taskTypeData: FormData) => Promise<void>;
  cancelTaskSubmit: (reasonForCancel: TaskCancelData) => void;
  completeTaskSubmit: (taskData: FormData) => void;
}

const EditTaskForm: React.FC<EditTaskFormProps> = ({
  companyId,
  task,
  initTask,
  editTaskSubmit,
  completeTaskSubmit,
  cancelTaskSubmit,
}) => {
  const [state, setState] = useState<TaskInit>(initTask);
  const [performer, setPerformer] = useState<Employee>(null);
  const [observer, setObserver] = useState<Employee>(null);
  const [reasonForCancel, setReasonForCancel] = useState<TaskCancelData>({
    reasonForCancel: "",
  });
  const [error, setError] = useState("");
  const performersCopy = [...state.performers];
  const observersCopy = [...state.observers];
  const employeesOfCompany = useAppSelector(getEmployees());
  const housesOfCompany = useAppSelector(getHouses());
  const taskTypesOfCompany = useAppSelector(getTaskTypes());

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getEmployeesByCompany(companyId));
    dispatch(getHousesByCompany(companyId));
    dispatch(getTaskTypesByCompany(companyId));
  }, [dispatch]);

  const handleChange = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
      | SelectChangeEvent<string>
  ) => {
    setState((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const handleChecked = (name: string) => {
    setState((prevState) => ({
      ...prevState,
      [name]: !state[name],
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

  const performerHandleChange = (
    event: SyntheticEvent<Element, Event>,
    value: { label: string; id: string }
  ) => {
    setPerformer(value);
  };

  const addPerformer = () => {
    performersCopy.push(performer);
    setState((prevState) => {
      return { ...prevState, performers: performersCopy };
    });
    setPerformer(null);
  };

  const removePerformer = (index: number) => {
    performersCopy.splice(index, 1);
    setState((prevState) => {
      return { ...prevState, performers: performersCopy };
    });
  };

  const observerHandleChange = (
    event: SyntheticEvent<Element, Event>,
    value: { label: string; id: string }
  ) => {
    setObserver(value);
  };

  const addObserver = () => {
    observersCopy.push(observer);
    setState((prevState) => {
      return { ...prevState, observers: observersCopy };
    });
    setObserver(null);
  };

  const removeObserver = (index: number) => {
    observersCopy.splice(index, 1);
    setState((prevState) => {
      return { ...prevState, observers: observersCopy };
    });
  };

  const handleCancelChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setReasonForCancel({ reasonForCancel: event.target.value });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const formData = new FormData();
    Object.keys(state).forEach((key) => {
      if (
        key !== "files" &&
        key !== "resultFiles" &&
        key !== "performers" &&
        key !== "observers" &&
        key !== "dispatcher"
      ) {
        formData.append(key, state[key]);
      }
    });
    state.files &&
      state.files.forEach((file) => formData.append("files", file));
    state.resultFiles &&
      state.resultFiles.forEach((file) => formData.append("resultFiles", file));
    state.performers.length &&
      state.performers.forEach((performer) =>
        formData.append("performers", performer.id)
      );
    state.observers.length &&
      state.observers.forEach((observer) =>
        formData.append("observers", observer.id)
      );
    formData.append("dispatcher", state.dispatcher.id);
    editTaskSubmit(formData);
  };

  const completeHandleSubmit = async (
    event: React.FormEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
    if (!state.resultComment && !state.resultFiles.length) {
      setError("Вы не можете закрыть задачу не добавив результаты работы");
    }
    console.log("state", state);
    const formData = new FormData();
    Object.keys(state).forEach((key) => {
      if (
        key !== "files" &&
        key !== "resultFiles" &&
        key !== "performers" &&
        key !== "observers" &&
        key !== "dispatcher"
      ) {
        formData.append(key, state[key]);
      }
    });
    state.files &&
      state.files.forEach((file) => formData.append("files", file));
    state.resultFiles &&
      state.resultFiles.forEach((file) => formData.append("resultFiles", file));
    state.performers.length &&
      state.performers.forEach((performer) =>
        formData.append("performers", performer.id)
      );
    state.observers.length &&
      state.observers.forEach((observer) =>
        formData.append("observers", observer.id)
      );
    formData.append("dispatcher", state.dispatcher.id);
    completeTaskSubmit(formData);
  };

  const handleSubmitCancel = async (
    event: React.FormEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
    cancelTaskSubmit(reasonForCancel);
    closeModal();
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
      <h3>Вы действительно хотите отменить задачу № {task.number}</h3>
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
        href={`/tasks/${task._id}`}
        isCenter
      />
    </>
  );
  return (
    <form className={styles.wrap}>
      <div className={styles.wrapContent}>
        <LeftPanelInfo
          state={state}
          taskTypesOfCompany={taskTypesOfCompany}
          handleChange={handleChange}
          handleDateSelect={handleDateSelect}
        />
        <div className={styles.wrapBlock}>
          <InfoCard label="Автор" children={state.dispatcher.label} mb={20} />
          <DeadlineInfo
            state={state}
            handleChecked={handleChecked}
            handleChange={handleChange}
            handleDateSelect={handleDateSelect}
          />
          <TaskInfo
            state={state}
            houses={housesOfCompany}
            handleChange={handleChange}
            handleFileChange={handleFileChange}
            removeFile={removeFile}
          />
          <PerformersInfo
            state={state}
            performer={performer}
            performersCopy={performersCopy}
            addPerformer={addPerformer}
            removePerformer={removePerformer}
            performerHandleChange={performerHandleChange}
            employeesOfCompany={employeesOfCompany}
          />
          <ObserversInfo
            state={state}
            observer={observer}
            observersCopy={observersCopy}
            addObserver={addObserver}
            removeObserver={removeObserver}
            observerHandleChange={observerHandleChange}
            employeesOfCompany={employeesOfCompany}
          />
          <ResultInfo
            state={state}
            error={error}
            handleChange={handleChange}
            handleFileChange={handleFileChange}
            removeFile={removeFile}
          />
          {showModal.show && <Modal body={modalBody} close={closeModal} />}
          <div className={styles.wrapButtons}>
            <Button onClick={handleSubmit} bg="green" width={200} mr={20}>
              Сохранить
            </Button>
            {state.status !== "Выполнена" && state.status !== "Отменена" && (
              <Button onClick={completeHandleSubmit} width={205} mr={20}>
                Закрыть задачу
              </Button>
            )}
            {state.status !== "Выполнена" && state.status !== "Отменена" && (
              <Button onClick={openModal} width={185} type="button">
                Отменить задачу
              </Button>
            )}
          </div>
        </div>
      </div>
    </form>
  );
};
export default EditTaskForm;
