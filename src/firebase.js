import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore} from 'firebase/firestore'
import { getAuth } from "firebase/auth";

// const firebaseConfig = {
//     apiKey: "AIzaSyD4fCELzsCcBV6YGgc4dVDZphckfm3rWDU",
//     authDomain: "x-cite-5d269.firebaseapp.com",
//     databaseURL: "https://x-cite-5d269-default-rtdb.firebaseio.com",
//     projectId: "x-cite-5d269",
//     storageBucket: "x-cite-5d269.appspot.com",
//     messagingSenderId: "937114559438",
//     appId: "1:937114559438:web:ee837782bbee5db30c419f",
//     measurementId: "G-WTTREF0R4P"
// };

// const firebaseConfig = {
//     apiKey: "AIzaSyDzKdGN1Lx8nmG-jSGZXmaGo8z6X0jsKys",
//     authDomain: "x-cite-2.firebaseapp.com",
//     projectId: "x-cite-2",
//     storageBucket: "x-cite-2.appspot.com",
//     messagingSenderId: "827024114042",
//     appId: "1:827024114042:web:fbc05d8e2873cec1dd96c3"
// };

const firebaseConfig = {
    apiKey: "AIzaSyDsOgpLuHfdHQPdXOAcVVxmkn5O3r7mits",
    authDomain: "x-cite-db.firebaseapp.com",
    projectId: "x-cite-db",
    storageBucket: "x-cite-db.appspot.com",
    messagingSenderId: "693242153026",
    appId: "1:693242153026:web:aad71819fd14e68a3485db",
    measurementId: "G-7ZN2ZSC3ZB"
  };

// const firebaseConfig = {
//   apiKey: "AIzaSyBBiJJcUrM2VnUhakNkpW4fE4rvjiXXqXs",
//   authDomain: "asom-test.firebaseapp.com",
//   projectId: "asom-test",
//   storageBucket: "asom-test.appspot.com",
//   messagingSenderId: "325030155628",
//   appId: "1:325030155628:web:1395b41579eb634b368f49"
// };



const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const db = getFirestore(app);
export const auth = getAuth(app);
export default db;
// export default getFirestore(app)
