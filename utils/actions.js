import { firebaseApp } from './firebase'
import * as firebase from 'firebase'
import 'firebase/firestore' 

const dataBase = firebase.firestore(firebaseApp)

export const getClients = async(limitClients) => {
    const result = { statusResponse: true, clientes: [], data: null, error: null, startClient: null }
    
    try {
        const answer = await dataBase
        .collection("clientes")
        .orderBy("name")
        .limit(limitClients)
        .get()
        
        if(answer.docs.length > 0) {
            result.startClient = answer.docs[answer.docs.length - 1]
        }
        answer.forEach((doc) => {
            const client = doc.data()
            client.id = doc.id
            result.clientes.push(client)

        })

    } catch (error) {
        result.error = error
    }
    return result
}


export const getMoreClients = async(limitClients, startClient) => {
    const result = { statusResponse: true, clientes: [], data: null, error: null, startClient: null }
    
    try {
        const answer = await dataBase
        .collection("clientes")
        .orderBy("name")
        .startAfter(startClient.data().name)
        .limit(limitClients)
        .get()
        
        if(answer.docs.length > 0) {
            result.startClient = answer.docs[answer.docs.length - 1]
        }
        answer.forEach((doc) => {
            const client = doc.data()
            client.id = doc.id
            result.clientes.push(client)

        })

    } catch (error) {
        result.error = error
    }
    return result
}