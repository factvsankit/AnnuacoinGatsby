import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import css from 'styled-components'

import Header from '../components/Header'
import Banner from '../partials/Banner'
import './index.css'
import './style.scss'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Annuacion"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Header />
      {children()}
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
