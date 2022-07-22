import styles from "./Input.module.scss";

export default function Input({
  type,
  placeholder,
  id,
  width,
  height,
  margin_right,
  children,
  margin_bottom,
  margin_top,
  margin_left,
}) {
  return (
    <div className={styles.wrapInput}>
      <input
        type={type}
        placeholder={placeholder}
        id={id}
        style={{
          width: width,
          height: height,
          marginRight: margin_right,
          marginBottom: margin_bottom,
          marginTop: margin_top,
          marginLeft: margin_left,
        }}
      />
      {children}
    </div>
  );
}
