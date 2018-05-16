import React from "react";
import { observer } from "mobx-react";

@observer
export default class AnimalVoice extends React.Component {
  render() {
    console.log("render animalVoice");
    return <div>{this.props.voice}</div>;
  }
}
