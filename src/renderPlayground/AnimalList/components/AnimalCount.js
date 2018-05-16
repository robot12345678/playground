import React from "react";
import { observer } from "mobx-react";

@observer
export default class AnimalCount extends React.Component {
  render() {
    console.log("render animalCount");
    return <div>{this.props.animalCount.value}</div>;
  }
}
