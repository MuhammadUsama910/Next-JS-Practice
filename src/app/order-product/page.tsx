"use client";

import { useRouter } from "next/navigation"; //only works in clien components.
import '../globals.css';

export default function OrderProduct() {

  const router = useRouter();

  const handleClick = () => {
    console.log("Placing your order..!");
    router.push("/"); //go back to home page.
  }

  return(
    <>
      <button 
        type="button"
        className="p-4 ml-4 my-4 bg-red-500 text-white rounded-md" 
        onClick={handleClick}> Place Order </button>
    </>
  )
}