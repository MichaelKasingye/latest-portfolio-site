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
            <div className="col-lg-8 entries" >
                {
            blogs.map(info => (
                <BlogArticle
                key={info.id} 
                image={info.image}
                alt={info.alt}
                title={info.title}
                author={info.author}
                date={info.date}
                article={info.article}
                />
                    
            ))}
                <a href="#" className="back-to-top d-flex align-items-center justify-content-center border border-danger"><i className="bi bi-arrow-up-short"></i></a>
        <div>

          <br />
      
        </div>
            </div>

            {/* End blog entries list */} 
            <div className="col-lg-4 ">
              <div className="sidebar" data-aos="fade-left">
               <SideMenu/>
              </div>
            </div>
          </div>
        </div>
      
      </section>
      
     </>
    )
}

export default BlogContainer
