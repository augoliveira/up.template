import React from "react";

class Split extends React.Component {
  target = React.createRef();

  split = () => {
    if (this.targetCurrent) {
      Splitting({ target: this.targetCurrent });
    }
  };

  componentDidMount = this.split;
  componentDidUpdate = this.split;

  render() {
    return <div ref={this.target}>{this.props.children}</div>;
  }
}

export default Split;
