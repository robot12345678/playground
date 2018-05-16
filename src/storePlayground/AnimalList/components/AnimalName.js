import React from "react";
import { observer } from "mobx-react";

@observer
export default class AnimalName extends React.Component {
  render() {
    return <div>{this.props.name}</div>;
  }
}
