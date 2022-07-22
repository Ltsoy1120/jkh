import React from "react";
import MeteringDevicesTables from "../../../components/Tables/MeteringDevicesTables/MeteringDevicesTables";
import MainLayout from "../../../components/MainLayout/MainLayout";
import Link from "next/link";
import Button from "../../../components/Buttons/Button/Button";
import Panel from "../../../ui/Panel/Panel";
import InputLabel from "../../../components/Forms/InputLabel/InputLabel";
import classes from "../../../styles/filter.module.scss";
import { ResetFilter } from "../../../components/Buttons/ResetFilter/ResetFilter";
import BtnWrapper from "../../../components/BtnWrapper/BtnWrapper";

export default function Home() {
  return (
    <React.Fragment>
      <MainLayout breadcrumbs="Объекты управления / Приборы учета" title="Приборы учета" mainTitle="Приборы учета">
        <BtnWrapper>
          <Link href="/">
            <a>
              <Button>Помещения</Button>
            </a>
          </Link>
          <Link href="/">
            <a>
              <Button>Список помещений</Button>
            </a>
          </Link>
        </BtnWrapper>

        <Panel>
          <div className={`flex`}>
            <InputLabel
              label="ФИО"
              type="text"
              id="fullName"
              placeholder="Введите данные..."
              margin_right={20}
              width={265}
            />
            <InputLabel
              label="Тип пользователя"
              type="text"
              id="userType"
              placeholder="Введите данные..."
              margin_right={20}
              width={265}
            />
            <InputLabel
              label="Дата регистрации"
              type="text"
              id="registrationDate"
              placeholder="Введите данные..."
              width={265}
            />
            <div className={classes.rightBlock}>
              <Button bcg={true}>Найти</Button>
              <ResetFilter />
            </div>
          </div>
        </Panel>

        <MeteringDevicesTables />
      </MainLayout>
    </React.Fragment>
  );
}
