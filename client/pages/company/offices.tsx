import type { NextPage } from 'next'
import * as React from 'react';
import styles from '../../styles/Company.module.css';
import Link from 'next/link';
import MainLayout from '../../components/MainLayout/MainLayout';
import TabsSettingCompany from "../../components/Tabs/TabsSettingCompany/TabsSettingCompany";

const Company: NextPage = () => {

  return (
    <MainLayout title="Компания" mainTitle="Страница компании">

  <div className={styles.content}>
    <div className={styles.titleblock}>
        <h1 className={styles.pagetitle}>
            Просмотр профиля компании
        </h1>
        <span className={styles.breadcrumbs}>
          Моя компания / Просмотр профиля компании
        </span>
    </div>
    <div className={styles.infoblock}>
          <div className={styles.companyimage}>
          </div>
          <div className={styles.companyinfo}>
            <div className={styles.companysname}>
                  <span className={styles.namelabel}>название</span>
                  <h2 className={styles.companyname}>
                      Ук амилен
                  </h2>
              </div>
              <TabsSettingCompany />
              {/* <div className={styles.infotabs}>
                  <div className={styles.labels}>
                      <span className={styles.companyofficesa}>
                          <Link href="/company">Офисы компании</Link>
                      </span>
                      <span className={styles.requisites}>
                            <Link href="/companyinfo">Реквизиты</Link>
                      </span>
                  </div>

              </div> */}
          

              <div className={styles.table}>
                  <div className={styles.tablehead}>
                      <div className={styles.tname}>Название</div>
                      <div className={styles.tadress}>Адрес</div>
                      <div className={styles.tschedule}>График работы</div>
                      <div className={styles.ttel}>Телефон</div>
                  </div>

                  <div className={styles.tableinfo}>
                      <div className={styles.tableitem}>
                          <div className={styles.tname}>Главный</div>
                          <div className={styles.tadress}>г. Воронеж, ул. Перхоровича,<br />д. 11, офис 4</div>
                          <div className={styles.tschedule}>пн-пт<br /> 10:00-17:00</div>
                          <div className={styles.ttel}>+7 (4732) 78-90-87</div>
                      </div>
                      <div className={styles.tableitem}>
                          <div className={styles.tname}>Левобережный</div>
                          <div className={styles.tadress}>г. Воронеж, ул. Лебедева, <br />д. 51, офис 234</div>
                          <div className={styles.tschedule}>пн-пт<br /> 10:00-17:00</div>
                          <div className={styles.ttel}>+7 (4732) 78-90-87</div>
                      </div>
                      <div className={styles.tableitem}>
                          <div className={styles.tname}>Бухгалтерия</div>
                          <div className={styles.tadress}>г. Воронеж, ул. Антонова-Овсеенко, <br />д. 5, корпус 2, офис 109</div>
                          <div className={styles.tschedule}>пн-пт<br /> 10:00-17:00</div>
                          <div className={styles.ttel}>+7 (4732) 78-90-87</div>
                      </div>
                  </div>
              </div>
          </div>
    </div>
  </div>
    </MainLayout>

  )
}

export default Company;
