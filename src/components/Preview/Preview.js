import { Pause } from "../../data";
import { Play } from "../../data";
export function myVideo() {
  let links = document.querySelector(".link_a");
  let overs = document.querySelector(".bg-show .overlay");
  let exit = document.querySelector(".cancel");
  let player = document.querySelector(".player");
  let videos = document.getElementById("video");

  links.onclick = (ed) => {
    ed.preventDefault();
    overs.style.display = "block";
  };
  exit.onclick = () => {
    overs.style.display = "none";
  };
  player.onclick = () => {
    if (videos.paused) {
      videos.play();
      player.src = Pause;
    } else {
      videos.pause();
      player.src = Play;
    }
  };
}
