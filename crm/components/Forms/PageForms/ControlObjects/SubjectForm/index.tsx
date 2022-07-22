import { useState } from "react";
import FormButtonGroup from "../../../../Buttons/FormButtonGroup";
import { SubjectData } from "../../../../../models/ISubject";
import GeneralInfo from "./components/GeneralInfo";
import PassportInfo from "./components/PassportInfo";
import styles from "./style.module.scss";

interface SubjectFormProps {
  initApplication: SubjectData;
  onSubmit: (subjectData: SubjectData) => void;
}

const SubjectForm: React.FC<SubjectFormProps> = ({
  initApplication: initSubject,
  onSubmit,
}) => {
  const [state, setState] = useState<SubjectData>(initSubject);
  const phonesCopy = [...state.phones];
  console.log(state);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const handleDateSelect = (newValue: Date, name: string) => {
    setState((prevState) => ({
      ...prevState,
      [name]: newValue,
    }));
  };

  const handleChangePhone = (
    event: { target: { name: string; value: string } },
    index: number
  ) => {
    if (event.target.name === "phones") {
      phonesCopy[index] = event.target.value;
      setState((prevState) => ({
        ...prevState,
        [event.target.name]: phonesCopy,
      }));
    } else {
      setState((prevState) => ({
        ...prevState,
        [event.target.name]: event.target.value,
      }));
    }
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

  const cancelHandler = () => {
    setState(initSubject);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("state", state);
    onSubmit(state);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.wrap}>
      <GeneralInfo
        state={state}
        handleChange={handleChange}
        handleChangePhone={handleChangePhone}
        addPhone={addPhone}
        removePhone={removePhone}
        handleDateSelect={handleDateSelect}
      />
      <PassportInfo
        state={state}
        handleChange={handleChange}
        handleDateSelect={handleDateSelect}
      />
      <FormButtonGroup cancelHandler={cancelHandler} />
    </form>
  );
};
export default SubjectForm;
