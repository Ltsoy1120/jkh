import React, { useState } from "react";
import MainLayout from "../../components/MainLayout/MainLayout";
import BtnWrapper from "../../components/BtnWrapper/BtnWrapper";
import Link from "next/link";
import Button from "../../components/Buttons/Button/Button";
import { TaskTable } from "../../components/Tables/TaskTable/TaskTable";
import CustomTabs from "../../components/Tabs/CustomTabs";
import Panel from "../../ui/Panel/Panel";
import FormHelperText from "@mui/material/FormHelperText";
import { DateSelect } from "../../components/DateSelect/DateSelect";
import InputLabel from "../../components/Forms/InputLabel/InputLabel";
import classes from "../../styles/filter.module.scss";
import { SimpleSelect } from "../../components/Forms/SimpleSelect/SimpleSelect";
import { ResetFilter } from "../../components/Buttons/ResetFilter/ResetFilter";

const tabLinks = [
  {
    name: "Я создал",
    href: "",
  },
  {
    name: "Я исполнитель",
    href: "",
  },
  {
    name: "Я наблюдатель",
    href: "",
  },
  {
    name: "Все задачи",
    href: "",
  },
];

const testType = [
  { text: "Тип1", id: 1 },
  { text: "Тип2", id: 2 },
  { text: "Тип3", id: 3 },
];

const testPriority = [
  { text: "Приоритет1", id: 1 },
  { text: "Приоритет2", id: 2 },
  { text: "Приоритет3", id: 3 },
];

export default function Home({ title }) {
  const [valueDate, setValueDate] = useState(new Date());
  return (
    <React.Fragment>
      <MainLayout breadcrumbs="Задачи / Список задач" title="Задачи" mainTitle="Список задач">
        <BtnWrapper>
          <Link href="/task">
            <a>
              <Button>Добавить задачу</Button>
            </a>
          </Link>
        </BtnWrapper>
        <CustomTabs tabLinks={tabLinks} />
        <Panel>
          <div className={`flex flex-col`}>
            <div className={classes.wrapHistory}>
              <div>
                <FormHelperText>Дата создания</FormHelperText>
                <DateSelect onChange={setValueDate} value={valueDate} />
              </div>
              <div>
                <FormHelperText>Дедлайн</FormHelperText>
                <DateSelect onChange={setValueDate} value={valueDate} />
              </div>
              <InputLabel label="Название" type="text" id="nameTask" placeholder="Введите данные..." width={265} />
              <div className={classes.rightBlock}>
                <Button bcg={true}>Найти</Button>
                <ResetFilter />
              </div>
            </div>

            <div className={`flex ${classes.secondRow} ${classes.secondRow}`}>
              <InputLabel
                label="Номер обращения"
                type="text"
                id="numberAppeals"
                placeholder="Введите данные..."
                width={265}
              />
              <SimpleSelect width={265} title="Тип задачи" placeholder="Выбирите из списка..." data={testType} />

              <SimpleSelect width={265} title="Приоритет" placeholder="Выбирите из списка..." data={testPriority} />
            </div>

            <div className={`flex ${classes.thirdRow} ${classes.thirdRow}`}>
              <InputLabel
                label="Наблюдатель (ФИО, E-mail, номер тел +7)"
                type="text"
                id="fullObserverOne"
                placeholder="Введите данные..."
                width={265}
              />
              <InputLabel
                label="Наблюдатель (ФИО, E-mail, номер тел +7)"
                type="text"
                id="fullObserverTwo"
                placeholder="Введите данные..."
                width={265}
              />
            </div>
          </div>
        </Panel>

        <TaskTable />
      </MainLayout>
    </React.Fragment>
  );
}
