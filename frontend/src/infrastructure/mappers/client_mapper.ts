import Client from "@/domain/entities/Client";

class ClientMapper {
    // Método para mapear desde un objeto plano (por ejemplo, desde una API) a una instancia de Client
    static fromApi(data: any): Client {
        return new Client(
            data.name || 'None',
            data.lastName || 'None',
            data.phone || 'None',
            data.email || 'None',
            data.localitation || 'None',
            data.reputation || 'None',
            data.dateOfBirth || 'None'
        );
    }

    static toApi(client: Client): any {
        return {
            name: client.name,
            lastName: client.lastName,
            phone: client.phone,
            email: client.email,
            localitation: client.localitation,
            reputation: client.reputation,
            dateOfBirth: client.dateOfBirth
        };
    }

    static fromForm(data: Record<string, any>): Client {
        return new Client(
            data.name || 'None',
            data.lastName || 'None',
            data.phone || 'None',
            data.email || 'None',
            data.localitation || 'None',
            data.reputation || 'None',
            data.dateOfBirth || 'None'
        );
    }
    static toForm(client: Client): Record<string, any> {
        return {
            name: client.name,
            lastName: client.lastName,
            phone: client.phone,
            email: client.email,
            localitation: client.localitation,
            reputation: client.reputation,
            dateOfBirth: client.dateOfBirth
        };
    }

    static toJson(client: Client): any {
        return {
            name: client.name,
            lastName: client.lastName,
            phone: client.phone,
            email: client.email,
            localitation: client.localitation,
            reputation: client.reputation,
            dateOfBirth: client.dateOfBirth
        };
    }

    static fromJson(data: any): Client {
        return new Client(
            data.name || 'None',
            data.lastName || 'None',
            data.phone || 'None',
            data.email || 'None',
            data.localitation || 'None',
            data.reputation || 'None',
            data.dateOfBirth || 'None'
        );
    }
}

export default ClientMapper;
