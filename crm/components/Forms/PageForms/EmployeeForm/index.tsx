import Router from "next/router";
import { Alert, SelectChangeEvent } from "@mui/material";
import { useState } from "react";
import { apiURL } from "../../../../config";
import Button from "../../../Buttons/Button";
import CheckBox from "../../../CheckBox";
import { EmployeeData, IUser } from "../../../../models/IUser";
import GeneralInfo from "./components/GenelalInfo";
import PositionInfo from "./components/PositionInfo";
import SubordinatesInfo from "./components/SubordinatesInfo";
import AvatarInfo from "./components/AvatarInfo";
import TypesOfRequestsInfo from "./components/TypesOfRequestsInfo";
import styles from "./style.module.scss";
import { useAppDispatch, useAppSelector } from "../../../../store/hooks";
import FormButtonGroup from "../../../Buttons/FormButtonGroup";
import { useDispatch } from "react-redux";
import { setEmployeeData } from "../../../../store/slices/userSlice";

interface EmployeeFormProps {
  initEmployee: EmployeeData;
  employee?: IUser;
  onSubmit: (formData: FormData) => void;
  companyId: string;
}

const EmployeeForm: React.FC<EmployeeFormProps> = ({
  onSubmit,
  employee,
  initEmployee,
  companyId,
}) => {
  const employeeData = useAppSelector((state) => state.users.employeeData);
  const dispatch = useDispatch();
  console.log("employeeData", employeeData);

  const [state, setState] = useState<EmployeeData>(initEmployee);
  // const phonesWithoutFirst = [...state.phones].slice(1);
  const subordinatesWithoutFirst = [...state.subordinates].slice(1);
  const phonesCopy = [...state.phones];
  const subordinatesCopy = [...state.subordinates];

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files[0];
    setState((prevState) => ({
      ...prevState,
      [e.target.name]: file ? file : "",
    }));
    const reader = new FileReader();
    reader.onload = (function (theFile) {
      return function (e) {
        const span = employee
          ? document.getElementById("logo")
          : document.createElement("span");
        span.innerHTML = [
          '<img style="width: 170px; height: 170px; border-radius: 50%;" title="',
          escape(theFile.name),
          '" src="',
          e.target.result,
          '" />',
        ].join("");
        !employee && document.getElementById("output").insertBefore(span, null);
      };
    })(file);
    reader.readAsDataURL(file);
  };

  const handleDateSelect = (newValue: Date) => {
    setState((prevState) => ({
      ...prevState,
      dateOfBirth: newValue,
    }));
  };

  const handleChecked = (name: string) => {
    setState((prevState) => ({
      ...prevState,
      [name]: !state[name],
    }));
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement> | SelectChangeEvent
  ) => {
    setState((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const handleChangeArray = (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const { name, value } = event.target;
    const arrayCopy = [...state[name]];
    arrayCopy[index] = value;
    setState((prevState) => ({
      ...prevState,
      [name]: arrayCopy,
    }));
  };

  const handleChangePhone = (
    event: { target: { name: string; value: string } },
    index: number
  ) => {
    phonesCopy[index] = event.target.value;
    setState((prevState) => ({
      ...prevState,
      phones: phonesCopy,
    }));
  };

  const addEmployee = () => {
    subordinatesCopy.push("");
    setState((prevState) => {
      return { ...prevState, subordinates: subordinatesCopy };
    });
  };

  const removeEmployee = (index: number) => {
    subordinatesCopy.length > 1
      ? subordinatesCopy.splice(index, 1)
      : (subordinatesCopy[0] = "");
    setState((prevState) => {
      return { ...prevState, subordinates: subordinatesCopy };
    });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("state", state);
    const formData = new FormData();
    Object.keys(state).forEach((key) => {
      if (key !== "phones") {
        formData.append(key, state[key]);
      }
    });
    state.phones.forEach((phone) => formData.append("phones", phone));
    onSubmit(formData);
  };

  const cancelHandler = () => {
    if (!employee) {
      document.getElementById("output").innerHTML = "";
      return setState(initEmployee);
    }
    const span = document.getElementById("logo");
    span.innerHTML = [
      '<img style="width: 170px; height: 170px; border-radius: 50%;" src=',
      apiURL + "/uploads/" + employee.avatar,
      " />",
    ].join("");
    setState(initEmployee);
  };

  const alertCloseHandler = async () => {
    Router.push(`/company/${companyId}/employees`);
    await dispatch(setEmployeeData(null));
  };

  return (
    <form onSubmit={handleSubmit} className={styles.wrapper}>
      <AvatarInfo
        state={state}
        employee={employee}
        handleFileChange={handleFileChange}
        handleChecked={handleChecked}
      />
      <div className={styles.wrapForms}>
        <GeneralInfo
          state={state}
          handleDateSelect={handleDateSelect}
          handleChange={handleChange}
          handleChangePhone={handleChangePhone}
        />
        <PositionInfo state={state} handleChange={handleChange} />
        <SubordinatesInfo
          state={state}
          initEmployee={initEmployee}
          subordinatesWithoutFirst={subordinatesWithoutFirst}
          handleChangeArray={handleChangeArray}
          addEmployee={addEmployee}
          removeEmployee={removeEmployee}
        />
        <TypesOfRequestsInfo state={state} handleChange={handleChange} />
        <div className={styles.wrapCheckBox}>
          <CheckBox
            label="Отправить на почту новый пароль"
            checked={state.sendPassword}
            onChange={() => handleChecked("sendPassword")}
          />
        </div>
        {employeeData && (
          <Alert onClose={alertCloseHandler}>{employeeData?.message}</Alert>
        )}
        <FormButtonGroup cancelHandler={cancelHandler} />
      </div>
    </form>
  );
};
export default EmployeeForm;
