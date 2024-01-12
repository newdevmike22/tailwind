import Card from "./components/Card";
import Nav from "./components/Nav";
import Shoe from "./components/Shoe";
import { SHOE_LIST } from "./constant";

const App = () => {
  return (
    <div className="animate-fadeIn p-10 xl:px-24">
      <Nav />
      <Shoe />
      <Card item={SHOE_LIST[0]} />
    </div>
  )
}

export default App;