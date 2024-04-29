import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import { getDatabase, set, ref } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-database.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";


const firebaseConfig = {
  apiKey: "AIzaSyCWNHZkGc_agFLtmpZ0GQvetHJEQFmJFV8",
  authDomain: "proektoop.firebaseapp.com",
  databaseURL: "https://proektoop-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "proektoop",
  storageBucket: "proektoop.appspot.com",
  messagingSenderId: "365758124261",
  appId: "1:365758124261:web:c2287484940c45284c840c",
  measurementId: "G-6FCW183K83"
};


const app = initializeApp(firebaseConfig);
const db = getDatabase();
const auth = getAuth(app);

const RegForm = document.getElementById("register-form");
const RegFName = document.getElementById("register-first-name");
const RegLName = document.getElementById("register-last-name");
const RegEmail = document.getElementById("register-email");
const RegPassword = document.getElementById("register-password");
const RegSubmit = document.getElementById("register-submit-btn");

let RegisterUser = evt => {
  evt.preventDefault();

  createUserWithEmailAndPassword(auth, RegEmail.value, RegPassword.value)
  .then((credentials) => {
    set(ref(db, 'UsersAuthList/' + credentials.user.uid), {
      firstname: RegFName.value,
      lastname: RegLName.value
    })
  })
  .catch((error) => {
    alert(error.code);
    alert(error.message);
  })
}

RegForm.addEventListener('submit', RegisterUser)