import app from "firebase/app";
import "firebase/auth";
import "firebase/database";

//  const prodConfig = {
//   apiKey: "AIzaSyC5MueShoA7ir8IbGtBrY9xgikEUcO2-rg",
//   authDomain: "pandemic-cr.firebaseapp.com",
//   databaseURL: "https://pandemic-cr.firebaseio.com",
//   projectId: "pandemic-cr",
//   storageBucket: "pandemic-cr.appspot.com",
//   messagingSenderId: "101783012584"
// };

//  const devConfig = {
//   apiKey: "AIzaSyBCo4W6yWle1FH8jZhe8yhIENUuuGCi5nQ",
//   authDomain: "dev-pandemic.firebaseapp.com",
//   databaseURL: "https://dev-pandemic.firebaseio.com",
//   projectId: "dev-pandemic",
//   storageBucket: "dev-pandemic.appspot.com",
//   messagingSenderId: "881104490800"
// };

//  const config = process.env.NODE_ENV === "production" ? prodConfig : devConfig;

const config = {
  apiKey: "AIzaSyCIQpyPN_lfkfeUjcMbimaRdR97Vs2Z5YM",
  authDomain: "pandemicdaviddev.firebaseapp.com",
  databaseURL: "https://pandemicdaviddev.firebaseio.com",
  projectId: "pandemicdaviddev",
  storageBucket: "pandemicdaviddev.appspot.com",
  messagingSenderId: "33460500980"
};

class Firebase {
  constructor() {
    app.initializeApp(config);
    this.auth = app.auth();
    this.db = app.database();
  }

  // *** User API ***

  database = () => this.db.ref();
  playerOne = () => this.db.ref("playerOne");
}

export default Firebase;
