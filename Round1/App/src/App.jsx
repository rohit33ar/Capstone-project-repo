import ReactDOM from "react-dom";
import Navbar from "./components/Navbar";
import Body from "./components/Body";
import happy from "./assests/happy.jpg";
import Ins from "./components/Insurance";
import About from "./components/about";
import Faq from "./components/faq";
import Form from "./components/form";
import News from "./components/New";
export default function App() {
  const Bg_style = {
    backgroundImage: `url(${happy})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
  };
  return (
    <div className=" bg-white">
      <div className="grid grid-rows-10 bg-white">
        <div style={Bg_style}>
          <Navbar />
          <Body />
        </div>
        <div className="bg-[#EEEDED] w-[100vw] h-[150vh]">
          <Ins />
        </div>
        <div>
          <About />
        </div>
        <div className="">
          <Faq />
        </div>
        <div className=" mt-[25vh]">
          <Form />
        </div>
        <div className="">
          <News />
        </div>
      </div>
    </div>
  );
}
