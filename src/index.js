import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { restaurants } from "./data";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

const btn = document.querySelector("button");
const h1 = document.querySelector("h1");

const chooseSomeShit = (array) => {
  const chosen = Math.floor(Math.random() * array.length);
  h1.innerText = restaurants[chosen];
};

// document.querySelector('button').onClick = () => {
//   chooseSomeShit(restaurants);
// };

// h1.innerText = restaurants.join(", \n ");

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
