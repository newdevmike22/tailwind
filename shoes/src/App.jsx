import NewArrivalSection from "./components/NewArrivals";
import Nav from "./components/Nav";
import Shoe from "./components/Shoe";
import { SHOE_LIST } from "./constant";
import Sidebar from "./components/Sidebar";
import { useState } from "react";
import CartItem from "./components/CartItem";
import Cart from "./components/Cart";

const FAKE_CART_ITEMS = SHOE_LIST.map(shoe => {
  return {
    product: shoe,
    qty: 1,
    size: 10
  }
})

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="animate-fadeIn p-10 xl:px-24">
      <Nav onClickShoppingBtn ={() => setIsSidebarOpen(true)} />
      <Shoe />
      <NewArrivalSection items={SHOE_LIST}/>
      <Sidebar 
        isOpen={isSidebarOpen} onClickClose={() => setIsSidebarOpen(false)}>
       <Cart cartItems={FAKE_CART_ITEMS} />
      </Sidebar>
    </div>
  )
}

export default App;