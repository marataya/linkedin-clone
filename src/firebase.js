import firebase from 'firebase'


const firebaseConfig = {
    apiKey: "AIzaSyAGb_NIllN0chOdzaKhWcpW3LDFzBg2_5M",
    authDomain: "linkedin-clone-70e47.firebaseapp.com",
    projectId: "linkedin-clone-70e47",
    storageBucket: "linkedin-clone-70e47.appspot.com",
    messagingSenderId: "272299000228",
    appId: "1:272299000228:web:91edc4414d87659c588131"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()

export { db, auth }