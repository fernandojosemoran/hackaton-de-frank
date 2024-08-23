import { configureStore } from "@reduxjs/toolkit";
import clientsReducer from "./slices/clients/client_slice";

const store = configureStore({
    reducer: {
        clients: clientsReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
export default store;
