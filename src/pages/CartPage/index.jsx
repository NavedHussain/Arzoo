import React from "react";
import "./style.css"
import { NavLink } from "react-router-dom";
import CartCard from "../../components/CartCard";
import CartImages from "../../json/CartImages.json"
import { useState } from "react";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const Cart = () => {

    const [CartTotal, setCartTotal] = useState(CartImages.length * 5000)

    // console.log(CartTotal)

    return (
        <>
            <div className="flex flex-col gap-2 min-h-[100vh] p-2">
                <div className="flex flex-col gap-4 p-2">
                    <span className="flex gap-2 text-xl">
                        Subtotal
                        <span className="flex text-sm font-semibold">
                            Rs
                            <p className="text-xl">
                                {CartTotal}
                            </p>
                            00
                        </span>
                    </span>
                    <div className="flex gap-1">
                        <CheckCircleIcon fontSize="small" sx={{color: "#007700"}} />
                        <span>
                                Your order is eligible for FREE Delivery. Select this option at checkout. Details
                        </span>
                    </div>
                    <button className=" bg-yellow-400 shadow-md drop-shadow-md p-3 rounded-md ">
                        Proceed to buy ({CartImages.length} items)
                    </button>
                </div>
                {
                    CartImages.map((item, key) => {
                        return (
                            <>
                                <CartCard
                                    key={key}
                                    // img={item.src}
                                    name={item.name}
                                    price={item.price}
                                    rating={item.rating}
                                />
                            </>
                        )
                    })
                }
            </div>

        </>
    )
}

export default Cart