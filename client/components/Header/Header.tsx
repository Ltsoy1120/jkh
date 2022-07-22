import { useRouter } from "next/router";
import styles from "./Header.module.scss";
import Link from "next/link";
import CompanyLinks from "./Links/CompanyLinks/CompanyLinks";
import ReceptionOfCitizens from "./Links/ReceptionOfCitizens/ReceptionOfCitizens";
import { useAppSelector } from "../../src/store/hooks";

const Header: React.FC = () => {
  const router = useRouter();
  const userData = useAppSelector(state => state.users.userData);
  // console.log("userData", userData);
  return (
    <header className={styles.header}>
      <div className={styles.nav}>
        {router.pathname.indexOf("/company") !== -1 ? (
          <CompanyLinks />
        ) : router.pathname.indexOf("/requests") !== -1 ? (
          <Link href={"/requests"}>
            <a>Мои заявки</a>
          </Link>
        ) : router.pathname.indexOf("/appeals") !== -1 ? (
          <Link href={"/appeals"}>
            <a>Мои Обращения</a>
          </Link>
        ) : router.pathname.indexOf("/newappeal") !== -1 ? (
          <Link href={"/appeals"}>
            <a>Мои Обращения</a>
          </Link>
        ) : router.pathname.indexOf("/appeal/1") !== -1 ? (
          <Link href={"/appeals"}>
            <a>Мои Обращения</a>
          </Link>
        ) : router.pathname.indexOf("/visithistory") !== -1 ? (
          <Link href={"/visithistory"}>
            <a>История приёма</a>
          </Link>
        ) : router.pathname.indexOf("/receipts") !== -1 ? (
          <ReceptionOfCitizens />
        ) : router.pathname.indexOf("/receipthistory") !== -1 ? (
          <ReceptionOfCitizens />
        ) : router.pathname.indexOf("/devices") !== -1 ? (
          <Link href={"/devices"}>
            <a>Приборы учёта</a>
          </Link>
        ) : router.pathname.indexOf("/dashboard") !== -1 ? (
          <Link href={"/dashboard"}>
            <a>Моя компания</a>
          </Link>
        ) : router.pathname.indexOf("/notifications") !== -1 ? (
          <Link href={"/notifications"}>
            <a>Уведомления</a>
          </Link>
        ) : router.pathname.indexOf("/newvisit") !== -1 ? (
          <Link href={"/newvisit"}>
            <a>Запись на приём</a>
          </Link>
        ) : router.pathname.indexOf("/newdataelect") !== -1 ? (
          <Link href={"/newdataelect"}>
            <a>Мои приборы учёта</a>
          </Link>
        ) : router.pathname.indexOf("/newdatawater") !== -1 ? (
          <Link href={"/newdatawater"}>
            <a>Мои приборы учёта</a>
          </Link>
        ) : router.pathname.indexOf("/appeal/1") !== -1 ? (
          <Link href={"/appeal/1"}>
            <a>Обращение</a>
          </Link>
        ) : router.pathname.indexOf("/request/1") !== -1 ? (
          <Link href={"/request/1"}>
            <a>Заявка</a>
          </Link>
        ) : router.pathname.indexOf("/newrequest") !== -1 ? (
          <Link href={"/newrequest"}>
            <a>Новая заявка</a>
          </Link>
        ) : (
          ""
        )}

        <div className={styles.wrap}>
          {userData && (
            <div className={styles.navinfo}>
              <span className={styles.username}>
                {userData.lastName} {userData.name}
              </span>
              <span className={styles.userinfo}>
                {userData.address} Л/С {userData.account}
              </span>
            </div>
          )}
          <Link href="/logout">
            <img src="../../../exit.svg" />
          </Link>
        </div>
      </div>
    </header>
  );
};
export default Header;
