import { SelectChangeEvent } from "@mui/material";
import { useState } from "react";
import { apiURL } from "../../../../config";
import GeneralInfo from "./components/GeneralInfo";
import LogoInfo from "./components/LogoInfo";
import { ContractorData, IContractor } from "../../../../models/IContractor";
import styles from "./style.module.scss";
import FormButtonGroup from "../../../Buttons/FormButtonGroup";

interface ContractorFormProps {
  initContractor: ContractorData;
  contractor?: IContractor;
  onSubmit: (formData: FormData) => void;
  companyId: string;
}

const ContractorForm: React.FC<ContractorFormProps> = ({
  onSubmit,
  contractor,
  initContractor,
  companyId,
}) => {
  const [state, setState] = useState<ContractorData>(initContractor);
  const phonesCopy = [...state.phones];

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files[0];
    setState((prevState) => ({
      ...prevState,
      [e.target.name]: file ? file : "",
    }));
    const reader = new FileReader();
    reader.onload = (function (theFile) {
      return function (e) {
        const span = contractor
          ? document.getElementById("logo")
          : document.createElement("span");
        span.innerHTML = [
          '<img style="width: 170px; height: 170px; border-radius: 50%;" title="',
          escape(theFile.name),
          '" src="',
          e.target.result,
          '" />',
        ].join("");
        !contractor &&
          document.getElementById("output").insertBefore(span, null);
      };
    })(file);
    reader.readAsDataURL(file);
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

  const addPhone = () => {
    phonesCopy.push("");
    setState((prevState) => {
      return { ...prevState, phones: phonesCopy };
    });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData();
    Object.keys(state).forEach((key) => {
      if (key !== "phones") {
        formData.append(key, state[key]);
      }
    });
    state.phones.forEach((phone) => formData.append("phones", phone));
    onSubmit(formData);
  };

  // const cancelHandler = () => {
  //   if (!contractor) {
  //     document.getElementById("output").innerHTML = "";
  //     return setState(initContractor);
  //   }
  //   const span = document.getElementById("logo");
  //   span.innerHTML = [
  //     '<img style="width: 170px; height: 170px; border-radius: 50%;" src=',
  //     apiURL + "/uploads/" + contractor.logo,
  //     " />",
  //   ].join("");
  //   setState(initContractor);
  // };

  return (
    <form onSubmit={handleSubmit} className={styles.wrapper}>
      <LogoInfo
        state={state}
        contractor={contractor}
        handleFileChange={handleFileChange}
        handleChecked={handleChecked}
      />
      <div className={styles.wrapForms}>
        <GeneralInfo
          state={state}
          contractor={contractor}
          initContractor={initContractor}
          handleChange={handleChange}
          handleChangePhone={handleChangePhone}
          addPhone={addPhone}
        />
        <FormButtonGroup href={`/company/${companyId}/contractors`} />
      </div>
    </form>
  );
};
export default ContractorForm;
