import React from 'react'
import Link from 'gatsby-link'

import CvModal from '../components/CvModal'

const About = () => (
  <div className="text about-text">
    <h1>
      <span>Me</span>
      <span>, me</span> <span>, me!</span>
    </h1>
    <div className="about-text-content">
      <p>I live to learn. I love to create..</p>
      <p>
        Once a soldier. Schooled a nurse. Now charging in to tech. Desperatly
        learning, anything. Everything.
      </p>
      <p>
        I like the frontend. UX fascinates me. I do some node.js and Rails on
        the backend.
      </p>
      <p>
        I aim to be <b>the best</b> at Javascript.. Err.. Moderately good, at
        least.
      </p>
      <div className="buttons">
        <Link className="link link-btn" to="/">
          Back
        </Link>
        <CvModal />
      </div>
    </div>
  </div>
)

export default About
