import { ChangeEvent } from "react";
import styles from "./Input.module.css";

type InputPropsType = {
  onChange: (value: string) => void;
  value: number;
  type: string;
  id: string;
};

export const Input = (props: InputPropsType) => {
  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    props.onChange(event.currentTarget.value);
  };

  return (
    <input className={styles.input} id={props.id} value={props.value} type={props.type} onChange={onChangeHandler} />
  );
};
