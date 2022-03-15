import React, { useEffect }  from 'react'
import Aos from 'aos'
import "aos/dist/aos.css"
import ArticleCard from '../ArticleCard'

function ArticleCards() {
   

    const blogs = [
        {
            image:"https://cdn.pixabay.com/photo/2019/11/02/21/33/people-4597471__340.jpg",
           
        },
        {
            image:"https://images.pexels.com/photos/1046601/pexels-photo-1046601.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        },
        {
            image:"https://images.pexels.com/photos/1046601/pexels-photo-1046601.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        }
        
    ]
    return (
        <div className="d-flex justify-content-center align-items-center flex-wrap " >

            {
                blogs.map((info, index) =>(

                    <ArticleCard key={index} image={info.image}/>
                ))
            }
           


        </div>
    )
}

export default ArticleCards
