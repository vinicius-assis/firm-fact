import styles from "./FirmFactCard.module.scss";

const FirmFactCard = ({ children, variant = "default", disabled, index }) => {
  const cardClass = `
  ${styles.card}
  ${disabled ? styles.disabled : ""}
  ${styles[variant]} 
  ${styles[`item${index + 1}`]}
  `;

  return <div className={cardClass}>{children}</div>;
};

export default FirmFactCard;
