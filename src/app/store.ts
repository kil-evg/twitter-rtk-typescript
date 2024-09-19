import { combineSlices, configureStore } from "@reduxjs/toolkit"
import user from "../features/userSlice"
import stats from "../features/statSlice"


// Создание store с использованием слайсов
export const store = configureStore({
  reducer: {
    user,
    stats
  },
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
