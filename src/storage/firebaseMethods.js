import { app } from './firebase';
import {
  getAuth,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import {
    getFirestore,
    getDoc,
    setDoc,
    addDoc,
    doc,
    collection,
    getDocs,
    updateDoc,
} from "firebase/firestore";
import { getStorage, uploadBytes, ref, getDownloadURL } from 'firebase/storage'

//get the auth instance
const auth = getAuth(app);

//get the db instance
const db = getFirestore(app);

//get tge storage instance
const storage = getStorage(app)

//Sign in with email and password
export const onSignIn = async ({ email, password }) => {
  return await signInWithEmailAndPassword(auth, email, password);
};

//Sign in with provider --> Gmail
const googleAuth = new GoogleAuthProvider();

export const onSingInGmail = async () => {
  try {
    return await signInWithPopup(auth, googleAuth);
  } catch (error) {
    return error;
  }
};
//Register a new user with email and password
export const createNewUser = async (email, password) =>{
  try {
    return await createUserWithEmailAndPassword(auth, email, password);    
  } catch (error) {
    return error.code, error.message;
  }

}
//Sign out

export const onSignOut = async () => {
  return await signOut(auth);
};

//GET 

export const getData = async (collectionName) => {
    const collection_ref = collection(db, collectionName);
    const response = await getDocs(collection_ref);
    const results = response.docs.map((item) => ({
        id: item.id,
        data: item.data()
    }));
    return results;
};

//GET by id
export const getById = async (id, collectionName) => {
  const docRef = doc(collection(db, collectionName), id);
  const docData = await getDoc(docRef);
  if (docData.exists()) {
    return docData.data();
  } else {
    return null;
  }
};

//POST


export const addData = async (collectionName, values, files) => {
    const collectionRef = collection(db, collectionName);
    const docRef = await addDoc(collectionRef, values);
    const fileUrls = [];
    console.log("paso por acá")

  for (const file of files) {
    const fileRef = ref(storage, `points/${docRef.id}/${file.name}`);
    await uploadBytes(fileRef, file);
    const fileUrl = await getDownloadURL(fileRef);
    fileUrls.push(fileUrl);
  }

  await updateDoc(doc(db, collectionName, docRef.id), { photos: fileUrls });

  console.log(`Document created with ID: ${docRef.id} in collection ${collectionName}`);
  return docRef.id;
};  