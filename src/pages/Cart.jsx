import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { assets } from "../assets/assets";
import { FaTrashAlt } from "react-icons/fa";
import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
} from "../redux/cartSlice";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const dipatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const navigate = useNavigate();
  return (
    <div className="md:w-[90%] md:mx-10 md:p-10">
      {cart.products.length > 0 ? (
        <div className="w-full flex flex-col md:flex-row gap-10">
          <div className="md:w-3/4 mx-5 md:mx-0 flex flex-col">
            <h3 className="font-roboto text-2xl my-5">My Cart</h3>
            <hr className="w-full h-[2px]" />
            {cart.products.map((product) => (
              <div
                key={product.id}
                className="w-full justify-between pr-10 flex gap-10"
              >
                <div>
                  <img src={product.image} alt="" width={100} height={100} />
                </div>
                <div className="flex flex-col gap-5 py-3 text-md font-roboto">
                  <h3 className="">{product.name}</h3>
                  <p>${product.price}</p>
                </div>
                <div className="flex border border-black mt-3 justify-center font-roboto gap-5 h-[2rem] px-2">
                  <button
                    className="mb-[4rem]"
                    onClick={() => dipatch(decreaseQuantity(product.id))}
                  >
                    -
                  </button>
                  <span className="">{product.quantity}</span>
                  <button
                    className="mb-[4rem]"
                    onClick={() => dipatch(increaseQuantity(product.id))}
                  >
                    +
                  </button>
                </div>
                <div className="py-3 font-roboto">
                  <p>${product.quantity * product.price}</p>
                </div>
                <div
                  className="cursor-pointer py-3 text-red-400 hover:text-red-900"
                  onClick={() => dipatch(removeFromCart(product.id))}
                >
                  <FaTrashAlt />
                </div>
              </div>
            ))}
            <hr className="w-full h-[2px]" />
          </div>
          <div className="md:w-1/4 mx-10 md:mx-0 ml-10">
            <div className="flex flex-col font-roboto gap-3">
              <h3 className="font-roboto text-2xl mb-5">Order Summary</h3>
              <hr className="w-full h-[2px]" />
              <div className="flex justify-between px-3">
                <span>Subtotal</span>
                <span>${cart.totalPrice}</span>
              </div>
              <div className="flex justify-between px-3">
                <span>Estimated Delivery</span>
                <span>${cart.totalPrice / 10}</span>
              </div>
              <hr className="w-full h-[2px]" />
              <div className="flex justify-between px-3 text-xl mt-5">
                <span>Total</span>
                <span>${cart.totalPrice + cart.totalPrice / 10}</span>
              </div>
              <button onClick={() => navigate('/checkout')}
              className="border border-black hover p-2 mt-3 hover:bg-black hover:text-white duration-300">
                Checkout
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex justify-center">
          <img src={assets.empty_cart} alt="" className="" />
        </div>
      )}
    </div>
  );
};

export default Cart;
