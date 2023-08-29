import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
//import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/styles/bootstrap.custom.css";
import "./assets/styles/index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import PrivateRoute from "./components/PrivateRoute";
import Dashboard from "./Screens/Dashboard";
import CustomerDetailsScreen from "./Screens/CustomerDetailsScreen";
import LoginScreen from "./Screens/LoginScreen";

// Create routes
const routes = createRoutesFromElements(
  <Route path='/' element={<App />}>
    <Route index={true} element={<LoginScreen />} />
    {""}
    <Route path='/login' element={<LoginScreen />} />
    <Route path='' element={<PrivateRoute />}>
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path='/customer/:id' element={<CustomerDetailsScreen />} />
    </Route>
  </Route>
);

const router = createBrowserRouter(routes);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
