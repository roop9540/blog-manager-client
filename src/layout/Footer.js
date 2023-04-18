import React from 'react'

function Footer() {
  return (

    <>
<div className='bg-primary bg-opacity-50 w-100'>
      <nav >
        <ul >
          <div className='d-flex justify-content-evenly'>         <li className='list' style={{listStyle:"none"}} ><a href="https://www.facebook.com/bookxpert">Facebook</a></li>
            <li style={{listStyle:"none"}} className='list' ><a href="https://www.twitter.com/bookxpert">Twitter</a></li>
            <li style={{listStyle:"none"}} className='list' ><a href="https://www.instagram.com/bookxpert">Instagram</a></li>
          </div>

        </ul>
      </nav>
      <p className='text-center'>&copy; 2023 Bookxpert. All rights reserved.</p>
      </div>

    </>
  )
}

export default Footer
