import { cartActions } from "./cart-slice";
import { uiActions } from "./ui-slice";

export const fetchCartData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        "https://react-http-reqs-f9475-default-rtdb.firebaseio.com/cart.json"
      );

      if (!response.ok) {
        throw new Error("Unable to fetch data from server!");
      }

      const data = await response.json();

      return data;
    };

    try {
      const cartData = await fetchData();
      dispatch(
        cartActions.replaceCart({
          totalQty: cartData.totalQty,
          items: cartData.items || [],
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showAlert({
          status: "error",
          title: "Error!",
          message: "Fetching cart data failed!",
        })
      );
    }
  };
};

export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      uiActions.showAlert({
        status: "sending",
        title: "Sending..",
        message: "Sending data to server...",
      })
    );

    const SendRequest = async () => {
      const response = await fetch(
        "https://react-http-reqs-f9475-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify({ items: cart.items, totalQty: cart.totalQty }),
        }
      );
      if (!response.ok) {
        throw new Error("Sending data to server failed!");
      }
    };

    try {
      await SendRequest();
      dispatch(
        uiActions.showAlert({
          status: "success",
          title: "Success!",
          message: "Sent data to server.",
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showAlert({
          status: "error",
          title: "Error!",
          message: "Sending cart data to server failed: " + error.message,
        })
      );
    }
  };
};
