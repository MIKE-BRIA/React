import { currencyFormatter } from "../util/formatting";

export default function CartItem({ item }) {
  return (
    <li className="cart-item">
      <p>
        <img src={`http://localhost:3000/${item.image}`} alt="" />
        {item.name} - {item.quantity} x {currencyFormatter.format(item.price)}
      </p>
      <p className="cart-item-actions">
        <button>-</button>
        <span>{item.quantity}</span>
        <button>+</button>
      </p>
    </li>
  );
}
