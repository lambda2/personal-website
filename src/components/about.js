import React from "react"
import { rhythm } from "../utils/typography"
import { injectIntl } from "gatsby-plugin-intl"

const BioContent = ({ intl }) => {
  const logoStyle = {
    display: 'inline-block',
    height: '16px',
    width: '16px',
    lineHeight: 0,
    margin: 0,
  }

  const contentStyle = {
    paddingLeft: rhythm(1),
    flex: '1 0 250px',
  }

  const linkAttr = {
    target: "_blank",
    rel: "noopener noreferrer"
  }

  const hLinkAttr = {
    style: { marginLeft: '2px' },
    ...linkAttr
  }

  const intlHeaderContent = {
    'fr': <p><span role="img" aria-label="wave">👋</span> Hello, je suis André Aubin. ex-dévelopeur@<a {...hLinkAttr} href="https://42.fr">42</a>. CTO@<a {...hLinkAttr} href="https://pandascore.co">PandaScore</a>.</p>,
    'en': <p><span role="img" aria-label="wave">👋</span> Hey, I'm André Aubin. ex-developper@<a {...hLinkAttr} href="https://42.fr">42</a>. CTO@<a {...hLinkAttr} href="https://pandascore.co">PandaScore</a>.</p>
  }

  const intlReachContent = {
    'fr': <p>Vous pouvez me contacter via <img style={logoStyle} src="https://keybase.io/images/icons/icon-keybase-logo-48@2x.png" alt="keybase logo" /> <a {...linkAttr} href="https://keybase.io/lambda2">Keybase</a>, récupérer ma <a {...linkAttr} href="https://keybase.io/lambda2/pgp_keys.asc">clé PGP</a> ou voir ce que je fais sur <img style={logoStyle} src="https://github.githubassets.com/pinned-octocat.svg" alt="github-logo" /> <a {...linkAttr} href="https://github.com/lambda2">Github</a>.</p>,
    'en': <p>You can reach me on <img style={logoStyle} src="https://keybase.io/images/icons/icon-keybase-logo-48@2x.png" alt="keybase logo" /> <a {...linkAttr} href="https://keybase.io/lambda2">Keybase</a>, get my <a {...linkAttr} href="https://keybase.io/lambda2/pgp_keys.asc">PGP key</a> or see my work on <img style={logoStyle} src="https://github.githubassets.com/pinned-octocat.svg" alt="github-logo" /> <a {...linkAttr} href="https://github.com/lambda2">Github</a>.</p>
  }

  return (<content style={contentStyle}>
    
    {intlHeaderContent[intl.locale]}
    {intlReachContent[intl.locale]}

    
  </content>)
}

export default injectIntl(BioContent)