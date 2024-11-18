import { Account, Avatars, Client, Databases, ID } from 'react-native-appwrite';

export const config = {
    endpoint: 'https://cloud.appwrite.io/v1',
    platform: 'com.kamil-fr.vidoo',
    projectID: '670c16920019cb876272',
    databaseID: '670fa34f001659bfdb3c',
    userCollectionID: '670fa38a003cfb535b8d',
    videoCollectionID: '671116db0027ee2f8f87',
    storageID: '67111c6e000b8f74edc2'
}


const client = new Client();

client
    .setEndpoint(config.endpoint) 
    .setProject(config.projectID) 
    .setPlatform(config.platform) 

const account = new Account(client);
const avatars = new Avatars(client);
const databases = new Databases(client);


export const createUser = async (email, password, username) => {
    try {
        const newAccount = await account.create (
            ID.unique(),
            email,
            password,
            username
        )
        if(!newAccount) throw Error;

            const avatarUrl = avatars.getInitials(username);
            await signIn(email, password);
            const newUser = await databases.createDocument(
                config.databaseID,
                config.userCollectionID,
                ID.unique(),
                {
                    accountID: newAccount.$id,
                    email,
                    username,
                    avatar: avatarUrl
                }
            );
            return newUser;
            } catch (error) {
        console.log(error);
        throw new Error(error);
    }
    
}

export async function signIn(email, password) {
    try {
        const session = await account.createEmailSession(email, password);
        return session;
    } catch (error) {
        throw new Error(error);
    }
}