import React from 'react'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';


function LocationHome() {
    return (
        <div className='flex items-center bg-violet-300 p-2 px-3 gap-2'>
            <span className=" flex items-center text-2xl">
                <LocationOnOutlinedIcon fontSize='inherit' />
            </span>
            <p className='text-sm'>
                Deliver to
                Name 
                -
                City
                485001
            </p>
        </div>
    )
}

export default LocationHome
