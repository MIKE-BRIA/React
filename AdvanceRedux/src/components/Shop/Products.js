import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_PRODUCTS = [
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

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
