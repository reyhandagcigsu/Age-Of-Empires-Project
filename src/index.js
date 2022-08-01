import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import store from "./redux/store";
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);
