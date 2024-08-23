import Client from "@/domain/entities/Client"

import { PayloadAction } from "@reduxjs/toolkit"

type InitialState = {
    clients: Array<Client>
}

export const initialState: InitialState = {
    clients: []
}

function getClients(state: InitialState, action: PayloadAction<InitialState>) {
    const results = { ...state, ...action.payload }
    console.log(`results: ${results.clients}`)
    return results;
}

export default getClients;