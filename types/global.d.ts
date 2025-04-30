declare global {
  interface Window {
    fbq: (event: string, eventName: string, params?: Record<string, unknown>) => void;
    __LAST_FB_EVENT_ID?: string;
  }
}

export {};