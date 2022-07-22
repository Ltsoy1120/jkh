import { useRouter } from "next/router";
import styles from "./Header.module.scss";
import CompanyLinks from "./Links/CompanyLinks/CompanyLinks";
import ControlObjectsLinks from "./Links/ControlObjectsLinks/ControlObjectsLinks";
import ReceptionOfCitizens from "./Links/ReceptionOfCitizens/ReceptionOfCitizens";
import Telephony from "./Links/Telephony/Telephony";
import NotificationsLinks from "./Links/NotificationsLinks/NotificationsLinks";
import { ListTask } from "./Links/ListTask/ListTask";
import { AppealsLinks } from "./Links/AppealsLinks/AppealsLinks";
import { RentLinks } from "./Links/RentLinks/RentLinks";
import { DebtorsLinks } from "./Links/Debtors/DebtorsLinks";
import { ControlLinks } from "./Links/ControlLInks/ControlLinks";
import { FinanceLinks } from "./Links/FinanceLinks/FinanceLinks";

export default function Header() {
  const router = useRouter();
  return (
    <header className={styles.header}>
      <div className={styles.nav}>
        {router.pathname.indexOf("/company") !== -1 ? (
          <CompanyLinks />
        ) : router.pathname.indexOf("/controlObjects") !== -1 ? (
          <ControlObjectsLinks />
        ) : router.pathname.indexOf("/receptionOfCitizens") !== -1 ? (
          <ReceptionOfCitizens />
        ) : router.pathname.indexOf("/telephony") !== -1 ? (
          <Telephony />
        ) : router.pathname.indexOf("/notifications") !== -1 ? (
          <NotificationsLinks />
        ) : router.pathname.indexOf("/task") !== -1 ? (
          <ListTask />
        ) : router.pathname.indexOf("/appeals") !== -1 ? (
          <AppealsLinks />
        ) : router.pathname.indexOf("/rent") !== -1 ? (
          <RentLinks />
        ) : router.pathname.indexOf("/control") !== -1 ? (
          <ControlLinks />
        ) : router.pathname.indexOf("/finance") !== -1 ? (
          <FinanceLinks />
        ) : router.pathname.indexOf("/debtors") !== -1 ? (
          <DebtorsLinks />
        ) : (
          ""
        )}

        <div className={styles.wrap}>
          <span>Зилипупкин А.В.</span>
          <img src="../../../exit.svg" />
        </div>
      </div>
    </header>
  );
}
