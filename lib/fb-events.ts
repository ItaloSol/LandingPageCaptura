// Define the structure for the data we send TO the API route
interface ClientEventData {
    eventName: string;
    eventSourceUrl: string;
    userData?: { [key: string]: any }; // Keep flexible for different user data fields
    customData?: { [key: string]: any }; // Keep flexible for different custom data fields
}

export const sendFbEvent = async (eventData: ClientEventData) => {
    try {
        const response = await fetch('/api/fb-events', { // Relative URL to your API route
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                ...eventData,
                eventTime: Math.floor(Date.now() / 1000), // Add current timestamp
            }),
        });

        if (!response.ok) {
            const errorResult = await response.json();
            console.error('Failed to send FB event via API:', response.status, errorResult);
            // Handle client-side error feedback if needed
        } else {
            const successResult = await response.json();
            console.log('FB event sent successfully via API:', successResult);
            // Optional: Trigger UI feedback
        }
    } catch (error) {
        console.error('Error calling FB event API:', error);
    }
};

// Example Usage (how you'd call it from a component):
/*
import { sendFbEvent } from '@/lib/fb-events';

const handleContactClick = () => {
  sendFbEvent({
    eventName: 'Contact',
    eventSourceUrl: window.location.href, // Get current page URL
    // Add userData or customData if available
    // userData: { fbp: getCookieValue('_fbp') } // Example: sending browser ID
  });
  // ... rest of the click handler logic (e.g., open WhatsApp link)
};
*/