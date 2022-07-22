export const companyLinks = (id: string) => {
  return [
    {
      href: `/company/${id}`,
      name: "Данные о компании",
    },
    {
      href: `/company/${id}/leader`,
      name: "Руководитель",
    },
    {
      href: `/company/${id}/requisites`,
      name: "Реквизиты",
    },
    {
      href: `/company/${id}/offices`,
      name: "Офисы",
    },
  ];
};

export const settingsCompanyLinks = (id: string) => {
  return [
    {
      href: `/company/${id}/settings`,
      name: "Данные о компании",
    },
    {
      href: `/company/${id}/settings/leader`,
      name: "Руководитель",
    },
    {
      href: `/company/${id}/settings/requisites`,
      name: "Реквизиты",
    },
    {
      href: `/company/${id}/settings/offices`,
      name: "Офисы",
    },
  ];
};

export const employeesLinks = (id: string) => {
  return [
    {
      href: `/company/${id}/employees/addEmployee`,
      name: "Личная информация",
    },
    {
      href: `/company/${id}/employees/addEmployee/accessRights`,
      name: "Права доступа",
    },
  ];
};

export const settingsContractorLinks = (
  companyId: string,
  contractorId: string
) => {
  return [
    {
      href: `/company/${companyId}/contractors/${contractorId}/settings/contractor`,
      name: "Данные о подрядчике",
    },
    {
      href: `/company/${companyId}/contractors/${contractorId}/settings/head`,
      name: "Руководитель",
    },
    {
      href: `/company/${companyId}/contractors/${contractorId}/settings/requisites`,
      name: "Реквизиты",
    },
    {
      href: `/company/${companyId}/contractors/${contractorId}/settings/typesOfWork`,
      name: "Виды работ",
    },
    {
      href: `/company/${companyId}/contractors/${contractorId}/settings/employees`,
      name: "Сотрудники",
    },
  ];
};

export const settingsHouseLinks = (houseId: string) => {
  return [
    {
      name: "Дом",
      href: `/controlObjects/houses/${houseId}/editHouse`,
    },
    {
      name: "Подъезды",
      href: `/controlObjects/houses/${houseId}/entrances`,
    },
    {
      name: "Помещения",
      href: `/controlObjects/houses/${houseId}/apartments`,
    },
    {
      name: "Очистка",
      href: `/controlObjects/houses/${houseId}/cleaning`,
    },
  ];
};

export const settingsAccountLinks = (accountId: string) => {
  return [
    {
      name: "Лицевой счет",
      href: `/controlObjects/accounts/${accountId}/editAccount`,
    },
    {
      name: "Плательщик",
      href: `/controlObjects/accounts/${accountId}/payer`,
    },
    {
      name: "Собственники",
      href: `/controlObjects/accounts/${accountId}/owners`,
    },
    {
      name: "Счетчики",
      href: `/controlObjects/accounts/${accountId}/devices`,
    },
    {
      name: "История",
      href: `/controlObjects/accounts/${accountId}/history`,
    },
  ];
};

export const settingsSubjectLinks = (subjectId: string) => {
  return [
    {
      href: `/controlObjects/passportOffice/${subjectId}/editSubject`,
      name: "Личные данные",
    },
    {
      href: `/controlObjects/passportOffice/${subjectId}/properties`,
      hrefSecond: `/controlObjects/passportOffice/${subjectId}/editProperty`,
      name: "Собственность",
    },
    {
      href: `/controlObjects/passportOffice/${subjectId}/register`,
      hrefSecond: "/controlObjects/passportOffice/addSubject/addRegister",
      name: "Регистрация",
    },
  ];
};

export const settingsApplicationLinks = (applicationId: string) => {
  return [
    {
      href: `/control/${applicationId}/application`,
      name: "Заявка",
    },
    {
      href: `/control/${applicationId}/comments`,
      hrefSecond: "/",
      name: "Комментарии",
    },
    {
      href: `/control/${applicationId}/history`,
      hrefSecond: "/",
      name: "История",
    },
  ];
};

export const settingsAppealLinks = (appealId: string) => {
  return [
    {
      href: `/appeals/${appealId}`,
      hrefSecond: `/appeals/${appealId}/editAppeal`,
      name: "Заявка",
    },
    {
      href: `/appeals/${appealId}/comments`,
      name: "Комментарии",
    },
    {
      href: `/appeals/${appealId}/history`,
      name: "История",
    },
  ];
};

export const receptionLinks = (receptionId: string) => {
  return [
    {
      href: `/receptionOfCitizens/${receptionId}/reception`,
      hrefSecond: `/receptionOfCitizens/${receptionId}/editReception`,
      name: "Прием",
    },
    {
      href: `/receptionOfCitizens/${receptionId}/comments`,
      name: "Комментарии",
    },
    {
      href: `/receptionOfCitizens/${receptionId}/history`,
      name: "История",
    },
  ];
};

export const settingsReceptionLinks = (receptionId: string) => {
  return [
    {
      href: "/receptionOfCitizens/settings",
      name: "Оповещения",
    },
    {
      href: "/receptionOfCitizens/numbering",
      name: "Нумерация",
    },
    {
      href: "/receptionOfCitizens/admissionTopics",
      name: "Темы приема",
    },
  ];
};

export const settingsTasksLinks = (companyId: string, taskTypeId?: string) => {
  return [
    {
      href: `/company/${companyId}/tasks/settings/taskNotices`,
      name: "Оповещения",
    },
    {
      href: `/company/${companyId}/tasks/settings/taskTypes`,
      hrefSecond: `/tasks/settings/${taskTypeId}/editTaskType`,
      name: "Типы задач",
    },
  ];
};

export const settingsTaskLinks = (taskId: string) => {
  return [
    {
      href: `/tasks/${taskId}`,
      hrefSecond: `/tasks/${taskId}/editAppeal`,
      name: "Задача",
    },
    {
      href: `/tasks/${taskId}/comments`,
      name: "Комментарии",
    },
    {
      href: `/tasks/${taskId}/history`,
      name: "История",
    },
  ];
};
