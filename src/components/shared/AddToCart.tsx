"use client";
import { cartActions } from "@/store/slice/cartSlice";
import { useDispatch } from "react-redux";
import { Button } from "../ui/button";
import toast from 'react-hot-toast';

const AddToCart = () => {
  const dispatch = useDispatch();
  const addItem = () => {
    dispatch(cartActions.addToCart({quantity: 1}))
    toast.success("Product added")
  }
  return <Button onClick={addItem} className="bg-black hover:bg-black text-white rounded">Add to Cart</Button>
}

export default AddToCart;

