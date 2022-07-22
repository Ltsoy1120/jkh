import type { NextPage } from 'next'
import * as React from 'react';
import styles from '../../styles/Company.module.css';
import Link from 'next/link';
import MainLayout from '../../components/MainLayout/MainLayout';
import TabsSettingCompany from '../../components/Tabs/TabsSettingCompany/TabsSettingCompany';


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
                      <span className={styles.companyoffices}>
                          <Link href="/company">Офисы компании</Link>
                      </span>
                      <span className={styles.requisitesa}>
                            <Link href="/companyinfo">Реквизиты</Link>
                      </span>
                    </div>

                    </div> */}
                    <div className={styles.infoteka}>
                        <div  className={styles.infot} >
                            <span className={styles.info}>ИНН</span>
                            <span className={styles.info}>КПП</span>
                            <span className={styles.info}>БИК</span>
                            <span className={styles.info}>Название банка</span>
                            <span className={styles.info}>Расчетный счет</span>
                            <span className={styles.info}>Корр. счет</span>
                        </div>
                        <div  className={styles.infoc} >
                            <span className={styles.info}>1234567890</span>
                            <span className={styles.info}>410145002</span>
                            <span className={styles.info}>044442607</span>
                            <span className={styles.info}>Дополнительный офис №9013/0124 Сбербанка в Воронеже</span>
                            <span className={styles.info}>30101810600000000681</span>
                            <span className={styles.info}>7650807400000000456</span>
                        </div>
                        <div>

                        </div>
                    </div>
                </div>
          </div>
          </div>
    </MainLayout>
  )
}

export default Company;
