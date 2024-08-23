import { UseHttpRequest } from "@/ui/hooks";
import { ClientMapper } from "../mappers";
import { useDispatch } from "react-redux";
import { setClients } from "@/ui/redux/slices/clients/client_slice"; 4

import ApiLink from "../constants/api";
import ClientDatasource from "@/domain/datasources/client_datasource";
import Client from "@/domain/entities/Client";


export interface ClientsResponse {
    count: number;
    next: string | null;
    previous: string | null;
    results: {
        clients: [];
    };
}

class ClientDatasourceImpl extends ClientDatasource {
    async getClients(page: number) {

        console.log(ApiLink.clints)

        const response = await fetch(ApiLink.clints);

        const jsonResponse = await response.json();

        const convertToClient = jsonResponse.results.Clients.map((client: Client) => ClientMapper.fromJson(client))

        return convertToClient;
    }

    searchClientByName(name: string, page: number): Array<Client> {
        throw new Error("Method not implemented.");
    }

    searchClientByReputation(name: string, page: number): Array<Client> {
        throw new Error("Method not implemented.");
    }
}

export default ClientDatasourceImpl;