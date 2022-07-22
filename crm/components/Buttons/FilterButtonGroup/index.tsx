import Button from "../Button";
import styles from "./style.module.scss";

interface FilterButtonGroupProps {
  handleFilter?: () => void;
  clearFilterData?: () => void;
  mt?: number;
}
const FilterButtonGroup: React.FC<FilterButtonGroupProps> = ({
  handleFilter,
  clearFilterData,
  mt = 48,
}) => {
  return (
    <div className={styles.buttonsFilter} style={{ marginTop: mt }}>
      <Button onClick={handleFilter} bg="green" width={150} mb={10}>
        Найти
      </Button>
      <span onClick={clearFilterData}>Сбросить фильтр</span>
    </div>
  );
};
export default FilterButtonGroup;
