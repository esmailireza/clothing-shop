import styles from "./select.module.css";
import Select from "react-select";
const sizeOptions = [
  { value: "XS", label: "XS" },
  { value: "S", label: "S" },
  { value: "M", label: "M" },
  { value: "L", label: "L" },
  { value: "XL", label: "XL" },
  { value: "XXL", label: "XXL" },
];
const colorOptions = [
  { value: "Red", label: "Red" },
  { value: "Blue", label: "Blue" },
  { value: "White", label: "White" },
  { value: "Gray", label: "Gray" },
];

const SelectComponent = () => {
  return (
    <section className={styles.selectContainer}>
      <div className="mt-3">
        <span>Size: </span>
        <Select
          options={sizeOptions}
          placeholder="Pleace select your size"
          className={styles.select}
        />
      </div>
      <div className="mt-3">
        <span>Color: </span>
        <Select
          options={colorOptions}
          placeholder="Pleace select your color"
          className={styles.select}
        />
      </div>
    </section>
  );
};

export default SelectComponent;
