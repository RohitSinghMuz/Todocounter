import React, { Component, ReactNode, ComponentType } from "react";
import Countclass from "../counter/Countclass";

interface HocClassProps {}

class Hocclass extends Component<HocClassProps> {
  render(): ReactNode {
    return (
      <>
        <div style={{ width: "75%", margin: "10px auto" }}>
          <HocRed cmd={Countclass} />
          <Hocgreen cmd={Countclass} />
          <Hocyelloow cmd={Countclass} />
        </div>
      </>
    );
  }
}

interface HocComponentProps {
  cmd: ComponentType<any>;
}

class HocRed extends Component<HocComponentProps> {
  render(): ReactNode {
    const PropsComponent = this.props.cmd;
    return (
      <>
        <div style={{ width: "75%", margin: "10px auto" }}>
          <h2 style={{ backgroundColor: "red", fontSize: "35px" }}>
            <PropsComponent />
          </h2>
        </div>
      </>
    );
  }
}

class Hocgreen extends Component<HocComponentProps> {
  render(): ReactNode {
    const PropsComponent = this.props.cmd;
    return (
      <>
        <div style={{ width: "75%", margin: "10px auto" }}>
          <h2 style={{ backgroundColor: "green", fontSize: "35px" }}>
            <PropsComponent />
          </h2>
        </div>
      </>
    );
  }
}

class Hocyelloow extends Component<HocComponentProps> {
  render(): ReactNode {
    const PropsComponent = this.props.cmd;
    return (
      <>
        <div style={{ width: "75%", margin: "10px auto" }}>
          <h2 style={{ backgroundColor: "yellow", fontSize: "35px" }}>
            <PropsComponent />
          </h2>
        </div>
      </>
    );
  }
}

export default Hocclass;
