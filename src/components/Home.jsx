import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='w-[94%] min-h-screen flex flex-wrap justify-center items-center gap-5'>
      <Link to='/allservices'><div className='bg-red-400 px-4 py-6'>All Services</div></Link>
      <Link to='/constructionwork'><div className='bg-red-400 px-4 py-6'>Construction Work</div></Link>
      <Link to='/person'><div className='bg-red-400 px-4 py-6'>Person</div></Link>
      <Link to='/mouse'><div className='bg-red-400 px-4 py-6'>Mouse</div></Link>
      <Link to='/animation'><div className='bg-red-400 px-4 py-6'>Animation</div></Link>
      <Link to='/button'><div className='bg-red-400 px-4 py-6'>Button</div></Link>
      <Link to='/navber'><div className='bg-red-400 px-4 py-6'>Navber</div></Link>
      <Link to='/banner'><div className='bg-red-400 px-4 py-6'>Banner</div></Link>
      <Link to='/cards'><div className='bg-red-400 px-4 py-6'>Cards</div></Link>
      <Link to='/mousemovement'><div className='bg-red-400 px-4 py-6'>MouseMovement</div></Link>
      <Link to='/buttoneffect'><div className='bg-red-400 px-4 py-6'>Button Effect</div></Link>
      <Link to='/video'><div className='bg-red-400 px-4 py-6'>Video</div></Link>
      <Link to='/loadingAnimation'><div className='bg-red-400 px-4 py-6'>LoadingAnimation</div></Link>








    </div>
  )
}

export default Home
