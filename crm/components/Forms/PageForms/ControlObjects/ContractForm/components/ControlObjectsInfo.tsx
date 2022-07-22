import Remove from "../../../../../Buttons/CircleButtons/Remove";
import { ContractData } from "../../../../../../models/IContract";
import CheckMark from "../../../../../Buttons/CircleButtons/CheckMark";
import Input from "../../../../ComponentForms/Input";
import styles from "../style.module.scss";

interface ControlObjectsInfoProps {
  state: ContractData;
  controlObject: string;
  controlObjectsCopy: string[];
  addControlObject: () => void;
  controlObjectHandleChange: (
    event: React.ChangeEvent<HTMLInputElement>
  ) => void;
  handleChangeArray: (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => void;
  removeControlObject: (index: number) => void;
}

const ControlObjectsInfo: React.FC<ControlObjectsInfoProps> = ({
  state,
  controlObject,
  controlObjectsCopy,
  addControlObject,
  controlObjectHandleChange,
  handleChangeArray,
  removeControlObject,
}) => {
  return (
    <>
      {!controlObjectsCopy.length ? (
        <div className={styles.row}>
          <Input
            label="Объекты управления"
            id="controlObjects"
            name="controlObjects"
            placeholder="Введите данные..."
            value={controlObject}
            onChange={controlObjectHandleChange}
            mr={20}
            width={480}
          />
          <CheckMark onClick={addControlObject} />
        </div>
      ) : (
        <>
          <div className={styles.row}>
            <Input
              label="Объекты управления"
              id="controlObjects"
              name="controlObjects"
              placeholder="Введите данные..."
              value={controlObject}
              onChange={controlObjectHandleChange}
              mr={20}
              width={480}
            />
            <CheckMark onClick={addControlObject} />
          </div>
          {controlObjectsCopy.map((controlObject, index) => (
            <div className={styles.row} key={index}>
              <Input
                label="Объекты управления"
                id="controlObjects"
                name="controlObjects"
                placeholder="Введите данные..."
                value={state.controlObjects[index]}
                onChange={(e) => handleChangeArray(e, index)}
                mr={20}
                width={480}
              />
              <Remove onClick={() => removeControlObject(index)} />
            </div>
          ))}
        </>
      )}
    </>
  );
};
export default ControlObjectsInfo;
