import { getFullNamesWithId } from "../../../../../../utils/functions";
import { IUser } from "../../../../../../models/IUser";
import SelectWithId from "../../../../ComponentForms/SimpleSelect/SelectWithId";
import { SyntheticEvent } from "react";
import CheckMark from "../../../../../Buttons/CircleButtons/CheckMark";
import Remove from "../../../../../Buttons/CircleButtons/Remove";
import { Employee, TaskInit } from "../../../../../../models/ITask";
import styles from "../style.module.scss";

interface ObserversInfoProps {
  state: TaskInit;
  observer: Employee;
  observersCopy: Employee[];
  observerHandleChange: (
    event: SyntheticEvent<Element, Event>,
    value: { label: string; id: string }
  ) => void;
  addObserver: () => void;
  removeObserver: (index: number) => void;
  employeesOfCompany: IUser[];
}

const ObserversInfo: React.FC<ObserversInfoProps> = ({
  state,
  observer,
  observersCopy,
  addObserver,
  removeObserver,
  observerHandleChange,
  employeesOfCompany,
}) => {
  return (
    <div className={styles.wrapInfo}>
      <h2>Наблюдатели</h2>
      {!observersCopy.length ? (
        <div className={styles.rowEnd}>
          <SelectWithId
            id="observers"
            label="Добавить сотрудника"
            placeholder="Выберите из списка..."
            required
            options={getFullNamesWithId(employeesOfCompany)}
            name="observers"
            value={observer}
            onChange={(e, value) => observerHandleChange(e, value)}
            width={450}
          />
          <CheckMark onClick={addObserver} />
        </div>
      ) : (
        <>
          <div className={styles.rowEnd}>
            <SelectWithId
              id="observers"
              label="Добавить сотрудника"
              placeholder="Выберите из списка..."
              required
              options={getFullNamesWithId(employeesOfCompany)}
              name="observers"
              value={observer}
              onChange={(e, value) => observerHandleChange(e, value)}
              width={450}
            />
            <CheckMark onClick={addObserver} />
          </div>
          {observersCopy.map((observer, index) => (
            <div className={styles.rowEnd} key={index}>
              <SelectWithId
                id="observers"
                placeholder="Выберите из списка..."
                required
                options={getFullNamesWithId(employeesOfCompany)}
                name="observers"
                value={state.observers[index]}
                onChange={(e, value) => observerHandleChange(e, value)}
                width={450}
                mb={0}
              />
              <Remove onClick={() => removeObserver(index)} />
            </div>
          ))}
        </>
      )}
    </div>
  );
};
export default ObserversInfo;
