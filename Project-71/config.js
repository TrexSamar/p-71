import firebase from 'firebase'
require("@firebase/firestore")

const firebaseConfig = {
 //Add configuration here
 
  
 apiKey: "AIzaSyBjO3_t5Tl1e-g6_YkLLWheEZ6ArYzGvAE",
 authDomain: "project-71-87c91.firebaseapp.com",
 databaseURL: "https://project-71-87c91-default-rtdb.firebaseio.com",
 projectId: "project-71-87c91",
 storageBucket: "project-71-87c91.appspot.com",
 messagingSenderId: "744979742479",
 appId: "1:744979742479:web:97f811c03547ecbf7e487a",
 measurementId: "G-5LQ6V9T975"
};
 
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()

