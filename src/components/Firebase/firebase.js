import app from "firebase/app";
import "firebase/auth";
import "firebase/database";

const prodConfig = {
  apiKey: "AIzaSyC5MueShoA7ir8IbGtBrY9xgikEUcO2-rg",
  authDomain: "pandemic-cr.firebaseapp.com",
  databaseURL: "https://pandemic-cr.firebaseio.com",
  projectId: "pandemic-cr",
  storageBucket: "pandemic-cr.appspot.com",
  messagingSenderId: "101783012584"
};

const devConfig = {
  apiKey: "AIzaSyBCo4W6yWle1FH8jZhe8yhIENUuuGCi5nQ",
  authDomain: "dev-pandemic.firebaseapp.com",
  databaseURL: "https://dev-pandemic.firebaseio.com",
  projectId: "dev-pandemic",
  storageBucket: "dev-pandemic.appspot.com",
  messagingSenderId: "881104490800"
};

const config = process.env.NODE_ENV === "production" ? prodConfig : devConfig;

class Firebase {
  constructor() {
    app.initializeApp(config);
    this.auth = app.auth();
    this.db = app.database();
  }

  // *** User API ***

  database = () => this.db.ref();
  cities = () => this.db.ref("cities");
  playerOne = () => this.db.ref("playerOne");
}

export default Firebase;
