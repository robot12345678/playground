import React from "react";
import { observer } from "mobx-react";
import {
  AnimalCount,
  AnimalHousing,
  AnimalName,
  AnimalVoice
} from "./components";
import './style.css'

const s = {
  button: {
    backgroundColor: "mintcream",
    borderColor: "powderblue",
    borderRadius: 100,
    margin: 10,
    padding: 10,
  },
  dogeInHouse: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
};
@observer
export default class AnimalList extends React.Component {
  static count = 1;
  render() {
    const store = this.props.store;
    return (
      <div>
        <div style={s.dogeInHouse}>
          <AnimalName name={store.animalName} />
          <plaintext> in a </plaintext> 
          <AnimalHousing animalHousing={store.animalHousing} />
          <plaintext> says </plaintext> 
          <AnimalVoice onClick={this.onclick} voice={store.voice} />
        </div>
        <AnimalCount animalCount={store.animalCount} />
        <div>{ store.dogHi }</div>
        <button onClick={this.handleBuyButton} style={s.button}>
          Купи собаку
        </button>
      </div>
    );
  }
  onclick = () => {
    const store = this.props.store;

    AnimalList.count++;
    store.voice =
      AnimalList.count % 2 === 0
        ? store.voice.toUpperCase()
        : store.voice.toLowerCase();
  };
  handleBuyButton = () => {
    const store = this.props.store;
    store.animalCount.value++;
  };
}
