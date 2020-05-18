import firebase from "firebase";
var firebaseConfig = {
  apiKey: "AIzaSyAJgqaYVjsFQgAhylcjLBhI1hbkH5yUWl8",
  authDomain: "fir-react-starter-8847f.firebaseapp.com",
  databaseURL: "https://fir-react-starter-8847f.firebaseio.com",
  projectId: "fir-react-starter-8847f",
  storageBucket: "fir-react-starter-8847f.appspot.com",
  messagingSenderId: "1010558371057",
  appId: "1:1010558371057:web:05b100918a64dca03c1550",
  measurementId: "G-3CW9CHBMF8",
};
// Initialize Firebase
var fire = firebase.initializeApp(firebaseConfig);
export default fire;
