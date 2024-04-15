import { ButtonHTMLAttributes } from "react"
import styles from "./Button.module.css"

type ButtonPropsType = {
  onClick: () => void
  name: string
} & ButtonHTMLAttributes<HTMLButtonElement>

export const Button = (props: ButtonPropsType) => {
  const onClickHandler = () => {
    props.onClick()
  }
  return (
    <button className={styles.button} onClick={onClickHandler} disabled={props.disabled}>{props.name}</button>
  )
}