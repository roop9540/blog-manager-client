import { Quickreply } from "@mui/icons-material";
import React, { useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useState } from "react";
import { useFormik } from "formik";
import axios from "axios";
// import { Popup } from "layout/Popup";
import { useSelector } from "react-redux";


const modules = {
    toolbar: [
        [{ font: [] }],
        [{ header: [1, 2, 3, 4, 5, 6, false] }],
        ["bold", "italic", "underline", "strike"],
        [{ color: [] }, { background: [] }],
        [{ script: "sub" }, { script: "super" }],
        ["blockquote", "code-block"],
        [{ list: "ordered" }, { list: "bullet" }],
        [{ indent: "-1" }, { indent: "+1" }, { align: [] }],
        ["clean"],
    ],
};


function Blogs() {
    const user = useSelector(state => state.user);
    // console.log(user)
    let [blogs, setBlogs] = useState([]);
    let [update, setUpdate] = useState(0)
    let [blogContent, setBlogContent] = useState();
    let [id, setId] = useState("")
    const Formik = useFormik({
        initialValues: {
            title: "",
            heading: "",
            content: "",
            img: "",
            author: user.name,
        },
        onSubmit: async (values, action) => {
            // Popup("loading");
            const data = { ...values, content: blogContent };
            console.log(data)
            try {
                const res = await axios.post(process.env.REACT_APP_API_BASE_URL + "blog", data, {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    }
                });
                if (res.status == 200) {
                    setUpdate(update + 1)
                    // window.history.back();
                    // Popup("success", res?.data?.message, undefined, 1500);
                }
            } catch (err) {
                // Popup("error", err?.response?.data?.message);
                console.log(err)
            }
        },
    });

    async function getBlogs() {
        const res = await axios.get(process.env.REACT_APP_API_BASE_URL + "blog")
        if (res.status === 200) {
            console.log(res)
            setBlogs(res?.data?.result)
        }
    }

    async function deleteBlogs(id) {
        try {
            const res = await axios.delete(process.env.REACT_APP_API_BASE_URL + "blog?id=" + id)

            if (res.status === 200) {
                setUpdate(update + 1)
            }
        } catch (err) {
            console.log(err)
        }

    }
    function createMarkup(data) {
        return { __html: data };
    }

    useEffect(() => {
        getBlogs();
        // blogs.map((blog) => {
        //     renderContent(blog.content)

        // })
    }, [update])
    return (
        <>
            {/* <div>
                <ReactQuill modules={modules} theme="snow" onChange={setValue} placeholder="Content goes here..." />;
            </div> */}
            <div className="container">


                <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                    Add Blog
                </button>

                <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div className="modal-dialog modal-lg">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="staticBackdropLabel">Add Blog</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <div className="container">
                                    <form onSubmit={Formik.handleSubmit}>
                                        <div className="mb-3">
                                            <label for="title" className="form-label">
                                                Title
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="title"
                                                value={Formik.values.title}
                                                name="title"
                                                aria-describedby="title"
                                                onChange={Formik.handleChange}
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <label for="heading" className="form-label">
                                                Description
                                            </label>
                                            <input type="text" className="form-control" name="heading" value={Formik.values.heading} id="heading" onChange={Formik.handleChange} />
                                        </div>
                                        <div className="mb-3">
                                            <label for="img" className="form-label">
                                                Image
                                            </label>
                                            <input
                                                type="file"
                                                className="form-control pt-3"
                                                name="files[]"
                                                id="img"
                                                onChange={(e) => {
                                                    if (e.target.files.length) {
                                                        Formik.setFieldValue("img", e.target.files[0]);
                                                    }
                                                }}
                                            />
                                        </div>
                                        {/* <div className="mb-3">
            <label for="bgimg" className="form-label">Background Image</label>
            <input type="file" className="form-control pt-3" name='bgimg' value={Formik.values.bgimg} id="bgimg" onChange={Formik.handleChange} />
          </div> */}
                                        {/* <div className="mb-3">
                        <label for="author" className="form-label">
                            Author
                        </label>
                        <input type="text" className="form-control" name="author" value={Formik.values.author} id="author" onChange={Formik.handleChange} />
                    </div> */}
                                        <div className="mb-3">
                                            <label for="Content" className="form-label">
                                                Content
                                            </label>
                                            <ReactQuill modules={modules} theme="snow" name="content" onChange={setBlogContent} placeholder="Content goes here..." />
                                        </div>

                                        <button type="submit" className="btn btn-primary">
                                            Submit
                                        </button>
                                    </form>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary">Understood</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="card-group">
                        {blogs?.map((blog) => {
                            return (
                                <>



                                    <div className="card mx-3">
                                        <img src={process.env.REACT_APP_API_BASE_URL + blog.img} className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <h5 className="card-title">{blog.title}</h5>
                                            <p className="card-text">{blog?.description}</p>
                                            <a href={"blog/" + blog?.slug} className="btn btn-primary">read more</a>
                                            <button onClick={async () => {
                                                deleteBlogs(blog?._id)
                                            }} >Delete</button>
                                        </div>
                                        <p>Author: &nbsp; {blog?.author}</p>
                                    </div>


                                </>
                            )
                        })}
                    </div>

                </div>
            </div>


        </>
    )
}

export default Blogs
