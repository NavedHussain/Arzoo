import { useState } from "react";
import React from "react";


const Signup = () => {
    const [PassShow, setPassShow] = useState(false)
    const [count, setCount] = useState(0)

    const ShowPassword = () => {
        setPassShow(!PassShow);
    }
    return (
        <section className=" login flex items-center justify-center h-[100vh] ">

            <div className="flex flex-col items-center justify-center gap-2 bg-[#ececec] p-5 rounded-xl py-6 px-[30px]">
                <div className="flex flex-col  gap-2 text-[12px] text-blue-500">
                    <h1 className="text-2xl pb-4">Sign up</h1>
                    <label htmlFor="Name">Name</label>
                    <input className=" bg-[#ececec] text-xl border-b-[1px] border-black " type="text" name="name"/>

                    <label htmlFor="Number">Phone Number</label>
                    <input className=" bg-[#ececec] text-xl border-b-[1px] border-black " type="tel" name="phone number"  />
                    <label htmlFor="mail">EMAIL </label>

                    <input className=" bg-[#ececec] text-xl border-b-[1px] border-black " type="email" name="email"/>
                    <label htmlFor="Password">Password</label>

                    <input className=" bg-[#ececec] text-xl border-b-[1px] border-black " type="Password" name="password"/>
                    <label htmlFor="Password">Confirm Password</label>

                    <input className=" bg-[#ececec] text-xl border-b-[1px] border-black " type="Password" name="Confirm Password"  />


                    <button type="submit" name="" value="Signup" className="px-12 rounded-[10vw] bg-[#cfcbcb]">Signup </button>
                </div>
            </div>
        </section>

    )
}

export default Signup