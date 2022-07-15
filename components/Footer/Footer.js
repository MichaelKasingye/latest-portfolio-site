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
    <a href="https://github.com/michaelkasingye" className="twitter" target="_blank" rel="noopener noreferrer">
        <i className="bi bi-github" />
      </a>
      <a href="https://twitter.com/michaelkasingye" className="twitter" target="_blank" rel="noopener noreferrer">
        <i className="bi bi-twitter" />
      </a>
      <a href="https://michaelkasingye.medium.com/" className="Medium" target="_blank" rel="noopener noreferrer">
        <i className="bi bi-medium" />
      </a>
      <a href="https://www.youtube.com/channel/UCMsbWRujsYQAremu5Zdu-BA" className="You tube" target="_blank" rel="noopener noreferrer">
        <i className="bi bi-youtube" />
      </a>
      <a href="https://www.linkedin.com/in/michaelkasingye/" className="linkedin" target="_blank" rel="noopener noreferrer">
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
