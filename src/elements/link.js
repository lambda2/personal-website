import React from "react"

const linkAttr = {
  target: "_blank",
  rel: "noopener noreferrer"
}

export const ExternalLink = ({children, ...props}) => <a {...linkAttr} {...props}>
  {children}
</a>