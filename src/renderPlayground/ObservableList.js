import { ObservableMap, observable } from "mobx";

export default class ObservableList {
  @observable
  animalCount = {
    value: 0
  };
  @observable animalName = "Doge";
  @observable voice = "bark";
  @observable animalHousing = new ObservableMap({ Doge: { name: "DogHouse" } });
}
