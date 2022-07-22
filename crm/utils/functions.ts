import moment from "moment";
import { ISubject } from "../models/ISubject";
import { IUser } from "../models/IUser";

export const getFullNames = (users: IUser[] | ISubject[]) => {
  let fullNames = [];
  users?.forEach((user) => {
    fullNames.push(`${user.lastName} ${user.name} ${user.patronymic}`);
  });
  return fullNames;
};

export const getFullNamesWithId = (users: IUser[] | ISubject[]) => {
  let fullNames = [];
  users?.forEach((user) => {
    fullNames.push({
      label: `${user.lastName} ${user.name} ${user.patronymic}`,
      id: user._id,
    });
  });
  return fullNames ? fullNames : null;
};

export const getFullName = (user: IUser | ISubject) => {
  return `${user.lastName} ${user.name} ${user.patronymic}`;
};

export const getShortFullName = (user: IUser | ISubject) => {
  return `${user?.lastName} ${user?.name && user?.name[0].toUpperCase()}. ${
    user?.patronymic && user.patronymic[0].toUpperCase()
  }.`;
};

export const getPeriodInMonths = (date1, date2) => {
  const from = new Date(date1);
  const to = new Date(date2);
  let months =
    to.getMonth() -
    from.getMonth() +
    12 * (to.getFullYear() - from.getFullYear());

  if (to.getDate() < from.getDate()) {
    var newFrom = new Date(to.getFullYear(), to.getMonth(), from.getDate());
    if (
      to < newFrom &&
      to.getMonth() == newFrom.getMonth() &&
      to.getFullYear() % 4 != 0
    ) {
      months--;
    }
  }
  let word = "";
  months == 1 || (months > 19 && months % 10 == 1)
    ? (word = "месяц")
    : (months > 1 && months < 5) ||
      (months > 19 && months % 10 > 1 && months % 10 < 5)
    ? (word = "месяца")
    : (word = "месяцев");
  const period = `${months.toString()} ${word}`;

  return period;
};

export const getCurrentMonthYear = () => {
  const date = new Date();
  const currentMonth = date.toLocaleString("ru", {
    month: "long",
  });
  const currentYear = date.getFullYear();
  return `${currentMonth[0].toUpperCase()}${currentMonth.slice(
    1
  )} ${currentYear} года`;
};

export const getWeekDay = (date: Date) => {
  let dayData = moment(date).format("ddd");
  switch (dayData) {
    case "Mon":
      dayData = "понедельник";
      break;
    case "Tue":
      dayData = "вторник";
      break;
    case "Wed":
      dayData = "среду";
      break;
    case "Thu":
      dayData = "четверг";
      break;
    case "Fri":
      dayData = "пятницу";
      break;
  }
  return dayData;
};

export const getYears = () => {
  const maxYear = Number(moment().format("YYYY"));
  const minYear = maxYear - 10;

  let yearsArr = [];

  for (let i = minYear; i <= maxYear; i++) {
    yearsArr.unshift(i.toString());
  }
  return yearsArr;
};
