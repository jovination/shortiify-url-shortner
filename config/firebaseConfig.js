const { initializeApp } = require("firebase/app");
const { getAnalytics, isSupported } = require("firebase/analytics");

// Firebase configuration object
const firebaseConfig = {
    apiKey: "AIzaSyDcb2gGt3ivL-wLUEU6vZ7L-oRMK9e1Wzo",
    authDomain: "shortiify-website.firebaseapp.com",
    projectId: "shortiify-website",
    storageBucket: "shortiify-website.appspot.com",
    messagingSenderId: "61015371527",
    appId: "1:61015371527:web:d3fd34a9dc8a9b796b5fa2",
    measurementId: "G-4N329SZPWY"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Function to initialize Firebase Analytics if supported
const initializeFirebaseAnalytics = async () => {
    if (typeof window !== "undefined") { // Check if running in a browser environment
        const supported = await isSupported();
        if (supported) {
            const analytics = getAnalytics(firebaseApp);
            console.log("Firebase Analytics initialized");
            return analytics;
        } else {
            console.log("Firebase Analytics is not supported in this environment.");
            return null;
        }
    }
    console.log("Not running in a browser environment. Skipping Analytics initialization.");
    return null;
};

// Export the firebaseApp and analytics instances
module.exports = { firebaseApp, analytics: initializeFirebaseAnalytics() };
