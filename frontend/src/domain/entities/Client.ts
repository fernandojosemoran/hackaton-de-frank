class Client {
    name: string;
    lastName: string;
    phone: string;
    email: string;
    localitation: string;
    reputation: string;
    dateOfBirth: string;

    constructor(
        name: string,
        lastName: string,
        phone: string,
        email: string,
        localitation: string,
        reputation: string,
        dateOfBirth: string
    ) {
        this.name = name;
        this.lastName = lastName;
        this.phone = phone;
        this.email = email;
        this.localitation = localitation;
        this.reputation = reputation;
        this.dateOfBirth = dateOfBirth;
    }
}

export default Client;