import React  from 'react'
import Link from "next/link"; 
import stylesCard from '../styles/articleCard.module.css'

function ArticleCard({image}) {



    return (

        <div className={stylesCard.containerCard} >
        <Link href="/blogs">    
     <a style={{color:"black"}} >
           <div className={stylesCard.CardImg}><img src={image}  alt="child"/></div>
           <div className={stylesCard.cardContent}>
               <h4>12/23/2020</h4>
               <div className={stylesCard.cardContentInfo}>
               <h3 className="fs-4 fw-bold p-2 " >Support the children in Covid times</h3>
               <h5 className="text-break text-truncate " >The purpose of this non profit is to primarily provide a friendly platform to cultivate attitude change, uplift potential and generate an ability towards</h5>
                <p className="">Read More </p>
                </div>
           </div>
        </a>
        </Link>
        </div>
    )
}

export default ArticleCard
