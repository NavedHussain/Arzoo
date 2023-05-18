import React, { useState } from 'react'
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import StarBorderIcon from '@mui/icons-material/StarBorder';

function CartCard({ img, name, price, rating }) {

    const [count, setCount] = useState(1);

    const HandleDelete = () => {
        setCount(0)
    }

    const HandleAdd = () => {
        if (count < 10) {
            setCount(count + 1)
        }
    }

    return (
        <>
            <div className="flex flex-col gap-2 p-1 bg-gray-100 ">
                <div className="flex gap-3">
                    <div className="w-[40%]">
                        <img src={img} alt="" className="aspect-square object-cover" />
                    </div>
                    <div className="flex flex-col gap-1">
                        <span className='capitalize text-lg'>
                            {name}
                        </span>
                        <span className='text-sm '>
                            <span className='flex font-semibold'>
                                Rs
                                <span className='text-2xl '>{price}</span>
                                00
                            </span>
                            <span>Eligible for FREE Shipping</span>
                        </span>
                        <span className="text-green-700 text-sm">
                            in-stock
                        </span>
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <div className="flex items-center gap-3 shadow-md bg-white rounded-lg">
                        <button onClick={HandleDelete} className="flex items-center p-1 bg-gray-200 rounded-l-lg">
                            <DeleteOutlinedIcon />
                        </button>
                        <p>
                            {count}
                        </p>
                        <button onClick={HandleAdd} className="flex items-center p-1 bg-gray-200 rounded-r-lg">
                            <AddOutlinedIcon />
                        </button>
                    </div>
                    <button className=" p-1 shadow rounded-lg bg-white">
                        Delete
                    </button>
                    <button className=" p-1 shadow rounded-lg bg-white">
                        Save for later
                    </button>
                </div>
            </div>
        </>
    )
}

export default CartCard
