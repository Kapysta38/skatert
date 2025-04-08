import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { HomePage } from "@/pages/home/ui/homePage.tsx";
import { EventProvider } from "@/entities/event";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <EventProvider>
      <HomePage />
    </EventProvider>
  </StrictMode>,
);
