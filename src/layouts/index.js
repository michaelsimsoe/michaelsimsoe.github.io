import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'

import './index.css'

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        {
          name: 'description',
          content: 'The homepage of Michael Krøyserth-Simsø',
        },
        {
          name: 'keywords',
          content:
            'Michael Krøyserth-Simsø, michaelsimsoe, web-developer, frontend, norwegian',
        },
      ]}
    />
    <div className="container">
      <Link to="/about/" className="link about-link">
        About
      </Link>
      <Link to="/contact/" className="link contact-link">
        Contact
      </Link>
      <div className="triangle-top" />
      {children()}
      <div className="triangle-bottom" />
    </div>
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
