
import React from "react";
import ReactDOM from "react-dom/client";
import { ClerkProvider } from "@clerk/clerk-react";
import App from "./App";
import "./index.css";

// Clerk publishable key (must be provided via Vite env). If missing, render without Clerk.
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY as string | undefined;

if (!PUBLISHABLE_KEY) {
  console.warn(
    "Clerk disabled: missing VITE_CLERK_PUBLISHABLE_KEY. The app will render without authentication."
  );
}

const root = document.getElementById("root")!;
ReactDOM.createRoot(root).render(
  <React.StrictMode>
    {PUBLISHABLE_KEY ? (
      <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
        <App />
      </ClerkProvider>
    ) : (
      <App />
    )}
  </React.StrictMode>
);
