import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Client from "@/domain/entities/Client";

type InitialState = {
    clients: Array<Client>;
};

const initialState: InitialState = {
    clients: []
};

const clientSlice = createSlice({
    name: "clients",
    initialState,
    reducers: {
        setClients(state, action: PayloadAction<Array<Client>>) {
            state.clients = action.payload;
        }
    },
});

export const { setClients } = clientSlice.actions;
export default clientSlice.reducer;
