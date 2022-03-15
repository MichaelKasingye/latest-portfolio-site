import React, { useEffect }  from 'react'
import Aos from 'aos'
import "aos/dist/aos.css"
import SideMenu from '../components/BlogPageComponents/SideMenu'
import Header from '../components/Header'
import BreadCrumbs from '../components/BreadCrumbs/BreadCrumbs'

function blogId() {

  useEffect(() => {
    Aos.init({duration: 400})
   }, [])

    return (
      <>
     <Header 
      title="The stella center -This Blogs"
      metaName="The Stella Center -This Blogs"
      metaContent="Stella Center Page, details about child aid -This Blogs"
      />
      <BreadCrumbs page="This Blogs"/>

        <section id="blog" className="blog">
  <div className="container" >
    <div className="row">
      <div className="col-lg-8 entries">

        <article className="entry entry-single" data-aos="fade-up">
          <div className="entry-img">
            <img src="https://images.pexels.com/photos/7293100/pexels-photo-7293100.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="child" className="img-fluid w-100" />
          </div>
          <h2 className="entry-title">
            
              Dolorum optio tempore voluptas dignissimos cumque fuga qui
              quibusdam quia
            
          </h2>
          <div className="entry-meta">
            <ul>
              <li className="d-flex align-items-center">
                <i className="bi bi-person" />{" "}
                <a href="blog-single.html">John Doe</a>
              </li>
              <li className="d-flex align-items-center">
                <i className="bi bi-clock" />{" "}
                <a href="blog-single.html">
                  <time dateTime="2020-01-01">Jan 1, 2020</time>
                </a>
              </li>
            </ul>
          </div>
          <div className="entry-content">
            <p>
              Similique neque nam consequuntur ad non maxime aliquam quas.
              Quibusdam animi praesentium. Aliquam et laboriosam eius aut
              nostrum quidem aliquid dicta. Et eveniet enim. Qui velit est ea
              dolorem doloremque deleniti aperiam unde soluta. Est cum et quod
              quos aut ut et sit sunt. Voluptate porro consequatur assumenda
              perferendis dolore.
            </p>
            <p>
              Sit repellat hic cupiditate hic ut nemo. Quis nihil sunt non
              reiciendis. Sequi in accusamus harum vel aspernatur. Excepturi
              numquam nihil cumque odio. Et voluptate cupiditate.
            </p>
            <blockquote>
              <p>
                Et vero doloremque tempore voluptatem ratione vel aut. Deleniti
                sunt animi aut. Aut eos aliquam doloribus minus autem quos.
              </p>
            </blockquote>
            <p>
              Sed quo laboriosam qui architecto. Occaecati repellendus omnis
              dicta inventore tempore provident voluptas mollitia aliquid. Id
              repellendus quia. Asperiores nihil magni dicta est suscipit
              perspiciatis. Voluptate ex rerum assumenda dolores nihil quaerat.
              Dolor porro tempora et quibusdam voluptas. Beatae aut at ad qui
              tempore corrupti velit quisquam rerum. Omnis dolorum
              exercitationem harum qui qui blanditiis neque. Iusto autem itaque.
              Repudiandae hic quae aspernatur ea neque qui. Architecto
              voluptatem magni. Vel magnam quod et tempora deleniti error rerum
              nihil tempora.
            </p>
            <h3>Et quae iure vel ut odit alias.</h3>
            <p>
              Officiis animi maxime nulla quo et harum eum quis a. Sit hic in
              qui quos fugit ut rerum atque. Optio provident dolores atque
              voluptatem rem excepturi molestiae qui. Voluptatem laborum omnis
              ullam quibusdam perspiciatis nulla nostrum. Voluptatum est libero
              eum nesciunt aliquid qui. Quia et suscipit non sequi. Maxime sed
              odit. Beatae nesciunt nesciunt accusamus quia aut ratione
              aspernatur dolor. Sint harum eveniet dicta exercitationem minima.
              Exercitationem omnis asperiores natus aperiam dolor consequatur id
              ex sed. Quibusdam rerum dolores sint consequatur quidem ea. Beatae
              minima sunt libero soluta sapiente in rem assumenda. Et qui odit
              voluptatem. Cum quibusdam voluptatem voluptatem accusamus mollitia
              aut atque aut.
            </p>
            <p>
              Rerum ea est assumenda pariatur quasi et quam. Facilis nam porro
              amet nostrum. In assumenda quia quae a id praesentium. Quos
              deleniti libero sed occaecati aut porro autem. Consectetur sed
              excepturi sint non placeat quia repellat incidunt labore. Autem
              facilis hic dolorum dolores vel. Consectetur quasi id et optio
              praesentium aut asperiores eaque aut. Explicabo omnis quibusdam
              esse. Ex libero illum iusto totam et ut aut blanditiis. Veritatis
              numquam ut illum ut a quam vitae.
            </p>
            <p>
              Alias quia non aliquid. Eos et ea velit. Voluptatem maxime enim
              omnis ipsa voluptas incidunt. Nulla sit eaque mollitia nisi
              asperiores est veniam.
            </p>
          </div>
         
        </article>
        {/* End blog entry */}
       

      </div>
      {/* End blog entries list */}
      <div className="col-lg-4 " data-aos="fade-left">
              <div className="sidebar">
               <SideMenu/>
              </div>
            </div>
    </div>
  </div>
</section>
</>
    )
}

export default blogId
