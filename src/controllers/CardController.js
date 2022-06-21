import Card from "../models/Card";
import {getCollectionData, addDocument,removeDocument} from "../firestoreApi";

async function listCards() {
    // await createCollection('cards');
    const cards = await getCollectionData("cards");
    let cartas=cards.docs.map(doc => {
        return {...doc.data(), uid:doc.id}
    })
    return cartas;
}

async function addCard(data) {
    return await addDocument("cards", data);
}

async function removeCard(uid) {
    return await removeDocument("cards", uid);
}

export {listCards,addCard,removeCard};
