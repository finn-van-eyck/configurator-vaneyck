import styles from "./OptionCard.module.css";

type OptionCardProps = {
  label: string;
  price?: number;
  selected?: boolean;
  onClick?: () => void;
};

const OptionCard = ({
  label,
  price = 0,
  selected = false,
  onClick,
}: OptionCardProps) => {
  const classNames = [
    styles.optionCard,
    selected ? styles["optionCard--selected"] : null,
  ]
    .filter(Boolean)
    .join(" ");

  //prijs enkel tonen als de optie iets extra kost
  let priceText = "";
  if (price > 0) {
    priceText = `+ €${price}`;
  }

  return (
    <button
      type="button"
      className={classNames}
      onClick={onClick}
      aria-pressed={selected}
    >
      <span className={styles.optionCard__label}>{label}</span>
      {priceText && (
        <span className={styles.optionCard__price}>{priceText}</span>
      )}
    </button>
  );
};

export default OptionCard;
