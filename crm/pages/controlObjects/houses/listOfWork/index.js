import React from "react";
import MainLayout from "../../../../components/MainLayout/MainLayout";

export default function Home() {
  return (
    <React.Fragment>
      <MainLayout
        breadcrumbs="Объекты управления / Дома / Список работ"
        title="Список работ"
        mainTitle="Список работ"
      ></MainLayout>
    </React.Fragment>
  );
}
