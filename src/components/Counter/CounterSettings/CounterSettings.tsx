import styles from "./CounterSettings.module.css";
import { CounterProps } from "../../../state/counter-reducer";
import { Input } from "../../Input/Input";
import { Button } from "../../Button/Button";


type CounterSettingsProps = {
  counter: CounterProps;
  setCounterParamiters: (newCounter: CounterProps) => void;
};

export const CounterSettings = (props: CounterSettingsProps) => {
  const setCounterValues = () => {
    props.setCounterParamiters({
      ...props.counter,
      settedMin: props.counter.min,
      settedMax: props.counter.max,
      currentCount: props.counter.min,
      isConfigured: true,
      message: ""
    });
  };

  const getValue = (value: number, type: "min" | "max") => {
    if (String(value)) {
      props.setCounterParamiters({
        ...props.counter,
        isConfigured: false,
        [type]: value,
        isValueChanged: true,
        message: "press set button"
      });
    }

  }

  const isErrorMessage = props.counter.message !== "press set button" ? true : false;

  return (
    <div className={styles.settings}>
      <div className={styles.field}>
        <label className={styles.label} htmlFor="minValue">Minimal value:</label>
        <Input id="minValue" type="number" value={props.counter.min} onChange={(value) => getValue(Number(value), "min")} />
      </div>
      <div className={styles.field}>
        <label className={styles.label} htmlFor="maxValue">Maximal value:</label>
        <Input id="maxValue" type="number" value={props.counter.max} onChange={(value) => getValue(Number(value), "max")} />
      </div>
      <div className={styles.actions}>
        <Button name={"Set"} onClick={setCounterValues} disabled={!props.counter.isValueChanged || isErrorMessage} />
      </div>
    </div>
  );
};