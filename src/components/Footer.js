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
      <footer class="footer"
        style={{
          backgroundColor: 'rgb(10, 36, 99)',        //   // lineHeight: '1',
        //   padding: '0.50em',
        }}
      >
        <div class="content has-text-centered">
          <div class="navbar-item">
          <h2 style={{color:'white'}}>
            Studio 4.9 Collective 
            </h2>
            <p style={{ color: 'white' }}>
              <a
                className="navbar-item"
                href="/admin/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: 'white'
                }}
              >
                Admin
              </a>
            <Link to="https://github.com/sophiewo" className="navbar-item" target="_blank" >
                <p style={{ color: 'white' }}>
                  <strong>
                 Handmade in London by @sophiewo
                  </strong>
              </p>
              
            </Link>
          </p>
        </div>
        </div>
      </footer>
    )
  }
}

export default Footer
