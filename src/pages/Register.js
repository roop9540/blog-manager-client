import React from 'react';
import { useFormik } from 'formik';
import axios from "axios";
import { useNavigate } from 'react-router-dom';


function Register() {
    const navigate = useNavigate()

    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            password: "",
            confirmpassword: ""
        },
        onSubmit: async (values, action) => {

            try {
                if (values.password === values.confirmpassword) {

                    console.log(values, process.env.REACT_APP_API_BASE_URL)
                    const res = await axios.post(process.env.REACT_APP_API_BASE_URL + 'register', values, {
                        headers: {
                            'Content-Type': 'application/json',
                        }
                    })
                    if (res.status === 200) {

                        // alert("post successfully")
                        console.log(res)
                        navigate("/login")

                    }
                } else {
                    alert("password and confirm password didn't matched")
                }
            } catch (err) {
                console.log(err)
            }
        }
    })
    return (
        <div className='home-bg vh-100'>
            <div className='container'>
                <h1 className='text-center'>Register Form</h1>

                <form onSubmit={formik.handleSubmit} className='d-grid gap-2 col-lg-8 col-md-10 col-sm-12 mx-auto mt-3'>
                    <div className='mb-3'>
                        <label for='exampleInputName' className='form-label'>Name</label>
                        <input type='text' name='name' required value={formik.values.name} onChange={formik.handleChange} className='form-control' id='exampleInputName' aria-describedby='nameHelp' />
                    </div>
                    <div className='mb-3'>
                        <label for='exampleInputEmail1' className='form-label'>Email address</label>
                        <input type='email' name='email' required value={formik.values.email} onChange={formik.handleChange} className='form-control' id='exampleInputEmail1' aria-describedby='emailHelp' />
                    </div>
                    <div className='mb-3'>
                        <label for='exampleInputPassword' className='form-label'>Password</label>
                        <input type='password' name='password' required value={formik.values.password} onChange={formik.handleChange} className='form-control' id='exampleInputPassword' />
                    </div>
                    <div className='mb-3'>
                        <label for='exampleInputConfirmPassword' className='form-label'>Confirm Password</label>
                        <input type='password' name='confirmpassword' required value={formik.values.confirmpassword} onChange={formik.handleChange} className='form-control' id='exampleInputConfirmPassword' />
                    </div>
                    <div className='d-grid gap-2 col-10 mx-auto'>
                        <button type='submit' className='btn btn-primary rounded-pill mt-3'>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Register
