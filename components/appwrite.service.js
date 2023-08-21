import {Client} from "appwrite";

export function AppwriteService(){
    const client = new Client();

    client
        .setEndpoint('https://appwrite.niklas.tech/v1')
        .setProject('64b6b4ca36481febbb70');

    return client
}