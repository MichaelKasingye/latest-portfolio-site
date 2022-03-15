import React from 'react'
import Link from 'next/link'

function BreadCrumbs({page}) {
    return (
      <section id="breadcrumbs" className="breadcrumbs mt-3">
      <div className="container ">
        <div className="d-flex justify-content-between align-items-center">
          <h2>{page}</h2>
          <ol>
            <li>
            <Link href="/">
              <a >Home</a>
              </Link>
            </li>
            <li>{page}</li>
          </ol>
        </div>
      </div>
    </section>
    )
}

export default BreadCrumbs
