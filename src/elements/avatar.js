import React from "react"
import Image from "gatsby-image"
import { rhythm } from "../utils/typography"
import styled from "styled-components"
import { MOBILE_MEDIA_QUERY } from 'typography-breakpoint-constants'


const AvatarImage = styled(Image)`
  margin: auto 10px ${rhythm(1)};
  max-width: 15vh;
  max-height: 15vh;
  flex: 0 0 170px;
  border-radius: 5px;
  display: flex;

  ${MOBILE_MEDIA_QUERY} {
    margin: 0 auto ${rhythm(1)} ;
    display: flex;
    max-width: 25vh;
    max-height: 25vh;
    flex: 1 0 100%;
  }

`

export const Avatar = ({ style, ...props }) => <AvatarImage
  {...props}
  imgStyle={{
    borderRadius: `5px`,
  }}
/>