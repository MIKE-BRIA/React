import { useContext } from "react";

import Logo from "../assets/logo.jpg";
import Button from "./UI/Button";
import CartContext from "../store/CartContex";

export default function Header() {
  const cartCtx = useContext(CartContext);

  const totalCartItems = cartCtx.items.reduce((totalNumberOfItems, item) => {
    return totalNumberOfItems + item.quantity;
  }, 0);

  return (
    <header id="main-header">
      <div id="title">
        <img src={Logo} alt="Pacific logo" />
        <h1>Pacific</h1>
      </div>
      <nav>
        <Button textOnly>Cart ({totalCartItems})</Button>
      </nav>
    </header>
  );
}