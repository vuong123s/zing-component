import React from "react";
import Img from "../img/sen-da-banh-bao.jpg";
import IconPlay from "../img/Play-icon-isolated-button-PNG-715x715.jpg";
import "../src/styles.css";

export default class ZingComponent extends React.Component {
  render() {
    return (
      <div className="img">
        <div className="image">
          <img src={Img} alt="" width={225} />
        </div>
        <img src={IconPlay} alt="" width={75} className="icon-play" />
      </div>
    );
  }
}
