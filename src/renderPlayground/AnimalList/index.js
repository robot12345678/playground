import React from "react";
import { observer } from "mobx-react";
import {
  AnimalCount,
  AnimalHousing,
  AnimalName,
  AnimalVoice
} from "./components";

const hm = {
  value: "Doge"
};
const s = {
  button: {
    backgroundColor: 'lightgreen',
    borderColor: 'goldenrod',
    borderRadius: 100,
    height: 30,
  }
};
@observer
export default class AnimalList extends React.Component {
  static count = 1;
  render() {
    const store = this.props.store;
    return (
      <div>
        <AnimalVoice onClick={this.onclick} voice={store.voice} />
        <AnimalName name={store.animalName} />
        <AnimalHousing animalHousing={store.animalHousing} />
        <AnimalCount animalCount={store.animalCount} />
        {/* <div>{ dogHiTxt }</div> */}
        <button onClick={this.handleBuyButton} style={s.button} >Купи собаку</button>
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
    store.animalCount = {
      value: 0
    };
    store.animalName = hm.value;
    const house = store.animalHousing.get("Doge");
    house.name = "DogHouse";
    store.animalHousing.set("Doge", house);
  };
  handleBuyButton = () => {
    const store = this.props.store;
    store.animalCount.value++;
  };
}
