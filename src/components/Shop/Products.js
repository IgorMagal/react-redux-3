import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_PRODUCTS = [
  {
    itemId: "a00001",
    itemPrice: 10,
    itemName: "book",
    itemDescription: "an old dusty book",
  },
  {
    itemId: "a00002",
    itemPrice: 15,
    itemName: "dagger",
    itemDescription: "needs some sharpning",
  },
  {
    itemId: "a00003",
    itemPrice: 5,
    itemName: "dirty mug",
    itemDescription: "souveniur from a tavern around the corner",
  },
  {
    itemId: "a00004",
    itemPrice: 20,
    itemName: "dragon statue",
    itemDescription: "it looks like a real dragon..",
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>

      <ul>
        {" "}
        {DUMMY_PRODUCTS.map((product) => (
          <ProductItem
            key={product.itemId + product.itemName}
            itemId={product.itemId}
            itemName={product.itemName}
            itemPrice={product.itemPrice}
            itemDescription={product.itemDescription}
            itemQty={1}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
