import NewArrivalSection from "./components/NewArrivals";
import Nav from "./components/Nav";
import Shoe from "./components/Shoe";
import { SHOE_LIST } from "./constant";
import Sidebar from "./components/Sidebar";
import { useState } from "react";
import CartItem from "./components/CartItem";

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="animate-fadeIn p-10 xl:px-24">
      <Nav onClickShoppingBtn ={() => setIsSidebarOpen(true)} />
      <Shoe />
      <NewArrivalSection items={SHOE_LIST}/>
      <Sidebar 
        isOpen={isSidebarOpen} onClickClose={() => setIsSidebarOpen(false)}>
        <h2 className="mb-10 text-2xl font-bold">Cart</h2>
        <CartItem item={SHOE_LIST[0]}/>
        <CartItem item={SHOE_LIST[1]}/>
        <CartItem item={SHOE_LIST[2]}/>
      </Sidebar>
    </div>
  )
}

export default App;