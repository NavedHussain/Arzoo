import React from 'react'
import CategoryData from "../../../json/category.json"


function CategoryHomeMini() {
    return (
        <div className='Cat-Car-Scroll flex items-center w-full p-4 pb-2 gap-4 overflow-scroll'>
            {
                CategoryData.map((item, key) => {
                    return (
                        <span key={key} className="flex flex-col items-center">
                            <span className="block h-[50px] aspect-square bg-black"></span>
                            <p className="">
                                {item.title}
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
