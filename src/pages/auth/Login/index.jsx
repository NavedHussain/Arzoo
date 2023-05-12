import React, { useState } from "react";

const Login = () => {

    const [PassShow, setPassShow] = useState(false)
    const [count, setCount] = useState(0)

    const ShowPassword = () => {
        setPassShow(!PassShow);
    }

    return (
        <section className=" login flex items-center justify-center h-[100vh] ">
            <div className="flex flex-col items-center justify-center gap-2 bg-[#ececec] p-3 rounded-xl py-6 px-3">
                <h1 className="text-2xl pb-4">Log in</h1>

                <div className="flex flex-col  gap-2 text-[12px] text-blue-500">

                    <label htmlFor="mail">EMAIL OR PHONE</label>
                    <input className=" bg-[#ececec] text-xl border-b-[1px] border-black " type="text" id="mail" />
                    <label htmlFor="pass">PASSWORD</label>
                    <input className=" bg-[#ececec] text-xl border-b-[1px] border-black " type={PassShow ? "text" : "password"} id="pass" />

                </div>

                {/* <button onClick={ShowPassword}>show password</button> */}

                <a href="#" className=" text-[12px] text-[red] hover:underline">forgot password??</a>
                <button type="submit" name="" value="Log in" className="px-12 rounded-[5vw] bg-[#c7c7c7]">Log in </button>

                {/* <a href="#" className="">Don't have an account</a> */}


            </div>

        </section>
    )
}

export default Login