import React from 'react'

function SideMenu() {
    return (
        <>
         <h3 className="sidebar-title">Search</h3>
                <div className="sidebar-item search-form">
                  <form >
                    <input type="text" />
                    <button type="submit">
                      <i className="bi bi-search" />
                    </button>
                  </form>
                </div>
           <h3 className="sidebar-title">Categories</h3>
                <div className="sidebar-item categories">
                  <ul>
                    <li>
                      <a href="#">
                        General <span>(25)</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        HealthCare 
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Education 
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Sanitation 
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Counselling 
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Education 
                      </a>
                    </li>
                  </ul>
                </div> 
        </>
    )
}

export default SideMenu
