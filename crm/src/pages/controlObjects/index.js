import React from "react";
import MainLayout from "../../components/MainLayout/MainLayout";
import { useRouter } from "next/router";

const pathnameList = {
  home: "/ Дома",
  listHome: "/ Список домов",
};

export default function Home() {
  const router = useRouter();
  return (
    <React.Fragment>
      <MainLayout
        breadcrumbs="Объекты управления / Дома / Список домов"
        title="Объекты управления"
        mainTitle="Список домов"
      />
    </React.Fragment>
  );
}
