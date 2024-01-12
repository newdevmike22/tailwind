import NewArrivalSection from "./components/NewArrivals";
import Nav from "./components/Nav";
import Shoe from "./components/Shoe";
import { SHOE_LIST } from "./constant";

const App = () => {
  return (
    <div className="animate-fadeIn p-10 xl:px-24">
      <Nav />
      <Shoe />
      <NewArrivalSection items={SHOE_LIST}/>
    </div>
  )
}

export default App;