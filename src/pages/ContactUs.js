import React from 'react'
import AboutUs from './AboutUs'

function ContactUs() {
  return (
    <>
       <div className='container'>
      <h1 className='text-center'>Contact Us</h1>
      <form className='bg-light'>
        <label>
          Name: </label>
          <input class="form-control" type="text" name="name" />
       
        <br />
        <label>
          Email: </label>
          <input class="form-control" type="email" name="email" />
       
        <br />
        <label>
          Message: </label>
          <textarea class="form-control" name="message" rows="5" />
       
        <br />
        <button className='btn btn-primary' type="submit">Submit</button>
      </form>
    </div>
    <AboutUs/>
    </>
  )
}

export default ContactUs
