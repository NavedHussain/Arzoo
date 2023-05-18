import React from 'react'
import ProdData from "../../../json/CartImages.json"


function CategoryHomeMini() {
    return (
        <div className='Cat-Car-Scroll flex items-center w-full p-4 pb-2 gap-4 overflow-scroll'>
            {
                ProdData.map((item, key) => {
                    return (
                        <span key={key} className="flex flex-col items-center">
                            <span className="block h-[50px] aspect-square bg-black">
                                <img src={item.src} alt="" className=' h-full object-cover' />
                            </span>
                            <p className="">
                                {item.name}
                            </p>
                        </span>
                    )
                })
            }
            {/* <span className="flex flex-col items-center">
                <span className="block h-[50px] aspect-square bg-black"></span>
                <p className="">
                    title
                </p>
            </span> */}
        </div>
    )
}

export default CategoryHomeMini
