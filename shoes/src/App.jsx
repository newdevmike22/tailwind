import NewArrivalSection from "./components/NewArrivals";
import Nav from "./components/Nav";
import Shoe from "./components/Shoe";
import { SHOE_LIST } from "./constant";
import Sidebar from "./components/Sidebar";
import { useEffect, useState } from "react";
import Cart from "./components/Cart";
import { BiSun, BiMoon } from "react-icons/bi";

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [currentShoe, setCurrentShoe] = useState(SHOE_LIST[0]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const isDarkMode = localStorage.getItem("isDarkMode")
    if(isDarkMode === "true") {
      window.document.documentElement.classList.add("dark")
    }
  }, []);

  const toggleDarkMode = () => {
    window.document.documentElement.classList.toggle("dark");
    
    localStorage.setItem(
      "isDarkMode", 
      window.document.documentElement.classList.contains("dark"),
    );
  };

  const removeFromCart = (productId) => {
    const updatedCartItems = [...cartItems];
    const existingItemIndex = cartItems.findIndex( 
      (item) => item.product.id === productId,
  );
  updatedCartItems.splice(existingItemIndex, 1);
  setCartItems(updatedCartItems);
  };

  const addToCart = (product, qty, size) => {
    if(qty && size) {
      const updatedCartItems = [...cartItems];
      const existingItemIndex = cartItems.findIndex( 
        (item) => item.product.id === product.id );
      if(existingItemIndex > -1) {
        updatedCartItems[existingItemIndex].qty = qty;
        updatedCartItems[existingItemIndex].size = size;
      } else {
        updatedCartItems.push({ product, qty, size });
      }

      setCartItems(updatedCartItems);
    }
  };

  return (
    <div className="animate-fadeIn p-10 xl:px-24 dark:bg-night">
      <Nav onClickShoppingBtn ={() => setIsSidebarOpen(true)} />
      <Shoe shoe={currentShoe} onClickAdd={addToCart} />
      <NewArrivalSection 
        items={SHOE_LIST} 
        onClickCard={setCurrentShoe} />
      <Sidebar 
        isOpen={isSidebarOpen} 
        onClickClose={() => setIsSidebarOpen(false)}>
       <Cart cartItems={cartItems} onClickTrash={removeFromCart} />
      </Sidebar>
      <div className="fixed bottom-4 right-4">
        <button onClick={toggleDarkMode} className="bg-night-50 dark:text-night px-4 py-2 rounded-full text-white dark:bg-white shadow-lg">
          <BiSun className="hidden dark:block"/>
          <BiMoon className="dark:hidden"/>
        </button>
      </div>
    </div>
  )
}

export default App;