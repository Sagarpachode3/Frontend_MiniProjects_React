import "./App.css";
import Accordian from "./components/accordian";
import ImageSlider from "./components/image-slider";
import LightDarkModeSwitch from "./components/light-dark-mode";
import LoadMoreData from "./components/load-more-data";
import QRCodeGenrator from "./components/qr-generator";
import RandomColor from "./components/random-color";
import ScrollIndicator from "./components/scroll-indicator";
import StarRating from "./components/star-rating";
import TreeView from "./components/tree-view";
import menus from "./components/tree-view/data";

function App() {
  return (
    <div className="App">
      {/* Accordian component */}
      {/* <Accordian /> */}

      {/* Random Color Component */}
      {/* <RandomColor /> */}

      {/* Star Rating Component */}
      {/* <StarRating noOfStars={10} /> */}

      {/* Image-Slider Component */}
      {/* <ImageSlider
        url={"https://picsum.photos/v2/list"}
        page={"1"}
        limit={"10"}
      /> */}

      {/* Load more products/images (website) */}
      {/* <LoadMoreData /> */}

      {/* Tree view component/ menu UI component / recursive navigation menu */}
      {/* <TreeView menus={menus} /> */}

      {/* QR -code -Generator */}
      {/* <QRCodeGenrator /> */}

      {/* Switch between light and Dark mode */}
      {/* <LightDarkModeSwitch/> */}

      {/* Scroll - Indicator */}
      <ScrollIndicator url={"https://dummyjson.com/products?limit=100"} />
    </div>
  );
}

export default App;
