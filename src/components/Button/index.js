import styles from "./Button.module.scss";
import { IoSearch } from "react-icons/io5";

const Button = ({ variant = "default", disabled = false, children }) => {
  const buttonClass = `${styles.button} ${styles[variant]} ${
    disabled ? styles.disabled : ""
  }`;

  return (
    <button className={buttonClass} disabled={disabled}>
      {variant === "icon" && (
        <div className={styles.icon}>
          <IoSearch size={22} />
        </div>
      )}
      <span className={styles.text}>{children}</span>
    </button>
  );
};

export default Button;
