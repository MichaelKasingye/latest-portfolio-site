import React, { useEffect }  from 'react'
import Aos from 'aos'
import "aos/dist/aos.css"
import Link from 'next/link'
function BlogArticle({image,title,author,date,article,alt}) {

  useEffect(() => {
    Aos.init({duration: 400})
   }, [])

    return (
        <article className="entry" data-aos="fade-up">
                <div className="entry-img">
                  <img src={image} alt={alt} className="img-fluid w-100" />
                </div>
                <h2 className="entry-title">
                  <a href="#">
                    {title}
                  </a>
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
                  <Link href="/blog-id">
                    <a >Read More</a>
                    </Link>
                  </div>
                </div>
              </article>
    )
}

export default BlogArticle
