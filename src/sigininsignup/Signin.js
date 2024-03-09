import React from 'react'

const Signin = () => {
  return (
    <div className='justify-center content-center w-screen'>
     <div className="w-64 h-64 bg-blue-400 mt-48  ml-auto mr-auto">
  <h2 className='text-2xl text-center'>Admin</h2>
  <form className='text-center'>
    <input className='border-0 outline-0 mt-2 text-lg text-center' type="text" title="username" placeholder="username" />
    <input className='border-0 outline-0 mt-2 text-lg text-center' type="password" title="username" placeholder="password" />
    <button className='text-lg mt-2' type="submit" >Login</button>
  </form>
</div>
    </div>
  )
}

export default Signin