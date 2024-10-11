import styles from "./FirmFacts.module.scss";
import CloseButton from "../CloseButton";
import FirmFactCard from "../FirmFactCard";
import data from "./card-data";
import Button from "../Button";

const FirmFacts = () => {
  return (
    <div className={styles.wrapper}>
      <CloseButton />
      <div className={styles.cardWrapper}>
        <h1>Firm Facts</h1>
        <span className={styles.separator} />
        <div className={styles.gridWrapper}>
          {data.map((item, index) => {
            return (
              <FirmFactCard
                key={`${item.content}_${index}`}
                index={index}
                icon={item.icon}
                variant={item.border && "border"}
                disabled={item.disabled}
              >
                <Button variant={item.icon && "icon"}>{item.content}</Button>
              </FirmFactCard>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FirmFacts;
