import { IAccount } from "../../../../models/IAccount";
import { IDevice } from "../../../../models/IDevice";
import { IUser } from "../../../../models/IUser";
import { getFullName } from "../../../../utils/functions";

export const getListData = (array: any, name: string) => {
  let list = [];
  array.forEach((item) => {
    if (!list.includes(item[name])) {
      list.push(item[name]);
    }
  });
  return list;
};

export const getListDataWithId = (array: any, name: string) => {
  let list = [];
  array.forEach((item) => {
    const option = { label: item[name], id: item._id };
    if (list.length) {
      if (item) {
        let check = list.map((listItem) => listItem.id).includes(option.id);
        if (!check) {
          list.push(option);
        }
      }
    } else {
      list.push(option);
    }
  });
  return list;
};

export const getListFullNamesWithId = (array: any, name: string) => {
  let list = [];
  array.forEach((item) => {
    const person = item[name] && {
      label: getFullName(item[name]),
      id: item[name]._id,
    };
    if (list.length) {
      if (!!item && !!person) {
        let check = list.map((item) => item.id).includes(person.id);
        if (!check) {
          list.push(person);
        }
      }
    } else {
      list.push(person);
    }
  });
  return list;
};

export const getSelectOptionsFromArray = (array: any, name: string) => {
  let list = [];
  array.forEach((item) => {
    item[name][0] &&
      item[name].forEach((i) => {
        if (!list.includes(i)) {
          list.push(i);
        }
      });
  });
  return list.sort();
};

export const getListYears = (min: number) => {
  const currentYear = new Date().getFullYear();
  let listYears = [];

  for (let year = min; year <= currentYear; year++) {
    listYears.push(year);
  }
  return listYears.reverse();
};

export const getListAccountsWithId = (accounts: IAccount[]) => {
  let list = [];
  accounts.forEach((account) => {
    const option = {
      label: `${
        account.payer ? getFullName(account.payer) : "Плательщик не добавлен"
      }`,
      address: `${account.address}, кв${account.numberOfApartment}`,
      number: `Л/С №${account.number}`,
      id: account._id,
    };
    if (list.length) {
      if (!!account) {
        let check = list.map((item) => item.id).includes(option.id);
        if (!check) {
          list.push(option);
        }
      }
    } else {
      list.push(option);
    }
  });
  return list;
};

export const getListDevicesWithId = (devices: IDevice[]) => {
  let list = [];
  devices.forEach((device) => {
    const option = {
      label: `${device.assignment}`,
      tariff: `${device.tariff}`,
      number: `№${device.number}`,
      id: device._id,
    };
    if (list.length) {
      if (!!device) {
        let check = list.map((item) => item.id).includes(option.id);
        if (!check) {
          list.push(option);
        }
      }
    } else {
      list.push(option);
    }
  });
  return list;
};

export const getListEmpoyeeWithId = (users: IUser[]) => {
  let list = [];
  users.forEach((user) => {
    const option = {
      label: `${getFullName(user)}`,
      email: `${user.email}`,
      phone: `${user.phones[0]}`,
      id: user._id,
    };
    if (list.length) {
      if (!!user) {
        let check = list.map((item) => item.id).includes(option.id);
        if (!check) {
          list.push(option);
        }
      }
    } else {
      list.push(option);
    }
  });
  return list;
};
