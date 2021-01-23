import React, { useState } from "react";
import "./style.css"

import Toolbar from "../../components/app-tool-bar"

let Setting = {
  name: "Setting",
  version: "1.0.0",
  Icon: SettingIcon,
  UI: SettingUI
}

function SettingIcon(props) {
  return (
    <div className="icon setting" onClick={props.handleClick}>设置icon</div>
  );
}

function SettingUI(props) {

  let [isMinimize, setMinimize] = useState(false)
  // console.log(setMinimize);
 
  function minimizeApp() {
     setMinimize(!isMinimize)
  }

  return (
    <div id="setting" className={isMinimize ? "minimize" : ""}>
      <Toolbar theApp={{...props.theApp, minimizeApp}}/>
    </div>
  );
}

export default Setting;