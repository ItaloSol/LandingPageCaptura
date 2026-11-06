declare global {
  interface Window {
    fbq?: (event: string, eventName: string, params?: Record<string, unknown>) => void;
    gtag?: (command: string, eventName: string, params?: Record<string, unknown>) => void;
  }
}

export {};
