import React from 'react'
const CardDonations = (props) => {
  return (
         <div className=' flex mt-2 justify-between border-2 rounded-md p-2'>
          <li className=''>{props.id}</li>
          <li className=''>{props.name}</li>
          <li className=''>{props.mail}</li>
          <li className=''>{props.amount}</li>
        </div>
  )
}

export default CardDonations