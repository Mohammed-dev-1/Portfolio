import "../assets/style/ComponentStyle.scss";
import "../assets/style/globalStyle.scss";
import "../assets/style/styleSwitcher.scss";
import "../assets/style/Responsive.scss"
import innerElement from "./reactive";
import navToggle from "./setting";
import portfolioSetting from "./portfolio";
import testiSlide from "./testimonial";
import sectionToggle from "./section";
import colorSwitcher from "./colorSwitcher";
import changeMode from "./changeMode";

innerElement();
navToggle();
portfolioSetting();
testiSlide();
sectionToggle();
colorSwitcher();
changeMode();

export default {
  innerElement,
  navToggle,
  portfolioSetting,
  testiSlide,
  sectionToggle,
  colorSwitcher,
  changeMode
}  