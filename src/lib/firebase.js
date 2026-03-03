import { initializeApp, getApps, getApp } from 'firebase/app';
import { getFirestore, connectFirestoreEmulator } from 'firebase/firestore';
import { browser, dev } from '$app/environment';

const firebaseConfig = {
    apiKey: "AIzaSyAaqDVxolZFagNkLHIWMIe0CsEeM0oQh78",
    authDomain: "kylehe-notes.firebaseapp.com",
    projectId: "kylehe-notes",
    storageBucket: "kylehe-notes.firebasestorage.app",
    messagingSenderId: "751334076604",
    appId: "1:751334076604:web:5627979301ef4cec0320b9"
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
export const db = getFirestore(app);

if (dev && browser) {
    try {
        connectFirestoreEmulator(db, 'localhost', 8080);
    } catch (_) {
        // already connected
    }
}
