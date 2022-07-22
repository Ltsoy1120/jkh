import React, { useState } from "react";
import MainLayout from "../../../components/MainLayout/MainLayout";
import ContractTable from "../../../components/Tables/ControlObject/contractTables/ContractTable";
import Button from "../../../components/Buttons/Button/Button";
import { SimpleInput } from "../../../components/Forms/SimpleInput/SimpleInput";
import { SimpleSelect } from "../../../components/Forms/SimpleSelect/SimpleSelect";
import classes from "../../../styles/filter.module.scss";
import FormHelperText from "@mui/material/FormHelperText";
import { DateSelect } from "../../../components/DateSelect/DateSelect";
import { ResetFilter } from "../../../components/Buttons/ResetFilter/ResetFilter";
import Panel from "../../../ui/Panel/Panel";
import BtnWrapper from "../../../components/BtnWrapper/BtnWrapper";

export default function Home() {
  const [valueDate, setValueDate] = useState(new Date());

  return (
    <React.Fragment>
      <MainLayout
        breadcrumbs="Объекты управления / Договоры / Перечень договоров"
        title="Договоры"
        mainTitle="Договоры"
      >
        <BtnWrapper>
          <Button bcg={false}>Добавить новый договор</Button>
        </BtnWrapper>

        <Panel>
          <div className={`flex flex-col gap-4`}>
            <div className={`flex gap-4`}>
              <SimpleInput size="small" placeholder="Введите данные" label="Номер договора" />
              <SimpleSelect placeholder="Выберите из списка..." size="small" title="Статус" />
              <SimpleInput size="small" placeholder="Введите данные" label="Название" />
              <div className={classes.rightBlock}>
                <Button bcg={true}>Найти</Button>
                <ResetFilter />
              </div>
            </div>

            <div className={`flex flex-wrap gap-4 ${classes.secondRow}`}>
              <div>
                <FormHelperText>Дата заключения договора</FormHelperText>
                <DateSelect onChange={setValueDate} value={valueDate} />
              </div>
              <div>
                <FormHelperText>Дата расторжения договора</FormHelperText>
                <DateSelect onChange={setValueDate} value={valueDate} />
              </div>
              <div className={classes.thirdRow}>
                <SimpleInput size="big" placeholder="Введите данные" label="Объект управления" />
              </div>
            </div>
          </div>
        </Panel>
        <ContractTable />
      </MainLayout>
    </React.Fragment>
  );
}
