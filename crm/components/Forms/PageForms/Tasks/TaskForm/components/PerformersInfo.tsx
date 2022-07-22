import { getFullNamesWithId } from "../../../../../../utils/functions";
import { IUser } from "../../../../../../models/IUser";
import SelectWithId from "../../../../ComponentForms/SimpleSelect/SelectWithId";
import { SyntheticEvent } from "react";
import CheckMark from "../../../../../Buttons/CircleButtons/CheckMark";
import Remove from "../../../../../Buttons/CircleButtons/Remove";
import styles from "../style.module.scss";
import { Employee, TaskInit } from "../../../../../../models/ITask";

interface PerformersInfoProps {
  state: TaskInit;
  performer: Employee;
  performersCopy: Employee[];
  performerHandleChange: (
    event: SyntheticEvent<Element, Event>,
    value: { label: string; id: string }
  ) => void;
  addPerformer: () => void;
  removePerformer: (index: number) => void;
  employeesOfCompany: IUser[];
}

const PerformersInfo: React.FC<PerformersInfoProps> = ({
  state,
  performer,
  performersCopy,
  addPerformer,
  removePerformer,
  performerHandleChange,
  employeesOfCompany,
}) => {
  return (
    <div style={{ marginRight: 30 }}>
      <h2>Исполнители</h2>
      {!performersCopy.length ? (
        <div className={styles.row}>
          <SelectWithId
            id="performers"
            label="Добавить сотрудника"
            placeholder="Выберите из списка..."
            required
            options={getFullNamesWithId(employeesOfCompany)}
            name="performers"
            value={performer}
            onChange={(e, value) => performerHandleChange(e, value)}
            width={450}
          />
          <CheckMark onClick={addPerformer} />
        </div>
      ) : (
        <>
          <div className={styles.row}>
            <SelectWithId
              id="performers"
              label="Добавить сотрудника"
              placeholder="Выберите из списка..."
              required
              options={getFullNamesWithId(employeesOfCompany)}
              name="performers"
              value={performer}
              onChange={(e, value) => performerHandleChange(e, value)}
              width={450}
            />
            <CheckMark onClick={addPerformer} />
          </div>
          {performersCopy.map((performer, index) => (
            <div className={styles.row} key={index}>
              <SelectWithId
                id="performers"
                placeholder="Выберите из списка..."
                required
                options={getFullNamesWithId(employeesOfCompany)}
                name="performers"
                value={state.performers[index]}
                onChange={(e, value) => performerHandleChange(e, value)}
                width={450}
              />
              <Remove onClick={() => removePerformer(index)} />
            </div>
          ))}
        </>
      )}
    </div>
  );
};
export default PerformersInfo;
