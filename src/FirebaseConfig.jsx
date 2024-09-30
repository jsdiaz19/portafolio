import { initializeApp } from "firebase/app";
import { getStorage,ref, getDownloadURL } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyCyJWqk7yxk62qVqxNqs-u4HG6RJ07Ymfw",
    authDomain: "portafolio-ce100.firebaseapp.com",
    projectId: "portafolio-ce100",
    storageBucket: "portafolio-ce100.appspot.com",
    messagingSenderId: "436991119651",
    appId: "1:436991119651:web:df15e8c2837ed7b58ebc96"  
};
initializeApp(firebaseConfig);


  
const storage = getStorage();

const getDownloadFile = async(path) => {
  const url = await getDownloadURL(ref(storage, path));
  return url;
}


export { getDownloadFile};





