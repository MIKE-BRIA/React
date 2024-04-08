import Header from "./components/Header";
import Meals from "./components/Meals";
import { CartContextProvider } from "./store/CartContex";
import { UserProgressContextProvider } from "./store/UserProgressContex";
import Cart from "./components/Cart";

function App() {
  return (
    <CartContextProvider>
      <UserProgressContextProvider>
        <Header />
        <Cart />
        <Meals />
      </UserProgressContextProvider>
    </CartContextProvider>
  );
}

export default App;
