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
      <footer className="footer has-background-black has-text-white-ter">
        <div className="content has-text-centered">
          <h1>
            STUDIO 4.9 CO-OPERATIVE
            </h1>
        </div>

        <div className="content has-text-centered has-background-black has-text-white-ter">
          <div className="container has-background-black has-text-white-ter">
            <div className="content has-text-centered">
              {/* <div className="column is-4"> */}
                <section className="menu">
                  <ul className="menu-list">
                    <li>
                      <Link className="navbar-item" to="/contact/examples">
                        Contact Us
                      </Link>
                    </li>
                    <li>
                      <a
                        className="navbar-item"
                        href="/admin/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Admin
                      </a>
                    </li>
                    <li>
                      <Link to="https://github.com/sophiewo" className="navbar-item">
                        Built by @sophiewo - See this website on github
                      </Link>
                    </li>
                  </ul>
                </section>
              {/* </div> */}
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
