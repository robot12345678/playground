import React from "react";
import { observer } from "mobx-react";

@observer
export default class AnimalHousing extends React.Component {
  render() {
    console.log("render animalHousing");
    return <div>{this.props.animalHousing.get("Doge").name}</div>;
  }
}
