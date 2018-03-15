import * as firebase from 'firebase';
import moment from 'moment';

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database();
const db = database;

export { firebase, db as default };

// db.ref('expenses').on('child_removed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });
// db.ref('expenses').on('child_changed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });


// db.ref('expenses').push({
//   description: 'Gum',
//   notes: '',
//   amount: 199,
//   createdAt: 2421342341234
// });


// db.ref('expenses').on('value', (snapshot) => {
//   const expenses = [];
//   snapshot.forEach((childSnapshot) => {
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val()
//     });
//   });
//   console.log(expenses);
// });

// const dbSubscription = database.ref().on('value', (snapshot) => {
//   console.log(`${snapshot.val().name} is a ${snapshot.val().job.title}
//  at ${snapshot.val().job.company}`);
// }, (e) => {
//   console.log('something went wrong with data fetching');
// });

// setTimeout(() => database.ref('name').set('Zenek')
//   .then(() => console.log('Name changed'))
//   .catch((e) => console.log('Name Change Faild')), 5000);

// setTimeout(() => {
//   database.ref().off();
//   console.log('sub off');
// }, 10000);

// const onValueChange = database.ref().on('value', (snapshot) => {
//   const { name, job: { title, company } } = snapshot.val();
//   console.log(`${name} is a ${title} at ${company} `);
// });

// database.ref('location').once('value')
//   .then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
//   }).catch((e) => console.log(e));

// firebase.database().ref().set({
//   name: 'rafalsky',
//   age: 44,
//   stressLevel: 9,
//   job: {
//     title: 'SD',
//     company: 'google'
//   },
//   location: {
//     city: 'WRO',
//     country: 'PL'
//   },
//   isSingle: false
// });

// database.ref().update({
//   stressLevel: 6,
//   'job/company': 'amazon',
//   'location/city': 'WAW'
// });


// database.ref('att').set({
//   height: 175,
//   weight: 75
// }).then(() => {
//   console.log('Data posted');
// }).catch((e) => {
//   console.log('error ocures', e);
// });

// database.ref('isSingle').remove()
//   .then(() => console.log('REMOVED'))
//   .catch((e) => console.log(e));
