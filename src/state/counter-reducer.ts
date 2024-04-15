
type CounterActionsType = IncreaseConterACType
  | ResetCounterACType
  | SetCounterParamitersACType

export type CounterProps = {
  min: number;
  max: number;
  settedMin: number;
  settedMax: number;
  currentCount: number;
  isValueChanged: boolean;
  isConfigured: boolean;
  message: string;
};

const counterLocalStorage: string | null = localStorage.getItem("counter");

const initialState: CounterProps = counterLocalStorage !== null ? JSON.parse(counterLocalStorage) : {
  min: 0,
  max: 5,
  settedMin: 0,
  settedMax: 5,
  currentCount: 0,
  isValueChanged: false,
  isConfigured: false,
  message: "set values",
}

export const counterReducer = (state = initialState, action: CounterActionsType): CounterProps => {
  switch (action.type) {
    case "SET-COUNTER-PARAMITERS": {
      const stateCopy = { ...action.newCounter }
      if (stateCopy.min !== stateCopy.settedMin || stateCopy.max !== stateCopy.settedMax) {
        if (stateCopy.min > stateCopy.max) {
          stateCopy.message = "min > max";
        }
        if (stateCopy.min < 0) {
          stateCopy.message = "min < 0";
        }
        if (stateCopy.min === stateCopy.max) {
          stateCopy.message = "min === max";
        }
      } else {
        stateCopy.isValueChanged = false;
        stateCopy.message = "set values";
      }
      return stateCopy
    }
    case "INCREASE-CONTER": {
      return { ...state, currentCount: state.currentCount + 1 }
    }
    case "RESET-COUNTER": {
      return { ...state, currentCount: state.min }
    }
    default:
      return state
  }
}

export type SetCounterParamitersACType = ReturnType<typeof setCounterParamitersAC>
export const setCounterParamitersAC = (newCounter: CounterProps) => {
  return {
    type: "SET-COUNTER-PARAMITERS",
    newCounter
  } as const
}

export type IncreaseConterACType = ReturnType<typeof increaseConterAC>
export const increaseConterAC = () => {
  return {
    type: "INCREASE-CONTER"
  } as const
}

export type ResetCounterACType = ReturnType<typeof resetCounterAC>
export const resetCounterAC = () => {
  return {
    type: "RESET-COUNTER"
  } as const
}