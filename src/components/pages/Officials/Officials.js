import React from 'react'
import CardOfficials from '../Officials/CardOfficials'
import { user_data} from '../../../constants/user_data';


const Officials = () => {
  return (
    <div >
        <h1 className="text-3xl mt-2 mb-3">Officials</h1>
        <div className="text-lg flex justify-between rounded-md p-2 bg-[#4f46e5]  text-white">
          <li className="">User_Id</li>
          <li className="">User_Name</li>
          <li className="">User_Mail</li>
          <li className="">
            <>EDIT</>
          </li>
        </div>
        <div>
          {user_data.map((prop) => {
            return (
              <CardOfficials
                key={prop.id}
                id={prop.id}
                name={prop.name}
                mail={prop.mail}
              />
            );
          })}
        </div>
      </div>
  )
}

export default Officials