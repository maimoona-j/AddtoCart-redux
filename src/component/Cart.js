import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import { addItem, deleteItem } from "../actions/cartAction";

const Cart = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  return (
    <div className="">
      <h1>Simple store to understand redux</h1>

      <div className="cart">
        <div className="carticon">
          {" "}
          <AiOutlineShoppingCart size={40} /> <span>{state.numOfItems}</span>
        </div>
        <h2>product 1</h2>
        <img
          src="https://cdn.pixabay.com/photo/2016/03/27/22/16/fashion-1284496_640.jpg"
          alt=""
        />
        <div className="btn">
          <button
            className="green"
            onClick={() => {
              dispatch(addItem());
            }}
          >
            Add
          </button>
          <button
            className="red"
            disabled={state.numOfItems > 0 ? false : true}
            onClick={() => {
              dispatch(deleteItem());
            }}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
