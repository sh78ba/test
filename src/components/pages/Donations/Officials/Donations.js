import React from 'react'
import CardDonations from '../Officials/CardDonations'
import { donation_details } from '../../../../constants/donation_amt'


const Donations = () => {
  return (
    <div >
        <h1 className="text-3xl mt-2 mb-3">Donations</h1>
        <div className="text-lg flex justify-between rounded-md p-2 bg-[#4f46e5] text-white">
          <li className="">User_Id</li>
          <li className="">User_Name</li>
          <li className="">User_Mail</li>
          <li className="">Amount</li>
        </div>
        <div>
          {donation_details.map((prop) => {
            return (
              <CardDonations
                key={prop.id}
                id={prop.id}
                name={prop.name}
                mail={prop.mail}
                amount={prop.amount}
              />
            );
          })}
        </div>
      </div>
  )
}

export default Donations