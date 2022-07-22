import { useState } from "react";
import Button from "../../../../Buttons/Button";
import Input from "../../../ComponentForms/Input";
import Remove from "../../../../Buttons/CircleButtons/Remove";
import Plus from "../../../../Buttons/CircleButtons/Plus";
import styles from "./style.module.scss";

interface TypesOfWorkFormProps {
  initTypesOfWork: string[];
  onSubmit: (typesOfWorkData: string[]) => void;
}

const TypesOfWorkForm: React.FC<TypesOfWorkFormProps> = ({
  onSubmit,
  initTypesOfWork,
}) => {
  const [typesOfWork, setTypesOfWork] = useState(initTypesOfWork);
  const typesOfWorkCopy = [...typesOfWork];
  const typesOfWorkWithoutFirst = [...typesOfWork].slice(1);

  const handleChangeArray = (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    typesOfWorkCopy[index] = event.target.value;
    setTypesOfWork(typesOfWorkCopy);
  };

  const addTypeOfWork = () => {
    typesOfWorkCopy.push("");
    setTypesOfWork(typesOfWorkCopy);
  };

  const removeTypeOfWork = (index: number) => {
    typesOfWorkCopy.length > 1
      ? typesOfWorkCopy.splice(index, 1)
      : (typesOfWorkCopy[0] = "");
    setTypesOfWork(typesOfWorkCopy);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("typesOfWork", typesOfWork);
    onSubmit(typesOfWork);
  };

  const cancelHandler = () => {
    setTypesOfWork(initTypesOfWork);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.wrapper}>
      <div className={styles.wrap}>
        {typesOfWorkCopy[0] ? (
          <>
            {typesOfWorkCopy.map((typeOfWork, index: number) => (
              <Input
                label={(index + 1).toString()}
                type="text"
                name="typesOfWork"
                key={index}
                value={typesOfWork[index]}
                onChange={(e) => handleChangeArray(e, index)}
                placeholder="Введите данные..."
                mr={20}
                width={455}
              >
                <Remove onClick={() => removeTypeOfWork(index)} />
              </Input>
            ))}
            <Plus onClick={addTypeOfWork} mb={20} />
          </>
        ) : (
          <div className={styles.column}>
            <h2>Добавьте все виды работ, которые вы можете предоставить</h2>
            <Input
              label="1"
              type="text"
              name="typesOfWork"
              value={typesOfWork[0]}
              onChange={(e) => handleChangeArray(e, 0)}
              placeholder="Введите данные..."
              mr={20}
              width={455}
            >
              <Remove onClick={() => removeTypeOfWork(0)} />
            </Input>
            {typesOfWorkWithoutFirst &&
              typesOfWorkWithoutFirst.map((typeOfWork, index) => (
                <Input
                  label={(index + 2).toString()}
                  type="text"
                  name="typesOfWork"
                  key={index}
                  value={typeOfWork}
                  onChange={(e) => handleChangeArray(e, index + 1)}
                  placeholder="Введите данные..."
                  mr={20}
                  width={455}
                >
                  <Remove onClick={() => removeTypeOfWork(index + 1)} />
                </Input>
              ))}
            <Plus onClick={addTypeOfWork} mb={20} />
          </div>
        )}
      </div>
      <div className={styles.wrapButtons}>
        <Button bg="green" mr={30} width={150} type="submit">
          Сохранить
        </Button>
        <Button type="button" onClick={cancelHandler} width={150}>
          Отмена
        </Button>
      </div>
    </form>
  );
};
export default TypesOfWorkForm;
