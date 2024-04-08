import Modal from "./UI/Modal";
import { useContext } from "react";
import CartContext from "../store/CartContex";
import { currencyFormatter } from "../util/formatting/";
import Button from "./UI/Button";
import UserProgressContext from "../store/UserProgressContex";
import CartItem from "./CartItem";

export default function Cart() {
  const cartCtx = useContext(CartContext);
  const Items = cartCtx.items;

  const userProgressCtx = useContext(UserProgressContext);

  const cartTotalPrice = Items.reduce(
    (totalPrice, item) => totalPrice + item.quantity * item.price,
    0
  );

  function handleCloseCart() {
    userProgressCtx.hideCart();
  }

  return (
    <Modal className="cart" open={userProgressCtx.progress === "Cart"}>
      <h2>Your Cart</h2>
      <ul>
        {Items.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </ul>
      <p className="cart-total">{currencyFormatter.format(cartTotalPrice)}</p>
      <p className="modal-actions">
        <Button textOnly onClick={handleCloseCart}>
          Close
        </Button>
        <Button>Go to Checkout</Button>
      </p>
    </Modal>
  );
}
