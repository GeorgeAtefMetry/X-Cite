import { initializeApp } from "firebase/app";
<<<<<<< HEAD
import { getAnalytics } from "firebase/analytics";
import { getFirestore} from 'firebase/firestore'

const firebaseConfig = {
<<<<<<< HEAD
    apiKey: "AIzaSyD4fCELzsCcBV6YGgc4dVDZphckfm3rWDU",
    authDomain: "x-cite-5d269.firebaseapp.com",
    databaseURL: "https://x-cite-5d269-default-rtdb.firebaseio.com",
    projectId: "x-cite-5d269",
    storageBucket: "x-cite-5d269.appspot.com",
    messagingSenderId: "937114559438",
    appId: "1:937114559438:web:ee837782bbee5db30c419f",
    measurementId: "G-WTTREF0R4P"
};
// const firebaseConfig = {
//     apiKey: "AIzaSyBBiJJcUrM2VnUhakNkpW4fE4rvjiXXqXs",
//     authDomain: "asom-test.firebaseapp.com",
//     projectId: "asom-test",
//     storageBucket: "asom-test.appspot.com",
//     messagingSenderId: "325030155628",
//     appId: "1:325030155628:web:1395b41579eb634b368f49"
//   };
=======
    // apiKey: "AIzaSyDzKdGN1Lx8nmG-jSGZXmaGo8z6X0jsKys",
    // authDomain: "x-cite-2.firebaseapp.com",
    // projectId: "x-cite-2",
    // storageBucket: "x-cite-2.appspot.com",
    // messagingSenderId: "827024114042",
    // appId: "1:827024114042:web:fbc05d8e2873cec1dd96c3"
        apiKey: "AIzaSyD4fCELzsCcBV6YGgc4dVDZphckfm3rWDU",
        authDomain: "x-cite-5d269.firebaseapp.com",
        databaseURL: "https://x-cite-5d269-default-rtdb.firebaseio.com",
        projectId: "x-cite-5d269",
        storageBucket: "x-cite-5d269.appspot.com",
        messagingSenderId: "937114559438",
        appId: "1:937114559438:web:ed3c31a1e44686db0c419f",
        measurementId: "G-HLB6B0YNJC"
};

>>>>>>> 894a0cf716b9ac31c6e94ba9a9477778a721485e

=======
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
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

const firebaseConfig = {
  apiKey: "AIzaSyBBiJJcUrM2VnUhakNkpW4fE4rvjiXXqXs",
  authDomain: "asom-test.firebaseapp.com",
  projectId: "asom-test",
  storageBucket: "asom-test.appspot.com",
  messagingSenderId: "325030155628",
  appId: "1:325030155628:web:1395b41579eb634b368f49",
};

>>>>>>> main
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const db = getFirestore(app);
export const auth = getAuth(app);
export default db;
// export default getFirestore(app)
