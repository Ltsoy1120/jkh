import moment from "moment";

export const getYears = () => {
  const maxYear = Number(moment().format("YYYY"));
  const minYear = maxYear - 10;

  let yearsArr = [];

  for (let i = minYear; i <= maxYear; i++) {
    yearsArr.unshift(i.toString());
  }
  return yearsArr;
};
