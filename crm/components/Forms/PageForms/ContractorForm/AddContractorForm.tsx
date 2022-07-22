import { SelectChangeEvent } from "@mui/material";
import { useState } from "react";
import { apiURL } from "../../../../config";
import Button from "../../../Buttons/Button";
import GeneralInfo from "./components/GeneralInfo";
import HeadInfo from "./components/HeadInfo";
import LogoInfo from "./components/LogoInfo";
import {
  ContractorData,
  HeadData,
  IContractor,
} from "../../../../models/IContractor";
import { getError } from "../../../../store/actions/companyActions";
import { useAppSelector } from "../../../../store/hooks";
import styles from "./style.module.scss";
import Link from "next/link";
import FormButtonGroup from "../../../Buttons/FormButtonGroup";

interface AddContractorFormProps {
  initContractor: ContractorData;
  initHead: HeadData;
  contractor?: IContractor;
  onSubmit: (formData: FormData, head: HeadData) => void;
  companyId: string;
}

const AddContractorForm: React.FC<AddContractorFormProps> = ({
  onSubmit,
  contractor,
  initContractor,
  initHead,
  companyId,
}) => {
  const error = useAppSelector(getError());
  console.log(error);
  const [state, setState] = useState<ContractorData>(initContractor);
  const [head, setHead] = useState<HeadData>(initHead);
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

  const handleHeadChange = (
    event: React.ChangeEvent<HTMLInputElement> | SelectChangeEvent
  ) => {
    setHead((prevState) => ({
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

  const handleChangeHeadPhone = (
    event: { target: { name: string; value: string } },
    index: number
  ) => {
    const headPhonesCopy = [...head.phones];
    headPhonesCopy[index] = event.target.value;
    setHead((prevState) => ({
      ...prevState,
      phones: headPhonesCopy,
    }));
  };

  const addPhone = () => {
    phonesCopy.push("");
    setState((prevState) => {
      return { ...prevState, phones: phonesCopy };
    });
  };

  const addHeadPhone = () => {
    const headPhonesCopy = [...head.phones];
    headPhonesCopy.push("");
    setHead((prevState) => {
      return {
        ...prevState,
        phones: headPhonesCopy,
      };
    });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData();
    Object.keys(state).forEach((key) => {
      if (key !== ("phones" || "companies")) {
        formData.append(key, state[key]);
      }
    });
    state.phones.forEach((phone) => formData.append("phones", phone));
    state.companies.forEach((company) => formData.append("companies", company));
    onSubmit(formData, head);
  };

  const cancelHandler = () => {
    if (!contractor) {
      document.getElementById("output").innerHTML = "";
      console.log("initHead", initHead);
      setHead(initHead);
      setState(initContractor);
      return;
    }
    const span = document.getElementById("logo");
    span.innerHTML = [
      '<img style="width: 170px; height: 170px; border-radius: 50%;" src=',
      apiURL + "/uploads/" + contractor.logo,
      " />",
    ].join("");
    setHead(initHead);
    setState(initContractor);
  };
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
          error={error}
          state={state}
          contractor={contractor}
          initContractor={initContractor}
          handleChange={handleChange}
          handleChangePhone={handleChangePhone}
          addPhone={addPhone}
        />
        <HeadInfo
          head={head}
          contractor={contractor}
          handleChange={handleHeadChange}
          handleChangePhone={handleChangeHeadPhone}
          addPhone={addHeadPhone}
        />
        <FormButtonGroup href={`/company/${companyId}/contractors`} />
      </div>
    </form>
  );
};
export default AddContractorForm;
