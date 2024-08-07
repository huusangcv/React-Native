import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import "nprogress/nprogress.css";
import { PersistGate } from "redux-persist/integration/react";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Provider store={store}>
        {/* <React.StrictMode> */}
        <PersistGate loading={null} persistor={persistor}>
            <BrowserRouter>
                <Layout />
            </BrowserRouter>
            {/* </React.StrictMode> */}
        </PersistGate>
    </Provider>
);
reportWebVitals();
