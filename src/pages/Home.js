import { Button } from '@mui/material';
import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import AboutUs from './AboutUs';
import hero from "../images/Home/hero.png"
import clouds from "../images/Home/clouds.png"

function Home() {
  const user = useSelector(state => state.user);
  return (
    // <div>
    //   <p>Name: {user.name}</p>
    //   <p>Email: {user.email}</p>
    //   <p>id: {user.id}</p>
    //   <p>token: {user.token}</p>
    // </div>
    <>
      <div className="bg-light">
        <div className="container py-5">
          <div className="row row-cols-1 row-cols-lg-2 align-items-center">
            <div className="col">
              <h1 className='fw-bold' style={{ fontSize: 55 }}>Write The Blogs You Want</h1>
              <h1 className='fw-bold text-secondary' style={{ fontSize: 55 }}>Learn The Tech By Read</h1>
              <p className='fs-4'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate laboriosam sint perspiciatis exercitationem ea nesciunt id ipsum animi, fugiat mollitia odit cupiditate corrupti, minus illum. Est ex modi consectetur natus.</p>
              {/* <Link href={"/register"} passHref>
                <Button variant='contained' size='large' className='rounded-3 bg-dark text-capitalize me-2 py-3 px-4 px-lg-5'>
                  Register as Author
                </Button>
              </Link> */}
              <Link to="/blog">
                <Button variant='outlined' size='large' className='rounded text-capitalize py-3 px-4 px-lg-5'>
                  Read Blogs
                </Button>
              </Link>
            </div>
            <div className="col">
              <img src={hero} alt="hero" className='w-100' style={{ height: "600px", objectFit: "contain" }} />
            </div>
          </div>
        </div>
        <div>
          <img src={clouds} className='w-100 d-block' alt="clouds" />
        </div>
      </div>
      <section className="wrapper bg-white">
        <div className="container pt-15 pb-15 pb-md-17">
          <div className="row text-center">
            <div className="col-md-10 offset-md-1 col-xxl-8 offset-xxl-2">
              <h2 className="fs-4 text-uppercase text-primary mb-3">What We Do?</h2>
              <h3 className="fs-3 mb-5 fw-semibold">The full service we are offering is specifically designed to meet your business needs.</h3>
            </div>
            {/* /column */}
          </div>
          {/* /.row */}
          {/* <div className="row gx-md-8 gy-8 mb-15 mb-md-17 text-center">
            {
              servicesArr?.map((service, i) => {
                return (
                  <div className="col-md-6 col-lg-3" key={i}>
                    <div className="px-md-3 px-lg-0 px-xl-3">
                      <Image src={service.img} className='mb-3' alt={service.heading} height={80} width={80} />
                      <h4 className='fw-bold text-primary'>{service.heading}</h4>
                      <p className="mb-2 fs-5">{service.text}</p>
                      <a href={service.link} className="fw-bold">Learn More <ArrowForward /></a>
                    </div>
                  </div>
                )
              })
            }
          </div> */}
          <AboutUs/>
        </div>
      </section>


    </>
  )
}

export default Home
