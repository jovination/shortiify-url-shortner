const { initializeApp } = require ("firebase/app");
const { getAnalytics } = require ("firebase/analytics");

const firebaseConfig = {
    apiKey: "AIzaSyDcb2gGt3ivL-wLUEU6vZ7L-oRMK9e1Wzo",
    authDomain: "shortiify-website.firebaseapp.com",
    projectId: "shortiify-website",
    storageBucket: "shortiify-website.firebasestorage.app",
    messagingSenderId: "61015371527",
    appId: "1:61015371527:web:d3fd34a9dc8a9b796b5fa2",
    measurementId: "G-4N329SZPWY"
  };



const firebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseApp);

module.exports = { firebaseApp, analytics };