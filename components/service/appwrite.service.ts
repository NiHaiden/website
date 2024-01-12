import {Client, Models, Storage} from "appwrite";

export function getClient() {
    const client = new Client();

    client
        .setEndpoint('https://appwrite.niklas.tech/v1')
        .setProject('64b6b4ca36481febbb70');

    return client
}


export async function getFileUrls() {
    const storage = new Storage(getClient());

    const promise = storage.listFiles("64b6f78890ebd08b8d99");

    const files: Models.File[] = await promise.then((response) => {
        return response.files;
    });

    const fileurls: string[] = [];

    files.forEach((file) => {
        fileurls.push(
            storage.getFilePreview("64b6f78890ebd08b8d99", file.$id, undefined, 700)
                .href
        );
    });

    return fileurls;
}

