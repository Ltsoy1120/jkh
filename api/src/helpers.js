const ExcelJS = require("exceljs");
const moment = require("moment");

module.exports = {
  buildExcelFile: async applications => {
    const workbook = new ExcelJS.Workbook();
    const sheet = workbook.addWorksheet("Заявки");

    sheet.getRow(1).font = { name: "Times New Roman", size: 14, bold: true };
    sheet.columns = [
      { header: "Номер", width: 10 },
      { header: "Кем создана", width: 20 },
      { header: "Когда создана", width: 20 },
      { header: "Житель", width: 30 },
      { header: "Адрес", width: 45 },
      { header: "Тип заявки", width: 20 },
      { header: "Исполнитель", width: 20 },
      { header: "Результат", width: 20 }
    ];
    applications.map(item => {
      const newRow = [
        item.number,
        `${
          item.dispatcher.lastName
        } ${item.dispatcher.name[0].toUpperCase()}. ${item.dispatcher.patronymic[0].toUpperCase()}.`,
        `${moment(new Date(item.createDate)).format("DD.MM.YYYY")} в ${moment(
          new Date(item.createDate)
        ).format("hh.mm")}`,
        item.applicantFullName,
        `${item.address}, кв.${item.numberOfApartment}`,
        item.type,
        item.performer
          ? `${
              item.performer.lastName
            } ${item.performer.name[0].toUpperCase()}. ${item.performer.patronymic[0].toUpperCase()}.`
          : "",
        item.result
      ];
      sheet.addRow(newRow);
    });

    const filename = moment().format("YYYY-MM-DD") + ".xlsx";
    await workbook.xlsx.writeFile("./public/files/" + filename);
  }
};
