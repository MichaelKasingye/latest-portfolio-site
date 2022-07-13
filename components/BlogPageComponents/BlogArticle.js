import React, { useEffect }  from 'react'
import Aos from 'aos'
import "aos/dist/aos.css"
import Link from 'next/link'
function BlogArticle({image,title,author,date,article,path}) {

  useEffect(() => {
    Aos.init({duration: 400})
   }, [])

    return (
        <article className="entry col-lg-4 col-md-6 " data-aos="fade-up" >
                <div className="entry-img p-2">
                  <img src={image} alt={title} className="img-fluid w-100" />
                </div>
                <h2 className="entry-title">
                  <span >
                    {title}
                  </span>
                </h2>
                <div className="entry-meta">
                  <ul>
                    <li className="d-flex align-items-center">
                      <i className="bi bi-person" />{" "}
                      <a href="#">{author}</a>
                    </li>
                    <li className="d-flex align-items-center">
                      <i className="bi bi-clock" />{" "}
                      <a href="#">
                        <time dateTime={date}>{date}</time>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="entry-content">
                  <p className="text-truncate ">
                    {article}
                  </p>
                  <div className="read-more">
                    <a href={path} target="_blank" rel="noopener noreferrer">Read More</a>
                  </div>
                </div>
              </article>
    )
}

export default BlogArticle
