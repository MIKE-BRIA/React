import { useContext } from "react";
import Modal from "./UI/Modal";
import CartContext from "../store/CartContex";
import { currencyFormatter } from "../util/formatting";
import Input from "./UI/Input";
import UserProgressContext from "../store/UserProgressContex";
import Button from "./UI/Button";

export default function Checkout() {
  const cartCtx = useContext(CartContext);
  const Items = cartCtx.items;

  const userprogress = useContext(UserProgressContext);

  function handleClose() {
    userprogress.hideCheckout();
  }

  const cartTotalPrice = Items.reduce(
    (totalPrice, item) => totalPrice + item.quantity * item.price,
    0
  );

  function handleSubmit(e) {
    e.preventDefault();

    const fd = new FormData(e.target);
    const customerData = Object.fromEntries(fd.entries());

    console.log(customerData);

    fetch("http://localhost:3000/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        order: {
          items: Items,
          customer: customerData,
        },
      }),
    });
  }

  return (
    <Modal open={userprogress.progress === "Checkout"} onClose={handleClose}>
      <form action="" onSubmit={handleSubmit}>
        <h2>Checkout</h2>
        <p>Total Amount: {currencyFormatter.format(cartTotalPrice)} </p>

        <Input label="Fullname" type="text" id="name" />
        <Input label="E-Mail Address" type="email" id="email" />
        <Input label="Street" type="text" id="street" />
        <div className="control-row">
          <Input label="Postal Code" type="text" id="postal-code" />
          <Input label="City" type="text" id="city" />
        </div>

        <p className="modal-actions">
          <Button type="button" textOnly onClick={handleClose}>
            Close
          </Button>
          <Button>Submit Order</Button>
        </p>
      </form>
    </Modal>
  );
}
