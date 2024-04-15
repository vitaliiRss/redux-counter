import { combineReducers, compose, legacy_createStore } from "redux";
import { counterReducer } from "./counter-reducer";

const rootReducer = combineReducers({
  counter: counterReducer,
})

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = legacy_createStore(rootReducer, composeEnhancers());
export type AppRootStateType = ReturnType<typeof rootReducer>

// @ts-ignore
window.store = store;