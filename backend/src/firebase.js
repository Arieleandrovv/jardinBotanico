require ('dotenv').config();

const { initializeApp, applicationDefault } = require('firebase-admin/app');
const {getFirestore}=require('firebase-admin/firestore');
const admin=require('firebase-admin');

initializeApp({
    credential: applicationDefault(),
    storageBucket: 'gs://botanicadb-9e2d8.appspot.com'
});

const db = getFirestore();
const bucket = admin.storage().bucket();

module.exports = {
    db,
    bucket
};