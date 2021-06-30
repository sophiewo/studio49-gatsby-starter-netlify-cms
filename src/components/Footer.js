import React from 'react'
import { Link } from 'gatsby'

// import logo from '../img/logo.svg'
// import facebook from '../img/social/facebook.svg'
// import instagram from '../img/social/instagram.svg'
// import twitter from '../img/social/twitter.svg'
// import vimeo from '../img/social/vimeo.svg'

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-background-black">
        <div className="content has-text-centered has-text-white-ter">
          <h3>Studio 4.9 Collective </h3>
          <h4>
            <Link to="https://github.com/sophiewo" className="navbar-item">
              Built by @sophiewo - See this website on github
            </Link>
            <br></br>
            <a
              className="navbar-item"
              href="/admin/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Admin
            </a>
          </h4>
        </div>
      </footer>
    )
  }
}

export default Footer
