import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='min-h-screen flex justify-center items-center gap-5'>
      <Link to='/allservices'><div className='bg-red-400 px-4 py-6'>All Services</div></Link>
      <Link to='/constructionwork'><div className='bg-red-400 px-4 py-6'>Construction Work</div></Link>
      <Link to='/person'><div className='bg-red-400 px-4 py-6'>Person</div></Link>
      <Link to='/mouse'><div className='bg-red-400 px-4 py-6'>Mouse</div></Link>
      <Link to='/animation'><div className='bg-red-400 px-4 py-6'>Animation</div></Link>


    </div>
  )
}

export default Home
