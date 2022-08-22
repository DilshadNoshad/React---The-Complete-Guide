import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const dummyJson = [
  {
    id: "id1",
    title: "Test",
    price: 5,
    description: "This is a first product - amazing!",
  },
  {
    id: "id3",
    title: "Test2",
    price: 10,
    description: "This is a first product - amazing!",
  },
  {
    id: "id2",
    title: "Test3",
    price: 15,
    description: "This is a first product - amazing!",
  },
];
const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {dummyJson.map((product) => (
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
