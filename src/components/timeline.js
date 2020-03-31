import React from "react"
import styled from "styled-components"
import typography, { rhythm } from "../utils/typography"
import TrefleLogo from "../assets/logos/trefle.svg"
import MashuLogo from "../assets/logos/mashu.svg"
import SpireLogo from "../assets/logos/spire.svg"
import { faMapMarkerAlt, faExternalLinkAlt, faCodeBranch, faCompactDisc, faPauseCircle } from './icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { MOBILE_MEDIA_QUERY } from 'typography-breakpoint-constants'
import { injectIntl } from "gatsby-plugin-intl"
import { ExternalLink } from "../elements/link"

console.log({ typography, MOBILE_MEDIA_QUERY })

const ProjectList = styled.ul`
  display: flex;
  flex-direction: column;
  margin: 0;
`

const ProjectItem = styled.li`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;
  margin: 0;

  main {
    flex: 1 1 300px;
    // margin: 0 ${rhythm(.5)};
  }

  ${MOBILE_MEDIA_QUERY} {
    display: flex;
    border-bottom: 1px solid #ebf0f3;
    padding-bottom: ${rhythm(.5)};
  }
`

const MainTitle = styled.h1`
  display: block;
  text-align: center;
`

const ProjectTitle = styled.aside`
  margin: ${rhythm(.5)} 0;
  flex: 0 0 170px;
  text-align: right;
  margin: ${rhythm(.5)};
  padding: ${rhythm(.5)};
  border-right: 3px solid #ebf0f3;

  & > h2 {
    margin: 0;
    font-size: ${rhythm(.7)};
    font-weight: bold;
    display: block;
    padding-bottom: 0;
    padding-right: ${rhythm(.5)};
  }

  & > ul {
    display: block;
    font-size: ${rhythm(.5)};
    font-family: ${typography.options.bodyFontFamily};
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    list-style-type: none;
    margin: 0;

    li {
      margin: 0;
    }
  }

  ${MOBILE_MEDIA_QUERY} {
    padding: ${rhythm(.5)} 0;
    border-right: none;
    flex: 1 1 100%;
    display: flex;
    align-items: center;
    text-align: left;
    margin: ${rhythm(.5)} 0 0;

    h2 {
      display: flex;
      flex: 1 1 100%;
      align-items: center;
      padding-right:  ${rhythm(.5)};\
      img {
        padding-right: 2px;
      }
    }

    & > ul {
      flex-direction: row;
      flex: 1 1 100%;
      align-items: center;

      li {
        flex: 1 1 100%;
        margin: 0;
        padding-right:  ${rhythm(.5)};

        &:nth-child(1) {
          display: none;
        }
      }
    }
  }
`

const Timeline = ({ intl }) => {

  const linkAttr = {
    target: "_blank",
    rel: "noopener noreferrer"
  }

  const hLinkAttr = {
    style: { marginLeft: '2px' },
    ...linkAttr
  }

  return (<div>
    <p>
      {intl.formatMessage({ id: 'about-me.hobbies' }, {
        a: (text) => <ExternalLink href="https://github.com/lambda2">{text}</ExternalLink>,
        b: (text) => <ExternalLink href="https://twitter.com/lambda_2">{text}</ExternalLink>,
      })}.
            {/* Vous pouvez me contacter via <img style={logoStyle} src="https://keybase.io/images/icons/icon-keybase-logo-48@2x.png" alt="keybase logo" /> <a {...linkAttr} href="https://keybase.io/lambda2">Keybase</a>, récupérer ma <a {...linkAttr} href="https://keybase.io/lambda2/pgp_keys.asc">clé PGP</a> ou voir ce que je fais sur <img style={logoStyle} src="https://github.githubassets.com/pinned-octocat.svg" alt="github-logo" /> <a {...linkAttr} href="https://github.com/lambda2">Github</a>. */}
    </p>
    <MainTitle>{intl.formatMessage({ id: 'experiences.title' })}</MainTitle>
    <ProjectList>

      <ProjectItem>
        <ProjectTitle>
          <h2 style={{ fontFamily: 'Inconsolata', color: "#000" }}><span style={{ color: "#b300de"}}>Panda</span>Score</h2>
          <ul>
            <li><span><FontAwesomeIcon icon={faMapMarkerAlt} />{' '}Paris, France</span></li>
            <li><FontAwesomeIcon icon={faExternalLinkAlt} />{' '}<a {...hLinkAttr} href="https://pandascore.co">pandascore.co</a></li>
          </ul>
        </ProjectTitle>
        <main>
          <b>{intl.formatMessage({ id: 'experiences.panda.title' })}</b>
          <p>{intl.formatMessage({ id: 'experiences.panda.desc' })}</p>
        </main>
      </ProjectItem>

      <ProjectItem>
        <ProjectTitle>
          <h2 style={{ color: "#000" }}>42</h2>
          <ul>
            <li><span><FontAwesomeIcon icon={faMapMarkerAlt} />{' '}Paris, France</span></li>
            <li><FontAwesomeIcon icon={faExternalLinkAlt} />{' '}<a {...hLinkAttr} href="https://42.fr">42.fr</a></li>
          </ul>
        </ProjectTitle>
        <main>
          <b>{intl.formatMessage({ id: 'experiences.42.title' })}</b>
          <p>{intl.formatMessage({ id: 'experiences.42.desc' },
                                { a: (text) => <a {...hLinkAttr} href="https://intra.42.fr">{text}</a>,
                                  b: (text) => <a {...hLinkAttr } href = "https://api.intra.42.fr">{text}</a>
                                })
          }</p>
        </main>
      </ProjectItem>

    </ProjectList>
    <MainTitle>{intl.formatMessage({ id: 'projects.title' })}</MainTitle>
    <ProjectList>

      <ProjectItem>
        <ProjectTitle>
          <h2 style={{ fontFamily: 'Inconsolata', color: '#318810' }}>
            <img src={TrefleLogo} style={{height: '16px'}} />
            {' '}
            Trefle
          </h2>
          <ul>
            <li><FontAwesomeIcon icon={faCompactDisc} spin />{' '}{intl.formatMessage({ id: 'in-progress' })}</li>
            <li><FontAwesomeIcon icon={faExternalLinkAlt} />{' '}<a {...hLinkAttr} href="https://trefle.io">trefle.io</a></li>
          </ul>
        </ProjectTitle>
        <main>
          <b>{intl.formatMessage({ id: 'projects.trefle.title' })}</b>
          <p>{intl.formatMessage({ id: 'projects.trefle.desc' })}</p>
        </main>
      </ProjectItem>

      <ProjectItem>
        <ProjectTitle>
          <h2 style={{ fontFamily: 'Inconsolata', color: '#ef4565', position: 'relative' }}>
            <img src={MashuLogo} style={{height: '20px', position: 'relative', top: '3px'}} />
            {' '}
            Mashu
          </h2>
          <ul>
            <li><FontAwesomeIcon icon={faCompactDisc} spin />{' '}{intl.formatMessage({ id: 'in-progress' })}</li>
            <li><FontAwesomeIcon icon={faExternalLinkAlt} />{' '}<a {...hLinkAttr} href="https://mashu.io">mashu.io</a></li>
          </ul>
        </ProjectTitle>
        <main>
          <b>{intl.formatMessage({ id: 'projects.mashu.title' })}</b>
          <p>{intl.formatMessage({ id: 'projects.mashu.desc' })}</p>
        </main>
      </ProjectItem>

      <ProjectItem>
        <ProjectTitle>
          <h2 style={{ fontFamily: 'Inconsolata', color: '#a02110', position: 'relative' }}>
            <img src={SpireLogo} style={{height: '18px', position: 'relative'}} />
            {' '}
            Spire
          </h2>
          <ul>
            <li><FontAwesomeIcon icon={faPauseCircle} />{' '}{intl.formatMessage({ id: 'in-pause' })}</li>
            <li><FontAwesomeIcon icon={faExternalLinkAlt} />{' '}<a {...hLinkAttr} href="https://spire.news">spire.news</a></li>
          </ul>
        </ProjectTitle>
        <main>
          <b>{intl.formatMessage({ id: 'projects.spire.title' })}</b>
          <p>{intl.formatMessage({ id: 'projects.spire.desc' })}</p>
        </main>
      </ProjectItem>


    </ProjectList>
  </div>)
}

export default injectIntl(Timeline)