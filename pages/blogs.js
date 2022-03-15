import React from 'react'
import BreadCrumbs from '../components/BreadCrumbs/BreadCrumbs'
import BlogContainer from '../components/BlogPageComponents/BlogContainer'
import Header from '../components/Header'

function Blogs() {
    return (
        <div>
            <Header 
      title="The stella center -Blogs"
      metaName="The Stella Center -Blogs"
      metaContent="Stella Center Page, details about child aid -Team"
      />
      <BreadCrumbs page="Blogs"/>
      
            <BlogContainer/>
            
        </div>
    )
}

export default Blogs
