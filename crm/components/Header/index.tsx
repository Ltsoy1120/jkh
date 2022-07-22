import Link from "next/link";
import { useRouter } from "next/router";
import { useAppSelector } from "../../store/hooks";
import { ExitIcon } from "../icons";
import { AppealsLinks } from "./Links/AppealsLinks";
import CompaniesLinks from "./Links/CompaniesLinks";
import CompanyLinks from "./Links/CompanyLinks";
import { ControlLinks } from "./Links/ControlLinks";
import ControlObjectsLinks from "./Links/ControlObjectsLinks";
import { ReceptionOfCitizensLinks } from "./Links/ReceptionOfCitizensLinks";
import { TasksLinks } from "./Links/TasksLinks";
import styles from "./style.module.scss";

const Header: React.FC = () => {
  const router = useRouter();
  const userData = useAppSelector((state) => state.users.userData);
  const isAdmin = userData?.role === "admin";
  console.log("userData", userData);

  const companyIdForAdmin = useRouter().query.companyId?.toString();
  const companyId = useAppSelector((state) => state.companies.company)?._id;
  const subjectId = useAppSelector((state) => state.subjects.subject)?._id;
  const propertyId = useAppSelector((state) => state.subjects.property)?._id;
  const receptionId = useAppSelector(
    (state) => state.receptions.reception
  )?._id;
  const applicationId = useAppSelector(
    (state) => state.applications.application
  )?._id;

  const adminNav = (
    <>
      {router.pathname.indexOf("/companies") !== -1 ? (
        <CompaniesLinks />
      ) : router.asPath.indexOf(`/company/`) !== -1 ? (
        <CompanyLinks isAdmin={isAdmin} companyId={companyIdForAdmin} />
      ) : router.pathname.indexOf("/controlObjects") !== -1 ? (
        <ControlObjectsLinks />
      ) : router.pathname.indexOf("/receptionOfCitizens") !== -1 ? (
        <ReceptionOfCitizensLinks />
      ) : (
        ""
      )}
    </>
  );

  const nav = (
    <>
      {router.pathname.indexOf("/contractors") !== -1 ? (
        <CompanyLinks companyId={companyId} />
      ) : router.pathname.indexOf("/control/") !== -1 ? (
        <ControlLinks companyId={companyId} applicationId={applicationId} />
      ) : router.pathname.indexOf("/appeals") !== -1 ? (
        <AppealsLinks companyId={companyId} />
      ) : router.pathname.indexOf(`/controlObjects/`) !== -1 ? (
        <ControlObjectsLinks
          companyId={companyId}
          subjectId={subjectId}
          propertyId={propertyId}
        />
      ) : router.pathname.indexOf("/receptionOfCitizens/") !== -1 ? (
        <ReceptionOfCitizensLinks
          companyId={companyId}
          receptionId={receptionId}
        />
      ) : router.pathname.indexOf("/tasks") !== -1 ? (
        <TasksLinks companyId={companyId} />
      ) : router.pathname.indexOf("/company") !== -1 ? (
        <CompanyLinks companyId={companyId} />
      ) : (
        ""
      )}
    </>
  );
  console.log("router.pathname", router.pathname.indexOf("/control") !== -1);

  return (
    <header className={styles.header}>
      <div className={styles.nav}>
        {isAdmin ? adminNav : nav}
        <div className={styles.wrap}>
          {userData && (
            <span className={styles.username}>
              {userData.lastName} {userData.name}
            </span>
          )}
          <Link href="/logout">
            <a>
              <ExitIcon />
            </a>
          </Link>
        </div>
      </div>
    </header>
  );
};
export default Header;
