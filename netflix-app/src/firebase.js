// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyAZBWQts2As3Ib5yclAAs4xvi3FFtmNr9g',
	authDomain: 'netflix-new-2007d.firebaseapp.com',
	projectId: 'netflix-new-2007d',
	storageBucket: 'netflix-new-2007d.appspot.com',
	messagingSenderId: '245149341947',
	appId: '1:245149341947:web:0e90d6c4c72f8d8533b85e',
	measurementId: 'G-MTBBE0P4WK',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
