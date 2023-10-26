import {createGlobalStyle} from "styled-components";
import LoraBold from "../assets/fonts/Lora-Bold.ttf";
import LoraRegular from "../assets/fonts/Lora-Regular.ttf";
import QuicksandBold from "../assets/fonts/Quicksand-Bold.ttf";
import QuicksandLight from "../assets/fonts/Quicksand-Light.ttf";
import QuicksandMedium from "../assets/fonts/Quicksand-Medium.ttf";
import QuicksandRegular from "../assets/fonts/BambinoNew-Regular.woff2";


const FontStyles = createGlobalStyle`

@font-face {
    font-family: "serif";
    font-weight: 400;
    src: url(${LoraBold}) format('truetype');
}

@font-face {
  font-family: "serif";
  font-weight: 700;
  src: url(${LoraRegular}) format('truetype');
}

@font-face {
  font-family: "sans";
  font-weight: 300;
  src: url(${QuicksandLight}) format('truetype');
}

@font-face {
  font-family: "sans";
  font-weight: 400;
  src: url(${QuicksandRegular}) format('truetype');
}

@font-face {
  font-family: "sans";
  font-weight: 500;
  src: url(${QuicksandMedium}) format('truetype');
}

@font-face {
  font-family: "sans";
  font-weight: 700;
  src: url(${QuicksandBold}) format('truetype');
}

`

export default FontStyles