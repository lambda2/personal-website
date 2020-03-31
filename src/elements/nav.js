import { Link } from "gatsby-plugin-intl"
import { rhythm } from "../utils/typography"
import { MOBILE_MEDIA_QUERY } from 'typography-breakpoint-constants'
import styled from "styled-components"

export const Nav = styled.nav`
      margin-bottom: ${rhythm(1.5)};
      margin-top: 0;
      display: flex;
    `

export const NavButton = styled.a`
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

export const NavLink = styled(Link)`
      margin-left: auto;
      box-shadow: none;
      padding-top: ${rhythm(.5)};
      margin-right: ${rhythm(1)};
      text-decoration: none;
      cursor: pointer;
      text-align: center;
      color: inherit;
    `