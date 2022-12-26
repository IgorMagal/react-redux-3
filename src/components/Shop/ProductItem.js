import { useDispatch } from "react-redux";
import Card from "../UI/Card";
import classes from "./ProductItem.module.css";
import { cartActions } from "../../store/cart-slice";

const ProductItem = (props) => {
  const { itemName, itemPrice, itemDescription, itemId, itemQty } = props;
  const dispatch = useDispatch();

  const addItemHandler = () => {
    dispatch(
      cartActions.addItemToCart({
        itemId,
        itemName,
        itemPrice,
        itemQty,
      })
    );
  };

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{itemName}</h3>
          <div className={classes.price}>${itemPrice.toFixed(2)}</div>
        </header>
        <p>{itemDescription}</p>
        <div className={classes.actions}>
          <button onClick={addItemHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
