import { Account, Client } from 'react-native-appwrite';

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
    .setEndpoint('config.endpoint') 
    .setProject(config.projectID) 
    .setPlatform(config.platform) 

const account = new Account(client);


export const createUser = () => {
    account.create(ID.unique(), 'me@example.com', 'password', 'Jane Doe')
    .then(function (response) {
        console.log(response);
    }, function (error) {
        console.log(error);
    });
}