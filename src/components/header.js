import React from "react"
import { injectIntl, changeLocale } from "gatsby-plugin-intl"

import { faToriiGate, faPortrait, faFlag } from './icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Nav, NavButton, NavLink } from '../elements/nav'

class Header extends React.Component {
  render() {
    const { intl } = this.props

    const onChangeLocale = () => {
      changeLocale(intl.locale === 'fr' ? 'en' : 'fr')
    }

    return (
      <Nav>
        <NavLink to={`/`} >
          <FontAwesomeIcon icon={faToriiGate} />{' '}
          {intl.formatMessage({ id: 'home' })}
        </NavLink>
        <NavLink to={`/about`} >
          <FontAwesomeIcon icon={faPortrait} />{' '}
          {intl.formatMessage({ id: 'about' })}
        </NavLink>
        <NavButton onClick={onChangeLocale} href="#"  // eslint-disable-line 
        >
          <FontAwesomeIcon icon={faFlag} />{' '}
          {intl.formatMessage({ id: 'change-locale' }, {hide: t => <span>{t}</span>})}
        </NavButton>
      </Nav>
    )
  }
}

export default injectIntl(Header)
