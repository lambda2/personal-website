import React from "react"
import { rhythm } from "../utils/typography"
import AboutFr from "./intl/about_fr"
import AboutEn from "./intl/about_en"
import { injectIntl } from "gatsby-plugin-intl"

const BioContent = ({ intl }) => {

  const contentStyle = {
    paddingLeft: rhythm(1),
    flex: '1 0 250px',
  }

  const About = {'fr': AboutFr, 'en': AboutEn}[intl.locale]

  return (<content style={contentStyle}>
    <About />
  </content>)
}

export default injectIntl(BioContent)