import {initializeApp} from "firebase/app";
import {
    getFirestore,
    collection,
    addDoc,
    doc,
    deleteDoc,
    getDocs
} from 'firebase/firestore';

const firebaseConfig = {
    // here copy what is on .env
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function getCollectionData(collectionName) {
    const col = collection(db, collectionName)
    const docs = await getDocs(col)

    return docs
}

async function addDocument(collectionName, data) {
    const col = collection(db, collectionName)
    return await addDoc(col, data)
}

async function removeDocument(collectionName, uid) {
    return await deleteDoc(doc(db, collectionName, uid));
}

export {db, getCollectionData, addDocument, removeDocument}
