import { Link } from "react-router-dom";

const PRODUCTS = [
  {
    id: "p1",
    price: 67,
    title: "In The Shadows",
    description: "The first book i ever wrote",
  },
  {
    id: "p2",
    price: 60,
    title: "Life Beyond The Walls",
    description: "A book about conquring your mind",
  },
  {
    id: "p3",
    price: 100,
    title: "Where Is Everyone",
    description: "A book about attack by communities",
  },
];

function ProductsPage() {
  return (
    <>
      <h1>The Products Page</h1>
      <ul>
        {PRODUCTS.map((prod) => (
          <li key={prod.id}>
            <Link to={`/products/${prod.id}`}>{prod.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default ProductsPage;
