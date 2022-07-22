import { SelectChangeEvent } from "@mui/material";
import { useState } from "react";
import { apiURL } from "../../../../config";
import { CompanyData, ICompany } from "../../../../models/ICompany";
import AddLogo from "../../../AddLogo";
import Button from "../../../Buttons/Button";
import Plus from "../../../Buttons/CircleButtons/Plus";
import Remove from "../../../Buttons/CircleButtons/Remove";
import Input from "../../ComponentForms/Input";
import InputMask from "../../ComponentForms/InputMask";
import SimpleSelect from "../../ComponentForms/SimpleSelect";
import { utcData } from "../../ComponentForms/SimpleSelect/selectOptions";
import styles from "./style.module.scss";

interface CompanyFormProps {
  initCompany: CompanyData;
  company?: ICompany;
  onSubmit: (formData: FormData) => void;
}

const CompanyForm: React.FC<CompanyFormProps> = ({
  onSubmit,
  company,
  initCompany,
}) => {
  const [state, setState] = useState<CompanyData>(initCompany);
  const phonesCopy = [...state.phones];
  console.log(state);
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files[0];
    console.log(e.target);

    setState((prevState) => ({
      ...prevState,
      [e.target.name]: file ? file : "",
    }));
    const reader = new FileReader();
    reader.onload = (function (theFile) {
      return function (e) {
        const span = state.logo
          ? document.getElementById("logo")
          : document.createElement("span");
        span.innerHTML = [
          '<img style="width: 170px; height: 170px; border-radius: 50%;" title="',
          escape(theFile.name),
          '" src="',
          e.target.result,
          '" />',
        ].join("");
        !company && document.getElementById("output").insertBefore(span, null);
      };
    })(file);
    reader.readAsDataURL(file);
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

  const removePhone = (index: number) => {
    phonesCopy.splice(index, 1);
    setState((prevState) => {
      return { ...prevState, phones: phonesCopy };
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
    if (!company) {
      document.getElementById("output").innerHTML = "";
      return setState(initCompany);
    }
    const span = document.getElementById("logo");
    span.innerHTML = [
      '<img style="width: 170px; height: 170px; border-radius: 50%;" src=',
      apiURL + "/uploads/" + company.logo,
      " />",
    ].join("");
    setState(initCompany);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.wrapper}>
      <div className={styles.wrapAvatar}>
        <AddLogo name={"logo"} logo={state.logo} onChange={handleFileChange} />
        {company?.logo ? (
          <span id="logo" className={styles.logo}>
            <img src={apiURL + "/uploads/" + company.logo} />
          </span>
        ) : (
          <div
            id="output"
            className={state.logo ? styles.logo : styles.output}
          />
        )}
        <p>Логотип компании</p>
      </div>
      <div className={styles.wrapForms}>
        <Input
          label="Название компании"
          type="text"
          id="nameCompany"
          name="name"
          placeholder="Введите данные..."
          required
          width={550}
          value={state.name}
          onChange={handleChange}
        />
        <Input
          label="Адрес"
          type="text"
          id="address"
          name="address"
          value={state.address}
          onChange={handleChange}
          placeholder="Введите данные..."
          required
          width={550}
        />
        <SimpleSelect
          id="timezone"
          label="Часовой пояс"
          required
          data={utcData}
          placeholder="Выберите из списка"
          name="timezone"
          width={550}
          value={state.timezone}
          onChange={handleChange}
        />
        {state.phones[0] ? (
          <div className={styles.row}>
            {state.phones.map((phone, index: number) => (
              <div className={styles.phones} key={index}>
                <InputMask
                  label="Контактный телефон"
                  id="phones"
                  name="phones"
                  index={index}
                  key={index}
                  value={state.phones[index]}
                  handleChangePhone={(e) => handleChangePhone(e, index)}
                  placeholder="Введите данные..."
                  required
                  mr={20}
                  width={265}
                />
                <Remove onClick={() => removePhone(index)} />
                {index + 1 === state.phones.length && (
                  <Plus onClick={addPhone} />
                )}
              </div>
            ))}
          </div>
        ) : (
          <InputMask
            label="Контактный телефон"
            id="phones"
            name="phones"
            value={state.phones[0]}
            handleChangePhone={(e) => handleChangePhone(e, 0)}
            placeholder="Введите данные..."
            required
            mr={20}
            width={265}
            mb={30}
          />
        )}
        <div className={styles.row}>
          <Input
            label="Домент сайта"
            type="text"
            id="domen"
            name="domen"
            value={state.domen}
            onChange={handleChange}
            placeholder="Введите данные..."
            mr={20}
            width={265}
          />
          <Input
            label="Адрес сайта"
            type="text"
            id="website"
            name="website"
            value={state.website}
            onChange={handleChange}
            placeholder="Введите данные..."
            width={265}
          />
        </div>
        <div className={styles.row}>
          <Button bg="green" mr={30} width={150} type="submit">
            Сохранить
          </Button>
          <Button type="button" width={150} onClick={cancelHandler}>
            Отмена
          </Button>
        </div>
      </div>
    </form>
  );
};
export default CompanyForm;
