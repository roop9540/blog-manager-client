import { useFormik } from 'formik'
import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUser } from '../redux/creatSlice';



function Login() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    let [user, setUsers] = useState("");
    let [token, setToken] = useState("")
    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        onSubmit: async (values, action) => {
            console.log(values)
            try {
                const res = await axios.post(process.env.REACT_APP_API_BASE_URL + 'login', values, {
                    headers: {
                        'Content-Type': 'application/json',
                    }
                })
                if (res.status === 200) {
                    console.log(res)
                    try {

                        let verify = await axios.get(process.env.REACT_APP_API_BASE_URL + 'verify', {
                            headers: {
                                Authorization: res?.data?.token,
                                'Content-Type': 'application/json',
                            }
                        })
                        if (verify.status === 200) {
                            alert("Welcome " + verify?.data?.user?.name)
                            console.log(verify)
                            setToken(verify?.data?.token)
                            setUsers(verify?.data?.user)
                            const userData = {
                                token: verify?.data?.token,
                                name: verify?.data?.user?.name,
                                id: verify?.data?.user?._id,
                                email: verify?.data?.user?.email
                            };
                            dispatch(setUser(userData));

                            navigate('/')

                        }
                    } catch (err) {
                        console.log(err);
                    }
                }
            } catch (err) {
                console.log(err);
            }
        }
    })

    return (
        <>
            <div className="home-bg vh-100">
                <div className="container">
                    <h1 className="text-center">Login Form</h1>
                    <div className="d-grid gap-2 col-lg-8 col-md-10 col-sm-12 mx-auto mt-3">
                        <form onSubmit={formik.handleSubmit} >
                            <div className='mb-3'>
                                <label for='exampleInputEmail1' className='form-label'>Email address</label>
                                <input type='email' name='email' required value={formik.values.email} onChange={formik.handleChange} className='form-control' id='exampleInputEmail1' aria-describedby='emailHelp' />
                            </div>
                            <div className="mb-3">
                                <label for="exampleInputPassword1" className="form-label">Password</label>
                                <input type="password" name="password" required value={formik.values.password} onChange={formik.handleChange} className="form-control" id="exampleInputPassword1" />
                            </div>
                            <div className="d-grid gap-2 col-8 mx-auto mt-3">
                                <button type="submit" className="btn btn-primary rounded-pill mt-3">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login
