import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import favicon from '../favicon.ico'

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
      link={[{ rel: 'shortcut icon', type: 'image/png', href: `${favicon}` }]}
    />
    <div className="container">
      <Link
        to="/about/"
        activeStyle={{
          borderBottom: '2px solid #fff',
        }}
        className="link about-link"
      >
        ABOUT
      </Link>
      <Link
        to="/contact/"
        activeStyle={{
          borderBottom: '2px solid #fff',
        }}
        className="link contact-link"
      >
        CONTACT
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
