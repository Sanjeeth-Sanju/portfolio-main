import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from "./App";
import "./css/styles.css";
import "./css/navbar.css";
import "./css/home.css";
import "./css/about.css";
import "./css/skills.css";
import "./css/project.css";
import "./css/contact.css";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
