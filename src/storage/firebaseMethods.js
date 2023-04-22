import { app } from './firebase';
import {
    getFirestore,
    setDoc,
    doc,
    collection,
    getDocs,
    updateDoc,
  } from "firebase/firestore";

//get the db instance
const db = getFirestore(app);   

//GET 

export const getData = async (collectionName) => {
    const categoriesCollection = collection(db, collectionName);
    const response = await getDocs(categoriesCollection);
    const results = response.docs.map((item) => ({
        id: item.id,
        data: item.data()
      }));
      return results;
  };