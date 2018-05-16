import React from "react";
import { observer } from "mobx-react";

@observer
export default class AnimalVoice extends React.Component {
  render() {
    return <div onClick={this.props.onClick}>{this.props.voice}</div>;
  }
}
