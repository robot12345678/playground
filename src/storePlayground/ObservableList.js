import { computed, ObservableMap, observable } from "mobx";

export default class ObservableList {
  @observable
  animalCount = {
    value: 0
  };
  @observable animalName = "Doge";
  @observable voice = "bark";
  @observable animalHousing = new ObservableMap({ Doge: { name: "DogHouse" } });

  @computed get dogHi() {
    return this.voice + '! We are ' + this.animalCount.value
  }
}
