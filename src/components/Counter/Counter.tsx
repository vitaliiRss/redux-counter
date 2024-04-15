import { useEffect } from "react";
import styles from "./Counter.module.css";
import { CounterSettings } from "./CounterSettings/CounterSettings";
import { CounterBoard } from "./CounterBoard/CounterBoard";
import { useDispatch, useSelector } from "react-redux";
import { AppRootStateType } from "../../state/store";
import { CounterProps, increaseConterAC, resetCounterAC, setCounterParamitersAC } from "../../state/counter-reducer";

export const Counter = () => {
  const counter = useSelector<AppRootStateType, CounterProps>(state => state.counter)
  const dispatch = useDispatch()

  useEffect(() => {
    localStorage.setItem("counter", JSON.stringify(counter));
  }, [counter]);

  const setCounterParamiters = (newCounter: CounterProps) => {
    dispatch(setCounterParamitersAC(newCounter))
  };

  const increaseConter = () => {
    dispatch(increaseConterAC())
  };

  const resetCounter = () => {
    dispatch(resetCounterAC())
  };

  return (
    <div className={styles.counter}>
      <CounterSettings counter={counter} setCounterParamiters={setCounterParamiters} />
      <CounterBoard counter={counter} increaseConter={increaseConter} resetCounter={resetCounter} />
    </div>
  );
};
