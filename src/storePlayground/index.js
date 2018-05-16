import React from "react";
import Hello from "./Hello";
import ObservableList from "./ObservableList";
import AnimalList from "./AnimalList";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

export const store = new ObservableList();

export const App = () => (
  <div style={styles}>
    <Hello name="X12" />
    <h2>{"Let's try to compute the values"}</h2>
    <div>{"Hit the bark or button(not the dog!)"}</div>
    <hr />
    <AnimalList store={store} />
  </div>
);
