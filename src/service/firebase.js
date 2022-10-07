// import { initializeApp } from "firebase/app";
// import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
// import { setToLocalStorage } from "../utils/localStorage";
// const firebaseConfig = {
//   apiKey: "AIzaSyAANRDpRZRk3yN8Z2DEBEZXdteSBkCvx4s",
//   authDomain: "extreme-tooling-364807.firebaseapp.com",
//   projectId: "extreme-tooling-364807",
//   storageBucket: "extreme-tooling-364807.appspot.com",
//   messagingSenderId: "828050058294",
//   appId: "1:828050058294:web:912dde415daa5769623c97",
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// export const auth = getAuth(app);
// export const Provider = new GoogleAuthProvider();

// export const signInwithGoogle = () => {
//   signInWithPopup(auth, Provider)
//     .then((data) => {
//       let { user } = data;
//       let { accessToken, displayName, photoURL } = user;
//       setToLocalStorage("token", accessToken);
//       setToLocalStorage("name", displayName);
//       setToLocalStorage("url", photoURL);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };
