import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./App.css";
import Parse from "parse";

Parse.initialize(
  "grXin7k7BOWTyMnLo93KE9cHGsz4pxkQGNdo4IjO",
  "3pe5VGRtmuKTYyW3dEIewgZCu7bzziEXjwwoyiRp"
);

Parse.serverURL = "https://parseapi.back4app.com/";

ReactDOM.render(

  <React.StrictMode>
      <App />  
  </React.StrictMode>,
  document.getElementById("root")
);