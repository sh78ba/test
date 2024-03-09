import React from 'react'
import { FaRegEdit } from "react-icons/fa";
const Card = (props) => {
  return (
         <div className=' flex mt-2 justify-between border-2 rounded-md p-2'>
          <li className=''>{props.id}</li>
          <li className=''>{props.name}</li>
          <li className=''>{props.mail}</li>
          <li className=''><button><FaRegEdit /></button></li>
        </div>
  )
}

export default Card