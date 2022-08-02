import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./fontawesome-free-6.1.1-web/css/all.css";
import "./fontawesome-free-6.1.1-web/css/fontawesome.css";
import { CookiesProvider } from "react-cookie";

import "./language";
import Spinner from "./Components/Spinner/Spinner";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Suspense fallback={<Spinner/>}>
      <CookiesProvider>
        <App />
      </CookiesProvider>
    </Suspense>
  </React.StrictMode>
);

reportWebVitals();
