import { useState } from "react";
import Button from "../../../../Buttons/Button";
import { HouseData } from "../../../../../models/IHouse";
import HouseInfo from "./components/HouseInfo";
import ControlTypeInfo from "./components/ControlTypeInfo";
import DocsInfo from "./components/DocsInfo";
import PhotosInfo from "./components/PhotosInfo";
import styles from "./style.module.scss";

interface HouseFormProps {
  initHouse: HouseData;
  edit?: boolean;
  onSubmit: (initHouse: FormData | HouseData) => void;
}

const HouseForm: React.FC<HouseFormProps> = ({ initHouse, edit, onSubmit }) => {
  const [state, setState] = useState<HouseData>(initHouse);

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

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("state", state);
    if (!edit) {
      return onSubmit(state);
    }
    const formData = new FormData();
    Object.keys(state).forEach((key) => {
      if (key !== "photos" && key !== "docs") {
        formData.append(key, state[key]);
      }
    });
    state.photos.forEach((photo) => formData.append("photos", photo));
    state.docs.forEach((doc) => formData.append("docs", doc));
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.wrapper}>
      <HouseInfo edit state={state} handleChange={handleChange} />
      <ControlTypeInfo
        edit
        state={state}
        handleChange={handleChange}
        handleDateSelect={handleDateSelect}
      />

      {edit && (
        <>
          <DocsInfo
            state={state}
            removeFile={removeFile}
            handleFileChange={handleFileChange}
          />
          <PhotosInfo
            state={state}
            removeFile={removeFile}
            handleFileChange={handleFileChange}
          />
        </>
      )}
      <div className={styles.wrapButtons}>
        <Button bg="green" width={150} mr={30}>
          Сохранить
        </Button>
        <Button width={150}>Отмена</Button>
      </div>
    </form>
  );
};
export default HouseForm;
