import React, { useEffect }  from 'react'
import Aos from 'aos'
import "aos/dist/aos.css"
import ArticleCards from '../ArticleCards/ArticleCards'

function Blogs() {

  useEffect(() => {
    Aos.init({duration: 2000})
   }, [])

    return (
        <section id="blogs" style={{paddingTop:'100px'}} className="about" >
        <div style={{color:'#444444'}} className="container " data-aos="fade-left">
          <div className="row content">

            <div className="col-lg-12">
              <h2>Blogs</h2>
              <h3 className='mb-5'>
              News - <span className="fw-light">To express what has come of us</span>
              </h3>

              <ArticleCards/>
              
            </div>

          </div>
        </div>
      </section>
    )
}

export default Blogs
