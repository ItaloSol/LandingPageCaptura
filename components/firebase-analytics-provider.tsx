'use client'; // This directive marks it as a Client Component

import { useEffect } from 'react';
import { initializeApp, getApps } from 'firebase/app';
import { getAnalytics, isSupported } from 'firebase/analytics';

// Your web app's Firebase configuration using environment variables
const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
    measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID
};

// Initialize Firebase
// Check if Firebase has already been initialized
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

// Initialize Analytics only if supported (runs in browser)
if (typeof window !== 'undefined') {
    isSupported().then((supported) => {
        if (supported) {
            getAnalytics(app);
            console.log("Firebase Analytics initialized.");
        } else {
            console.log("Firebase Analytics is not supported in this environment.");
        }
    });
}


// This component doesn't render anything itself, it just runs the initialization logic
export default function FirebaseAnalyticsProvider({ children }: { children: React.ReactNode }) {
    // The initialization logic runs when the module is loaded.
    // You could potentially add more complex logic inside useEffect if needed,
    // e.g., user-specific tracking after login.
    return <>{children}</>; // Render children directly
}