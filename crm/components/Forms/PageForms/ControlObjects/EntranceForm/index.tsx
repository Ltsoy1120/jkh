import { useState } from "react";
import { EntranceData } from "../../../../../models/IHouse";
import Input from "../../../ComponentForms/Input";
import SimpleSelect from "../../../ComponentForms/SimpleSelect";
import { conditionsOfEntrance } from "../../../ComponentForms/SimpleSelect/selectOptions";
import { getListYears } from "../../../ComponentForms/SimpleSelect/getSelectOptions";
import styles from "./style.module.scss";
import FormButtonGroup from "../../../../Buttons/FormButtonGroup";

interface EntranceFormProps {
  initEntrance: EntranceData;
  onSubmit: (entrancesData: EntranceData) => void;
}

const EntranceForm: React.FC<EntranceFormProps> = ({
  initEntrance,
  onSubmit,
}) => {
  const [state, setState] = useState<EntranceData>(initEntrance);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const cancelHandler = () => {
    setState(initEntrance);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("state", state);
    onSubmit(state);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.wrapper}>
      <div className={styles.row}>
        <Input
          label="Номер подъезда"
          id="numberOfEntrance"
          name="numberOfEntrance"
          placeholder="Введите данные..."
          value={state.numberOfEntrance}
          onChange={handleChange}
          required
          mr={20}
          mb={0}
          width={265}
        />
        <SimpleSelect
          label="Год постройки"
          id="yearOfConstruction"
          name="yearOfConstruction"
          data={getListYears(1900)}
          value={state.yearOfConstruction}
          onChange={handleChange}
          placeholder="Выберите из списка..."
          width={265}
          mb={0}
        />
      </div>
      <div className={styles.row}>
        <Input
          label="Количество этажей"
          id="numberOfFloors"
          name="numberOfFloors"
          placeholder="Введите данные..."
          value={state.numberOfFloors}
          onChange={handleChange}
          required
          mr={20}
          width={265}
        />
        <Input
          label="Квартиры с-по"
          id="apartmentsFromTo"
          name="apartmentsFromTo"
          placeholder="Введите данные..."
          value={state.apartmentsFromTo}
          onChange={handleChange}
          required
          mr={20}
          width={265}
        />
      </div>
      <SimpleSelect
        label="Состояние подъезда"
        id="conditionOfEntrance"
        name="conditionOfEntrance"
        data={conditionsOfEntrance}
        value={state.conditionOfEntrance}
        onChange={handleChange}
        placeholder="Выберите из списка..."
        width={265}
        mb={50}
      />
      <FormButtonGroup cancelHandler={cancelHandler} />
    </form>
  );
};
export default EntranceForm;
