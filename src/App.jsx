import Banner from "./components/Banner";
import Category from "./components/Category";
import FoodDelivery from "./components/FoodDelivery";
import Footer from "./components/Footer";
import Grocery from "./components/Grocery";
import Header from "./components/Header";
import OnlineDelivery from "./components/OnlineDelivery";
import TopRest from "./components/TopRest";
function App() {
  return (
    <>
      <Header />
      <Category />
      <TopRest />
      <OnlineDelivery />
      <Grocery />
      <Banner />
      <FoodDelivery/>
      <Footer/>
    </>
  );
}

export default App;
