import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyCAo1UNC0a89kqhpH3WgMxGoRGamxsN2XA",
  authDomain: "weight-app-ee888.firebaseapp.com",
  databaseURL: "https://weight-app-ee888.firebaseio.com",
  projectId: "weight-app-ee888",
  storageBucket: "weight-app-ee888.appspot.com",
  messagingSenderId: "866623995744"
};
firebase.initializeApp(config);

const db = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();



export { firebase, googleAuthProvider, db as default };
































// database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses')
//   .on('value', (snapshot) => {
//     const expenses = [];
//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         })
//     })
//     console.log(expenses);
//   });


// database.ref('expenses')
//   .once('value')
//   .then((snapshot) => {
//     const expenses = [];
//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         });
//     })    

//     console.log(expenses);
// });

// database.ref('expenses').push({
//     description: 'Gas',
//     note: '',
//     amount: 109500,
//     createdAt: 11654
// });


// database.ref('notes').push({
//     title: 'Course Topics',
//     body: 'React Native'
// });





// database.ref('notes/-LS5TisObsToFld59ydg').remove();



// database.ref('notes').set(notes);

// database.ref().on('value', (snapshot) => {
//     const key = snapshot.val();
//     console.log(`${key.name} is a ${key.job.title} at ${key.job.company}.`);
// });

// setTimeout(() => {
//    database.ref('job').update({
//         title: 'Tech'
// })}, 3000);

// database.ref()
//     .once('value')
//     .then((snapshot) => {
//         const val = snapshot.val();
//         console.log(val);
//     })
//     .catch((error) => {
//         console.log('Error fetching data', error);
//     })

// database.ref().set({
//     name: 'Ajerap',
//     age: 31,
//     stressLevel: 6,
//     job: {
//         title: 'barista',
//         company: 'JLB'
//     },
//     location: {
//         city: 'Montreal',
//         country: 'Canada'
//     },
// }).then(() => {
//     console.log('Data is saved!');
// }).catch((e) => { 
//     console.log('This failed.', e)
// });

// database.ref().update({
//     stressLevel: 9,
//     'job/company': 'amazon',
//     'location/city': 'Vancouver'
// });

// database.ref()
//         .remove()
//         .then(() => { console.log('Data removed!') })
//         .catch((error) => {
//             console.log('Something went wrong! Error: ', error)
//         });


