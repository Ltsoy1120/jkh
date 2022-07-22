import React from "react";
import MainLayout from "../../../components/MainLayout/MainLayout";
import TabsReceptionOfCitizens from "../../../components/Tabs/TabsReceptionOfCitizens/TabsReceptionOfCitizens";
import Link from "next/link";
import Button from "../../../components/Buttons/Button/Button";
import BtnWrapper from "../../../components/BtnWrapper/BtnWrapper";
import { AdmissionTopicsTable } from "../../../components/Tables/AdmissionTopicsTable/AdmissionTopicsTable";

export default function Home() {
  return (
    <React.Fragment>
      <MainLayout breadcrumbs="Прием граждан / Настройки" title="Настройки" mainTitle="Настройки">
        <BtnWrapper>
          <Link href="/receptionOfCitizens/admissionTopics/addAdmissionTopics">
            <a>
              <Button>Добаить новую тему приема</Button>
            </a>
          </Link>
        </BtnWrapper>
        <TabsReceptionOfCitizens />
        <AdmissionTopicsTable />
      </MainLayout>
    </React.Fragment>
  );
}
