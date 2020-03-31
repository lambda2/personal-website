import React from "react"
import { injectIntl, Link, changeLocale } from "gatsby-plugin-intl"

import { rhythm } from "../utils/typography"
import { faToriiGate, faPortrait, faFlag } from './icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { MOBILE_MEDIA_QUERY } from 'typography-breakpoint-constants'
import styled from "styled-components"

class Header extends React.Component {
  render() {
    const { intl } = this.props

    const onChangeLocale = () => {
      changeLocale(intl.locale === 'fr' ? 'en' : 'fr')
    }

    const Nav = styled.nav`
      margin-bottom: ${rhythm(1.5)};
      margin-top: 0;
      display: flex;
    `

    const NavButton = styled.a`
      margin-left: auto;
      box-shadow: none;
      padding-top: ${rhythm(.5)};
      margin-right: ${rhythm(1)};
      margin-left: auto;
      text-decoration: none;
      cursor: pointer;
      text-align: center;
      color: inherit;

      ${MOBILE_MEDIA_QUERY} {
        & > span {
          display: none;
        }
      }
    `

    const NavLink = styled(Link)`
      margin-left: auto;
      box-shadow: none;
      padding-top: ${rhythm(.5)};
      margin-right: ${rhythm(1)};
      text-decoration: none;
      cursor: pointer;
      text-align: center;
      color: inherit;
    `

    return (
      <Nav>
        <NavLink
          to={`/`}
        >
          <FontAwesomeIcon icon={faToriiGate} />{' '}
          {intl.formatMessage({ id: 'home' })}
        </NavLink>
        <NavLink
          to={`/about`}
        >
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
