import { useDispatch } from "react-redux";
import classes from "./CartItem.module.css";
import { cartActions } from "../../store/cart-slice";

const CartItem = (props) => {
  const { itemName, itemQty, totalPrice, itemPrice, itemId } = props.item;

  const dispatch = useDispatch();

  const subtractItemHandler = () => {
    dispatch(
      cartActions.removeItemFromCart({
        itemId,
      })
    );
  };

  const addItemHandler = () => {
    dispatch(
      cartActions.addItemToCart({
        itemId,
        itemName,
        itemPrice,
        itemQty: 1,
      })
    );
  };

  return (
    <li className={classes.item}>
      <header>
        <h3>{itemName}</h3>
        <div className={classes.price}>
          ${totalPrice.toFixed(2)}{" "}
          <span className={classes.itemprice}>
            (${itemPrice.toFixed(2)}/item)
          </span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{itemQty}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={subtractItemHandler}>-</button>
          <button onClick={addItemHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
