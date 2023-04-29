import "./styles.css";
import MenuBtn from "./components/menuBtn/MenuBtn";
import MainNav from "./components/mainNav/MainNav";
import Showcase from "./components/showcase/Showcase";
import ProductLinks from "./components/productLinks/ProductsLinks";
import HomeCards from "./components/homeCards/HomeCards";
import Xbox from "./components/xBox/Xbox";
import HomeCards2 from "./components/homeCards2/HomeCards2";
import Follow from "./components/follow/Follow";
import Links from "./components/links/Links";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <MenuBtn />
      <MainNav />
      <Showcase />
      <ProductLinks />
      <HomeCards />
      <Xbox />
      <HomeCards2 />
      <Follow />
      <Links />
      <Footer />
    </div>
  );
}

export default App;
