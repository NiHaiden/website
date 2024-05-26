import {Client, Models, Storage} from "appwrite";

export function getClient() {
    const client = new Client();

    client
        .setEndpoint(process.env.APPWRITE_URL || "")
        .setProject(process.env.APPWRITE_PROJECT_ID || "");

    return client
}


export async function getFileUrls() {
    const storage = new Storage(getClient());

    const promise = storage.listFiles(process.env.APPWRITE_PHOTO_BUCKETID);

    const files: Models.File[] = await promise.then((response) => {
        return response.files;
    });

    const fileurls: string[] = [];

    files.forEach((file) => {
        fileurls.push(
            storage.getFilePreview(process.env.APPWRITE_PHOTO_BUCKETID, file.$id, undefined, 700)
                .href
        );
    });

    return fileurls;
}

