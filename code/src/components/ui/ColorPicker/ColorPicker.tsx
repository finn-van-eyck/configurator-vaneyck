import type { ColorOption } from "../../../config/options";
import styles from "./ColorPicker.module.css";

type ColorPickerProps = {
  label: string;
  colors: ColorOption[];
  selectedId: string;
  onSelect: (id: string) => void;
};

const ColorPicker = ({
  label,
  colors,
  selectedId,
  onSelect,
}: ColorPickerProps) => {
  return (
    <div className={styles.colorPicker}>
      <span className={styles.colorPicker__label}>{label}</span>

      <div className={styles.colorPicker__list}>
        {colors.map((color) => {
          const classNames = [
            styles.colorPicker__color,
            color.id === selectedId
              ? styles["colorPicker__color--selected"]
              : null,
          ]
            .filter(Boolean)
            .join(" ");

          return (
            <button
              key={color.id}
              type="button"
              className={classNames}
              style={{ backgroundColor: color.hex }}
              onClick={() => onSelect(color.id)}
              aria-label={color.label}
              aria-pressed={color.id === selectedId}
              title={color.label}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ColorPicker;
