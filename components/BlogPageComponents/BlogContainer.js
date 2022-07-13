import React, { useEffect }  from 'react'
import Aos from 'aos'
import "aos/dist/aos.css"

import { blogs } from '../../utilities/Blogs'
import BlogArticle from './BlogArticle'
import SideMenu from './SideMenu'


function BlogContainer() {

  useEffect(() => {
    Aos.init({duration: 400})
   }, [])

    return ( 
        <>
        <section id="blog" className="blog">
        <div className="container" >
          <div className="row">
            <div className="col-lg-12 entries" >
            <div className="row">
                {
            blogs.map((info, index) => (
                <BlogArticle
                key={index} 
                image={info.image}
                title={info.title}
                author={info.author}
                path={info.path}
                />
                    
            ))}
              </div>
                <a href="#" className="back-to-top d-flex align-items-center justify-content-center border border-danger"><i className="bi bi-arrow-up-short"></i></a>
        <div>

          <br />
      
        </div>
            </div>

            {/* End blog entries list */} 
            {/* <div className="col-lg-4 ">
              <div className="sidebar" data-aos="fade-left">
               <SideMenu/>
              </div>
            </div> */}
          </div>
        </div>
      
      </section>
      
     </>
    )
}

export default BlogContainer
