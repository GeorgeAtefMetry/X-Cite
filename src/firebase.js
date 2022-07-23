import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore} from 'firebase/firestore'

const firebaseConfig = {
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

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default getFirestore()