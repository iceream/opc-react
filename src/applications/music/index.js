import "./style.css"
import iconImg from "../../static/images/music.png"
// app 组件
import AppIcon from "../../components/app/icon"
import Toolbar from "../../components/app/toolsbar"
// 自定义hooks
import useWindowZoom from "../../customhooks/window-zoom"
import usePrepositionWindow from "../../customhooks/preposition-window"

let Music = {
  name: "music",
  cname: "音乐",
  version: "1.0.0",
  iconImg,
  Icon: MusicIcon,
  UI: MusicUI
}

function MusicIcon (props) {
  return (
    <AppIcon theApp={Music} />
  );
}

function MusicUI () {
  useWindowZoom(Music.name, { right: true, bottom: true, rightBottom: true })
  usePrepositionWindow(Music.name)
  return (
    <div id="music" className="application">
      <Toolbar theApp={Music} />
    </div>
  );
}

export default Music;