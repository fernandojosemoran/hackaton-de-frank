import Client from "@domain/entities/Client";

abstract class ClientDatasource {
    abstract getClients(page: number): any;
    abstract searchClientByName(name: string, page: number): Array<Client>;
    abstract searchClientByReputation(name: string, page: number): Array<Client>;
}

export default ClientDatasource;