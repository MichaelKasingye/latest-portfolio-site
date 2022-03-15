import React from 'react'

function Footer() {
    return (
  <footer id="footer">
  <div className="container">
    <h3>Michael Kasingye</h3>
    {/* <p>
      Et aut eum quis fuga eos sunt ipsa nihil. Labore corporis magni eligendi
      fuga maxime saepe commodi placeat.
    </p> */}
    <div className="social-links">
      <a href="#" className="twitter">
        <i className="bi bi-twitter" />
      </a>
      <a href="#" className="Medium">
        <i className="bi bi-medium" />
      </a>
      <a href="#" className="You tube">
        <i className="bi bi-youtube" />
      </a>
      <a href="#" className="linkedin">
        <i className="bi bi-linkedin" />
      </a>
    </div>
    <div className="copyright">
      Designed by{" "}
      <strong>
        <span>Michael Kasingye</span>
      </strong>
      {/* . All Rights Reserved */}
    </div>
    {/* <div className="credits">
     
      Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
    </div> */}
  </div>
</footer>
    )
}

export default Footer
