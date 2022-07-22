import { useState } from "react";
import { ApartmentData } from "../../../../../models/IHouse";
import Input from "../../../ComponentForms/Input";
import SimpleSelect from "../../../ComponentForms/SimpleSelect";
import {
  characteristicsOfApartment,
  typesOfApartment,
} from "../../../ComponentForms/SimpleSelect/selectOptions";
import FormButtonGroup from "../../../../Buttons/FormButtonGroup";
import DateSelect from "../../../ComponentForms/DateSelect";
import AdornmentInput from "../../../ComponentForms/AdornmentInput";
import styles from "./style.module.scss";

interface ApartmentFormProps {
  initApartment: ApartmentData;
  onSubmit: (apartmentData: ApartmentData) => void;
}

const ApartmentForm: React.FC<ApartmentFormProps> = ({
  initApartment,
  onSubmit,
}) => {
  const [state, setState] = useState<ApartmentData>(initApartment);

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

  const cancelHandler = () => {
    setState(initApartment);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(state);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.wrapper}>
      <DateSelect
        label="Дата создания"
        name="createDate"
        value={state.createDate}
        onChange={handleDateSelect}
      />
      <div className={styles.row}>
        <Input
          label="Номер помещения"
          id="numberOfApartment"
          name="numberOfApartment"
          placeholder="Введите данные..."
          value={state.numberOfApartment}
          onChange={handleChange}
          required
          mr={20}
          width={265}
        />
        <Input
          label="Номер подъезда"
          id="numberOfEntrance"
          name="numberOfEntrance"
          placeholder="Введите данные..."
          value={state.numberOfEntrance}
          onChange={handleChange}
          required
          mr={20}
          width={265}
        />
      </div>
      <Input
        label="Кадастровый номер помещения"
        id="cadastralNumber"
        name="cadastralNumber"
        placeholder="Введите данные..."
        value={state.cadastralNumber}
        onChange={handleChange}
        required
        mr={20}
        mb={0}
        width={265}
      />
      <div className={styles.row}>
        <SimpleSelect
          label="Тип помещения"
          id="typeOfApartment"
          name="typeOfApartment"
          data={typesOfApartment}
          value={state.typeOfApartment}
          onChange={handleChange}
          placeholder="Выберите из списка..."
          width={265}
          mr={20}
          mb={0}
        />
        <SimpleSelect
          label="Характеристика помещения"
          id="characteristic"
          name="characteristic"
          data={characteristicsOfApartment}
          value={state.characteristic}
          onChange={handleChange}
          placeholder="Выберите из списка..."
          width={300}
          mb={0}
        />
      </div>
      <div className={styles.row}>
        <AdornmentInput
          label="Общая площадь"
          id="totalArea"
          name="totalArea"
          placeholder="Введите данные..."
          value={state.totalArea}
          onChange={handleChange}
          adornment="м²"
          required
          mr={20}
          width={265}
          mb={50}
        />
        <AdornmentInput
          label="Жилая площадь"
          id="livingArea"
          name="livingArea"
          placeholder="Введите данные..."
          value={state.livingArea}
          onChange={handleChange}
          adornment="м²"
          required
          width={265}
          mb={0}
        />
      </div>
      <FormButtonGroup cancelHandler={cancelHandler} />
    </form>
  );
};
export default ApartmentForm;
