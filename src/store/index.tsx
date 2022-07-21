import { configureStore, combineReducers } from "@reduxjs/toolkit";
import loanSlice from "./loanSlice";

const rootReducer = combineReducers({
    loan:loanSlice
})
export function setupStore() {
    return configureStore({
      reducer: rootReducer
    })
  }

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']