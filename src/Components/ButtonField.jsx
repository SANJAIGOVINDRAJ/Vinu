import React from 'react'

const ButtonField = ({name,work,styles}) => {
  return (
    <button type='submit' className={` active:scale-95 transition-all ease-in-out duration-200  bg-violet-600 p-3 w-full rounded-md flex items-center  justify-center text-white font-semibold ` + styles}>{name}</button>
  )
}

export default ButtonField