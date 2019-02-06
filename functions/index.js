/* const functions = require('firebase-functions');
const express = require('express');
const app = express();
const path = require('path');
const admin = require('firebase-admin');

const serviceAccount = require('../secrets.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://pandemicclone.firebaseio.com'
}); */

// app.get('/api', (req, res) => {
//   // if (req.query.num) {
//   //   res.send('Your num was ' + req.query.num)
//   // }
//   admin.database().ref('/blackRemaining').once('value').then(val => {res.send('There are ' + val.val() + 'remaining')})

// });

// app.get('/api/treat', (req, res) => {
//   let newTotal
//   admin.database().ref('/blackRemaining').once('value').then(val => {
//     newTotal = val.val() - 3;
//     // res.send(newTotal);
//   })
//   return admin.database().ref().update({'blackRemaining': 6}).then(() => res.send('lalala'))
// });

// app.get('/api/treat', (req, res) => {
//   const newTotal = admin.database().ref('/blackRemaining').once('value').then(val => {
//    return val.val() - 3;
//     // res.send(newTotal);
//   })
//   return admin.database().ref().update({'blackRemaining': 8}).then(() => res.send('lalala'))
// });

/* app.get('/api/treat', (req, res) => {
  admin.database().ref('/blackRemaining').once('value').then(snap => {
   return snap.val() - 1;
  }).then(nv => {
    return admin.database().ref().update({'blackRemaining': nv}).then(() => { res.send('lalala')})
  })
}); */

/* app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, '../public/index.html'), function(err) {
    if (err) {
      res.status(500).send(err)
    }
  })
}) */

//exports.app = functions.https.onRequest(app);


//NOTES TO REMOVE: needed the rewrites in firebase, firebase functions needed to not be there, webpack needed to be building and caching   npm run build watch
