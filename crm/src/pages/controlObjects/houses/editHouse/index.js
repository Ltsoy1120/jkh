import React from "react";
import MainLayout from "../../../../components/MainLayout/MainLayout";
import CustomTabs from "../../../../components/Tabs/CustomTabs";
import { Button } from "@mui/material";
import styles from "../../../../styles/controlObjects/houses/houses.module.scss";
import { SimpleInput } from "../../../../components/Forms/SimpleInput/SimpleInput";
import { SimpleSelect } from "../../../../components/Forms/SimpleSelect/SimpleSelect";
import { DateSelect } from "../../../../components/DateSelect/DateSelect";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import { CustomTextArea } from "../../../../components/Forms/CustomTextArea/CustomTextArea";
import Plus from "../../../../components/Buttons/CircleButtons/Plus/Plus";

const tabLinks = [
  {
    name: "Настройки",
    href: "",
  },
  {
    name: "Подъезды",
    href: "",
  },
  {
    name: "Помещения",
    href: "",
  },
  {
    name: "Очистка",
    href: "",
  },
];
export default function Home() {
  return (
    <React.Fragment>
      <MainLayout
        breadcrumbs="Объекты управления / Дома / Редактировать дом"
        title="Редактировать дом"
        mainTitle="дом г. Воронеж, ул. Фридриха Энгельса 12"
      >
        <CustomTabs tabLinks={tabLinks} />
        <div className={styles.containerAboutHome}>
          <p className={styles.label}>Информация о доме</p>
          <div style={{ maxWidth: "740px" }} className={styles.containerForms}>
            <SimpleInput size="massive" label="Адрес" placeholder="г. Воронеж, ул. Бульвар Фестивальный, д.13, кв. 4" />
            <SimpleSelect size="object" placeholder="Выбирите из списка..." title="Часовая зона" />
          </div>
          <div>
            <SimpleInput size="massive" label="Кадастровый номер" placeholder="Введите данные..." />
          </div>
          <div className={styles.containerForms}>
            <SimpleInput size="massive" label="Код ФИАС" placeholder="Введите данные..." />
            <SimpleSelect size="object" placeholder="Выбирите из списка..." title="Год ввода в эксплуатацию" />
          </div>
          <div className={styles.containerForms}>
            <SimpleInput label="Общая площадь" placeholder="Введите данные..." />
            <SimpleInput label="Количество этажей" placeholder="Введите данные..." />
            <SimpleInput label="Количество подземных этажей" placeholder="Введите данные..." />
          </div>
          <div className={styles.containerForms}>
            <SimpleSelect size="object" placeholder="Выбирите из списка..." title="Статус культурного наследия" />
            <SimpleSelect size="object" placeholder="Выбирите из списка..." title="Состояние" />
            <SimpleSelect size="middle" placeholder="Выбирите из списка..." title="Стадия жизненного цикла" />
          </div>
        </div>

        <div className={styles.containerTypeManag}>
          <p className={styles.label}>Тип управления</p>
          <div className={styles.containerForms}>
            <SimpleInput size="massive" label="Тип управления" placeholder="Введите данные..." />
            <SimpleSelect title="Основание управления" size="massive" placeholder="Непосредственное управление" />
          </div>
          <div className={styles.containerForms}>
            <DateSelect helperText="Дата начала управления" value={"12.04.2001"} onChange={() => ""} />
            <DateSelect helperText="Дата окончания управления" value={"12.04.2001"} onChange={() => ""} />
          </div>
          <div className={styles.containerForms}>
            <SimpleInput label="Класс энергоэффективности" size="object" placeholder="Введите данные..." />
            <DateSelect value={"12.04.2001"} helperText="Дата присвоения класса" />
          </div>

          <FormControl>
            <FormHelperText>Комментарий</FormHelperText>
            <CustomTextArea />
          </FormControl>
        </div>

        <div className={styles.docs}>
          <p className={styles.label}>Документы</p>
          <div className={styles.addGroup}>
            <span>Добавить группу документов</span>
            <div className={styles.contrainerPlus}>
              <Plus className={styles.plusOne} />
              <Plus className={styles.plusTwo} />
            </div>
          </div>

          <p className={styles.label}>Фото</p>
          <div className={styles.addGroup}>
            <span>Добавить группу фотографий</span>
            <div className={styles.contrainerPlus}>
              <Plus className={styles.plusOne} />
              <Plus className={styles.plusTwo} />
            </div>
          </div>
          <div className={styles.wrapButtons}>
            <Button bcg={true} margin_right={30}>
              Сохранить
            </Button>
            <Button>Отмена</Button>
          </div>
        </div>
        <div className={styles.containerButtons}>
          <Button>Поместить в архив</Button>
          <Button>Удалить объект</Button>
        </div>
      </MainLayout>
    </React.Fragment>
  );
}
