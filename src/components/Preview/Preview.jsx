import React, { useEffect } from "react";
import { myVideo } from "./Preview.js";
import './PreviewStyle.css';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Pause } from "../../data";
import { Play } from "../../data";
import { FurnitureVideo } from "../../data";
import { Xpic } from "../../data";
const Preview = () => {
  useEffect(() => {
    myVideo();
  }, []);

  return (
    <div className="-mt-[100px]">
      <div className="bg-show">
        <div className="link">
          <a href="#" className="link_a flex flex-col">
            Play <ChevronRightIcon/>
          </a>
        </div>
        <div className="overlay">
          <div className="image">
            <img src={Xpic} alt="" className="cancel" />
            <video src={FurnitureVideo} id="video" style={{width:"100%", height: "auto"}}></video>
            <div className="bg-player">
              <img className="player" src={Play} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preview;
