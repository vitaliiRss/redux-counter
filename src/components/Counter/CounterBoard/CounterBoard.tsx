import styles from "./CounterBoard.module.css";
import { CounterProps } from "../../../state/counter-reducer";
import { Button } from "../../Button/Button";


type CounterBoardProps = {
  counter: CounterProps;
  increaseConter: () => void;
  resetCounter: () => void;
};

export const CounterBoard = (props: CounterBoardProps) => {
  const increaseConter = () => {
    props.increaseConter();
  };

  const resetCounter = () => {
    props.resetCounter();
  };

  return (
    <div className={styles.board}>
      <div className={styles.viewArea}>
        <span
          className={
            props.counter.currentCount === props.counter.max
              ? `${styles.number} ${styles.maxlimimt}`
              : `${styles.number}`
          }
        >
          {!props.counter.isConfigured ? (
            <small className={props.counter.message !== "press set button" && props.counter.message !== "set values" ? styles.error : styles.alert}>{props.counter.message}</small>
          ) : (
            <small>{props.counter.currentCount}</small>
          )}
        </span>
      </div>
      {
        props.counter.isConfigured ? (
          <div className={styles.hint}>
            Counter works on range <strong>{props.counter.min}</strong> to <strong>{props.counter.max}</strong>
          </div>
        ) : (
          <div>Counter range is not set</div>
        )
      }

      <div className={styles.btns}>
        <Button
          name={"Increment"}
          onClick={increaseConter}
          disabled={!props.counter.isConfigured || props.counter.currentCount === props.counter.max}
        />
        <Button
          name={"Reset"}
          onClick={resetCounter}
          disabled={!props.counter.isConfigured || (props.counter.isConfigured && props.counter.currentCount === props.counter.min)}
        />
      </div>
    </div >
  );
};
