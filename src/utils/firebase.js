import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyD89t91OcKHhZ-b1ZE4P_2Cb3KKKQBcf9w",
  authDomain: "thefrog-1344d.firebaseapp.com",
  databaseURL: "https://thefrog-1344d-default-rtdb.firebaseio.com",
  projectId: "thefrog-1344d",
  storageBucket: "thefrog-1344d.appspot.com",
  messagingSenderId: "312682288633",
  appId: "1:312682288633:web:34a536ad9af72df9021928",
  measurementId: "G-VT5SV2ZSXM"
};

export const app = initializeApp(firebaseConfig);