import React from "react"

const linkAttr = {
  target: "_blank",
  rel: "noopener noreferrer"
}

const hLinkAttr = {
  style: { marginLeft: '2px' },
  ...linkAttr
}

export const ExternalLink = ({children, ...props}) => <a {...linkAttr} {...props}>
  {children}
</a>