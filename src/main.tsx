import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { IonApp, setupIonicReact } from "@ionic/react";
setupIonicReact();
ReactDOM.createRoot(document.getElementById("root")!).render(
  <IonApp>
    <App />
  </IonApp>
);
