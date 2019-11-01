const clients = [
    {
        name: "Client1",
        balance: 1000,
        request1: -200,
        request2: +50,
    },
    {
        name: "Client2",
        balance: 1000,
        request1: 0,
        request2: -40,
    },
    {
        name: "Client3",
        balance: 200,
        request1: -1000,
        request2: -90,
    },
    {
        name: "Client4",
        balance: 1000,
        request1: 100,
        request2: -50,
    },
    {
        name: "Client5",
        balance: 10000,
        request1: 20000,
        request2: -50,
    }
]



//------------------ small functions -------------------------//

const showBalance = (client) => {
    console.log(`Current balance of ${client.name} : ${client.balance}€`);
};

const showRequest = (clientRequest) => {
    if (clientRequest > 0)
        console.log(`+${clientRequest}`);
    else
        console.log(`${clientRequest}`);
}

const treatRequest = (client, clientRequest) => {
    if (clientRequest === 0)
        console.log(`+${clientRequest}\n(CAREFUL: no transaction has been performed)`)
    else {
        showRequest(clientRequest);
        client.balance += clientRequest;
        if (client.balance < 0) {
            console.log("(CAREFUL : request declined. Sorry :/)");
            client.balance -= clientRequest;
        }
    }
    showBalance(client);
}


const treatClient = (client) => {
    console.log(`---------->  ${client.name}`)
    showBalance(client);
    treatRequest(client, client.request1);
    treatRequest(client, client.request2);
}


//------------------ main function -------------------------//

const treatClients = (clients) => {
    for (let client of clients) {
        treatClient(client);
        console.log(``);
    }
    console.log(`No more clients's requests to proceed with. We can go back to playing Mario Kart.`)
};


//-------------------- calling one function with one argument ---------------//
treatClients(clients);
