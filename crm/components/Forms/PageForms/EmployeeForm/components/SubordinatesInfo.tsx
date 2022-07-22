import Input from "../../../ComponentForms/Input";
import { EmployeeData } from "../../../../../models/IUser";
import Remove from "../../../../Buttons/CircleButtons/Remove";
import Plus from "../../../../Buttons/CircleButtons/Plus";
import styles from "../style.module.scss";

interface SubordinatesInfoProps {
  state: EmployeeData;
  initEmployee: EmployeeData;
  subordinatesWithoutFirst: string[];
  handleChangeArray: (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => void;
  addEmployee: () => void;
  removeEmployee: (index: number) => void;
}

const SubordinatesInfo: React.FC<SubordinatesInfoProps> = ({
  state,
  initEmployee,
  subordinatesWithoutFirst,
  handleChangeArray,
  addEmployee,
  removeEmployee,
}) => {
  return (
    <>
      <h2>Подчиненные струдники</h2>
      <div className={styles.wrap}>
        {initEmployee.subordinates[0] ? (
          <div className={styles.subordinates}>
            {initEmployee.subordinates.map((subordinate, index: number) => (
              <Input
                label="ФИО"
                type="text"
                id="subordinates"
                name="subordinates"
                key={index}
                value={state.subordinates[index]}
                onChange={(e) => handleChangeArray(e, index)}
                placeholder="Введите данные..."
                mr={20}
                width={455}
              >
                <Remove onClick={() => removeEmployee(index)} />
              </Input>
            ))}
            <Plus onClick={addEmployee} />
          </div>
        ) : (
          <div className={styles.subordinates}>
            <Input
              label="ФИО"
              type="text"
              id="subordinates"
              name="subordinates"
              value={state.subordinates[0]}
              onChange={(e) => handleChangeArray(e, 0)}
              placeholder="Введите данные..."
              mr={20}
              width={455}
            >
              <Remove onClick={() => removeEmployee(0)} />
            </Input>
            {subordinatesWithoutFirst &&
              subordinatesWithoutFirst.map((subordinate, index) => (
                <Input
                  label="ФИО"
                  type="text"
                  id="subordinates"
                  name="subordinates"
                  key={index}
                  value={subordinate}
                  onChange={(e) => handleChangeArray(e, index + 1)}
                  placeholder="Введите данные..."
                  mr={20}
                  width={455}
                >
                  <Remove onClick={() => removeEmployee(index + 1)} />
                </Input>
              ))}
            <Plus onClick={addEmployee} />
          </div>
        )}
      </div>
    </>
  );
};
export default SubordinatesInfo;
