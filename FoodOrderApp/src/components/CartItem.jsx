import { currencyFormatter } from "../util/formatting";

export default function CartItem({ item, onIncrease, onDecrease }) {
  return (
    <li className="cart-item">
      <p>
        <img src={`http://localhost:3000/${item.image}`} alt="" />
        {item.name} - {item.quantity} x {currencyFormatter.format(item.price)}
      </p>
      <p className="cart-item-actions">
        <button onClick={onDecrease}>-</button>
        <span>{item.quantity}</span>
        <button onClick={onIncrease}>+</button>
      </p>
    </li>
  );
}
