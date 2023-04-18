import { ArrowForward } from '@mui/icons-material'
import { Button } from '@mui/material'
import image1 from "../images/aboutUs/icon1.svg"
import image2 from "../images/aboutUs/icon2.svg"
import image3 from "../images/aboutUs/icon3.svg"
import image4 from "../images/aboutUs/icon4.svg"
import image5 from "../images/aboutUs/3d8@2x.png"
import clouds from "../images/Home/clouds.png"


import { Link, useLocation } from 'react-router-dom'
const servicesArr = [
    {
        img: image1,
        heading: "SEO Services",
        text: "Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida eget metus cras justo.",
        link: "#"
    },
    {
        img: image2,
        heading: "Web Design",
        text: "Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida eget metus cras justo.",
        link: "#"
    },
    {
        img: image3,
        heading: "Social Engagement",
        text: "Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida eget metus cras justo.",
        link: "#"
    },
    {
        img: image4,
        heading: "App Development",
        text: "Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida eget metus cras justo.",
        link: "#"
    }
]

function AboutUs() {
    const location = useLocation();
    console.log(location)
    return (
        <>
            {/* <Head>
                <title>About Codeblogs - Blog For Code and technologies</title>
                <meta name="description" content="this is webapp created by saurabh sharma" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head> */}
            <div>
                {location.pathname === "/aboutus" ?
                    <div className="bg-light">
                        <div className="container py-5 text-center">
                            <h1 className='fw-bold' style={{ fontSize: 55 }}>About Us</h1>
                            <div className="fs-5 text-secondary">
                                <Link to='/' passHref>
                                    Home
                                </Link>&nbsp;&nbsp;|&nbsp;&nbsp;

                                <span className='text-secondary'>
                                    About
                                </span>
                            </div>
                        </div>
                        <div>
                            <img src={clouds} className='w-100 d-block' alt="" />
                        </div>
                    </div>
                    : ""}
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
                        <div className="row gx-md-8 gy-8 mb-15 mb-md-17 text-center">
                            {
                                servicesArr?.map((service, i) => {
                                    return (
                                        <div className="col-md-6 col-lg-3" key={i}>
                                            <div className="px-md-3 px-lg-0 px-xl-3">
                                                <img src={service.img} className='mb-3' alt={service.heading} height={80} width={80} />
                                                <h4 className='fw-bold text-primary'>{service.heading}</h4>
                                                <p className="mb-2 fs-5">{service.text}</p>
                                                <a href={service.link} className="fw-bold">Learn More <ArrowForward /></a>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div className="py-4">
                            <div className="row gx-3 gy-10 mb-14 mb-md-16 align-items-center mt-5">
                                <div className="col-lg-6">
                                    <figure><img src={image5} alt="why us" className="w-100 d-block" /></figure>
                                </div>
                                {/*/column */}
                                <div className="col-lg-5 ms-auto">
                                    <h2 className="fs-5 text-uppercase text-grape mb-3 fw-semibold">Why Choose Codeblogs?</h2>
                                    <h3 className="display-6 fw-semibold mb-8">So here a few reasons why our valued customers choose us.</h3>
                                    <div className="row gy-3">
                                        <div className="col-md-6">
                                            <div className="d-flex flex-row">
                                                <div>
                                                    <h4 className="mb-1 text-primary fw-semibold">Creativity</h4>
                                                    <p className="mb-0">Curabitur blandit lacus porttitor ridiculus mus.</p>
                                                </div>
                                            </div>
                                        </div>
                                        {/*/column */}
                                        <div className="col-md-6">
                                            <div className="d-flex flex-row">
                                                <div>
                                                    <h4 className="mb-1 fw-semibold text-primary">Innovative Thinking</h4>
                                                    <p className="mb-0">Curabitur blandit lacus porttitor ridiculus mus.</p>
                                                </div>
                                            </div>
                                        </div>
                                        {/*/column */}
                                        <div className="col-md-6">
                                            <div className="d-flex flex-row">
                                                <div>
                                                    <h4 className="mb-1 fw-semibold text-primary">Rapid Solutions</h4>
                                                    <p className="mb-0">Curabitur blandit lacus porttitor ridiculus mus.</p>
                                                </div>
                                            </div>
                                        </div>
                                        {/*/column */}
                                        <div className="col-md-6">
                                            <div className="d-flex flex-row">
                                                <div>
                                                    <h4 className="mb-1 fw-semibold text-primary">Top-Notch Support</h4>
                                                    <p className="mb-0">Curabitur blandit lacus porttitor ridiculus mus.</p>
                                                </div>
                                            </div>
                                        </div>
                                        {/*/column */}
                                    </div>
                                    {/*/.row */}
                                </div>
                                {/*/column */}
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default AboutUs
