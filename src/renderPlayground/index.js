import React from "react";
import { render } from "react-dom";
import Hello from "./Hello";
import { ObservableMap, observable, observe, computed, intercept } from "mobx";
import { observer } from "mobx-react";
import ObservableList from "./ObservableList";
import AnimalList from "./AnimalList";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

export const store = new ObservableList();
// const name = store.animalCount.value;
// const dogHi = computed(() => store.voice + "! My name is " + name);
// export const dogHiTxt = dogHi.observe(change => console.log(change.newValue));

export const App = () => (
  <div style={styles}>
    <Hello name="X12" />
    <h2>{"Three variables downthere reinit on every form click \u2728"}</h2>
    <div>{"Open console to see what mobx rerenders"}</div>
    <hr />
    <AnimalList store={store} />
  </div>
);
