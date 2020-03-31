import React from "react"
import { rhythm } from "../utils/typography"
import { injectIntl } from "gatsby-plugin-intl"
import styled from "styled-components"
import { MOBILE_MEDIA_QUERY } from 'typography-breakpoint-constants'

const BioContent = ({ intl, image }) => {

  const MainContent = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: auto;
    margin-bottom: ${rhythm(0)};

    & > content {
      padding-left: ${rhythm(1)};
      flex: 1 0 250px;
    }

    ${MOBILE_MEDIA_QUERY} {
      & > content {
        padding-left: 0;
        flex: 1 0 100%;
      }
    }
  `

  return (
    <MainContent>
      {image}
      <content>
        <div>
          <p>
            <span role="img" aria-label="wave">👋 </span>
            <b>{intl.formatMessage({ id: 'about-me.headline' })}</b>
            <br/>
            {intl.formatMessage({ id: 'about-me.function' })}
          </p>
        </div>
      </content>

    </MainContent>)
}

export default injectIntl(BioContent)