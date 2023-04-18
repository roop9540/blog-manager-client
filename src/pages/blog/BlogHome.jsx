import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from "react-router-dom";
import moment from "moment";


function BlogHome() {
    let slug = useParams();
    console.log(slug.slug);
    let Send = slug.slug;
    let [blogs, setBlogs] = useState([]);
    let [blogData, setBlogData] = useState([]);

  let [blogContent, setBlogContent] = useState();



    const getBlogsById = async () => {
        // console.log("Fetching Quites Data ");
        try {
        //   console.log(`public/dynamic-blog/${slug.slug}`);
          // /dynamic-blog/:slug blogs/edit/
          const res = await axios.get( process.env.REACT_APP_API_BASE_URL+ `blog/single?slug=`+slug.slug, {headers:{
            "content-type": "application/json"
          }});
          console.log("result" + res, slug.slug);
    
          if (res.status == 200) {
            console.log("All blogs Data: ", res.data.result);
            setBlogData(res?.data?.result[0]);
            setBlogContent(res?.data?.result?.content);
          }
        } catch (error) {
          console.log("All Quotes Error: ", error);
        }
      };


    async function getBlogs() {
        const res = await axios.get(process.env.REACT_APP_API_BASE_URL + "blog")
        if (res.status === 200) {
            console.log(res)
            setBlogs(res?.data?.result)
        }
    }
    function createMarkup(data) {
        return { __html: data };
      }

    useEffect(() => {
        getBlogs();
        getBlogsById()
       
    }, [])
    console.log(blogData)
    return (
        <div>
            <section className="section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            {/* post thumb */}
                            <div className="position-relative mb-5">
                                <img src={ process.env.REACT_APP_API_BASE_URL+blogData?.img} alt="post thumb" className="img-fluid w-100" />
                                <div className="card-type hover-ripple">Article</div>
                                <p className='fs-5'>{blogData?.title}</p>
                            </div>
                            <div className="card-meta text-uppercase mb-2">
                                by <strong className="text-dark">{blogData?.author}</strong>/ on{" "}
                                <strong className="text-dark">{moment(blogData?.createdAt).calendar()}</strong>
                            </div>
                            <p className="fs-5">{blogData?.heading}</p>
                            <div dangerouslySetInnerHTML={createMarkup(blogData?.content)}></div>
                           
                     {/*  {blogData.section.map((section, index) => {

                        return (
                          <div key={index}>
                            <h3 className="fs-3">{section.title}</h3>
                            {section.paragraph.map((para) => {
                              return <p className="text-dark mb-4">{para}</p>;
                            })}
                            {section.list.map((list) => {
                              return (
                                <>
                                  <h5>{list.title}</h5>
                                  {list.paragraph.map((para) => {
                                    return (
                                      <p className="text-dark mb-4">{para}</p>
                                    );
                                  })}
                                </>
                              );
                            })}
                          </div>
                        );
                      })} */}

                            {/* share */}
                          
                        </div>
                        {/* sidebar */}
                  
                    </div>
                </div>
            </section>
        </div>
    )
}

export default BlogHome
