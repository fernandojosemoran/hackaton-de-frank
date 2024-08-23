import Client from "@domain/entities/Client";

abstract class ClientDatasource {
    abstract getClients(page: number): Array<Client>;
    abstract searchClientByName(name: string, page: number): Array<Client>;
    abstract searchClientByReputation(name: string, page: number): Array<Client>;
}

export default ClientDatasource;